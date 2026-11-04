import { NextRequest, NextResponse } from 'next/server';
import { getProductByIdFromDb, updateProductInDb, deleteProductInDb } from '@/lib/db';
import { parseUpdateProduct } from '@/lib/validation/product';

interface RouteContext {
  params: Promise<{ id: string }>;
}

// GET /api/products/[id] - Get product details
export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const product = await getProductByIdFromDb(id);

    if (!product) {
      return NextResponse.json(
        { success: false, error: 'Product not found', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      product
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

// PUT /api/products/[id] - Update product details
export async function PUT(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const parsed = parseUpdateProduct(body);

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

    const updated = await updateProductInDb(id, parsed.data);

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Product not found for update', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Product updated successfully',
      product: updated
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update product' },
      { status: 500 }
    );
  }
}

// DELETE /api/products/[id] - Delete a product
export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const deleted = await deleteProductInDb(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Product not found to delete', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Product ${id} deleted successfully`
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete product' },
      { status: 500 }
    );
  }
}

