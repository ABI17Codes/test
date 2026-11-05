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
      return 'bg-[#101828] text-white border-[#101828]';
    }
    if (product.brand === 'ADMA London') {
      return 'bg-[#0876B4] text-white border-[#0876B4]';
    }
    return 'bg-blue-50 text-[#0876B4] border-blue-200/80';
  };

  return (
    <div className="group relative rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_2px_8px_-2px_rgba(16,24,40,0.04)] hover:shadow-[0_16px_32px_-8px_rgba(16,24,40,0.12)] hover:-translate-y-1">
      
      {/* Top Media / Product Stage */}
      <Link 
        href={`/products/${product.id}`}
        className="relative aspect-[4/3] bg-gradient-to-b from-[#F5F7FA] via-[#F8FAFC] to-[#EEF2F6] p-5 flex items-center justify-center overflow-hidden border-b border-[#E5E7EB] block cursor-pointer"
      >
        {/* Floating Brand Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start pointer-events-none">
          <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs uppercase tracking-wider ${getBrandBadge()}`}>
            {product.brand}
          </span>
          {product.tags?.[0] && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-white/95 text-[#667085] backdrop-blur-md border border-[#E5E7EB] shadow-2xs">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Product Code SKU Chip */}
        <div className="absolute top-3 right-3 z-10 pointer-events-none">
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[#101828] border border-[#E5E7EB] shadow-2xs">
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
        <div className="absolute inset-0 bg-[#101828]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
          <span className="px-3.5 py-1.5 rounded-full bg-white text-[#101828] text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[#E5E7EB]">
            <Eye className="w-3.5 h-3.5 text-[#0876B4]" />
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
            className="text-sm sm:text-base font-bold text-[#101828] hover:text-[#0876B4] transition-colors block line-clamp-1 tracking-tight"
          >
            {product.name}
          </Link>

          {/* Description */}
          <p className="text-xs text-[#667085] line-clamp-2 mt-1 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Specs / Inclusions Chips */}
          {product.composition && product.composition.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {product.composition.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-[#F5F7FA] text-[#101828] border border-[#E5E7EB] truncate max-w-[200px]"
                >
                  {item}
                </span>
              ))}
              {product.composition.length > 2 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-blue-50 text-[#0876B4] font-semibold border border-blue-100">
                  +{product.composition.length - 2} items
                </span>
              )}
            </div>
          ) : product.specs && product.specs.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1 text-[10px] text-[#667085]">
              <span className="px-2 py-0.5 rounded-md bg-[#F5F7FA] border border-[#E5E7EB] truncate max-w-[150px]">
                {product.specs[0]?.label}: <b>{product.specs[0]?.value}</b>
              </span>
              {product.specs[1] && (
                <span className="px-2 py-0.5 rounded-md bg-[#F5F7FA] border border-[#E5E7EB] truncate max-w-[150px]">
                  {product.specs[1]?.label}: <b>{product.specs[1]?.value}</b>
                </span>
              )}
            </div>
          ) : null}

          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-2.5">
              <span className="text-[10px] text-[#667085] font-semibold uppercase">Colors:</span>
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
        <div className="pt-3 border-t border-[#E5E7EB] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[10px] text-[#667085] uppercase font-bold tracking-wider block">Pricing</span>
              <span className="font-bold text-[#0876B4] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E8B43A]" />
                Tiered Bulk Slabs
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-[10px] text-[#667085] uppercase font-bold tracking-wider block">Min. Order</span>
              <span className="font-bold text-[#101828]">{product.moq}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddQuote}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isAlreadyInQuote
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'bg-[#0876B4] hover:bg-[#075f91] text-white shadow-xs'
              }`}
            >
              {isAlreadyInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>In RFQ ✓</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#E8B43A]" />
                  <span>Add to RFQ</span>
                </>
              )}
            </button>

            <button
              onClick={getWhatsAppLink}
              className="py-2 px-2 rounded-xl bg-white hover:bg-[#F5F7FA] text-[#101828] border border-[#E5E7EB] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
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
