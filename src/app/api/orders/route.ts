import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { withIdempotency } from '@/lib/idempotency';
import { createOrderRecord, listOrders } from '@/lib/db';

const OrderItemSchema = z.object({
  productId: z.string(),
  name: z.string(),
  code: z.string().optional(),
  quantity: z.number().min(1),
  unitPrice: z.number().min(0).default(0),
  customization: z.string().optional(),
  color: z.string().optional()
});

const CreateOrderSchema = z.object({
  customerName: z.string().min(2, 'Customer name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  items: z.array(OrderItemSchema).min(1, 'Order must contain at least one item'),
  shippingAddress: z.object({
    addressLine: z.string().optional(),
    city: z.string().optional(),
    state: z.string().optional(),
    pincode: z.string().optional(),
    country: z.string().default('India')
  }).optional(),
  customizationDetails: z.object({
    brandingType: z.string().optional(),
    logoNotes: z.string().optional(),
    laserEngravingText: z.string().optional()
  }).optional(),
  paymentMethod: z.enum(['razorpay', 'stripe', 'bank_transfer', 'po']).default('razorpay'),
  notes: z.string().optional()
});

// GET /api/orders - List all orders (with optional status filter)
export async function GET(req: NextRequest) {
  try {
    const url = req.nextUrl;
    const status = url.searchParams.get('status') || undefined;
    const limit = parseInt(url.searchParams.get('limit') || '50', 10);
    const offset = parseInt(url.searchParams.get('offset') || '0', 10);

    const orders = await listOrders({ status, limit, offset });

    return NextResponse.json({
      success: true,
      count: orders.length,
      orders
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

// POST /api/orders - Idempotent Order Creation
// Guarantees that duplicate clicks or repeated network requests with the same Idempotency-Key
// return the existing order rather than creating duplicate orders in the database.
export async function POST(req: NextRequest) {
  return withIdempotency(req, async (idempotencyKey, body) => {
    // 1. Validate payload
    const parsed = CreateOrderSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation error',
          details: parsed.error.issues
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // 2. Calculate totals
    let subtotal = 0;
    const items = data.items.map((item) => {
      const lineTotal = item.unitPrice * item.quantity;
      subtotal += lineTotal;
      return {
        ...item,
        lineTotal
      };
    });

    const tax = Math.round(subtotal * 0.18 * 100) / 100; // 18% GST standard in India
    const totalAmount = subtotal + tax;

    // 3. Create unique identifiers
    const timestamp = Date.now().toString().slice(-6);
    const orderId = `ord_${timestamp}_${Math.random().toString(36).substring(2, 6)}`;
    const orderNumber = `GLO-${new Date().getFullYear()}-${timestamp}`;

    // 4. Save to Database with unique idempotency_key
    const newOrder = await createOrderRecord({
      id: orderId,
      idempotency_key: idempotencyKey,
      order_number: orderNumber,
      customer_name: data.customerName,
      company_name: data.companyName,
      email: data.email,
      phone: data.phone,
      status: 'pending',
      payment_status: 'unpaid',
      payment_method: data.paymentMethod,
      currency: 'INR',
      subtotal,
      tax,
      total_amount: totalAmount,
      items,
      shipping_address: data.shippingAddress || {},
      customization_details: data.customizationDetails || {},
      notes: data.notes || ''
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Order placed successfully',
        idempotencyKey,
        order: newOrder
      },
      { status: 201 }
    );
  });
}

