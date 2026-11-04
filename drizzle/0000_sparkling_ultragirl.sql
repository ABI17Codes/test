CREATE TABLE "idempotency_keys" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"key" varchar(255) NOT NULL,
	"request_path" varchar(255) NOT NULL,
	"request_hash" varchar(64) NOT NULL,
	"status" varchar(50) DEFAULT 'processing' NOT NULL,
	"status_code" integer,
	"response_body" jsonb,
	"created_at" timestamp with time zone DEFAULT now(),
	"expires_at" timestamp with time zone,
	CONSTRAINT "idempotency_keys_key_unique" UNIQUE("key")
);
--> statement-breakpoint
CREATE TABLE "orders" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"idempotency_key" varchar(255) NOT NULL,
	"order_number" varchar(100) NOT NULL,
	"customer_name" varchar(255) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"status" varchar(50) DEFAULT 'pending',
	"payment_status" varchar(50) DEFAULT 'unpaid',
	"payment_method" varchar(50) DEFAULT 'razorpay',
	"payment_id" varchar(255),
	"currency" varchar(10) DEFAULT 'INR',
	"subtotal" numeric(12, 2) NOT NULL,
	"tax" numeric(12, 2) DEFAULT '0',
	"total_amount" numeric(12, 2) NOT NULL,
	"items" jsonb NOT NULL,
	"shipping_address" jsonb,
	"customization_details" jsonb,
	"notes" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "orders_idempotency_key_unique" UNIQUE("idempotency_key"),
	CONSTRAINT "orders_order_number_unique" UNIQUE("order_number")
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"order_id" varchar(100),
	"gateway" varchar(50) NOT NULL,
	"gateway_order_id" varchar(255),
	"gateway_payment_id" varchar(255),
	"amount" numeric(12, 2) NOT NULL,
	"currency" varchar(10) DEFAULT 'INR',
	"status" varchar(50) DEFAULT 'created' NOT NULL,
	"signature" varchar(255),
	"payload" jsonb,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "products" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"code" varchar(100) NOT NULL,
	"name" varchar(255) NOT NULL,
	"category" varchar(100) NOT NULL,
	"brand" varchar(100) NOT NULL,
	"description" text,
	"moq" integer DEFAULT 50,
	"price" numeric(12, 2) DEFAULT '0',
	"image_url" text,
	"tags" text[],
	"specifications" jsonb DEFAULT '{}'::jsonb,
	"branding_options" text[],
	"colors" jsonb DEFAULT '[]'::jsonb,
	"catalog_page" integer,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "products_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "quotes" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"idempotency_key" varchar(255),
	"quote_number" varchar(100) NOT NULL,
	"customer_name" varchar(255) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"city" varchar(100),
	"status" varchar(50) DEFAULT 'new',
	"target_date" varchar(100),
	"estimated_budget" varchar(100),
	"items" jsonb NOT NULL,
	"branding_requirements" text,
	"notes" text,
	"internal_notes" text,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "quotes_quote_number_unique" UNIQUE("quote_number")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(100) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"company_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50),
	"password_hash" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'client',
	"gstin" varchar(50),
	"city" varchar(100),
	"is_active" boolean DEFAULT true,
	"created_at" timestamp with time zone DEFAULT now(),
	"updated_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_order_id_orders_id_fk" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_idempotency_key" ON "idempotency_keys" USING btree ("key");--> statement-breakpoint
CREATE INDEX "idx_idempotency_expires" ON "idempotency_keys" USING btree ("expires_at");--> statement-breakpoint
CREATE INDEX "idx_orders_idempotency_key" ON "orders" USING btree ("idempotency_key");--> statement-breakpoint
CREATE INDEX "idx_orders_customer_email" ON "orders" USING btree ("email");--> statement-breakpoint
CREATE INDEX "idx_orders_status" ON "orders" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_orders_created_at" ON "orders" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_payments_order_id" ON "payments" USING btree ("order_id");--> statement-breakpoint
CREATE INDEX "idx_payments_gateway_payment_id" ON "payments" USING btree ("gateway_payment_id");--> statement-breakpoint
CREATE INDEX "idx_products_category" ON "products" USING btree ("category");--> statement-breakpoint
CREATE INDEX "idx_products_brand" ON "products" USING btree ("brand");--> statement-breakpoint
CREATE INDEX "idx_products_code" ON "products" USING btree ("code");--> statement-breakpoint
CREATE INDEX "idx_quotes_created_at" ON "quotes" USING btree ("created_at");--> statement-breakpoint
CREATE INDEX "idx_quotes_status" ON "quotes" USING btree ("status");--> statement-breakpoint
CREATE INDEX "idx_users_email" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "idx_users_role" ON "users" USING btree ("role");