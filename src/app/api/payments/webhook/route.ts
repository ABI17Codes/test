import { NextRequest, NextResponse } from 'next/server';
import { handleWebhookEvent } from '@/lib/payments';

// POST /api/payments/webhook
// Secure endpoint for receiving server-to-server webhook notifications from Razorpay / Stripe
export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get('x-razorpay-signature') || req.headers.get('stripe-signature') || '';
    const event = await req.json();

    const handled = await handleWebhookEvent(event, signature);

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

