import { NextRequest, NextResponse } from 'next/server';
import { listProductsFromDb, createProductInDb, getProductByIdFromDb } from '@/lib/db';
import { parseCreateProduct } from '@/lib/validation/product';
import { ProductQuerySchema, formatZodError } from '@/lib/validation/schemas';

// GET /api/products - List products with category, brand, and search filters
// Pass ?includeInactive=1 (admin) to also return hidden products.
export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const queryParsed = ProductQuerySchema.safeParse({
      category: url.searchParams.get('category') || undefined,
      brand: url.searchParams.get('brand') || undefined,
      search: url.searchParams.get('search') || undefined,
      includeInactive: url.searchParams.get('includeInactive') || undefined,
    });

    if (!queryParsed.success) {
      return NextResponse.json(formatZodError(queryParsed.error), { status: 400 });
    }

    const { category, brand, search, includeInactive: rawIncludeInactive } = queryParsed.data;
    const includeInactive = rawIncludeInactive === '1' || rawIncludeInactive === 'true';

    const products = await listProductsFromDb({ category, brand, search, includeInactive });

    return NextResponse.json({
      success: true,
      count: products.length,
      products
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to list products' },
      { status: 500 }
    );
  }
}

// POST /api/products - Create a new product in the catalog
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = parseCreateProduct(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.issues[0]?.message || 'Validation error',
          details: parsed.issues
        },
        { status: 400 }
      );
    }

    // Reject duplicate product codes instead of silently overwriting
    const existing = await getProductByIdFromDb(parsed.data.code);
    if (existing) {
      return NextResponse.json(
        { success: false, error: `Product code "${parsed.data.code}" already exists` },
        { status: 409 }
      );
    }

    const created = await createProductInDb({
      ...parsed.data,
      id: parsed.data.id || `prod-${Date.now()}`
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Product created successfully',
        product: created
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to create product' },
      { status: 500 }
    );
  }
}
