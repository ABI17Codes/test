'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Printer, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenCatalogPage: (type: 'bags' | 'gifts', page: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenCatalogPage
}) => {
  if (!product) return null;

  const { addToQuote } = useQuote();
  const [selectedQuantity, setSelectedQuantity] = useState(50);
  const [selectedCustomization, setSelectedCustomization] = useState(
    product.brandingOptions?.[0] || 'Laser Engraving'
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors?.[0]?.name || 'Standard'
  );

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle,\n\nI am requesting a corporate quote for:\n• Product: ${product.name}\n• Code: ${product.code}\n• Brand: ${product.brand}\n• Quantity: ${selectedQuantity} units\n• Color: ${selectedColor}\n• Branding: ${selectedCustomization}\n\nPlease share B2B tiered rates and mockups.`
    );
    return `https://wa.me/919900020456?text=${text}`;
  };

  const getBrandBadge = () => {
    if (product.brand === 'Ninja Gear') return 'bg-[#101828] text-white border-[#101828]';
    if (product.brand === 'ADMA London') return 'bg-[#0876B4] text-white border-[#0876B4]';
    return 'bg-blue-50 text-[#0876B4] border-blue-200/80';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all border border-[#E5E7EB] shadow-xs cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Media & Catalog Page Jump */}
        <div className="md:w-1/2 bg-[#F5F7FA] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E7EB]">
          
          {/* Top Badges */}
          <div className="flex items-center justify-between">
            <span className={`px-3 py-1 rounded-full border shadow-2xs text-xs font-bold uppercase tracking-wider ${getBrandBadge()}`}>
              {product.brand}
            </span>
            <span className="font-mono text-xs font-bold text-[#101828] bg-white px-2.5 py-1 rounded-lg border border-[#E5E7EB] shadow-2xs">
              {product.code}
            </span>
          </div>

          {/* Main Large Product Photo */}
          <div className="relative my-6 aspect-square rounded-2xl bg-white border border-[#E5E7EB] p-6 flex items-center justify-center overflow-hidden group shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain drop-shadow-md transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Original Catalog Page Shortcut Button */}
          <div className="p-3 rounded-2xl bg-white border border-[#E5E7EB] flex items-center justify-between shadow-2xs">
            <div className="text-left text-xs">
              <span className="text-[#667085] block text-[10px] uppercase font-bold">Official Catalogue Source</span>
              <span className="text-[#101828] font-bold">Page {product.pageNumber} ({product.catalogType === 'bags' ? 'Globrands Bags' : 'All-In-One Gifts'})</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCatalogPage(product.catalogType, product.pageNumber);
              }}
              className="px-3 py-1.5 rounded-xl bg-[#F5F7FA] hover:bg-neutral-200 border border-[#E5E7EB] text-xs font-bold text-[#101828] flex items-center gap-1 shadow-2xs cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#0876B4]" />
              <span>View Page</span>
            </button>
          </div>

        </div>

        {/* Right Column: Complete Specifications & B2B RFQ Form */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[85vh] text-left bg-white">
          
          <div className="space-y-4">
            
            {/* Title & Tagline */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#101828]">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-[#667085]">Category: <b className="text-[#101828] capitalize">{product.category.replace('-', ' ')}</b></span>
                <span className="text-neutral-300">&bull;</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Factory Supply
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Gift Set Components (if applicable) */}
            {product.composition && (
              <div className="p-3.5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] space-y-2">
                <span className="text-[10px] font-bold text-[#0876B4] uppercase tracking-wider block">
                  Gift Box Contents:
                </span>
                <div className="grid grid-cols-1 gap-1 text-xs text-[#101828] font-medium">
                  {product.composition.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E8B43A] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Specifications Table */}
            {product.specs && (
              <div className="space-y-2 pt-2 border-t border-[#E5E7EB]">
                <span className="text-[11px] font-bold text-[#101828] uppercase tracking-wider block">
                  Verified Technical Specifications:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-[#F5F7FA] border border-[#E5E7EB]">
                      <span className="text-[#667085] text-[10px] block uppercase font-medium">{s.label}</span>
                      <span className="text-[#101828] font-bold truncate block">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="pt-2 border-t border-[#E5E7EB] space-y-2">
                <span className="text-[11px] font-bold text-[#101828] uppercase tracking-wider block">
                  Available Shades:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs transition-all border cursor-pointer ${
                        selectedColor === c.name
                          ? 'bg-blue-50 border-[#0876B4] text-[#0876B4] font-bold shadow-2xs'
                          : 'bg-white border-[#E5E7EB] text-[#667085] hover:text-[#101828]'
                      }`}
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-neutral-300 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Customization Options */}
            <div className="pt-2 border-t border-[#E5E7EB] space-y-2">
              <span className="text-[11px] font-bold text-[#101828] uppercase tracking-wider block">
                Custom Branding Technique:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {product.brandingOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedCustomization(opt)}
                    className={`p-2.5 rounded-xl text-xs text-left transition-all border cursor-pointer ${
                      selectedCustomization === opt
                        ? 'bg-blue-50 border-[#0876B4] text-[#0876B4] font-bold shadow-2xs'
                        : 'bg-white border-[#E5E7EB] text-[#667085] hover:text-[#101828]'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#101828] block">Required Quantity</span>
                <span className="text-[10px] text-[#667085]">Min. Bulk Order: {product.moq}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {[50, 100, 250, 500, 1000].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setSelectedQuantity(qty)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedQuantity === qty
                        ? 'bg-[#101828] text-white font-bold shadow-2xs'
                        : 'bg-[#F5F7FA] text-[#667085] hover:bg-neutral-200'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  addToQuote(product, selectedQuantity, selectedCustomization);
                  onClose();
                }}
                className="py-3 px-4 rounded-full bg-[#0876B4] hover:bg-[#075f91] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#E8B43A]" />
                <span>ADD TO RFQ BASKET</span>
              </button>

              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Instant WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-[#667085] text-center">
              Our enterprise team responds within 2 hours with tiered pricing &amp; digital mockups.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
