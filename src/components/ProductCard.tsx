'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Eye, 
  ShoppingBag, 
  Check, 
  Sparkles,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onOpenCatalogPage?: (type: 'bags' | 'gifts', page: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onOpenCatalogPage
}) => {
  const { addToQuote, items } = useQuote();
  const isAlreadyInQuote = items.some((i) => i.product.id === product.id);

  const getWhatsAppLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle! I would like to request bulk pricing and customization details for:\nProduct: ${product.name}\nCode: ${product.code}\nMinimum Order: ${product.moq}\nPlease share the corporate quotation.`
    );
    window.open(`https://wa.me/919900020456?text=${text}`, '_blank');
  };

  const handleAddQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToQuote(product);
  };

  // Determine brand tag color styling
  const getBrandBadge = () => {
    if (product.brand === 'Ninja Gear') {
      return 'bg-neutral-900 text-white border-neutral-800';
    }
    if (product.brand === 'ADMA London') {
      return 'bg-sky-900 text-white border-sky-800';
    }
    return 'bg-blue-50 text-[#0E679C] border-blue-200';
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-neutral-200/90 hover:border-[#0E679C]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xl hover:shadow-[#0E679C]/8 hover:-translate-y-1">
      
      {/* Top Media / Product Stage */}
      <Link 
        href={`/products/${product.id}`}
        className="relative aspect-[4/3] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] p-5 flex items-center justify-center overflow-hidden border-b border-neutral-100 block cursor-pointer"
      >
        {/* Floating Brand Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start pointer-events-none">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs uppercase tracking-wider ${getBrandBadge()}`}>
            {product.brand}
          </span>
          {product.tags?.[0] && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/90 text-neutral-700 backdrop-blur-md border border-neutral-200 shadow-2xs">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Product Code SKU Chip */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-neutral-800 border border-neutral-200 shadow-2xs">
            {product.code}
          </span>
        </div>

        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain rounded-lg drop-shadow-md transform group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
          <span className="px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-bold flex items-center gap-1.5 shadow-xl border border-neutral-200">
            <Eye className="w-3.5 h-3.5 text-[#0E679C]" />
            <span>View Details</span>
          </span>
        </div>
      </Link>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5 text-left bg-white">
        <div>
          {/* Product Name */}
          <Link 
            href={`/products/${product.id}`}
            className="text-sm sm:text-base font-bold text-[#0F172A] hover:text-[#0E679C] transition-colors block line-clamp-1 tracking-tight"
          >
            {product.name}
          </Link>

          {/* Description */}
          <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Specs / Inclusions Chips */}
          {product.composition && product.composition.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {product.composition.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-700 border border-neutral-200/70 truncate max-w-[200px]"
                >
                  {item}
                </span>
              ))}
              {product.composition.length > 2 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-50 text-[#0E679C] font-semibold border border-blue-100">
                  +{product.composition.length - 2} items
                </span>
              )}
            </div>
          ) : product.specs && product.specs.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1 text-[10px] text-neutral-600">
              <span className="px-2 py-0.5 rounded-md bg-neutral-50 border border-neutral-200/70 truncate max-w-[150px]">
                {product.specs[0]?.label}: <b>{product.specs[0]?.value}</b>
              </span>
              {product.specs[1] && (
                <span className="px-2 py-0.5 rounded-md bg-neutral-50 border border-neutral-200/70 truncate max-w-[150px]">
                  {product.specs[1]?.label}: <b>{product.specs[1]?.value}</b>
                </span>
              )}
            </div>
          ) : null}

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="text-[10px] text-neutral-400 font-semibold uppercase">Colors:</span>
              <div className="flex items-center gap-1">
                {product.colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="w-3 h-3 rounded-full border border-neutral-300 shadow-2xs"
                    style={{ backgroundColor: c.hex }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Pricing & MOQ Footer */}
        <div className="pt-3 border-t border-neutral-100 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block">Pricing</span>
              <span className="font-bold text-[#0E679C] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#F5B800]" />
                Tiered Bulk Slabs
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider block">Min. Order</span>
              <span className="font-bold text-neutral-800">{product.moq}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddQuote}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isAlreadyInQuote
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-[#0E679C] hover:bg-[#0A4E78] text-white shadow-xs'
              }`}
            >
              {isAlreadyInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>In RFQ ✓</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#F5B800]" />
                  <span>Add to RFQ</span>
                </>
              )}
            </button>

            <button
              onClick={getWhatsAppLink}
              className="py-2 px-2 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title="Enquire on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
