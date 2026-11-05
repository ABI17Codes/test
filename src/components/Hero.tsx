'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Truck, 
  CheckCircle2, 
  ShoppingBag,
  Eye
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

export const Hero: React.FC = () => {
  const { addToQuote, items } = useQuote();

  const heroShowcaseItems = [
    {
      tabLabel: 'Executive Hampers',
      product: PRODUCTS.find((p) => p.id === 'hgs-h74') || PRODUCTS[0],
      tagline: 'VIP 5-in-1 Executive Hamper with Wireless Mouse, Vacuum Flask & PU Diary',
      badge: 'FLAGSHIP HAMPER 2025'
    },
    {
      tabLabel: 'Ninja Gear Bags',
      product: PRODUCTS.find((p) => p.id === 'bg-boxer') || PRODUCTS[1],
      tagline: 'Ninja Gear BOXER 28L Antitheft Backpack with USB Charging & Padded Laptop Sleeve',
      badge: 'FLAGSHIP BACKPACK'
    },
    {
      tabLabel: 'ADMA London Bags',
      product: PRODUCTS.find((p) => p.id === 'bg-volvo-2') || PRODUCTS[2],
      tagline: 'ADMA London VOLVO 2.0 38L Executive Travel Backpack with Rain Cover',
      badge: 'EXECUTIVE CARRYWEAR'
    },
    {
      tabLabel: 'Sustainable',
      product: PRODUCTS.find((p) => p.id === 'hgs-h66') || PRODUCTS[3],
      tagline: 'Eco-Friendly Bamboo 4-in-1 Sustainable Corporate Gift Set',
      badge: 'SUSTAINABLE SERIES'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = heroShowcaseItems[activeIndex];
  const isAlreadyInQuote = items.some((i) => i.product.id === activeItem.product.id);

  return (
    <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-white border-b border-[#E5E7EB]">
      {/* Subtle warm radial glow matching reference */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[960px] h-[480px] bg-gradient-to-b from-[#FAF8F4]/80 via-[#F5F7FA]/40 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E8B43A] shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.08em] font-bold text-[#0876B4]">
                Bespoke Corporate Gifting &amp; Executive Merchandise
              </span>
            </div>

            {/* Headline matching media_1793789823979_412238f2.jpg */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#101828] tracking-[-0.03em] leading-[1.08]">
                Thoughtful corporate <br />
                gifting. <br />
                Engineered for{' '}
                <span className="italic text-[#0876B4] font-semibold">
                  enduring impressions.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-[#667085] max-w-xl font-normal leading-relaxed">
                Partner with India&apos;s premier corporate gifting manufacturer. Explore 180+ curated executive hampers, Ninja Gear &amp; ADMA London carrywear, and custom-branded merchandise crafted in-house.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-xs group"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-[#F5F7FA] text-[#101828] border border-[#E5E7EB] text-xs sm:text-sm font-semibold tracking-tight transition-all duration-200 shadow-2xs"
              >
                <span>Request Bulk Quote</span>
              </Link>
            </div>

            {/* 4 Minimal Trust Highlights */}
            <div className="pt-7 border-t border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-5">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#101828]">5-Stage QC</div>
                  <div className="text-[11px] text-[#667085]">Zero-Defect Promise</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Award className="w-4 h-4 text-[#E8B43A] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#101828]">1-Year Warranty</div>
                  <div className="text-[11px] text-[#667085]">On Corporate Bags</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#101828]">Custom Branding</div>
                  <div className="text-[11px] text-[#667085]">Laser &amp; UV Print</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#168FC9] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#101828]">Direct Dispatch</div>
                  <div className="text-[11px] text-[#667085]">Bengaluru Hub</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Top Pill Switcher + Showcase Card matching media_1793789823979_412238f2.jpg */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Category Switcher Bar */}
            <div className="flex items-center justify-start sm:justify-end">
              <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs overflow-x-auto max-w-full gap-1">
                {heroShowcaseItems.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      idx === activeIndex
                        ? 'bg-[#101828] text-white shadow-xs'
                        : 'text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Showcase Card */}
            <div className="bg-white rounded-[28px] border border-[#E5E7EB] shadow-[0_20px_50px_rgba(16,24,40,0.06)] p-3.5 sm:p-4 transition-all duration-300">
              
              {/* Product Photography Frame */}
              <div className="relative aspect-[16/10] rounded-2xl bg-[#F5F7FA] overflow-hidden border border-[#E5E7EB]/60 group">
                <img
                  src={activeItem.product.image}
                  alt={activeItem.product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                />

                {/* Top Floating Badges inside image matching reference */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="text-[10px] font-bold px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#101828] shadow-xs uppercase tracking-wider">
                    {activeItem.badge}
                  </span>

                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 py-1.5 rounded-full bg-[#10B981] text-white shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>In-Stock / Ready</span>
                  </span>
                </div>
              </div>

              {/* Product Details & Conversion Bar */}
              <div className="pt-4 px-1.5 pb-1 text-left space-y-3.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#101828] tracking-tight">
                    {activeItem.product.name}
                  </h3>
                  <p className="text-xs text-[#667085] mt-0.5 line-clamp-1">
                    {activeItem.tagline}
                  </p>
                </div>

                {/* Specs & Actions Row */}
                <div className="pt-3 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-5">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#667085] font-semibold block">
                        Minimum Order
                      </span>
                      <span className="text-xs font-bold text-[#101828]">
                        {activeItem.product.moq}
                      </span>
                    </div>
                    <div className="h-5 w-[1px] bg-[#E5E7EB]" />
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#667085] font-semibold block">
                        Branding
                      </span>
                      <span className="text-xs font-bold text-[#0876B4]">
                        Laser / Screen Print
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => addToQuote(activeItem.product, 50)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        isAlreadyInQuote
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-[#101828] hover:bg-[#0876B4] text-white shadow-2xs'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#E8B43A]" />
                      <span>{isAlreadyInQuote ? 'Added to RFQ' : 'Add to Bulk Quote'}</span>
                    </button>

                    <Link
                      href={`/products/${activeItem.product.id}`}
                      className="px-4 py-2 rounded-full bg-[#F5F7FA] hover:bg-[#E5E7EB]/60 text-[#101828] border border-[#E5E7EB] text-xs font-semibold transition-colors flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#667085]" />
                      <span>View Details</span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
