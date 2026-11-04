'use client';

import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  FileText, 
  Check, 
  Sparkles, 
  ChevronRight,
  PackageCheck,
  CheckCircle2,
  Share2
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
  const { addToQuote, items } = useQuote();
  const [selectedQuantity, setSelectedQuantity] = useState(50);
  const [selectedCustomization, setSelectedCustomization] = useState('Laser Engraving');
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.colors?.[0]?.name || 'Standard'
  );

  if (!product) return null;

  const isAlreadyInQuote = items.some((i) => i.product.id === product.id);

  const getWhatsAppEnquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle,\n\nI am requesting a corporate quotation for:\n• Product: ${product.name}\n• Product Code: ${product.code}\n• Brand: ${product.brand}\n• Quantity Required: ${selectedQuantity} units\n• Color Preference: ${selectedColor}\n• Branding Method: ${selectedCustomization}\n\nPlease share availability, tiered B2B pricing, and mockups.`
    );
    return `https://wa.me/919900020456?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-white border border-[#b88e3e]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all border border-neutral-200 shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Media & Catalog Page Jump */}
        <div className="md:w-1/2 bg-[#F8F6F1] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200">
          
          {/* Top Badges */}
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full badge-gold text-[#916c27] text-xs font-bold uppercase tracking-wider">
              {product.brand}
            </span>
            <span className="font-mono text-xs font-bold text-neutral-700 bg-white px-2.5 py-1 rounded border border-neutral-200 shadow-2xs">
              {product.code}
            </span>
          </div>

          {/* Main Large Product Photo */}
          <div className="relative my-6 aspect-square rounded-2xl bg-white border border-neutral-200/80 p-6 flex items-center justify-center overflow-hidden group shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_20px_rgba(0,0,0,0.1)] transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Original Catalog Page Shortcut Button */}
          <div className="p-3 rounded-xl bg-white border border-neutral-200 flex items-center justify-between shadow-2xs">
            <div className="text-left text-xs">
              <span className="text-neutral-500 block text-[10px] uppercase font-semibold">Official Catalogue Source</span>
              <span className="text-[#111317] font-semibold">Page {product.pageNumber} ({product.catalogType === 'bags' ? 'Globrands Bags' : 'All-In-One Gifts'})</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenCatalogPage(product.catalogType, product.pageNumber);
              }}
              className="px-3 py-1.5 rounded-lg gold-luxury-button text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Page</span>
            </button>
          </div>

        </div>

        {/* Right Column: Complete Specifications & B2B RFQ Form */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto max-h-[85vh] text-left bg-white">
          
          <div className="space-y-4">
            
            {/* Title & Tagline */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#111317] font-serif-luxury">
                {product.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-neutral-500">Category: <b className="text-neutral-800 capitalize">{product.category.replace('-', ' ')}</b></span>
                <span className="text-neutral-300">•</span>
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Factory Supply
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Gift Set Components (if applicable) */}
            {product.composition && (
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 space-y-2">
                <span className="text-[10px] font-bold text-[#916c27] uppercase tracking-wider block">
                  Gift Box Contents:
                </span>
                <div className="grid grid-cols-1 gap-1 text-xs text-neutral-700 font-medium">
                  {product.composition.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#b88e3e] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Specifications Table */}
            {product.specs && (
              <div className="space-y-2 pt-2 border-t border-neutral-100">
                <span className="text-[11px] font-bold text-[#111317] uppercase tracking-wider block">
                  Verified Technical Specifications:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.specs.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#FAF8F5] border border-neutral-200">
                      <span className="text-neutral-500 text-[10px] block uppercase font-medium">{s.label}</span>
                      <span className="text-[#111317] font-semibold truncate block">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Swatches */}
            {product.colors && product.colors.length > 0 && (
              <div className="pt-2 border-t border-neutral-100 space-y-2">
                <span className="text-[11px] font-bold text-[#111317] uppercase tracking-wider block">
                  Available Shades:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all border ${
                        selectedColor === c.name
                          ? 'bg-[#FAF6EE] border-[#b88e3e] text-[#916c27] font-bold shadow-2xs'
                          : 'bg-white border-neutral-200 text-neutral-700 hover:text-black'
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
            <div className="pt-2 border-t border-neutral-100 space-y-2">
              <span className="text-[11px] font-bold text-[#111317] uppercase tracking-wider block">
                Custom Branding Technique:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {product.brandingOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedCustomization(opt)}
                    className={`p-2.5 rounded-lg text-xs text-left transition-all border ${
                      selectedCustomization === opt
                        ? 'bg-[#FAF6EE] border-[#b88e3e] text-[#916c27] font-bold shadow-2xs'
                        : 'bg-white border-neutral-200 text-neutral-700 hover:text-black'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#111317] block">Required Quantity</span>
                <span className="text-[10px] text-neutral-500">Min. Bulk Order: {product.moq}</span>
              </div>

              <div className="flex items-center gap-1.5">
                {[50, 100, 250, 500, 1000].map((qty) => (
                  <button
                    key={qty}
                    onClick={() => setSelectedQuantity(qty)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
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

          {/* Action Footer */}
          <div className="pt-4 border-t border-neutral-100 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => {
                  addToQuote(product, selectedQuantity, selectedCustomization);
                  onClose();
                }}
                className="py-3 px-4 rounded-xl gold-luxury-button text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>ENQUIRE FOR BULK PRICING</span>
              </button>

              <a
                href={getWhatsAppEnquiryUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-2xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp RFQ</span>
              </a>
            </div>

            <p className="text-[10px] text-neutral-500 text-center">
              Our enterprise team responds within 2 hours with tiered pricing & digital mockups.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

