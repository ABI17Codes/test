import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { withIdempotency } from '@/lib/idempotency';
import { createQuoteRecord, listQuotesFromDb } from '@/lib/db';

const CreateQuoteSchema = z.object({
  customerName: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(10, 'Valid phone is required'),
  city: z.string().optional(),
  targetDate: z.string().optional(),
  estimatedBudget: z.string().optional(),
  items: z.array(z.any()).min(1, 'Quote must include at least one product item'),
  brandingRequirements: z.string().optional(),
  notes: z.string().optional()
});

// GET /api/quotes - List quotes
export async function GET(req: NextRequest) {
  try {
    const status = req.nextUrl.searchParams.get('status') || undefined;
    const quotes = await listQuotesFromDb(status);

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
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
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

