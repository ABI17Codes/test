import { QueryResult, QueryResultRow } from 'pg';
import fs from 'fs';
import path from 'path';
import crypto from 'node:crypto';
import { PRODUCTS } from '../data/products';
import { db, schema, pool } from '@/db';
import { eq, and, gt, sql, desc, or, ilike, type SQL } from 'drizzle-orm';

// Fallback Persistent Local Store
// Ensures seamless local operation and testing when PostgreSQL is unreachable
interface LocalDatabase {
  users: Record<string, any>;
  idempotency_keys: Record<string, {
    key: string;
    request_path: string;
    request_hash: string;
    status: 'processing' | 'completed' | 'failed';
    status_code?: number;
    response_body?: any;
    created_at: string;
    expires_at: string;
  }>;
  orders: Record<string, any>;
  products: Record<string, any>;
  quotes: Record<string, any>;
  inquiries: Record<string, any>;
  payments: Record<string, any>;
}

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'globrands_store.json');

function ensureDataFile(): LocalDatabase {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(DATA_FILE)) {
    const initialProducts: Record<string, any> = {};
    for (const p of PRODUCTS) {
      initialProducts[p.id] = {
        id: p.id,
        code: p.code,
        name: p.name,
        category: p.category,
        brand: p.brand,
        description: p.description,
        moq: p.moq,
        price: (p as any).mrp || 450,
        image_url: p.image,
        tags: p.tags,
        specifications: (p as any).specs || [],
        branding_options: p.brandingOptions,
        colors: p.colors,
        catalog_page: p.catalogPage,
        is_active: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
    }

    const initialUsers: Record<string, any> = {
      'usr-admin-1': {
        id: 'usr-admin-1',
        name: 'Globrands Admin',
        company_name: 'Globrands Lifestyle Pvt. Ltd.',
        email: 'admin@globrandslifestyle.com',
        phone: '+91 99000 20456',
        password_hash: '9f584e0c4b3734a706598c47493a3ec7:08b3ba945e99d8544b62db4fe1da35d8868ee3df9f928e4e73b22a00c6d9bb60ad2b3226dbdd330f836932fc36e398188179e8eefdb268759fb8f3f886f34584',
        role: 'admin',
        city: 'Bengaluru',
        created_at: new Date().toISOString()
      },
      'usr-client-1': {
        id: 'usr-client-1',
        name: 'Anand Sharma',
        company_name: 'Wipro Technologies',
        email: 'buyer@wipro.com',
        phone: '+91 98765 43210',
        password_hash: '9f584e0c4b3734a706598c47493a3ec7:9b1a591a457ee4501be457fce2da6fc47c43d94065d6666ba3a62d08a0d78fb29fc780183b06385d304a08fc99ef652fa05b8e9ad3691f16da89656a8dbca5c0',
        role: 'client',
        city: 'Bengaluru',
        created_at: new Date().toISOString()
      }
    };

    const initialData: LocalDatabase = {
      users: initialUsers,
      idempotency_keys: {},
      orders: {
        'ord_demo_101': {
          id: 'ord_demo_101',
          idempotency_key: 'idemp-demo-sample-001',
          order_number: 'GL-2026-98124',
          customer_name: 'Anand Sharma',
          company_name: 'Wipro Technologies',
          email: 'buyer@wipro.com',
          phone: '+91 98765 43210',
          status: 'confirmed',
          payment_status: 'paid',
          payment_method: 'razorpay',
          currency: 'INR',
          subtotal: 125000,
          tax: 22500,
          total_amount: 147500,
          items: [
            {
              product: {
                id: 'prod-hgs-h74',
                code: 'HGS-H74',
                name: 'VIP 5-in-1 Executive Hamper',
                mrp: 1499
              },
              quantity: 100,
              customization: 'Laser Engraved Logo'
            }
          ],
          shipping_address: {
            address_line: 'Wipro Campus, Sarjapur Road',
            city: 'Bengaluru',
            state: 'Karnataka',
            postal_code: '560035'
          },
          notes: 'Deliver for Annual Leadership Summit',
          created_at: new Date(Date.now() - 2 * 86400000).toISOString()
        }
      },
      products: initialProducts,
      quotes: {
        'rfq_sample_01': {
          id: 'rfq_sample_01',
          idempotency_key: 'idemp-rfq-001',
          quote_number: 'RFQ-2026-681920',
          customer_name: 'Rohit Kulkarni',
          company_name: 'TCS Enterprise',
          email: 'procurement@tcs.com',
          phone: '+91 98450 11223',
          city: 'Mumbai',
          target_date: '2026-11-20',
          estimated_budget: '500,000',
          items: [
            {
              product: {
                code: 'AD-2003',
                name: 'Executive Laptop Backpack 30L',
                moq: '50 sets',
                mrp: 850
              },
              quantity: 500,
              customization: 'Screen Print Front Pocket'
            }
          ],
          branding_requirements: 'Dual tone embroidery on shoulder strap',
          notes: 'Requires delivery in Mumbai by 20th November',
          status: 'new',
          created_at: new Date(Date.now() - 3600000).toISOString()
        }
      },
      inquiries: {},
      payments: {}
    };

    saveLocalStore(initialData);
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    parsed.users = parsed.users || {};
    parsed.idempotency_keys = parsed.idempotency_keys || {};
    parsed.orders = parsed.orders || {};
    parsed.products = parsed.products || {};
    parsed.quotes = parsed.quotes || {};
    parsed.inquiries = parsed.inquiries || {};
    parsed.payments = parsed.payments || {};
    return parsed;
  } catch {
    return {
      users: {},
      idempotency_keys: {},
      orders: {},
      products: {},
      quotes: {},
      inquiries: {},
      payments: {}
    };
  }
}

let pgInitPromise: Promise<void> | null = null;

export async function ensurePostgresTables(): Promise<void> {
  if (!pool) return;
  if (!pgInitPromise) {
    pgInitPromise = (async () => {
      try {
        await pool.query(`
          CREATE TABLE IF NOT EXISTS "users" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "name" varchar(255) NOT NULL,
            "company_name" varchar(255) NOT NULL,
            "email" varchar(255) NOT NULL UNIQUE,
            "phone" varchar(50),
            "password_hash" varchar(255) NOT NULL,
            "role" varchar(50) DEFAULT 'client',
            "gstin" varchar(50),
            "city" varchar(100),
            "is_active" boolean DEFAULT true,
            "created_at" timestamp with time zone DEFAULT now(),
            "updated_at" timestamp with time zone DEFAULT now()
          );
          CREATE TABLE IF NOT EXISTS "idempotency_keys" (
            "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
            "key" varchar(255) NOT NULL UNIQUE,
            "request_path" varchar(255) NOT NULL,
            "request_hash" varchar(64) NOT NULL,
            "status" varchar(50) DEFAULT 'processing' NOT NULL,
            "status_code" integer,
            "response_body" jsonb,
            "created_at" timestamp with time zone DEFAULT now(),
            "expires_at" timestamp with time zone
          );
          CREATE TABLE IF NOT EXISTS "products" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "code" varchar(100) NOT NULL UNIQUE,
            "name" varchar(255) NOT NULL,
            "category" varchar(100) NOT NULL,
            "brand" varchar(100) NOT NULL,
            "description" text,
            "moq" integer DEFAULT 50,
            "price" numeric(12, 2) DEFAULT '0',
            "image_url" text,
            "tags" text[],
            "specifications" jsonb DEFAULT '{}'::jsonb,
            "branding_options" text[],
            "colors" jsonb DEFAULT '[]'::jsonb,
            "catalog_page" integer,
            "is_active" boolean DEFAULT true,
            "created_at" timestamp with time zone DEFAULT now(),
            "updated_at" timestamp with time zone DEFAULT now()
          );
          CREATE TABLE IF NOT EXISTS "orders" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "idempotency_key" varchar(255) NOT NULL UNIQUE,
            "order_number" varchar(100) NOT NULL UNIQUE,
            "customer_name" varchar(255) NOT NULL,
            "company_name" varchar(255) NOT NULL,
            "email" varchar(255) NOT NULL,
            "phone" varchar(50) NOT NULL,
            "status" varchar(50) DEFAULT 'pending',
            "payment_status" varchar(50) DEFAULT 'unpaid',
            "payment_method" varchar(50) DEFAULT 'razorpay',
            "payment_id" varchar(255),
            "currency" varchar(10) DEFAULT 'INR',
            "subtotal" numeric(12, 2) NOT NULL,
            "tax" numeric(12, 2) DEFAULT '0',
            "total_amount" numeric(12, 2) NOT NULL,
            "items" jsonb NOT NULL,
            "shipping_address" jsonb,
            "customization_details" jsonb,
            "notes" text,
            "created_at" timestamp with time zone DEFAULT now(),
            "updated_at" timestamp with time zone DEFAULT now()
          );
          CREATE TABLE IF NOT EXISTS "quotes" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "idempotency_key" varchar(255),
            "quote_number" varchar(100) NOT NULL UNIQUE,
            "customer_name" varchar(255) NOT NULL,
            "company_name" varchar(255) NOT NULL,
            "email" varchar(255) NOT NULL,
            "phone" varchar(50) NOT NULL,
            "city" varchar(100),
            "category" varchar(150),
            "estimated_quantity" varchar(100),
            "status" varchar(50) DEFAULT 'new',
            "target_date" varchar(100),
            "estimated_budget" varchar(100),
            "items" jsonb NOT NULL,
            "branding_requirements" text,
            "notes" text,
            "internal_notes" text,
            "created_at" timestamp with time zone DEFAULT now(),
            "updated_at" timestamp with time zone DEFAULT now()
          );
          ALTER TABLE "quotes" ADD COLUMN IF NOT EXISTS "category" varchar(150);
          ALTER TABLE "quotes" ADD COLUMN IF NOT EXISTS "estimated_quantity" varchar(100);
          CREATE TABLE IF NOT EXISTS "inquiries" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "quote_number" varchar(100),
            "full_name" varchar(255) NOT NULL,
            "company_name" varchar(255) NOT NULL,
            "email" varchar(255) NOT NULL,
            "phone" varchar(50) NOT NULL,
            "category" varchar(150) NOT NULL,
            "estimated_quantity" varchar(100) NOT NULL,
            "requirements" text,
            "status" varchar(50) DEFAULT 'new',
            "created_at" timestamp with time zone DEFAULT now(),
            "updated_at" timestamp with time zone DEFAULT now()
          );
          CREATE TABLE IF NOT EXISTS "payments" (
            "id" varchar(100) PRIMARY KEY NOT NULL,
            "order_id" varchar(100),
            "gateway" varchar(50) NOT NULL,
            "gateway_order_id" varchar(255),
            "gateway_payment_id" varchar(255),
            "amount" numeric(12, 2) NOT NULL,
            "currency" varchar(10) DEFAULT 'INR',
            "status" varchar(50) DEFAULT 'created' NOT NULL,
            "signature" varchar(255),
            "payload" jsonb,
            "created_at" timestamp with time zone DEFAULT now()
          );
        `);
      } catch (e) {
        pgInitPromise = null;
        console.warn('PostgreSQL schema initialization skipped:', e);
      }
    })();
  }
  return pgInitPromise;
}

function saveLocalStore(data: LocalDatabase): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error saving local database store:', err);
  }
}

// Universal raw query runner
export async function query<T extends QueryResultRow = any>(text: string, params: any[] = []): Promise<{ rows: T[]; rowCount: number }> {
  if (pool) {
    try {
      const res: QueryResult<T> = await pool.query(text, params);
      return { rows: res.rows, rowCount: res.rowCount || 0 };
    } catch (err) {
      console.warn('PostgreSQL query error, falling back:', err);
    }
  }

  return { rows: [], rowCount: 0 };
}

// ---------------------------------------------------------------------------
// IDEMPOTENCY KEY OPERATIONS (DRIZZLE ORM)
// ---------------------------------------------------------------------------

export interface IdempotencyRecord {
  key: string;
  request_path: string;
  request_hash: string;
  status: 'processing' | 'completed' | 'failed';
  status_code?: number;
  response_body?: any;
  created_at: string;
  expires_at: string;
}

export async function getIdempotencyRecord(key: string): Promise<IdempotencyRecord | null> {
  try {
    const [rec] = await db
      .select()
      .from(schema.idempotencyKeys)
      .where(
        and(
          eq(schema.idempotencyKeys.key, key),
          gt(schema.idempotencyKeys.expires_at, new Date())
        )
      )
      .limit(1);

    if (rec) {
      return {
        key: rec.key,
        request_path: rec.request_path,
        request_hash: rec.request_hash,
        status: rec.status as any,
        status_code: rec.status_code || undefined,
        response_body: rec.response_body,
        created_at: rec.created_at?.toISOString() || new Date().toISOString(),
        expires_at: rec.expires_at?.toISOString() || new Date().toISOString(),
      };
    }
  } catch (e) {
    console.warn('Drizzle idempotency lookup failed, using local store:', e);
  }

  const store = ensureDataFile();
  const localRec = store.idempotency_keys[key];
  if (localRec) {
    if (new Date(localRec.expires_at) > new Date()) {
      return localRec;
    }
    delete store.idempotency_keys[key];
    saveLocalStore(store);
  }
  return null;
}

export async function saveIdempotencyProcessing(
  key: string,
  requestPath: string,
  requestHash: string
): Promise<boolean> {
  const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
  const createdAt = new Date();

  const store = ensureDataFile();
  if (store.idempotency_keys[key] && new Date(store.idempotency_keys[key].expires_at) > new Date()) {
    return false;
  }

  store.idempotency_keys[key] = {
    key,
    request_path: requestPath,
    request_hash: requestHash,
    status: 'processing',
    created_at: createdAt.toISOString(),
    expires_at: expiresAt.toISOString()
  };
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    await db
      .insert(schema.idempotencyKeys)
      .values({
        id: crypto.randomUUID(),
        key,
        request_path: requestPath,
        request_hash: requestHash,
        status: 'processing',
        expires_at: expiresAt
      })
      .onConflictDoNothing({ target: schema.idempotencyKeys.key });
  } catch (e) {
    console.warn('Drizzle saveIdempotencyProcessing failed, using local store:', e);
  }

  return true;
}

export async function saveIdempotencyCompleted(
  key: string,
  statusCode: number,
  responseBody: any
): Promise<void> {
  const store = ensureDataFile();
  if (store.idempotency_keys[key]) {
    store.idempotency_keys[key].status = 'completed';
    store.idempotency_keys[key].status_code = statusCode;
    store.idempotency_keys[key].response_body = responseBody;
    saveLocalStore(store);
  }

  try {
    await ensurePostgresTables();
    await db
      .update(schema.idempotencyKeys)
      .set({
        status: 'completed',
        status_code: statusCode,
        response_body: responseBody
      })
      .where(eq(schema.idempotencyKeys.key, key));
  } catch (e) {
    console.warn('Drizzle saveIdempotencyCompleted failed, using local store:', e);
  }
}

export async function saveIdempotencyFailed(key: string): Promise<void> {
  const store = ensureDataFile();
  if (store.idempotency_keys[key]) {
    store.idempotency_keys[key].status = 'failed';
    saveLocalStore(store);
  }

  try {
    await ensurePostgresTables();
    await db
      .update(schema.idempotencyKeys)
      .set({ status: 'failed' })
      .where(eq(schema.idempotencyKeys.key, key));
  } catch (e) {
    console.warn('Drizzle saveIdempotencyFailed failed, using local store:', e);
  }
}

// ---------------------------------------------------------------------------
// ORDERS REPOSITORY (DRIZZLE ORM)
// ---------------------------------------------------------------------------

export async function createOrderRecord(orderData: any): Promise<any> {
  const store = ensureDataFile();

  if (store.orders[orderData.id] || Object.values(store.orders).some((o: any) => o.idempotency_key === orderData.idempotency_key)) {
    const existing = Object.values(store.orders).find((o: any) => o.idempotency_key === orderData.idempotency_key);
    return existing || store.orders[orderData.id];
  }

  store.orders[orderData.id] = {
    ...orderData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    const [inserted] = await db
      .insert(schema.orders)
      .values({
        id: orderData.id,
        idempotency_key: orderData.idempotency_key,
        order_number: orderData.order_number,
        customer_name: orderData.customer_name,
        company_name: orderData.company_name,
        email: orderData.email,
        phone: orderData.phone,
        status: orderData.status || 'pending',
        payment_status: orderData.payment_status || 'unpaid',
        payment_method: orderData.payment_method || 'razorpay',
        payment_id: orderData.payment_id || null,
        currency: orderData.currency || 'INR',
        subtotal: String(orderData.subtotal),
        tax: String(orderData.tax || 0),
        total_amount: String(orderData.total_amount),
        items: orderData.items,
        shipping_address: orderData.shipping_address || {},
        customization_details: orderData.customization_details || {},
        notes: orderData.notes || ''
      })
      .onConflictDoNothing({ target: schema.orders.idempotency_key })
      .returning();

    if (inserted) return inserted;

    // If duplicate idempotency key, retrieve existing
    const [existing] = await db
      .select()
      .from(schema.orders)
      .where(eq(schema.orders.idempotency_key, orderData.idempotency_key))
      .limit(1);

    if (existing) return existing;
  } catch (err: any) {
    console.warn('Drizzle createOrderRecord error, saved locally:', err);
  }

  return store.orders[orderData.id];
}

export async function getOrderById(id: string): Promise<any | null> {
  try {
    const [order] = await db
      .select()
      .from(schema.orders)
      .where(
        or(
          eq(schema.orders.id, id),
          eq(schema.orders.order_number, id)
        )
      )
      .limit(1);

    if (order) return order;
  } catch (e) {
    console.warn('Drizzle getOrderById error:', e);
  }

  const store = ensureDataFile();
  if (store.orders[id]) return store.orders[id];
  return Object.values(store.orders).find((o: any) => o.order_number === id) || null;
}

export async function listOrders(options: { status?: string; limit?: number; offset?: number } = {}): Promise<any[]> {
  try {
    let q = db.select().from(schema.orders);

    if (options.status) {
      q = q.where(eq(schema.orders.status, options.status)) as any;
    }

    const rows = await q
      .orderBy(desc(schema.orders.created_at))
      .limit(options.limit || 50)
      .offset(options.offset || 0);

    if (rows && rows.length > 0) return rows;
  } catch (e) {
    console.warn('Drizzle listOrders error:', e);
  }

  const store = ensureDataFile();
  let list = Object.values(store.orders);
  if (options.status) {
    list = list.filter((o: any) => o.status === options.status);
  }
  list.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return list.slice(options.offset || 0, (options.offset || 0) + (options.limit || 50));
}

export async function updateOrderRecord(id: string, updates: Partial<any>): Promise<any | null> {
  const store = ensureDataFile();
  const order = await getOrderById(id);
  if (!order) return null;

  try {
    const [updated] = await db
      .update(schema.orders)
      .set({
        ...(updates.status ? { status: updates.status } : {}),
        ...(updates.payment_status ? { payment_status: updates.payment_status } : {}),
        ...(updates.payment_id ? { payment_id: updates.payment_id } : {}),
        ...(updates.notes !== undefined ? { notes: updates.notes } : {}),
        updated_at: new Date()
      })
      .where(eq(schema.orders.id, order.id))
      .returning();

    if (updated) return updated;
  } catch (e) {
    console.warn('Drizzle updateOrderRecord error:', e);
  }

  const localUpdated = {
    ...order,
    ...updates,
    updated_at: new Date().toISOString()
  };
  store.orders[order.id] = localUpdated;
  saveLocalStore(store);
  return localUpdated;
}

export async function deleteOrderRecord(id: string): Promise<boolean> {
  try {
    await db.delete(schema.orders).where(eq(schema.orders.id, id));
  } catch (e) {
    console.warn('Drizzle deleteOrderRecord error:', e);
  }

  const store = ensureDataFile();
  if (store.orders[id]) {
    delete store.orders[id];
    saveLocalStore(store);
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// PRODUCTS REPOSITORY (DRIZZLE ORM)
// ---------------------------------------------------------------------------

function normalizeProductRecord(raw: any): any {
  if (!raw) return null;
  const staticProd = PRODUCTS.find(
    (sp) =>
      sp.id.toLowerCase() === String(raw.id || '').toLowerCase() ||
      sp.code.toLowerCase() === String(raw.code || '').toLowerCase()
  );

  const img = raw.image_url || raw.image || staticProd?.image || '/catalog/crops/hgs_h74.jpg';
  const numPrice = Number(raw.price ?? raw.mrp ?? staticProd?.mrp) || 450;
  const specsList = Array.isArray(raw.specifications)
    ? raw.specifications
    : Array.isArray(raw.specs)
    ? raw.specs
    : staticProd?.specs || [];
  const brandingList =
    Array.isArray(raw.branding_options) && raw.branding_options.length > 0
      ? raw.branding_options
      : Array.isArray(raw.brandingOptions) && raw.brandingOptions.length > 0
      ? raw.brandingOptions
      : staticProd?.brandingOptions || ['Laser Engraving', 'Screen Printing'];
  const tagsList =
    Array.isArray(raw.tags) && raw.tags.length > 0
      ? raw.tags
      : staticProd?.tags || ['B2B Direct'];
  const colorsList =
    Array.isArray(raw.colors) && raw.colors.length > 0
      ? raw.colors
      : staticProd?.colors || [];
  const moqStr =
    typeof raw.moq === 'number'
      ? `${raw.moq} pcs`
      : raw.moq || staticProd?.moq || '50 pcs';
  const catalogType =
    raw.catalogType || staticProd?.catalogType || (raw.category === 'bags' ? 'bags' : 'gifts');
  const pageNumber =
    Number(raw.pageNumber ?? (typeof raw.catalog_page === 'number' ? raw.catalog_page : undefined) ?? staticProd?.pageNumber) || 1;
  const catalogPage =
    (typeof raw.catalogPage === 'string' && raw.catalogPage) ||
    (typeof raw.catalog_page === 'string' && raw.catalog_page) ||
    staticProd?.catalogPage ||
    (catalogType === 'bags'
      ? `/catalog/bags/page_${String(pageNumber).padStart(2, '0')}.jpg`
      : `/catalog/gifts/page_${String(pageNumber).padStart(3, '0')}.jpg`);

  return {
    ...staticProd,
    ...raw,
    id: raw.id || staticProd?.id,
    code: raw.code || staticProd?.code,
    name: raw.name || staticProd?.name,
    category: raw.category || staticProd?.category || 'gift-sets',
    brand: raw.brand || staticProd?.brand || 'Globrands Lifestyle Pvt. Ltd.',
    description: raw.description ?? staticProd?.description ?? '',
    price: numPrice,
    mrp: numPrice,
    moq: moqStr,
    image: img,
    image_url: img,
    specs: specsList,
    specifications: raw.specifications ?? specsList,
    brandingOptions: brandingList,
    branding_options: brandingList,
    tags: tagsList,
    colors: colorsList,
    composition: raw.composition || staticProd?.composition,
    catalogType,
    pageNumber,
    catalogPage,
    catalog_page: raw.catalog_page ?? pageNumber,
    is_active: raw.is_active !== false,
  };
}

export async function listProductsFromDb(filters: { category?: string; brand?: string; search?: string; includeInactive?: boolean } = {}): Promise<any[]> {
  try {
    const conditions: SQL[] = filters.includeInactive ? [] : [eq(schema.products.is_active, true)];

    if (filters.category && filters.category !== 'all') {
      conditions.push(eq(schema.products.category, filters.category));
    }
    if (filters.brand) {
      conditions.push(eq(sql`LOWER(${schema.products.brand})`, filters.brand.toLowerCase()));
    }
    if (filters.search) {
      const s = `%${filters.search.toLowerCase()}%`;
      conditions.push(
        or(
          ilike(schema.products.name, s),
          ilike(schema.products.code, s),
          ilike(schema.products.description, s)
        )!
      );
    }

    const rows = await db
      .select()
      .from(schema.products)
      .where(and(...conditions))
      .orderBy(desc(schema.products.created_at));

    if (rows && rows.length > 0) {
      return rows.map((r) => normalizeProductRecord(r));
    }
  } catch (e) {
    console.warn('Drizzle listProductsFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  let list = Object.values(store.products);

  if (!filters.includeInactive) {
    list = list.filter((p: any) => p.is_active !== false);
  }
  if (filters.category && filters.category !== 'all') {
    list = list.filter((p: any) => p.category === filters.category);
  }
  if (filters.brand) {
    list = list.filter((p: any) => p.brand.toLowerCase() === filters.brand?.toLowerCase());
  }
  if (filters.search) {
    const s = filters.search.toLowerCase();
    list = list.filter((p: any) =>
      p.name.toLowerCase().includes(s) ||
      p.code.toLowerCase().includes(s) ||
      (p.description && p.description.toLowerCase().includes(s))
    );
  }

  return list.map((p: any) => normalizeProductRecord(p));
}

export async function getProductByIdFromDb(idOrCode: string): Promise<any | null> {
  try {
    const [p] = await db
      .select()
      .from(schema.products)
      .where(
        or(
          eq(schema.products.id, idOrCode),
          eq(sql`LOWER(${schema.products.code})`, idOrCode.toLowerCase())
        )
      )
      .limit(1);

    if (p) {
      return normalizeProductRecord(p);
    }
  } catch (e) {
    console.warn('Drizzle getProductByIdFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  const localP = store.products[idOrCode] || Object.values(store.products).find((item: any) => 
    item.id.toLowerCase() === idOrCode.toLowerCase() || 
    item.code.toLowerCase() === idOrCode.toLowerCase()
  );
  return localP ? normalizeProductRecord(localP) : null;
}

export async function createProductInDb(productData: any): Promise<any> {
  const store = ensureDataFile();
  const id = productData.id || `prod-${Date.now()}`;
  const record = {
    ...productData,
    id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  store.products[id] = record;
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    const [inserted] = await db
      .insert(schema.products)
      .values({
        id,
        code: productData.code,
        name: productData.name,
        category: productData.category,
        brand: productData.brand || 'Globrands Lifestyle Pvt. Ltd.',
        description: productData.description || '',
        moq: parseInt(productData.moq || '50', 10) || 50,
        price: String(productData.price || productData.mrp || 450),
        image_url: productData.image_url || productData.image || '',
        tags: productData.tags || [],
        specifications: productData.specifications || {},
        branding_options: productData.branding_options || [],
        colors: productData.colors || [],
        catalog_page: typeof productData.catalog_page === 'number' ? productData.catalog_page : null,
        is_active: productData.is_active !== false
      })
      .onConflictDoUpdate({
        target: schema.products.code,
        set: {
          name: productData.name,
          category: productData.category,
          price: String(productData.price || productData.mrp || 450),
          moq: parseInt(productData.moq || '50', 10) || 50,
          description: productData.description || '',
          image_url: productData.image_url || productData.image || '',
          updated_at: new Date()
        }
      })
      .returning();

    if (inserted) return normalizeProductRecord(inserted);
  } catch (e) {
    console.warn('Drizzle createProductInDb error, saved locally:', e);
  }

  return normalizeProductRecord(record);
}

export async function updateProductInDb(id: string, updates: any): Promise<any | null> {
  const store = ensureDataFile();
  const p = await getProductByIdFromDb(id);
  if (!p) return null;

  try {
    const [updated] = await db
      .update(schema.products)
      .set({
        ...(updates.name ? { name: updates.name } : {}),
        ...(updates.category ? { category: updates.category } : {}),
        ...(updates.brand ? { brand: updates.brand } : {}),
        ...(updates.description !== undefined ? { description: updates.description } : {}),
        ...(updates.moq ? { moq: parseInt(updates.moq, 10) || 50 } : {}),
        ...(updates.price || updates.mrp ? { price: String(updates.price || updates.mrp) } : {}),
        ...(updates.image_url || updates.image ? { image_url: updates.image_url || updates.image } : {}),
        ...(updates.code ? { code: updates.code } : {}),
        ...(Array.isArray(updates.tags) ? { tags: updates.tags } : {}),
        ...(updates.specifications !== undefined ? { specifications: updates.specifications } : {}),
        ...(Array.isArray(updates.branding_options) ? { branding_options: updates.branding_options } : {}),
        ...(Array.isArray(updates.colors) ? { colors: updates.colors } : {}),
        ...(typeof updates.is_active === 'boolean' ? { is_active: updates.is_active } : {}),
        updated_at: new Date()
      })
      .where(eq(schema.products.id, p.id))
      .returning();

    if (updated) return normalizeProductRecord(updated);
  } catch (e) {
    console.warn('Drizzle updateProductInDb error, updating locally:', e);
  }

  const localUpdated = {
    ...p,
    ...updates,
    updated_at: new Date().toISOString()
  };
  store.products[p.id] = localUpdated;
  saveLocalStore(store);
  return normalizeProductRecord(localUpdated);
}

export async function deleteProductInDb(id: string): Promise<boolean> {
  let deletedFromPg = false;
  try {
    const deletedRows = await db
      .delete(schema.products)
      .where(or(eq(schema.products.id, id), eq(schema.products.code, id)))
      .returning();
    if (deletedRows.length > 0) {
      deletedFromPg = true;
    }
  } catch (e) {
    console.warn('Drizzle deleteProductInDb error:', e);
  }

  const store = ensureDataFile();
  let deletedFromLocal = false;
  const localId = store.products[id]?.id || Object.values(store.products).find((p: any) => p.code === id || p.id === id)?.id;
  if (localId && store.products[localId]) {
    delete store.products[localId];
    saveLocalStore(store);
    deletedFromLocal = true;
  }

  return deletedFromPg || deletedFromLocal;
}

// ---------------------------------------------------------------------------
// QUOTES REPOSITORY (DRIZZLE ORM)
// ---------------------------------------------------------------------------

export async function createQuoteRecord(quoteData: any): Promise<any> {
  const store = ensureDataFile();
  const id = quoteData.id || `RFQ-${Date.now()}`;
  const record = {
    ...quoteData,
    id,
    category: quoteData.category || '',
    estimated_quantity: quoteData.estimated_quantity || '',
    status: quoteData.status || 'new',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  // Always persist in local store first so data is never lost
  store.quotes[id] = record;
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    const [inserted] = await db
      .insert(schema.quotes)
      .values({
        id,
        idempotency_key: quoteData.idempotency_key || null,
        quote_number: quoteData.quote_number || id,
        customer_name: quoteData.customer_name,
        company_name: quoteData.company_name,
        email: quoteData.email,
        phone: quoteData.phone,
        city: quoteData.city || '',
        category: quoteData.category || '',
        estimated_quantity: quoteData.estimated_quantity || '',
        status: quoteData.status || 'new',
        target_date: quoteData.target_date || '',
        estimated_budget: quoteData.estimated_budget || '',
        items: quoteData.items,
        branding_requirements: quoteData.branding_requirements || '',
        notes: quoteData.notes || '',
        internal_notes: quoteData.internal_notes || ''
      })
      .returning();

    if (inserted) return inserted;
  } catch (e) {
    console.warn('Drizzle createQuoteRecord error, saved locally:', e);
  }

  return record;
}

export async function createInquiryRecord(inquiryData: {
  id?: string;
  quote_number?: string;
  full_name: string;
  company_name: string;
  email: string;
  phone: string;
  category: string;
  estimated_quantity: string;
  requirements?: string;
  idempotency_key?: string;
}): Promise<any> {
  const store = ensureDataFile();
  const timestamp = Date.now().toString().slice(-6);
  const id = inquiryData.id || `inq_${timestamp}_${Math.random().toString(36).substring(2, 6)}`;
  const quoteNumber = inquiryData.quote_number || `RFQ-${new Date().getFullYear()}-${timestamp}`;
  const nowIso = new Date().toISOString();

  const inquiryRecord = {
    id,
    quote_number: quoteNumber,
    full_name: inquiryData.full_name,
    company_name: inquiryData.company_name,
    email: inquiryData.email,
    phone: inquiryData.phone,
    category: inquiryData.category,
    estimated_quantity: inquiryData.estimated_quantity,
    requirements: inquiryData.requirements || '',
    status: 'new',
    created_at: nowIso,
    updated_at: nowIso,
  };

  store.inquiries[id] = inquiryRecord;
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    await db
      .insert(schema.inquiries)
      .values({
        id,
        quote_number: quoteNumber,
        full_name: inquiryData.full_name,
        company_name: inquiryData.company_name,
        email: inquiryData.email,
        phone: inquiryData.phone,
        category: inquiryData.category,
        estimated_quantity: inquiryData.estimated_quantity,
        requirements: inquiryData.requirements || '',
        status: 'new',
      });
  } catch (e) {
    console.warn('Drizzle createInquiryRecord error, saved locally:', e);
  }

  // Also save into quotes table so Admin -> Quotes & RFQs and Profile -> My RFQs display it seamlessly
  const parsedQty = parseInt(String(inquiryData.estimated_quantity).replace(/[^0-9]/g, ''), 10) || 100;
  const quoteRecord = await createQuoteRecord({
    id: `rfq_${id}`,
    idempotency_key: inquiryData.idempotency_key || null,
    quote_number: quoteNumber,
    customer_name: inquiryData.full_name,
    company_name: inquiryData.company_name,
    email: inquiryData.email,
    phone: inquiryData.phone,
    city: '',
    category: inquiryData.category,
    estimated_quantity: inquiryData.estimated_quantity,
    target_date: '',
    estimated_budget: inquiryData.estimated_quantity,
    items: [
      {
        product: {
          id: 'campaign-inquiry',
          code: 'CAMPAIGN-RFQ',
          name: `${inquiryData.category} (${inquiryData.estimated_quantity})`,
          category: inquiryData.category,
          moq: inquiryData.estimated_quantity,
          mrp: 450,
        },
        quantity: parsedQty,
        customization: 'Custom Corporate Branding',
      },
    ],
    branding_requirements: `Category: ${inquiryData.category} | Estimated Quantity: ${inquiryData.estimated_quantity}`,
    notes: inquiryData.requirements || '',
    status: 'new',
  });

  return { inquiry: inquiryRecord, quote: quoteRecord };
}

export async function listInquiriesFromDb(): Promise<any[]> {
  const store = ensureDataFile();
  const byId = new Map<string, any>();

  for (const item of Object.values(store.inquiries || {})) {
    if (item && (item as any).id) {
      byId.set((item as any).id, item);
    }
  }

  try {
    await ensurePostgresTables();
    const rows = await db
      .select()
      .from(schema.inquiries)
      .orderBy(desc(schema.inquiries.created_at));
    if (rows) {
      for (const r of rows) {
        byId.set(r.id, r);
      }
    }
  } catch (e) {
    console.warn('Drizzle listInquiriesFromDb error, using local store:', e);
  }

  return Array.from(byId.values()).sort(
    (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

export async function listQuotesFromDb(status?: string): Promise<any[]> {
  const store = ensureDataFile();
  const byId = new Map<string, any>();

  for (const item of Object.values(store.quotes || {})) {
    if (item && (item as any).id) {
      byId.set((item as any).id, item);
    }
  }

  try {
    await ensurePostgresTables();
    let q = db.select().from(schema.quotes);
    if (status) {
      q = q.where(eq(schema.quotes.status, status)) as any;
    }
    const rows = await q.orderBy(desc(schema.quotes.created_at));
    if (rows) {
      for (const r of rows) {
        byId.set(r.id, r);
      }
    }
  } catch (e) {
    console.warn('Drizzle listQuotesFromDb error, using local store:', e);
  }

  let list = Array.from(byId.values());
  if (status) {
    list = list.filter((q: any) => q.status === status);
  }
  list.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  return list;
}

export async function getQuoteByIdFromDb(id: string): Promise<any | null> {
  try {
    const [quote] = await db
      .select()
      .from(schema.quotes)
      .where(
        or(
          eq(schema.quotes.id, id),
          eq(schema.quotes.quote_number, id)
        )
      )
      .limit(1);

    if (quote) return quote;
  } catch (e) {
    console.warn('Drizzle getQuoteByIdFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  return store.quotes[id] || Object.values(store.quotes).find((q: any) => q.quote_number === id) || null;
}

export async function updateQuoteInDb(id: string, updates: any): Promise<any | null> {
  const store = ensureDataFile();
  const q = await getQuoteByIdFromDb(id);
  if (!q) return null;

  try {
    const [updated] = await db
      .update(schema.quotes)
      .set({
        ...(updates.status ? { status: updates.status } : {}),
        ...(updates.internal_notes !== undefined ? { internal_notes: updates.internal_notes } : {}),
        updated_at: new Date()
      })
      .where(eq(schema.quotes.id, q.id))
      .returning();

    if (updated) return updated;
  } catch (e) {
    console.warn('Drizzle updateQuoteInDb error, saving locally:', e);
  }

  const localUpdated = {
    ...q,
    ...updates,
    updated_at: new Date().toISOString()
  };
  store.quotes[q.id] = localUpdated;
  saveLocalStore(store);
  return localUpdated;
}

export async function deleteQuoteFromDb(id: string): Promise<boolean> {
  try {
    await db.delete(schema.quotes).where(eq(schema.quotes.id, id));
  } catch (e) {
    console.warn('Drizzle deleteQuoteFromDb error:', e);
  }

  const store = ensureDataFile();
  const q = await getQuoteByIdFromDb(id);
  if (q && store.quotes[q.id]) {
    delete store.quotes[q.id];
    saveLocalStore(store);
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------
// PAYMENTS REPOSITORY (DRIZZLE ORM)
// ---------------------------------------------------------------------------

export async function recordPayment(paymentData: any): Promise<any> {
  const store = ensureDataFile();
  const id = paymentData.id || `PAY-${Date.now()}`;
  const record = {
    ...paymentData,
    id,
    created_at: new Date().toISOString()
  };

  try {
    const [inserted] = await db
      .insert(schema.payments)
      .values({
        id,
        order_id: paymentData.order_id,
        gateway: paymentData.gateway || 'mock',
        gateway_order_id: paymentData.gateway_order_id || '',
        gateway_payment_id: paymentData.gateway_payment_id || '',
        amount: String(paymentData.amount),
        currency: paymentData.currency || 'INR',
        status: paymentData.status || 'created',
        signature: paymentData.signature || '',
        payload: paymentData.payload || {}
      })
      .returning();

    if (inserted) return inserted;
  } catch (e) {
    console.warn('Drizzle recordPayment error, saving locally:', e);
  }

  store.payments[id] = record;
  saveLocalStore(store);
  return record;
}

export async function getPaymentByOrderId(orderId: string): Promise<any | null> {
  try {
    const [pay] = await db
      .select()
      .from(schema.payments)
      .where(eq(schema.payments.order_id, orderId))
      .orderBy(desc(schema.payments.created_at))
      .limit(1);

    if (pay) return pay;
  } catch (e) {
    console.warn('Drizzle getPaymentByOrderId error:', e);
  }

  const store = ensureDataFile();
  return Object.values(store.payments).find((p: any) => p.order_id === orderId) || null;
}

// ---------------------------------------------------------------------------
// USERS REPOSITORY (DRIZZLE ORM)
// ---------------------------------------------------------------------------

export async function getUserByEmailFromDb(email: string): Promise<any | null> {
  try {
    const [user] = await db
      .select()
      .from(schema.users)
      .where(eq(sql`LOWER(${schema.users.email})`, email.toLowerCase()))
      .limit(1);

    if (user) return user;
  } catch (e) {
    console.warn('Drizzle getUserByEmailFromDb error:', e);
  }

  const store = ensureDataFile();
  return Object.values(store.users).find((u: any) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export async function getUserByIdFromDb(id: string): Promise<any | null> {
  try {
    const [user] = await db
      .select()
      .from(schema.users)
      .where(eq(schema.users.id, id))
      .limit(1);

    if (user) return user;
  } catch (e) {
    console.warn('Drizzle getUserByIdFromDb error:', e);
  }

  const store = ensureDataFile();
  return store.users[id] || null;
}

export async function createUserInDb(userData: any): Promise<any> {
  const store = ensureDataFile();
  const id = userData.id || `usr-${Date.now()}`;
  const record = {
    ...userData,
    id,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  store.users[id] = record;
  saveLocalStore(store);

  try {
    await ensurePostgresTables();
    const [inserted] = await db
      .insert(schema.users)
      .values({
        id,
        name: userData.name,
        company_name: userData.company_name,
        email: userData.email,
        phone: userData.phone || '',
        password_hash: userData.password_hash,
        role: userData.role || 'client',
        gstin: userData.gstin || '',
        city: userData.city || ''
      })
      .returning();

    if (inserted) return inserted;
  } catch (e) {
    console.warn('Drizzle createUserInDb error, saved locally:', e);
  }

  return record;
}

export async function listUsersFromDb(): Promise<any[]> {
  try {
    const rows = await db
      .select({
        id: schema.users.id,
        name: schema.users.name,
        company_name: schema.users.company_name,
        email: schema.users.email,
        phone: schema.users.phone,
        role: schema.users.role,
        city: schema.users.city,
        created_at: schema.users.created_at
      })
      .from(schema.users)
      .orderBy(desc(schema.users.created_at));

    if (rows && rows.length > 0) return rows;
  } catch (e) {
    console.warn('Drizzle listUsersFromDb error:', e);
  }

  const store = ensureDataFile();
  return Object.values(store.users).map((u: any) => ({
    id: u.id,
    name: u.name,
    company_name: u.company_name,
    email: u.email,
    phone: u.phone,
    role: u.role,
    city: u.city,
    gstin: u.gstin,
    created_at: u.created_at
  }));
}

export async function updateUserInDb(
  id: string,
  updates: { name?: string; company_name?: string; phone?: string; city?: string; gstin?: string }
): Promise<any | null> {
  const store = ensureDataFile();
  const existing = await getUserByIdFromDb(id);
  if (!existing) return null;

  try {
    const [updated] = await db
      .update(schema.users)
      .set({
        ...(updates.name !== undefined ? { name: updates.name } : {}),
        ...(updates.company_name !== undefined ? { company_name: updates.company_name } : {}),
        ...(updates.phone !== undefined ? { phone: updates.phone } : {}),
        ...(updates.city !== undefined ? { city: updates.city } : {}),
        ...(updates.gstin !== undefined ? { gstin: updates.gstin } : {}),
        updated_at: new Date()
      })
      .where(eq(schema.users.id, id))
      .returning();

    if (updated) {
      if (store.users[id]) {
        store.users[id] = { ...store.users[id], ...updates, updated_at: new Date().toISOString() };
        saveLocalStore(store);
      }
      return updated;
    }
  } catch (e) {
    console.warn('Drizzle updateUserInDb error, updating locally:', e);
  }

  const localUpdated = {
    ...existing,
    ...updates,
    updated_at: new Date().toISOString()
  };
  store.users[id] = localUpdated;
  saveLocalStore(store);
  return localUpdated;
}
