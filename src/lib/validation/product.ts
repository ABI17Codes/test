import { z } from 'zod';

// Shared product validation used by POST /api/products and PUT /api/products/[id].
// Accepts both the admin form shape (mrp, image, brandingOptions, "50 sets")
// and the DB shape (price, image_url, branding_options, 50), then normalizes.

const toInt = (v: unknown) => {
  if (typeof v === 'number') return Math.round(v);
  if (typeof v === 'string') {
    const n = parseInt(v.replace(/[^0-9]/g, ''), 10);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
};

const toNumber = (v: unknown) => {
  if (typeof v === 'number') return v;
  if (typeof v === 'string' && v.trim() !== '') {
    const n = Number(v);
    return Number.isFinite(n) ? n : undefined;
  }
  return undefined;
};

export const PRODUCT_CATEGORIES = [
  'gift-sets',
  'bags',
  'drinkware',
  'mugs',
  'diaries',
  'promotional',
  'desktop'
] as const;

export const PRODUCT_BRANDS = ['Globrands Lifestyle', 'Ninja Gear', 'ADMA London'] as const;

// Field definitions without defaults (safe for partial updates)
const baseShape = {
  id: z.string().optional(),
  code: z.string().trim().min(2, 'Product code is required'),
  name: z.string().trim().min(2, 'Product name is required'),
  category: z.enum(PRODUCT_CATEGORIES, { message: 'Select a valid category' }),
  brand: z.string().trim().min(2, 'Brand is required'),
  description: z.string().optional(),
  moq: z.preprocess(toInt, z.number().int().min(1, 'MOQ must be at least 1')),
  price: z.preprocess(toNumber, z.number().min(0, 'Price cannot be negative')).optional(),
  mrp: z.preprocess(toNumber, z.number().min(0)).optional(),
  image: z.string().optional(),
  image_url: z.string().optional(),
  tags: z.array(z.string()),
  specifications: z.any().optional(),
  specs: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
  brandingOptions: z.array(z.string()).optional(),
  branding_options: z.array(z.string()).optional(),
  colors: z.array(z.object({ name: z.string(), hex: z.string() })),
  catalogPage: z.preprocess(toInt, z.number().int().optional()).optional(),
  catalog_page: z.preprocess(toInt, z.number().int().optional()).optional(),
  is_active: z.boolean()
};

const ProductInputSchema = z.object({
  ...baseShape,
  description: baseShape.description.default(''),
  moq: baseShape.moq.default(50),
  tags: baseShape.tags.default([]),
  colors: baseShape.colors.default([]),
  is_active: baseShape.is_active.default(true)
});

const ProductUpdateSchema = z.object(baseShape).partial();

export type NormalizedProduct = {
  id?: string;
  code: string;
  name: string;
  category: string;
  brand: string;
  description: string;
  moq: number;
  price: number;
  image_url: string;
  tags: string[];
  specifications: any;
  branding_options: string[];
  colors: { name: string; hex: string }[];
  catalog_page: number | null;
  is_active: boolean;
};

function normalize(d: z.infer<typeof ProductInputSchema>): NormalizedProduct {
  return {
    id: d.id,
    code: d.code,
    name: d.name,
    category: d.category,
    brand: d.brand,
    description: d.description ?? '',
    moq: d.moq,
    price: d.price ?? d.mrp ?? 0,
    image_url: d.image_url || d.image || '',
    tags: d.tags,
    specifications: d.specs ?? d.specifications ?? [],
    branding_options: d.branding_options ?? d.brandingOptions ?? [],
    colors: d.colors,
    catalog_page: d.catalog_page ?? d.catalogPage ?? null,
    is_active: d.is_active
  };
}

export function parseCreateProduct(body: unknown) {
  const parsed = ProductInputSchema.safeParse(body);
  if (!parsed.success) return { success: false as const, issues: parsed.error.issues };
  return { success: true as const, data: normalize(parsed.data) };
}

export function parseUpdateProduct(body: unknown) {
  const parsed = ProductUpdateSchema.safeParse(body);
  if (!parsed.success) return { success: false as const, issues: parsed.error.issues };

  const d = parsed.data;
  const out: Partial<NormalizedProduct> = {};
  if (d.code !== undefined) out.code = d.code;
  if (d.name !== undefined) out.name = d.name;
  if (d.category !== undefined) out.category = d.category;
  if (d.brand !== undefined) out.brand = d.brand;
  if (d.description !== undefined) out.description = d.description;
  if (d.moq !== undefined) out.moq = d.moq;
  if (d.price !== undefined || d.mrp !== undefined) out.price = (d.price ?? d.mrp) as number;
  if (d.image_url !== undefined || d.image !== undefined) out.image_url = d.image_url || d.image || '';
  if (d.tags !== undefined) out.tags = d.tags;
  if (d.specs !== undefined || d.specifications !== undefined) out.specifications = d.specs ?? d.specifications;
  if (d.branding_options !== undefined || d.brandingOptions !== undefined) {
    out.branding_options = (d.branding_options ?? d.brandingOptions) as string[];
  }
  if (d.colors !== undefined) out.colors = d.colors;
  if (d.is_active !== undefined) out.is_active = d.is_active;
  return { success: true as const, data: out };
}
