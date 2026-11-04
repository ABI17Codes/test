import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyPaymentSignature } from '@/lib/payments';

const VerifyPaymentSchema = z.object({
  orderId: z.string().min(1, 'Order ID is required'),
  gatewayOrderId: z.string().min(1, 'Gateway order ID is required'),
  gatewayPaymentId: z.string().min(1, 'Gateway payment ID is required'),
  signature: z.string().min(1, 'Cryptographic payment signature is required')
});

// POST /api/payments/verify
// Cryptographically verifies payment authenticity via HMAC SHA256 before marking order as paid
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = VerifyPaymentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { orderId, gatewayOrderId, gatewayPaymentId, signature } = parsed.data;

    const isValid = await verifyPaymentSignature({
      orderId,
      gatewayOrderId,
      gatewayPaymentId,
      signature
    });

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid payment signature. Payment verification failed.',
          code: 'INVALID_SIGNATURE'
        },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully. Order confirmed.',
      orderId,
      paymentId: gatewayPaymentId,
      paymentStatus: 'paid'
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Payment verification failed' },
      { status: 500 }
    );
  }
}

