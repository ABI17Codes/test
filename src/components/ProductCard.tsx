'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Eye,
  ShoppingBag,
  Check,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { COMPANY_INFO } from '../data/siteContent';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onOpenCatalogPage?: (type: 'bags' | 'gifts', page: number) => void;
}

export function getProductAngles(product: Product): { label: string; src: string }[] {
  if (product.images && product.images.length > 0) {
    const labels = ['Front', 'Back', 'Side', 'Inside'];
    return product.images.map((src, i) => ({
      label: labels[i] || `View ${i + 1}`,
      src
    }));
  }
  if (product.category === 'bags' && product.id.startsWith('bg-')) {
    return [
      { label: 'Front', src: product.image },
      { label: 'Back', src: `/catalog/backpacks-angles/${product.id}-angle-1.png` },
      { label: 'Side', src: `/catalog/backpacks-angles/${product.id}-angle-2.png` },
      { label: 'Inside', src: `/catalog/backpacks-angles/${product.id}-angle-3.png` }
    ];
  }
  return [{ label: 'Front', src: product.image }];
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
}) => {
  const { addToQuote, items } = useQuote();
  const [mounted, setMounted] = useState(false);
  const angles = getProductAngles(product);
  const [activeAngleIdx, setActiveAngleIdx] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAlreadyInQuote = mounted && items.some((i) => i.product.id === product.id);

  const getWhatsAppLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello ${COMPANY_INFO.legalName}! I would like to request bulk pricing and logo branding (DTF / Embroidery / Screen Print) details for:\nProduct: ${product.name}\nCode: ${product.code}\nBrand: ${product.brand}\nMinimum Order: ${product.moq}\nPlease share the quotation.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`, '_blank');
  };

  const handleAddQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToQuote(product);
  };

  const getBrandBadge = () => {
    if (product.brand === 'Ninja Gear') {
      return 'bg-[#FEF3C7] text-[#92400E] border-[#FCD34D]';
    }
    if (product.brand === 'ADMA London') {
      return 'bg-[#0B4F82] text-white border-[#0B4F82]';
    }
    if (['Skybags', 'Arctic Hunter', 'Swiss Military'].includes(product.brand)) {
      return 'bg-[#E0F2FE] text-[#0369A1] border-[#7DD3FC]';
    }
    return 'bg-[#EFF6FF] text-[#0B4F82] border-[#BFDBFE]';
  };

  const activeImageSrc = angles[activeAngleIdx]?.src || product.image;

  return (
    <div className="group relative rounded-2xl bg-white border-2 border-[#DBEAFE] hover:border-[#0B4F82] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-xl">

      {/* Top Media / Product Stage (Bright High-Contrast White & Light Pastel Blue Stage — Black Backpacks Pop 100%!) */}
      <div className="relative bg-gradient-to-b from-[#FFFFFF] via-[#F8FBFF] to-[#EEF6FF] border-b border-[#DBEAFE]">
        <Link
          href={`/products/${product.id}`}
          className="relative aspect-[4/3] p-4 flex items-center justify-center overflow-hidden block cursor-pointer"
        >
          {/* Floating Brand Badge */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start pointer-events-none">
            <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border shadow-2xs uppercase tracking-wider ${getBrandBadge()}`}>
              {product.brand}
            </span>
            {product.tags?.[0] && (
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-white text-[#475569] border border-[#CBD5E1] shadow-2xs">
                {product.tags[0]}
              </span>
            )}
          </div>

          {/* Product Code SKU Chip */}
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white text-[#0B4F82] border border-[#BFDBFE] shadow-2xs">
              {product.code}
            </span>
          </div>

          {/* Main Product Image (Razor-sharp contrast on bright stage, zero white cutout border) */}
          <img
            src={activeImageSrc}
            alt={`${product.name} - ${angles[activeAngleIdx]?.label || 'Front'} View`}
            className="max-h-[92%] max-w-[92%] object-contain drop-shadow-[0_8px_16px_rgba(11,79,130,0.12)] transform group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Quick View Overlay on Hover */}
          <div className="absolute inset-0 bg-[#0B4F82]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
            <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0B4F82] text-xs font-extrabold flex items-center gap-1.5 shadow-lg border border-[#BFDBFE]">
              <Eye className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>View Full Specs &amp; Angles</span>
            </span>
          </div>
        </Link>

        {/* Multi-Angle Thumbnail Strip (Front • Back • Side • Inside — Amazon Brand Store Experience!) */}
        {angles.length > 1 && (
          <div className="px-3 pb-2.5 pt-1 flex items-center justify-between gap-1.5 bg-white/90 border-t border-[#E2E8F0]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#64748B] shrink-0">
              Angles:
            </span>
            <div className="flex items-center gap-1.5 flex-1 justify-end">
              {angles.map((ang, idx) => (
                <button
                  key={idx}
                  type="button"
                  onMouseEnter={() => setActiveAngleIdx(idx)}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setActiveAngleIdx(idx);
                  }}
                  className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9px] font-bold transition-all cursor-pointer border ${
                    activeAngleIdx === idx
                      ? 'bg-[#0B4F82] text-white border-[#0B4F82] shadow-2xs'
                      : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0] hover:border-[#93C5FD]'
                  }`}
                  title={`Switch to ${ang.label} View`}
                >
                  <span>{ang.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 text-left bg-white">
        <div>
          {/* Product Name */}
          <Link
            href={`/products/${product.id}`}
            className="text-sm sm:text-base font-extrabold text-[#0F172A] hover:text-[#0B4F82] transition-colors block line-clamp-1 tracking-tight"
          >
            {product.name}
          </Link>

          {/* Description */}
          <p className="text-xs text-[#475569] line-clamp-2 mt-1 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Key Specs / Inclusions Chips */}
          {product.composition && product.composition.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {product.composition.slice(0, 2).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-[#F0F7FF] text-[#0B4F82] border border-[#DBEAFE] truncate max-w-[200px] font-medium"
                >
                  {item}
                </span>
              ))}
              {product.composition.length > 2 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#FEF3C7] text-[#92400E] font-bold border border-[#FDE68A]">
                  +{product.composition.length - 2} items
                </span>
              )}
            </div>
          ) : product.specs && product.specs.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1 text-[10px] text-[#334155]">
              <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] truncate max-w-[155px]">
                {product.specs[0]?.label}: <b>{product.specs[0]?.value}</b>
              </span>
              {product.specs[1] && (
                <span className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] truncate max-w-[155px]">
                  {product.specs[1]?.label}: <b>{product.specs[1]?.value}</b>
                </span>
              )}
            </div>
          ) : null}
        </div>

        {/* Pricing & MOQ Footer */}
        <div className="pt-3 border-t border-[#E2E8F0] space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="text-[9px] text-[#64748B] uppercase font-bold tracking-wider block">Branding</span>
              <span className="font-bold text-[#0B4F82] flex items-center gap-1 text-[11px]">
                <Sparkles className="w-3 h-3 text-[#E5A93C]" />
                DTF • Embroidery • Screen
              </span>
            </div>

            <div className="text-right">
              <span className="text-[9px] text-[#64748B] uppercase font-bold tracking-wider block">Min. Order</span>
              <span className="font-extrabold text-[#0F172A]">{product.moq}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddQuote}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                isAlreadyInQuote
                  ? 'bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D]'
                  : 'bg-[#0B4F82] hover:bg-[#083B63] text-white shadow-2xs'
              }`}
            >
              {isAlreadyInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Added ✓</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#FDE047]" />
                  <span>Add to Quote</span>
                </>
              )}
            </button>

            <button
              onClick={getWhatsAppLink}
              className="py-2 px-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#0B4F82] border border-[#BFDBFE] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              title="Enquire on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#D97706]" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
