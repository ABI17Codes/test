import { NextRequest, NextResponse } from 'next/server';
import { getOrderById, updateOrderRecord, deleteOrderRecord } from '@/lib/db';
import { IdParamSchema, UpdateOrderSchema, formatZodError } from '@/lib/validation/schemas';

interface RouteContext {
  params: Promise<{ id: string }>;
}

// GET /api/orders/[id] - Get Order by ID or Order Number
export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const paramsParsed = IdParamSchema.safeParse(await context.params);
    if (!paramsParsed.success) {
      return NextResponse.json(formatZodError(paramsParsed.error), { status: 400 });
    }
    const { id } = paramsParsed.data;
    const order = await getOrderById(id);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      order
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

// PATCH /api/orders/[id] - Update order status, shipping details, or notes
export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const paramsParsed = IdParamSchema.safeParse(await context.params);
    if (!paramsParsed.success) {
      return NextResponse.json(formatZodError(paramsParsed.error), { status: 400 });
    }
    const { id } = paramsParsed.data;

    const body = await req.json();
    const parsed = UpdateOrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
    }

    const filteredUpdates: Record<string, any> = {};
    for (const [key, value] of Object.entries(parsed.data)) {
      if (value !== undefined) {
        filteredUpdates[key] = value;
      }
    }

    const updated = await updateOrderRecord(id, filteredUpdates);

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Order not found for update' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Order updated successfully',
      order: updated
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update order' },
      { status: 500 }
    );
  }
}

// DELETE /api/orders/[id] - Cancel/delete an order
export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const paramsParsed = IdParamSchema.safeParse(await context.params);
    if (!paramsParsed.success) {
      return NextResponse.json(formatZodError(paramsParsed.error), { status: 400 });
    }
    const { id } = paramsParsed.data;
    const deleted = await deleteOrderRecord(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Order not found to delete' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Order ${id} cancelled successfully`
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete order' },
      { status: 500 }
    );
  }
}

