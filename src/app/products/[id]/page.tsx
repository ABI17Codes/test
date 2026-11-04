'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  PRODUCTS, 
  Product 
} from '../../../data/products';
import { useQuote } from '../../../context/QuoteContext';
import { 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  FileText, 
  Check, 
  Sparkles, 
  ChevronRight,
  CheckCircle2,
  Share2,
  Truck,
  Award,
  Factory,
  ArrowLeft
} from 'lucide-react';
import { ProductCard } from '../../../components/ProductCard';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;
  
  const product = PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === productId.toLowerCase() ||
      p.code.toLowerCase() === productId.toLowerCase()
  );

  if (!product) {
    return notFound();
  }

  const { addToQuote, items } = useQuote();
  const isAlreadyInQuote = items.some((i) => i.product.id === product.id);

  const [selectedQuantity, setSelectedQuantity] = useState(50);
  const [selectedCustomization, setSelectedCustomization] = useState(
    product.brandingOptions?.[0] || 'Laser Engraving'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0]?.name || 'Standard'
  );

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle,\n\nI am requesting a corporate quotation for:\n• Product: ${product.name}\n• Product Code: ${product.code}\n• Brand: ${product.brand}\n• Quantity Required: ${selectedQuantity} units\n• Color Preference: ${selectedColor}\n• Branding Method: ${selectedCustomization}\n\nPlease share availability, tiered B2B pricing, and digital mockups.`
    );
    return `https://wa.me/919900020456?text=${text}`;
  };

  return (
    <div className="py-10 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-neutral-500 mb-8 text-left">
          <Link href="/" className="hover:text-black">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-black">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/products?category=${product.category}`} className="capitalize hover:text-black">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#916c27] font-semibold">{product.code}</span>
        </div>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start text-left">
          
          {/* Left Column: Visual Showcase & Catalog Source */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-3xl bg-white border border-neutral-200/90 p-8 shadow-sm flex items-center justify-center overflow-hidden aspect-square">
              
              {/* Brand and Tag */}
              <div className="absolute top-5 left-5 z-10 flex flex-col gap-1.5 items-start">
                <span className="text-xs font-bold px-3 py-1 rounded-full badge-gold uppercase tracking-wider">
                  {product.brand}
                </span>
                {product.tags?.[0] && (
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                    {product.tags[0]}
                  </span>
                )}
              </div>

              {/* Product Code Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="font-mono text-xs font-bold text-neutral-800 bg-[#FAF8F5] border border-neutral-200 px-3 py-1 rounded-lg shadow-2xs">
                  {product.code}
                </span>
              </div>

              {/* High-Resolution Main Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[82%] max-w-[82%] object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.12)]"
              />
            </div>

            {/* Official Catalogue Jump Box */}
            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
              <div>
                <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                  Original Catalogue Source
                </span>
                <span className="text-sm font-bold text-[#111317]">
                  Page {product.pageNumber} ({product.catalogType === 'bags' ? 'Globrands Bags 2025' : 'ALL In One Corporate Gifts'})
                </span>
              </div>

              <Link
                href={`/catalog-viewer?type=${product.catalogType}&page=${product.pageNumber}`}
                className="px-4 py-2 rounded-xl gold-luxury-button text-xs font-bold flex items-center gap-1.5 shadow-xs whitespace-nowrap"
              >
                <FileText className="w-4 h-4" />
                <span>Inspect PDF Page {product.pageNumber}</span>
              </Link>
            </div>

            {/* Enterprise Quality Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 text-center space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#b88e3e] mx-auto" />
                <div className="text-xs font-bold text-[#111317]">1-Yr Warranty</div>
                <div className="text-[10px] text-neutral-500">Corporate Bags</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 text-center space-y-1">
                <Factory className="w-5 h-5 text-[#b88e3e] mx-auto" />
                <div className="text-xs font-bold text-[#111317]">100% In-House</div>
                <div className="text-[10px] text-neutral-500">Bangalore Facility</div>
              </div>
              <div className="p-3.5 rounded-xl bg-white border border-neutral-200 text-center space-y-1">
                <Award className="w-5 h-5 text-[#b88e3e] mx-auto" />
                <div className="text-xs font-bold text-[#111317]">5-Stage QC</div>
                <div className="text-[10px] text-neutral-500">Zero Defect Promise</div>
              </div>
            </div>

          </div>

          {/* Right Column: Specifications, Customization & RFQ Form */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-neutral-200/90 space-y-6 shadow-sm">
              
              {/* Product Header */}
              <div className="space-y-2 border-b border-neutral-100 pb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#916c27]">
                    SKU: {product.code}
                  </span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    B2B Direct Supply
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-neutral-600 leading-relaxed font-normal pt-1">
                  {product.description}
                </p>
              </div>

              {/* Gift Set Components (if applicable) */}
              {product.composition && product.composition.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-neutral-200 space-y-2.5">
                  <span className="text-xs font-bold text-[#916c27] uppercase tracking-wider block">
                    Luxury Gift Box Components:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-700 font-medium">
                    {product.composition.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#b88e3e] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Technical Specs Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#111317] uppercase tracking-wider block">
                    Verified Technical Specifications:
                  </span>
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#FAF8F5] border border-neutral-200">
                        <span className="text-neutral-500 text-[10px] block uppercase font-medium">{s.label}</span>
                        <span className="text-[#111317] font-semibold block truncate mt-0.5">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Shade Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                  <span className="text-xs font-bold text-[#111317] uppercase tracking-wider block">
                    Available Shades: <b className="text-[#916c27] font-semibold">{selectedColor}</b>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all border ${
                          selectedColor === c.name
                            ? 'bg-[#FAF6EE] border-[#b88e3e] text-[#916c27] font-bold shadow-2xs'
                            : 'bg-white border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-300'
                        }`}
                      >
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-neutral-300 shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* In-House Branding Technique Selector */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <span className="text-xs font-bold text-[#111317] uppercase tracking-wider block">
                  Select Custom Logo Branding:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {product.brandingOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedCustomization(opt)}
                      className={`p-2.5 rounded-xl text-xs text-left transition-all border ${
                        selectedCustomization === opt
                          ? 'bg-[#FAF6EE] border-[#b88e3e] text-[#916c27] font-bold shadow-2xs'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:text-black hover:border-neutral-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Tiers & Minimum Order Counter */}
              <div className="space-y-2.5 pt-3 border-t border-neutral-100">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#111317] block">Required Order Quantity</span>
                    <span className="text-[11px] text-neutral-500">Min. Bulk Order: {product.moq}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[50, 100, 250, 500, 1000].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => setSelectedQuantity(qty)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          selectedQuantity === qty
                            ? 'bg-[#111317] text-white font-bold shadow-2xs'
                            : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to RFQ Basket & Instant WhatsApp */}
              <div className="pt-4 border-t border-neutral-100 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addToQuote(product, selectedQuantity, selectedCustomization)}
                    className="w-full py-3.5 px-5 rounded-xl gold-luxury-button text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO BULK RFQ BASKET</span>
                  </button>

                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                    <span>Instant WhatsApp RFQ</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-1">
                  <span>Direct response within 2 hours with tiered pricing</span>
                  <Link href="/branding" className="text-[#916c27] hover:underline font-semibold">
                    Preview In Branding Simulator →
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products Recommendation Row */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 pt-12 border-t border-neutral-200 text-left space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
                  RECOMMENDED ALTERNATIVES
                </span>
                <h3 className="text-2xl font-bold text-[#111317] font-serif-luxury mt-0.5">
                  Similar Models in {product.category.replace('-', ' ').toUpperCase()}
                </h3>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-xs font-bold text-[#916c27] hover:underline flex items-center gap-1"
              >
                <span>View Category</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

