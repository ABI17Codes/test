import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { withIdempotency } from '@/lib/idempotency';
import { createPaymentOrder } from '@/lib/payments';
import { getOrderById } from '@/lib/db';

const CreatePaymentSchema = z.object({
  orderId: z.string().min(1, 'Order ID is required')
});

// POST /api/payments/create-order
// Initializes a payment transaction with Razorpay/Stripe with Idempotency Key protection
export async function POST(req: NextRequest) {
  return withIdempotency(req, async (idempotencyKey, body) => {
    const parsed = CreatePaymentSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: 'Validation error', details: parsed.error.issues },
        { status: 400 }
      );
    }

    const { orderId } = parsed.data;
    const order = await getOrderById(orderId);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found', orderId },
        { status: 404 }
      );
    }

    if (order.payment_status === 'paid') {
      return NextResponse.json(
        {
          success: false,
          error: 'This order is already fully paid.',
          orderId,
          paymentStatus: 'paid'
        },
        { status: 400 }
      );
    }

    const paymentOrder = await createPaymentOrder({
      orderId: order.id,
      amount: Number(order.total_amount),
      currency: order.currency || 'INR',
      notes: {
        orderNumber: order.order_number,
        company: order.company_name,
        customer: order.customer_name
      },
      idempotencyKey
    });

    return NextResponse.json({
      message: 'Payment order created successfully',
      idempotencyKey,
      ...paymentOrder
    });
  });
}
