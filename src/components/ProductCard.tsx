'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Eye, 
  MessageCircle, 
  ShoppingBag, 
  Check, 
  FileText,
  Sparkles,
  ArrowRight
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

  return (
    <div className="group relative rounded-2xl bg-white border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[#b88e3e]/10 hover:-translate-y-1">
      
      {/* Top Media Container */}
      <Link 
        href={`/products/${product.id}`}
        className="relative aspect-[4/3] bg-gradient-to-b from-[#faf9f5] to-[#f4efe6] p-4 flex items-center justify-center overflow-hidden border-b border-neutral-100 block cursor-pointer"
      >
        {/* Brand Badge */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#916c27] border border-[#b88e3e]/30 shadow-xs uppercase tracking-wider">
            {product.brand}
          </span>
          {product.tags?.[0] && (
            <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-neutral-900/5 text-neutral-600 backdrop-blur-md border border-neutral-200/50">
              {product.tags[0]}
            </span>
          )}
        </div>

        {/* Product Code Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-neutral-800 border border-neutral-200/80 shadow-xs">
            {product.code}
          </span>
        </div>

        {/* Main Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain transform group-hover:scale-106 transition-transform duration-500 drop-shadow-sm"
          loading="lazy"
        />

        {/* Quick View Overlay Hover */}
        <div className="absolute inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px]">
          <span className="px-3.5 py-2 rounded-xl bg-white text-neutral-900 text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-neutral-50 transition-colors">
            <Eye className="w-3.5 h-3.5 text-[#b88e3e]" />
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
            className="text-sm sm:text-base font-bold text-neutral-900 hover:text-[#b88e3e] transition-colors block line-clamp-1 font-serif-luxury"
          >
            {product.name}
          </Link>

          {/* Description */}
          <p className="text-xs text-neutral-500 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>

          {/* Composition or Specs Highlights */}
          {product.composition && product.composition.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1">
              {product.composition.slice(0, 3).map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-700 border border-neutral-200/60 truncate max-w-[200px]"
                >
                  {item}
                </span>
              ))}
              {product.composition.length > 3 && (
                <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-[#fbf5e8] text-[#916c27] font-semibold">
                  +{product.composition.length - 3} more
                </span>
              )}
            </div>
          ) : product.specs && product.specs.length > 0 ? (
            <div className="mt-2.5 grid grid-cols-2 gap-1 text-[11px] text-neutral-700">
              <span className="truncate text-neutral-500">
                {product.specs[0]?.label}: <b className="text-neutral-900 font-semibold">{product.specs[0]?.value}</b>
              </span>
              <span className="truncate text-neutral-500">
                {product.specs[1]?.label}: <b className="text-neutral-900 font-semibold">{product.specs[1]?.value}</b>
              </span>
            </div>
          ) : null}

          {/* Color swatches if available */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-1.5 mt-3">
              <span className="text-[10px] text-neutral-400 font-semibold uppercase">Colors:</span>
              <div className="flex items-center gap-1">
                {product.colors.map((c, idx) => (
                  <span
                    key={idx}
                    className="w-3.5 h-3.5 rounded-full border border-neutral-300 shadow-2xs"
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
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Pricing</span>
              <span className="text-xs font-bold text-[#916c27] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Tiered Bulk Rates
              </span>
            </div>
            
            <div className="text-right">
              <span className="text-[10px] text-neutral-400 uppercase font-semibold block">Min. Order</span>
              <span className="text-xs font-bold text-neutral-800">{product.moq}</span>
            </div>
          </div>

          {/* Action Button Grid */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAddQuote}
              className={`py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                isAlreadyInQuote
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                  : 'primary-luxury-button shadow-xs'
              }`}
            >
              {isAlreadyInQuote ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>In RFQ</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#eddab4]" />
                  <span>Bulk Quote</span>
                </>
              )}
            </button>

            <button
              onClick={getWhatsAppLink}
              className="py-2 px-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
