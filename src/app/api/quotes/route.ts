import { NextRequest, NextResponse } from 'next/server';
import { withIdempotency } from '@/lib/idempotency';
import { createQuoteRecord, listQuotesFromDb } from '@/lib/db';
import { CreateQuoteSchema, QuoteQuerySchema, formatZodError } from '@/lib/validation/schemas';

// GET /api/quotes - List quotes
export async function GET(req: NextRequest) {
  try {
    const queryParsed = QuoteQuerySchema.safeParse({
      status: req.nextUrl.searchParams.get('status') || undefined,
    });
    if (!queryParsed.success) {
      return NextResponse.json(formatZodError(queryParsed.error), { status: 400 });
    }

    const quotes = await listQuotesFromDb(queryParsed.data.status);

    return NextResponse.json({
      success: true,
      count: quotes.length,
      quotes
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to list quotes' },
      { status: 500 }
    );
  }
}

// POST /api/quotes - Create new quote RFQ with Idempotency Key protection
export async function POST(req: NextRequest) {
  return withIdempotency(req, async (idempotencyKey, body) => {
    const parsed = CreateQuoteSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
    }

    const data = parsed.data;
    const timestamp = Date.now().toString().slice(-6);
    const quoteId = `rfq_${timestamp}_${Math.random().toString(36).substring(2, 6)}`;
    const quoteNumber = `RFQ-${new Date().getFullYear()}-${timestamp}`;

    const newQuote = await createQuoteRecord({
      id: quoteId,
      idempotency_key: idempotencyKey,
      quote_number: quoteNumber,
      customer_name: data.customerName,
      company_name: data.companyName,
      email: data.email,
      phone: data.phone,
      city: data.city || '',
      category: data.category || '',
      estimated_quantity: data.estimatedQuantity || '',
      target_date: data.targetDate || '',
      estimated_budget: data.estimatedBudget || '',
      items: data.items,
      branding_requirements: data.brandingRequirements || '',
      notes: data.notes || '',
      status: 'new'
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Corporate quotation inquiry received successfully',
        idempotencyKey,
        quote: newQuote
      },
      { status: 201 }
    );
  });
}

