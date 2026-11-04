import { 
  pgTable, 
  varchar, 
  text, 
  boolean, 
  timestamp, 
  integer, 
  numeric, 
  jsonb, 
  uuid,
  index
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// 1. Users Table
export const users = pgTable('users', {
  id: varchar('id', { length: 100 }).primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  company_name: varchar('company_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  phone: varchar('phone', { length: 50 }),
  password_hash: varchar('password_hash', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).default('client'), // 'client' | 'admin'
  gstin: varchar('gstin', { length: 50 }),
  city: varchar('city', { length: 100 }),
  is_active: boolean('is_active').default(true),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
}, (table) => [
  index('idx_users_email').on(table.email),
  index('idx_users_role').on(table.role)
]);

// 2. Idempotency Keys Table
export const idempotencyKeys = pgTable('idempotency_keys', {
  id: uuid('id').default(sql`uuid_generate_v4()`).primaryKey(),
  key: varchar('key', { length: 255 }).notNull().unique(),
  request_path: varchar('request_path', { length: 255 }).notNull(),
  request_hash: varchar('request_hash', { length: 64 }).notNull(),
  status: varchar('status', { length: 50 }).default('processing').notNull(),
  status_code: integer('status_code'),
  response_body: jsonb('response_body'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  expires_at: timestamp('expires_at', { withTimezone: true })
}, (table) => [
  index('idx_idempotency_key').on(table.key),
  index('idx_idempotency_expires').on(table.expires_at)
]);

// 3. Products Table
export const products = pgTable('products', {
  id: varchar('id', { length: 100 }).primaryKey(),
  code: varchar('code', { length: 100 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  brand: varchar('brand', { length: 100 }).notNull(),
  description: text('description'),
  moq: integer('moq').default(50),
  price: numeric('price', { precision: 12, scale: 2 }).default('0'),
  image_url: text('image_url'),
  tags: text('tags').array(),
  specifications: jsonb('specifications').default({}),
  branding_options: text('branding_options').array(),
  colors: jsonb('colors').default([]),
  catalog_page: integer('catalog_page'),
  is_active: boolean('is_active').default(true),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
}, (table) => [
  index('idx_products_category').on(table.category),
  index('idx_products_brand').on(table.brand),
  index('idx_products_code').on(table.code)
]);

// 4. Orders Table
export const orders = pgTable('orders', {
  id: varchar('id', { length: 100 }).primaryKey(),
  idempotency_key: varchar('idempotency_key', { length: 255 }).notNull().unique(),
  order_number: varchar('order_number', { length: 100 }).notNull().unique(),
  customer_name: varchar('customer_name', { length: 255 }).notNull(),
  company_name: varchar('company_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  payment_status: varchar('payment_status', { length: 50 }).default('unpaid'),
  payment_method: varchar('payment_method', { length: 50 }).default('razorpay'),
  payment_id: varchar('payment_id', { length: 255 }),
  currency: varchar('currency', { length: 10 }).default('INR'),
  subtotal: numeric('subtotal', { precision: 12, scale: 2 }).notNull(),
  tax: numeric('tax', { precision: 12, scale: 2 }).default('0'),
  total_amount: numeric('total_amount', { precision: 12, scale: 2 }).notNull(),
  items: jsonb('items').notNull(),
  shipping_address: jsonb('shipping_address'),
  customization_details: jsonb('customization_details'),
  notes: text('notes'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
}, (table) => [
  index('idx_orders_idempotency_key').on(table.idempotency_key),
  index('idx_orders_customer_email').on(table.email),
  index('idx_orders_status').on(table.status),
  index('idx_orders_created_at').on(table.created_at)
]);

// 5. Quotes / RFQ Table
export const quotes = pgTable('quotes', {
  id: varchar('id', { length: 100 }).primaryKey(),
  idempotency_key: varchar('idempotency_key', { length: 255 }),
  quote_number: varchar('quote_number', { length: 100 }).notNull().unique(),
  customer_name: varchar('customer_name', { length: 255 }).notNull(),
  company_name: varchar('company_name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  city: varchar('city', { length: 100 }),
  status: varchar('status', { length: 50 }).default('new'),
  target_date: varchar('target_date', { length: 100 }),
  estimated_budget: varchar('estimated_budget', { length: 100 }),
  items: jsonb('items').notNull(),
  branding_requirements: text('branding_requirements'),
  notes: text('notes'),
  internal_notes: text('internal_notes'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updated_at: timestamp('updated_at', { withTimezone: true }).defaultNow()
}, (table) => [
  index('idx_quotes_created_at').on(table.created_at),
  index('idx_quotes_status').on(table.status)
]);

// 6. Payments Table
export const payments = pgTable('payments', {
  id: varchar('id', { length: 100 }).primaryKey(),
  order_id: varchar('order_id', { length: 100 }).references(() => orders.id, { onDelete: 'cascade' }),
  gateway: varchar('gateway', { length: 50 }).notNull(),
  gateway_order_id: varchar('gateway_order_id', { length: 255 }),
  gateway_payment_id: varchar('gateway_payment_id', { length: 255 }),
  amount: numeric('amount', { precision: 12, scale: 2 }).notNull(),
  currency: varchar('currency', { length: 10 }).default('INR'),
  status: varchar('status', { length: 50 }).default('created').notNull(),
  signature: varchar('signature', { length: 255 }),
  payload: jsonb('payload'),
  created_at: timestamp('created_at', { withTimezone: true }).defaultNow()
}, (table) => [
  index('idx_payments_order_id').on(table.order_id),
  index('idx_payments_gateway_payment_id').on(table.gateway_payment_id)
]);

// Infer TypeScript types
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Product = typeof products.$inferSelect;
export type NewProduct = typeof products.$inferInsert;

export type Order = typeof orders.$inferSelect;
export type NewOrder = typeof orders.$inferInsert;

export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;

export type Payment = typeof payments.$inferSelect;
export type NewPayment = typeof payments.$inferInsert;

export type IdempotencyKey = typeof idempotencyKeys.$inferSelect;
export type NewIdempotencyKey = typeof idempotencyKeys.$inferInsert;

