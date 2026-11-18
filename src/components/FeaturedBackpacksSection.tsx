'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShoppingBag, 
  MessageCircle, 
  Eye, 
  Check, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

const FEATURED_BAG_IDS = [
  'bg-boxer',
  'bg-volvo-2',
  'bg-inspire',
  'bg-volvo-1',
  'bg-aviator',
  'bg-ashwa',
  'bg-businessman-2',
  'bg-duffle-shine'
];

export const FeaturedBackpacksSection: React.FC = () => {
  const { addToQuote, items } = useQuote();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featuredBags = FEATURED_BAG_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  ).filter(Boolean) as Product[];

  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#ECEFF3] text-left">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECEFF3] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
              <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#172B4D]">
                FEATURED BACKPACK COLLECTIONS &bull; READY FOR ENTERPRISE CUSTOMIZATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#172B4D] tracking-tight leading-[1.12]">
              Flagship Carrywear Models, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#172B4D] via-[#0876B4] to-[#C5A46D]">
                Engineered for Peak Daily Performance
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
              Explore the top-selling backpack models manufactured in-house by <strong className="text-[#172B4D]">GLOBRANDS LIFESTYLE PVT. LTD.</strong> Backed by our authentic 1-Year Direct Factory Replacement Warranty.
            </p>
          </div>

          <Link
            href="/bags"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#172B4D] hover:bg-[#20242C] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>View All 32 Models</span>
            <ArrowRight className="w-4 h-4 text-[#C5A46D] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8-Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBags.map((product) => {
            const isAdded = mounted && items.some((i) => i.product.id === product.id);
            const isNinja = product.brand === 'Ninja Gear';
            const whatsappUrl = `https://wa.me/919900020456?text=${encodeURIComponent(
              `Hello GLOBRANDS LIFESTYLE PVT. LTD., I would like to request factory bulk pricing for ${product.name} (SKU: ${product.code}, MOQ: ${product.moq}).`
            )}`;

            return (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-[#ECEFF3] hover:border-[#C5A46D] overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Media Stage */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative aspect-[4/3] bg-gradient-to-b from-[#F7F8FA] to-[#ECEFF3]/60 p-6 flex items-center justify-center overflow-hidden border-b border-[#ECEFF3] block"
                  >
                    {/* Brand Pill */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs uppercase tracking-wider ${
                        isNinja
                          ? 'bg-[#20242C] text-white border-[#20242C]'
                          : 'bg-[#172B4D] text-white border-[#172B4D]'
                      }`}>
                        {product.brand}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-white text-[#172B4D] border border-[#ECEFF3] shadow-2xs">
                        {product.code}
                      </span>
                    </div>

                    {/* Image */}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Quick View Hover */}
                    <div className="absolute inset-0 bg-[#172B4D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center backdrop-blur-[1px]">
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-[#172B4D] text-xs font-bold flex items-center gap-1.5 shadow-xl border border-[#ECEFF3]">
                        <Eye className="w-3.5 h-3.5 text-[#0876B4]" />
                        <span>Inspect Specs</span>
                      </span>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-5 space-y-2.5 text-left">
                    <div className="flex items-center justify-between text-[10px] font-semibold text-[#667085]">
                      <span>MOQ: {product.moq}</span>
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" />
                        1-Yr Warranty
                      </span>
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="font-editorial text-base font-bold text-[#172B4D] hover:text-[#C5A46D] transition-colors block line-clamp-1 leading-snug"
                    >
                      {product.name}
                    </Link>

                    <p className="text-[11px] text-[#667085] leading-relaxed line-clamp-2 font-normal">
                      {product.description}
                    </p>

                    {/* Top 2 Specs */}
                    {product.specs && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {product.specs.slice(0, 2).map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] font-medium px-2 py-0.5 rounded bg-[#F7F8FA] border border-[#ECEFF3] text-[#20242C]"
                          >
                            {s.value}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#ECEFF3] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => addToQuote(product, 50)}
                      className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                          : 'bg-[#172B4D] hover:bg-[#20242C] text-white shadow-xs'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#C5A46D]" />
                      <span>{isAdded ? 'Added to RFQ' : 'Add to RFQ'}</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl border border-[#ECEFF3] hover:bg-emerald-50 hover:border-emerald-300 text-emerald-600 transition-colors shrink-0"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
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
