-- Globrands Lifestyle Database Schema
-- Compatible with PostgreSQL 13+ (Supabase, Neon, AWS RDS, Railway, Local Postgres)

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Users & Corporate Accounts Table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(100) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(50),
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'client', -- 'client', 'admin'
  gstin VARCHAR(50),
  city VARCHAR(100),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- 3. Idempotency Keys Table
-- Guarantees that duplicate API requests with the same Idempotency-Key are safely deduplicated
CREATE TABLE IF NOT EXISTS idempotency_keys (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key VARCHAR(255) UNIQUE NOT NULL,
  request_path VARCHAR(255) NOT NULL,
  request_hash VARCHAR(64) NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'processing', -- 'processing', 'completed', 'failed'
  status_code INT,
  response_body JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() + INTERVAL '24 hours'
);

CREATE INDEX IF NOT EXISTS idx_idempotency_key ON idempotency_keys(key);
CREATE INDEX IF NOT EXISTS idx_idempotency_expires ON idempotency_keys(expires_at);

-- 3. Products Table
CREATE TABLE IF NOT EXISTS products (
  id VARCHAR(100) PRIMARY KEY,
  code VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  description TEXT,
  moq INT DEFAULT 50,
  price NUMERIC(12, 2) DEFAULT 0,
  image_url TEXT,
  tags TEXT[],
  specifications JSONB DEFAULT '{}',
  branding_options TEXT[],
  colors JSONB DEFAULT '[]',
  catalog_page INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_products_code ON products(code);

-- 4. Orders Table (With Idempotency Key unique constraint)
CREATE TABLE IF NOT EXISTS orders (
  id VARCHAR(100) PRIMARY KEY,
  idempotency_key VARCHAR(255) UNIQUE NOT NULL,
  order_number VARCHAR(100) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  status VARCHAR(50) DEFAULT 'pending', -- 'pending', 'paid', 'processing', 'shipped', 'delivered', 'cancelled'
  payment_status VARCHAR(50) DEFAULT 'unpaid', -- 'unpaid', 'paid', 'failed', 'refunded'
  payment_method VARCHAR(50) DEFAULT 'razorpay', -- 'razorpay', 'stripe', 'bank_transfer', 'po'
  payment_id VARCHAR(255),
  currency VARCHAR(10) DEFAULT 'INR',
  subtotal NUMERIC(12, 2) NOT NULL,
  tax NUMERIC(12, 2) DEFAULT 0,
  total_amount NUMERIC(12, 2) NOT NULL,
  items JSONB NOT NULL,
  shipping_address JSONB,
  customization_details JSONB,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_orders_idempotency_key ON orders(idempotency_key);
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(email);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- 5. Payments Table
CREATE TABLE IF NOT EXISTS payments (
  id VARCHAR(100) PRIMARY KEY,
  order_id VARCHAR(100) REFERENCES orders(id) ON DELETE CASCADE,
  gateway VARCHAR(50) NOT NULL, -- 'razorpay', 'stripe', 'mock'
  gateway_order_id VARCHAR(255),
  gateway_payment_id VARCHAR(255),
  amount NUMERIC(12, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) NOT NULL DEFAULT 'created', -- 'created', 'authorized', 'captured', 'failed'
  signature VARCHAR(255),
  payload JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_order_id ON payments(order_id);
CREATE INDEX IF NOT EXISTS idx_payments_gateway_payment_id ON payments(gateway_payment_id);

-- 6. Quotes / RFQ Table
CREATE TABLE IF NOT EXISTS quotes (
  id VARCHAR(100) PRIMARY KEY,
  idempotency_key VARCHAR(255),
  quote_number VARCHAR(100) UNIQUE NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  city VARCHAR(100),
  status VARCHAR(50) DEFAULT 'new', -- 'new', 'reviewing', 'quoted', 'approved', 'rejected'
  target_date VARCHAR(100),
  estimated_budget VARCHAR(100),
  items JSONB NOT NULL,
  branding_requirements TEXT,
  notes TEXT,
  internal_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_quotes_created_at ON quotes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_quotes_status ON quotes(status);

