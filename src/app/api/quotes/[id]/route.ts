import { NextRequest, NextResponse } from 'next/server';
import { getQuoteByIdFromDb, updateQuoteInDb, deleteQuoteFromDb } from '@/lib/db';

interface RouteContext {
  params: Promise<{ id: string }>;
}

// GET /api/quotes/[id] - Get quote details
export async function GET(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const quote = await getQuoteByIdFromDb(id);

    if (!quote) {
      return NextResponse.json(
        { success: false, error: 'Quote not found', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      quote
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch quote' },
      { status: 500 }
    );
  }
}

// PATCH /api/quotes/[id] - Update quote status or sales notes
export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const updated = await updateQuoteInDb(id, body);

    if (!updated) {
      return NextResponse.json(
        { success: false, error: 'Quote not found for update', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Quote updated successfully',
      quote: updated
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to update quote' },
      { status: 500 }
    );
  }
}

// DELETE /api/quotes/[id] - Delete a quote
export async function DELETE(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const deleted = await deleteQuoteFromDb(id);

    if (!deleted) {
      return NextResponse.json(
        { success: false, error: 'Quote not found to delete', id },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Quote ${id} deleted successfully`
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to delete quote' },
      { status: 500 }
    );
  }
}

