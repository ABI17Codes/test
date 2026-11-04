import { QueryResult, QueryResultRow } from 'pg';
import fs from 'fs';
import path from 'path';
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
        company_name: 'Globrands Lifestyle Pvt Ltd',
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
      payments: {}
    };

    saveLocalStore(initialData);
    return initialData;
  }

  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    return parsed;
  } catch {
    return {
      users: {},
      idempotency_keys: {},
      orders: {},
      products: {},
      quotes: {},
      payments: {}
    };
  }
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

  try {
    await db
      .insert(schema.idempotencyKeys)
      .values({
        key,
        request_path: requestPath,
        request_hash: requestHash,
        status: 'processing',
        expires_at: expiresAt
      })
      .onConflictDoNothing({ target: schema.idempotencyKeys.key });
    return true;
  } catch (e) {
    console.warn('Drizzle saveIdempotencyProcessing failed, using local store:', e);
  }

  const store = ensureDataFile();
  if (store.idempotency_keys[key]) {
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
  return true;
}

export async function saveIdempotencyCompleted(
  key: string,
  statusCode: number,
  responseBody: any
): Promise<void> {
  try {
    await db
      .update(schema.idempotencyKeys)
      .set({
        status: 'completed',
        status_code: statusCode,
        response_body: responseBody
      })
      .where(eq(schema.idempotencyKeys.key, key));
    return;
  } catch (e) {
    console.warn('Drizzle saveIdempotencyCompleted failed, using local store:', e);
  }

  const store = ensureDataFile();
  if (store.idempotency_keys[key]) {
    store.idempotency_keys[key].status = 'completed';
    store.idempotency_keys[key].status_code = statusCode;
    store.idempotency_keys[key].response_body = responseBody;
    saveLocalStore(store);
  }
}

export async function saveIdempotencyFailed(key: string): Promise<void> {
  try {
    await db
      .update(schema.idempotencyKeys)
      .set({ status: 'failed' })
      .where(eq(schema.idempotencyKeys.key, key));
    return;
  } catch (e) {
    console.warn('Drizzle saveIdempotencyFailed failed, using local store:', e);
  }

  const store = ensureDataFile();
  if (store.idempotency_keys[key]) {
    store.idempotency_keys[key].status = 'failed';
    saveLocalStore(store);
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

  try {
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
    console.warn('Drizzle createOrderRecord error, saving locally:', err);
  }

  store.orders[orderData.id] = {
    ...orderData,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  saveLocalStore(store);
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
      return rows.map((r) => ({
        ...r,
        price: Number(r.price) || 450,
        mrp: Number(r.price) || 450,
        image: r.image_url,
        specs: r.specifications,
        brandingOptions: r.branding_options,
        catalogPage: r.catalog_page
      }));
    }
  } catch (e) {
    console.warn('Drizzle listProductsFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  let list = Object.values(store.products);

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

  return list;
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
      return {
        ...p,
        price: Number(p.price) || 450,
        mrp: Number(p.price) || 450,
        image: rImage(p.image_url),
        specs: p.specifications,
        brandingOptions: p.branding_options,
        catalogPage: p.catalog_page
      };
    }
  } catch (e) {
    console.warn('Drizzle getProductByIdFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  const localP = store.products[idOrCode] || Object.values(store.products).find((item: any) => 
    item.id.toLowerCase() === idOrCode.toLowerCase() || 
    item.code.toLowerCase() === idOrCode.toLowerCase()
  );
  return localP || null;
}

function rImage(img: string | null) {
  return img || '/catalog/crops/hgs_h74.jpg';
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

  try {
    const [inserted] = await db
      .insert(schema.products)
      .values({
        id,
        code: productData.code,
        name: productData.name,
        category: productData.category,
        brand: productData.brand || 'Globrands Lifestyle',
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

    if (inserted) return inserted;
  } catch (e) {
    console.warn('Drizzle createProductInDb error, saving locally:', e);
  }

  store.products[id] = record;
  saveLocalStore(store);
  return record;
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

    if (updated) return updated;
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
  return localUpdated;
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
    status: quoteData.status || 'new',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  try {
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
    console.warn('Drizzle createQuoteRecord error, saving locally:', e);
  }

  store.quotes[id] = record;
  saveLocalStore(store);
  return record;
}

export async function listQuotesFromDb(status?: string): Promise<any[]> {
  try {
    let q = db.select().from(schema.quotes);
    if (status) {
      q = q.where(eq(schema.quotes.status, status)) as any;
    }
    const rows = await q.orderBy(desc(schema.quotes.created_at));
    if (rows) return rows;
  } catch (e) {
    console.warn('Drizzle listQuotesFromDb error, using local store:', e);
  }

  const store = ensureDataFile();
  let list = Object.values(store.quotes);
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

  try {
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
    console.warn('Drizzle createUserInDb error, saving locally:', e);
  }

  store.users[id] = record;
  saveLocalStore(store);
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
    created_at: u.created_at
  }));
}
