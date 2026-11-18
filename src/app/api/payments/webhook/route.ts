import { NextRequest, NextResponse } from 'next/server';
import { handleWebhookEvent } from '@/lib/payments';
import { PaymentWebhookSchema, formatZodError } from '@/lib/validation/schemas';

// POST /api/payments/webhook
// Secure endpoint for receiving server-to-server webhook notifications from Razorpay / Stripe
export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('x-razorpay-signature') || req.headers.get('stripe-signature') || '';
    const rawBody = await req.json();
    const parsed = PaymentWebhookSchema.safeParse(rawBody);

    if (!parsed.success) {
      return NextResponse.json(formatZodError(parsed.error), { status: 400 });
    }

    const handled = await handleWebhookEvent(parsed.data, signature);

    return NextResponse.json({
      received: true,
      processed: handled
    });
  } catch (error: any) {
    console.error('Error processing payment webhook:', error);
    return NextResponse.json(
      { error: 'Webhook processing error', message: error.message },
      { status: 400 }
    );
  }
}

