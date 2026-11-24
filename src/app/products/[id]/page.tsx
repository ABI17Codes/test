'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';
import { 
  PRODUCTS, 
  Product 
} from '../../../data/products';
import { useQuote } from '../../../context/QuoteContext';
import { 
  ShoppingBag, 
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
  Clock,
  Palette,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { ProductCard, getProductAngles } from '../../../components/ProductCard';
import { COMPANY_INFO } from '../../../data/siteContent';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = use(params);
  const productId = decodeURIComponent(resolvedParams.id);
  
  const staticMatch = PRODUCTS.find(
    (p) =>
      p.id.toLowerCase() === productId.toLowerCase() ||
      p.code.toLowerCase() === productId.toLowerCase()
  );

  const [product, setProduct] = useState<Product | null>(staticMatch || null);
  const [allProducts, setAllProducts] = useState<Product[]>(PRODUCTS);
  const [loading, setLoading] = useState(!staticMatch);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  useEffect(() => {
    fetch(`/api/products/${encodeURIComponent(productId)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && data.product) {
          setProduct(data.product);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.products) && data.products.length > 0) {
          setAllProducts(data.products);
        }
      })
      .catch(() => {});
  }, [productId]);

  const { addToQuote, items } = useQuote();
  const [selectedQuantity, setSelectedQuantity] = useState(50);
  const [selectedCustomization, setSelectedCustomization] = useState(
    staticMatch?.brandingOptions?.[0] || 'Laser Engraving'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    staticMatch?.colors?.[0]?.name || 'Standard'
  );

  useEffect(() => {
    if (product) {
      if (product.brandingOptions?.[0]) {
        setSelectedCustomization(product.brandingOptions[0]);
      }
      if (product.colors?.[0]?.name) {
        setSelectedColor(product.colors[0].name);
      }
    }
  }, [product?.id]);

  if (loading && !product) {
    return (
      <div className="py-24 text-center text-sm font-semibold text-[#69635C]">
        Loading Product Specifications...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-24 text-center space-y-4">
        <h2 className="text-2xl font-bold text-[#211D1A]">Product Not Found</h2>
        <Link href="/products" className="inline-block px-5 py-2.5 rounded-full bg-[#A98554] text-white text-xs font-bold">
          Return to Catalogue
        </Link>
      </div>
    );
  }

  const isAlreadyInQuote = items.some((i) => i.product.id === product.id);

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const angles = getProductAngles(product);

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_INFO.legalName},\n\nI am requesting a corporate quotation for:\n• Product: ${product.name}\n• Product Code: ${product.code}\n• Brand: ${product.brand}\n• Quantity Required: ${selectedQuantity} units\n• Color Preference: ${selectedColor}\n• Branding Method: ${selectedCustomization}\n\nPlease share availability, bulk pricing, and mockups.`
    );
    return `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`;
  };

  const getBrandBadge = () => {
    if (product.brand === 'Ninja Gear') return 'bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]';
    if (product.brand === 'ADMA London') return 'bg-[#0B4F82] text-white border-[#0B4F82]';
    return 'bg-[#EFF6FF] text-[#0B4F82] border-[#BFDBFE]';
  };

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#475569] text-left">
          <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/products" className="hover:text-[#0B4F82]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/products?category=${product.category}`} className="capitalize hover:text-[#0B4F82]">
            {product.category.replace('-', ' ')}
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#0B4F82] font-bold">{product.code}</span>
        </div>

        {/* Product Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          
          {/* Left Column: Visual Showcase & Multi-Angle Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-3xl bg-white border-2 border-[#DBEAFE] p-8 shadow-xs flex items-center justify-center overflow-hidden aspect-square">
              
              {/* Brand and Tag */}
              <div className="absolute top-5 left-5 z-10 flex flex-col gap-1.5 items-start">
                <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full border shadow-2xs uppercase tracking-wider ${getBrandBadge()}`}>
                  {product.brand}
                </span>
                {product.tags?.[0] && (
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
                    {product.tags[0]}
                  </span>
                )}
              </div>

              {/* Product Code Badge */}
              <div className="absolute top-5 right-5 z-10">
                <span className="font-mono text-xs font-bold text-[#0B4F82] bg-[#EFF6FF] border border-[#BFDBFE] px-3 py-1 rounded-lg shadow-2xs">
                  {product.code}
                </span>
              </div>

              {/* High-Resolution Main Product Image */}
              <img
                src={angles[activeAngleIdx]?.src || product.image}
                alt={`${product.name} - ${angles[activeAngleIdx]?.label || 'Front'} View`}
                className="max-h-[88%] max-w-[88%] object-contain drop-shadow-xl transition-all duration-300"
              />
            </div>

            {/* Multi-Angle Thumbnail Selector (Front View, Back & Straps, Side & Pockets, Interior) */}
            {angles.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {angles.map((ang, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAngleIdx(idx)}
                    className={`p-3 rounded-2xl bg-white border-2 transition-all cursor-pointer flex flex-col items-center gap-1.5 ${
                      activeAngleIdx === idx
                        ? 'border-[#0B4F82] bg-[#EFF6FF]/40 shadow-sm'
                        : 'border-[#DBEAFE] hover:border-[#93C5FD]'
                    }`}
                  >
                    <img src={ang.src} alt={ang.label} className="h-14 w-14 object-contain" />
                    <span className="text-[11px] font-extrabold text-[#0B4F82]">{ang.label} View</span>
                  </button>
                ))}
              </div>
            )}

            {/* Official Catalogue Jump Box */}
            <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
              <div>
                <span className="text-[10px] text-[#69635C] font-bold uppercase tracking-wider block">
                  Original Catalogue Source
                </span>
                <span className="text-sm font-bold text-[#211D1A]">
                  Page {product.pageNumber} &bull; {product.catalogType === 'bags' ? 'Globrands Bags Collection' : 'ALL In One Corporate Gifts'}
                </span>
              </div>

              <Link
                href={`/catalog-viewer?type=${product.catalogType}&page=${product.pageNumber}`}
                className="px-4 py-2 rounded-xl bg-[#F5F0E8] hover:bg-neutral-200/70 border border-[#EAE3D8] text-xs font-bold text-[#211D1A] flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <FileText className="w-4 h-4 text-[#A98554]" />
                <span>Inspect PDF Page {product.pageNumber}</span>
              </Link>
            </div>

            {/* Enterprise Quality Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE3D8] text-center space-y-1 shadow-2xs">
                <ShieldCheck className="w-5 h-5 text-[#A98554] mx-auto" />
                <div className="text-xs font-bold text-[#211D1A]">1-Yr Warranty</div>
                <div className="text-[10px] text-[#69635C]">Corporate Bags</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE3D8] text-center space-y-1 shadow-2xs">
                <Factory className="w-5 h-5 text-[#A98554] mx-auto" />
                <div className="text-xs font-bold text-[#211D1A]">100% In-House</div>
                <div className="text-[10px] text-[#69635C]">Bengaluru Atelier</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE3D8] text-center space-y-1 shadow-2xs">
                <Award className="w-5 h-5 text-[#C5A16D] mx-auto" />
                <div className="text-xs font-bold text-[#211D1A]">5-Stage QC</div>
                <div className="text-[10px] text-[#69635C]">Zero Defect Promise</div>
              </div>
            </div>

          </div>

          {/* Right Column: Specifications, Customization & RFQ Form */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#EAE3D8] space-y-6 shadow-xs">
              
              {/* Product Header */}
              <div className="space-y-2 border-b border-[#EAE3D8] pb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#A98554]">
                    SKU: {product.code}
                  </span>
                  <span className="text-neutral-300">&bull;</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    B2B Direct Supply
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="text-sm text-[#69635C] leading-relaxed font-normal pt-1">
                  {product.description}
                </p>
              </div>

              {/* Gift Set Components (if applicable) */}
              {product.composition && product.composition.length > 0 && (
                <div className="p-4 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] space-y-2.5">
                  <span className="text-xs font-bold text-[#A98554] uppercase tracking-wider block">
                    Luxury Gift Box Components:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#211D1A] font-medium">
                    {product.composition.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A16D] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Verified Technical Specs Table */}
              {product.specs && product.specs.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-[#211D1A] uppercase tracking-wider block">
                    Verified Technical Specifications:
                  </span>
                  <div className="grid grid-cols-2 gap-2.5 text-xs">
                    {product.specs.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8]">
                        <span className="text-[#69635C] text-[10px] block uppercase font-medium">{s.label}</span>
                        <span className="text-[#211D1A] font-bold block truncate mt-0.5">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Color Shade Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="space-y-2.5 pt-3 border-t border-[#EAE3D8]">
                  <span className="text-xs font-bold text-[#211D1A] uppercase tracking-wider block">
                    Available Shades: <b className="text-[#A98554] font-semibold">{selectedColor}</b>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all border cursor-pointer ${
                          selectedColor === c.name
                            ? 'bg-blue-50 border-[#A98554] text-[#A98554] font-bold shadow-2xs'
                            : 'bg-white border-[#EAE3D8] text-[#69635C] hover:text-[#211D1A] hover:border-neutral-300'
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
              <div className="space-y-2.5 pt-3 border-t border-[#EAE3D8]">
                <span className="text-xs font-bold text-[#211D1A] uppercase tracking-wider block">
                  Select Custom Logo Branding:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {product.brandingOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelectedCustomization(opt)}
                      className={`p-2.5 rounded-xl text-xs text-left transition-all border cursor-pointer ${
                        selectedCustomization === opt
                          ? 'bg-blue-50 border-[#A98554] text-[#A98554] font-bold shadow-2xs'
                          : 'bg-white border-[#EAE3D8] text-[#69635C] hover:text-[#211D1A] hover:border-neutral-300'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Tiers & Minimum Order Counter */}
              <div className="space-y-2.5 pt-3 border-t border-[#EAE3D8]">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#211D1A] block">Required Order Quantity</span>
                    <span className="text-[11px] text-[#69635C]">Min. Bulk Order: {product.moq}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {[50, 100, 250, 500, 1000].map((qty) => (
                      <button
                        key={qty}
                        onClick={() => setSelectedQuantity(qty)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          selectedQuantity === qty
                            ? 'bg-[#211D1A] text-white font-bold shadow-2xs'
                            : 'bg-[#F5F0E8] text-[#69635C] hover:bg-neutral-200'
                        }`}
                      >
                        {qty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: Add to RFQ Basket & Instant WhatsApp */}
              <div className="pt-4 border-t border-[#EAE3D8] space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={() => addToQuote(product, selectedQuantity, selectedCustomization)}
                    className="w-full py-3.5 px-5 rounded-full bg-[#A98554] hover:bg-[#40352D] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#C5A16D]" />
                    <span>{isAlreadyInQuote ? 'IN RFQ BASKET ✓' : 'ADD TO BULK RFQ BASKET'}</span>
                  </button>

                  <a
                    href={getWhatsAppEnquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp RFQ</span>
                  </a>
                </div>

                <div className="flex items-center justify-between text-[11px] text-[#69635C] pt-1">
                  <span>Direct response within 2 hours with tiered pricing</span>
                  <Link href="/branding" className="text-[#A98554] hover:underline font-semibold">
                    Preview In Branding Simulator &rarr;
                  </Link>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Related Products Recommendation Row */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-[#EAE3D8] text-left space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
                  RECOMMENDED ALTERNATIVES
                </span>
                <h3 className="text-2xl font-bold text-[#211D1A] mt-0.5">
                  Similar Models in {product.category.replace('-', ' ').toUpperCase()}
                </h3>
              </div>
              <Link
                href={`/products?category=${product.category}`}
                className="text-xs font-bold text-[#A98554] hover:underline flex items-center gap-1"
              >
                <span>View All In Category</span>
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
