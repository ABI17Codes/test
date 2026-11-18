import { z } from 'zod';

/**
 * Formats a ZodError into a standardized API error response object.
 */
export function formatZodError(error: z.ZodError) {
  const firstIssue = error.issues[0];
  return {
    success: false as const,
    error: firstIssue?.message || 'Validation error',
    details: error.issues,
  };
}

// ==========================================
// 1. COMMON PRIMITIVES & PARAMS
// ==========================================

export const IdParamSchema = z.object({
  id: z.string().trim().min(1, 'Resource ID is required').max(128, 'Invalid resource ID'),
});

export const EmailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email('Valid work email is required');

export const PhoneSchema = z
  .string()
  .trim()
  .min(7, 'Valid phone number is required')
  .max(25, 'Phone number is too long');

// ==========================================
// 2. AUTH & USERS SCHEMAS
// ==========================================

export const LoginSchema = z.object({
  email: EmailSchema,
  password: z.string().min(1, 'Password is required').max(128, 'Password is too long'),
});

export const RegisterSchema = z.object({
  name: z.string().trim().min(2, 'Full name is required').max(100, 'Name is too long'),
  companyName: z.string().trim().min(2, 'Company name is required').max(150, 'Company name is too long'),
  email: EmailSchema,
  phone: PhoneSchema,
  password: z.string().min(6, 'Password must be at least 6 characters').max(128, 'Password is too long'),
  city: z.string().trim().max(100, 'City name is too long').optional(),
  gstin: z.string().trim().max(20, 'GSTIN cannot exceed 20 characters').optional(),
  role: z.enum(['client', 'admin']).default('client'),
});

export const UpdateProfileSchema = z
  .object({
    name: z.string().trim().min(2, 'Full name must be at least 2 characters').max(100).optional(),
    company_name: z.string().trim().min(2, 'Company name must be at least 2 characters').max(150).optional(),
    companyName: z.string().trim().min(2, 'Company name must be at least 2 characters').max(150).optional(),
    phone: z.string().trim().max(25, 'Phone number is too long').optional(),
    city: z.string().trim().max(100, 'City name is too long').optional(),
    gstin: z.string().trim().max(20, 'GSTIN cannot exceed 20 characters').optional(),
  })
  .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: 'At least one profile field must be provided for update',
  });

export const CreateUserSchema = z.object({
  name: z.string().trim().min(2, 'Name is required').max(100),
  companyName: z.string().trim().min(2, 'Company name is required').max(150),
  email: EmailSchema,
  phone: PhoneSchema,
  password: z
    .string()
    .min(6, 'Temporary password must be at least 6 characters')
    .max(128)
    .default('Welcome@123'),
  role: z.enum(['client', 'admin']).default('client'),
  city: z.string().trim().max(100).optional(),
  gstin: z.string().trim().max(20).optional(),
});

// ==========================================
// 3. PRODUCTS QUERY SCHEMA
// ==========================================

export const ProductQuerySchema = z.object({
  category: z.string().trim().optional(),
  brand: z.string().trim().optional(),
  search: z.string().trim().max(200).optional(),
  includeInactive: z.enum(['0', '1', 'true', 'false']).optional(),
});

// ==========================================
// 4. ORDERS SCHEMAS
// ==========================================

export const ORDER_STATUSES = [
  'pending',
  'confirmed',
  'paid',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
] as const;

export const PAYMENT_STATUSES = ['unpaid', 'paid', 'failed', 'refunded'] as const;

export const PAYMENT_METHODS = ['razorpay', 'stripe', 'bank_transfer', 'po'] as const;

export const OrderItemSchema = z.object({
  productId: z.string().trim().min(1, 'Product ID is required'),
  name: z.string().trim().min(1, 'Product name is required'),
  code: z.string().trim().optional(),
  quantity: z.coerce.number().int().min(1, 'Quantity must be at least 1'),
  unitPrice: z.coerce.number().min(0, 'Unit price cannot be negative').default(0),
  customization: z.string().trim().optional(),
  color: z.string().trim().optional(),
});

export const ShippingAddressSchema = z
  .object({
    addressLine: z.string().trim().optional(),
    city: z.string().trim().optional(),
    state: z.string().trim().optional(),
    pincode: z.string().trim().optional(),
    country: z.string().trim().default('India'),
  })
  .passthrough();

export const CreateOrderSchema = z.object({
  customerName: z.string().trim().min(2, 'Customer name is required').max(100),
  companyName: z.string().trim().min(2, 'Company name is required').max(150),
  email: EmailSchema,
  phone: PhoneSchema,
  items: z.array(OrderItemSchema).min(1, 'Order must contain at least one item'),
  shippingAddress: ShippingAddressSchema.optional(),
  customizationDetails: z
    .object({
      brandingType: z.string().trim().optional(),
      logoNotes: z.string().trim().optional(),
      laserEngravingText: z.string().trim().optional(),
    })
    .passthrough()
    .optional(),
  paymentMethod: z.enum(PAYMENT_METHODS).default('razorpay'),
  notes: z.string().trim().max(2000).optional(),
});

export const UpdateOrderSchema = z
  .object({
    status: z.enum(ORDER_STATUSES, { message: 'Invalid order status' }).optional(),
    payment_status: z.enum(PAYMENT_STATUSES, { message: 'Invalid payment status' }).optional(),
    payment_id: z.string().trim().max(200).optional(),
    notes: z.string().trim().max(2000).optional(),
    shipping_address: ShippingAddressSchema.optional(),
  })
  .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: 'At least one valid field is required to update the order',
  });

export const OrderQuerySchema = z.object({
  status: z.string().trim().optional(),
  limit: z.coerce.number().int().min(1).max(500).default(50),
  offset: z.coerce.number().int().min(0).default(0),
});

// ==========================================
// 5. QUOTES / RFQs SCHEMAS
// ==========================================

export const QUOTE_STATUSES = [
  'new',
  'reviewing',
  'quoted',
  'approved',
  'rejected',
  'closed',
] as const;

export const QuoteItemSchema = z
  .object({
    product: z
      .object({
        id: z.string().optional(),
        code: z.string().optional(),
        name: z.string().optional(),
        category: z.string().optional(),
        moq: z.union([z.string(), z.number()]).optional(),
        mrp: z.number().optional(),
        image: z.string().optional(),
      })
      .passthrough()
      .optional(),
    productId: z.string().optional(),
    name: z.string().optional(),
    code: z.string().optional(),
    quantity: z.coerce.number().int().min(1, 'Item quantity must be at least 1').default(50),
    customization: z.string().optional(),
    notes: z.string().optional(),
  })
  .passthrough();

export const CreateQuoteSchema = z.object({
  customerName: z.string().trim().min(2, 'Name is required').max(100),
  companyName: z.string().trim().min(2, 'Company name is required').max(150),
  email: EmailSchema,
  phone: PhoneSchema,
  city: z.string().trim().max(100).optional(),
  category: z.string().trim().max(150).optional(),
  estimatedQuantity: z.string().trim().max(100).optional(),
  targetDate: z.string().trim().max(100).optional(),
  estimatedBudget: z.string().trim().max(100).optional(),
  items: z.array(QuoteItemSchema).min(1, 'Quote must include at least one product item'),
  brandingRequirements: z.string().trim().max(1000).optional(),
  notes: z.string().trim().max(2000).optional(),
});

export const CreateInquirySchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required').max(100),
  companyName: z.string().trim().min(2, 'Company name is required').max(150),
  email: EmailSchema,
  phone: PhoneSchema,
  category: z.string().trim().min(2, 'Primary category is required').max(150),
  estimatedQuantity: z.string().trim().min(1, 'Estimated quantity is required').max(100),
  requirements: z.string().trim().max(2000).optional().default(''),
});

export const UpdateQuoteSchema = z
  .object({
    status: z.enum(QUOTE_STATUSES, { message: 'Invalid quote status' }).optional(),
    internal_notes: z.string().trim().max(2000).optional(),
    notes: z.string().trim().max(2000).optional(),
    estimated_budget: z.string().trim().max(100).optional(),
    target_date: z.string().trim().max(100).optional(),
  })
  .refine((data) => Object.values(data).some((v) => v !== undefined), {
    message: 'At least one valid field is required to update the quote',
  });

export const QuoteQuerySchema = z.object({
  status: z.string().trim().optional(),
});

// ==========================================
// 6. PAYMENTS SCHEMAS
// ==========================================

export const CreatePaymentSchema = z.object({
  orderId: z.string().trim().min(1, 'Order ID is required'),
});

export const VerifyPaymentSchema = z.object({
  orderId: z.string().trim().min(1, 'Order ID is required'),
  gatewayOrderId: z.string().trim().min(1, 'Gateway order ID is required'),
  gatewayPaymentId: z.string().trim().min(1, 'Gateway payment ID is required'),
  signature: z.string().trim().min(1, 'Cryptographic payment signature is required'),
});

export const PaymentWebhookSchema = z
  .object({
    event: z.string().trim().min(1).optional(),
    type: z.string().trim().min(1).optional(),
    payload: z.record(z.string(), z.any()).optional(),
    data: z.record(z.string(), z.any()).optional(),
  })
  .passthrough()
  .refine((val) => Boolean(val.event || val.type), {
    message: 'Webhook payload must include an event or type identifier',
  });

