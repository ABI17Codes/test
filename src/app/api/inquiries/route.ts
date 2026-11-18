import { NextRequest, NextResponse } from 'next/server';
import { createInquiryRecord, listInquiriesFromDb } from '@/lib/db';
import { CreateInquirySchema, formatZodError } from '@/lib/validation/schemas';

// GET /api/inquiries - List all corporate campaign inquiries from DB
export async function GET() {
  try {
    const inquiries = await listInquiriesFromDb();
    return NextResponse.json({
      success: true,
      count: inquiries.length,
      inquiries,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch campaign inquiries' },
      { status: 500 }
    );
  }
}

// POST /api/inquiries - Validate with Zod and save campaign proposal inquiry to DB (inquiries + quotes tables)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Normalize common field aliases from frontend forms
    const normalizedInput = {
      fullName: body.fullName ?? body.name ?? body.customerName ?? '',
      companyName: body.companyName ?? body.company ?? '',
      email: body.email ?? '',
      phone: body.phone ?? '',
      category: body.category ?? 'Corporate Gift Sets',
      estimatedQuantity: body.estimatedQuantity ?? body.quantity ?? '100 - 250 pcs',
      requirements: body.requirements ?? body.message ?? body.notes ?? '',
    };

    const parsed = CreateInquirySchema.safeParse(normalizedInput);
    if (!parsed.success) {
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
    }

    const idempotencyKey =
      req.headers.get('idempotency-key') ||
      req.headers.get('Idempotency-Key') ||
      `inq-${Date.now()}`;

    const { inquiry, quote } = await createInquiryRecord({
      full_name: parsed.data.fullName,
      company_name: parsed.data.companyName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      category: parsed.data.category,
      estimated_quantity: parsed.data.estimatedQuantity,
      requirements: parsed.data.requirements,
      idempotency_key: idempotencyKey,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Corporate campaign proposal saved to database successfully',
        inquiry,
        quote,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save campaign proposal' },
      { status: 500 }
    );
  }
}

