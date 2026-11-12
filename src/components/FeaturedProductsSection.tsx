'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, MessageCircle } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useQuote } from '../context/QuoteContext';

const FEATURED_ITEMS = [
  {
    id: 'hgs-h74',
    darkImage: '/images/home/dark-hero-hamper.jpg',
    badge: 'VIP Luxury',
  },
  {
    id: 'bg-boxer',
    darkImage: '/images/home/dark-backpack.jpg',
    badge: 'Flagship',
  },
  {
    id: 'hgs-h71',
    darkImage: '/images/home/dark-hamper.jpg',
    badge: 'Executive',
  },
  {
    id: 'bg-volvo-2',
    darkImage: '/images/home/dark-travel.jpg',
    badge: 'Travel Series',
  },
];

export const FeaturedProductsSection: React.FC = () => {
  const { addToQuote, items } = useQuote();

  return (
    <section className="py-20 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching slice_5.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              Featured Products
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Corporate essentials, ready to brand
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (180+) products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Column Dark-Image + White-Body Product Cards matching slice_5.jpg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {FEATURED_ITEMS.map((feat) => {
            const product = PRODUCTS.find((p) => p.id === feat.id);
            if (!product) return null;
            const isAdded = items.some((i) => i.product.id === product.id);
            const whatsappUrl = `https://wa.me/919900020456?text=${encodeURIComponent(
              `Hello Globrands Lifestyle, I would like bulk pricing for ${product.name} (SKU: ${product.code}, MOQ: ${product.moq}).`
            )}`;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D49B27]/50 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Dark Studio Image Frame */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative aspect-[4/3] bg-[#0B111E] block overflow-hidden"
                  >
                    <img
                      src={feat.darkImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top-Left White Badge & Top-Right SKU Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-white text-[#101828] text-[10px] font-bold shadow-xs">
                        {feat.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white/90 border border-white/15 text-[10px] font-mono font-semibold">
                        {product.code}
                      </span>
                    </div>
                  </Link>

                  {/* Card Body */}
                  <div className="p-4 pb-3 space-y-2.5">
                    <Link href={`/products/${product.id}`}>
                      <h3 className="text-xs sm:text-sm font-bold text-[#101828] group-hover:text-[#C69214] transition-colors line-clamp-2 leading-snug">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-[11px] text-[#667085] line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Branding Tags */}
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {product.brandingOptions.slice(0, 2).map((opt, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E5E7EB] text-[9px] font-medium text-[#475467]"
                        >
                          {opt}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom MOQ & Action Buttons */}
                <div className="px-4 pb-4 pt-2 space-y-3">
                  <div className="pt-2.5 border-t border-[#F2F4F7] flex items-center justify-between text-[11px]">
                    <span className="text-[#667085]">Minimum Order</span>
                    <span className="font-bold text-[#101828]">{product.moq}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToQuote(product, 50)}
                      className={`py-2 px-2.5 rounded-lg text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-[#0B111E] hover:bg-[#101828] text-white'
                      }`}
                    >
                      <ShoppingBag className="w-3 h-3 text-[#E8B43A]" />
                      <span>{isAdded ? 'Added' : 'Add to RFQ'}</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-2.5 rounded-lg bg-[#EBF7F1] hover:bg-[#DDF2E7] text-[#0E7A46] border border-[#C6E9D6] text-[11px] font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      <MessageCircle className="w-3 h-3 fill-[#0E7A46]" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
