'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, MessageCircle, Sparkles } from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

const FEATURED_ITEMS = [
  {
    id: 'bg-boxer',
    darkImage: '/catalog/backpacks-dark/bg-boxer.jpg',
    badge: 'Ninja Gear Flagship',
    highlight: 'Concealed Antitheft & USB'
  },
  {
    id: 'bg-volvo-2',
    darkImage: '/catalog/backpacks-dark/bg-volvo-2.jpg',
    badge: 'ADMA London Weatherproof',
    highlight: 'Integrated Rain Cover 38L'
  },
  {
    id: 'bg-inspire',
    darkImage: '/catalog/backpacks-dark/bg-inspire.jpg',
    badge: 'Ninja Gear Professional',
    highlight: '17" Laptop & Organizer'
  },
  {
    id: 'hgs-h74',
    darkImage: '/images/home/dark-hero-hamper.jpg',
    badge: 'Secondary VIP Hamper',
    highlight: '5-in-1 Executive Kit'
  },
];

export const FeaturedProductsSection: React.FC = () => {
  const { addToQuote, items } = useQuote();
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.products) && data.products.length > 0) {
          setProducts(data.products);
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F7FA] via-slate-100/60 to-[#F5F7FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B27]" />
              <span>Flagship Hardware &amp; Gifting</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Corporate essentials, ready to customize
            </h2>
            <p className="text-xs sm:text-sm text-[#667085]">
              Featured products manufactured and assembled in-house by <strong className="text-[#101828]">Globrands Lifestyle Pvt. Ltd.</strong> for immediate enterprise branding.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4-Column Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
          {FEATURED_ITEMS.map((feat) => {
            const product = products.find((p) => p.id === feat.id) || PRODUCTS.find((p) => p.id === feat.id);
            if (!product) return null;
            const isAdded = mounted && items.some((i) => i.product.id === product.id);
            const whatsappUrl = `https://wa.me/919900020456?text=${encodeURIComponent(
              `Hello Globrands Lifestyle Pvt. Ltd., I would like bulk pricing for ${product.name} (SKU: ${product.code}, MOQ: ${product.moq}).`
            )}`;

            return (
              <div
                key={product.id}
                className="group rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D49B27]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Dark Studio Frame */}
                  <Link
                    href={`/products/${product.id}`}
                    className="relative aspect-[4/3] bg-[#0B132B] block overflow-hidden"
                  >
                    <img
                      src={feat.darkImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />

                    {/* Top-Left & Top-Right Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded bg-white/95 text-[#101828] text-[10px] font-bold shadow-xs">
                        {feat.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm text-white text-[9px] font-mono font-bold border border-white/10">
                        {product.code}
                      </span>
                    </div>

                    {/* Bottom Pill */}
                    <div className="absolute bottom-2.5 left-3">
                      <span className="px-2 py-0.5 rounded bg-[#E8B43A] text-slate-950 text-[9px] font-bold uppercase tracking-wider shadow-xs">
                        {feat.highlight}
                      </span>
                    </div>
                  </Link>

                  {/* Body */}
                  <div className="p-5 pb-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#C69214]">
                        {product.brand}
                      </span>
                      <span className="text-[10px] font-semibold text-[#667085]">
                        MOQ: {product.moq}
                      </span>
                    </div>

                    <Link
                      href={`/products/${product.id}`}
                      className="font-editorial text-base font-bold text-[#101828] hover:text-[#0876B4] transition-colors block line-clamp-1"
                    >
                      {product.name}
                    </Link>

                    <p className="text-[11px] text-[#667085] leading-relaxed line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0 space-y-2">
                  <div className="pt-3 border-t border-[#F2F4F7] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => addToQuote(product, 50)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-[#0B111E] hover:bg-[#101828] text-white shadow-xs'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E8B43A]" />
                      <span>{isAdded ? 'Added' : 'Add to RFQ'}</span>
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-[#E5E7EB] hover:bg-emerald-50 hover:border-emerald-300 text-emerald-600 transition-colors shrink-0"
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
