'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Truck, 
  ShoppingBag,
  Eye,
  Check
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

export const Hero: React.FC = () => {
  const { addToQuote, items } = useQuote();
  const flagshipProduct = PRODUCTS.find((p) => p.id === 'hgs-h74') || PRODUCTS[0];
  const isAlreadyInQuote = items.some((i) => i.product.id === flagshipProduct.id);

  const hamperComponents = [
    '500ml Smart LED Flask',
    'Wireless Optical Mouse',
    'A5 PU Leather Diary',
    'Metal Card Holder',
    'Executive Pen',
  ];

  return (
    <section className="relative py-12 lg:py-16 bg-white border-b border-[#E5E7EB] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Warm Gold Eyebrow Pill matching slice_1.jpg */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDF8EC] border border-[#F3E3B8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D49B27] shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.12em] font-bold text-[#B8860B]">
                Bespoke Corporate Gifting &amp; Executive Merchandise
              </span>
            </div>

            {/* Editorial Serif Headline with Gold Italic */}
            <div className="space-y-4">
              <h1 className="font-editorial text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#101828] leading-[1.08] tracking-[-0.02em]">
                Thoughtful corporate <br />
                gifting. <br />
                <span className="italic text-[#D49B27] font-semibold">
                  Engineered for enduring <br />
                  impressions.
                </span>
              </h1>

              <p className="text-xs sm:text-sm lg:text-[15px] text-[#475467] max-w-xl font-normal leading-relaxed">
                Partner with India&apos;s premier corporate gifting manufacturer. Explore 180+ curated executive hampers, Ninja Gear &amp; ADMA London carrywear, and custom-branded merchandise crafted in-house at our Bengaluru facility.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0B111E] hover:bg-[#101828] text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs group"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-[#F9FAFB] text-[#101828] border border-[#E5E7EB] text-xs sm:text-sm font-bold transition-all duration-200 shadow-2xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D49B27]" />
                <span>Request Bulk Quote</span>
              </Link>
            </div>

            {/* Bordered 4-Column Trust Bar matching slice_1.jpg */}
            <div className="pt-2">
              <div className="p-3.5 rounded-xl bg-[#FCFBFA] border border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-3 sm:divide-x divide-[#E5E7EB]">
                <div className="flex items-center gap-2.5 pr-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D49B27]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101828] leading-tight">5-Stage QC</div>
                    <div className="text-[10px] text-[#667085]">Zero-Defect Promise</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:pl-3 pr-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 text-[#D49B27]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101828] leading-tight">1-Year Warranty</div>
                    <div className="text-[10px] text-[#667085]">On Corporate Bags</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:pl-3 pr-2">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 text-[#D49B27]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101828] leading-tight">Custom Branding</div>
                    <div className="text-[10px] text-[#667085]">Laser &amp; UV Print</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 sm:pl-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center shrink-0">
                    <Truck className="w-3.5 h-3.5 text-[#D49B27]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#101828] leading-tight">Direct Dispatch</div>
                    <div className="text-[10px] text-[#667085]">Bengaluru Hub</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Dark Studio Showcase Card matching slice_1.jpg */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-[0_20px_50px_rgba(16,24,40,0.08)] overflow-hidden">
              
              {/* Top Dark Studio Frame */}
              <div className="bg-[#0B111E] relative">
                {/* Top Header Strip inside Dark Frame */}
                <div className="flex items-center justify-between px-4 pt-3.5 pb-2 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8B43A]" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                      Executive Gift Hamper
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-[#E8B43A]/20 text-[#E8B43A] border border-[#E8B43A]/40 text-[9px] font-bold uppercase tracking-wider">
                    Flagship Hamper 2026
                  </span>
                </div>

                {/* Dark Studio Hamper Photography */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/images/home/dark-hero-hamper.jpg"
                    alt={flagshipProduct.name}
                    className="w-full h-full object-cover object-center"
                  />

                  {/* Bottom Floating Pills inside Dark Image Frame */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-white text-[#101828] text-[10px] font-bold shadow-xs">
                      SKU: {flagshipProduct.code}
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white text-[#101828] text-[10px] font-bold shadow-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>In-Stock / Ready</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom White Card Body */}
              <div className="p-5 space-y-3.5 text-left">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C69214]">
                    {flagshipProduct.brand}
                  </span>
                  <span className="text-[10px] font-semibold text-[#667085]">
                    MOQ: {flagshipProduct.moq}
                  </span>
                </div>

                <div>
                  <h3 className="font-editorial text-lg font-bold text-[#101828] leading-snug">
                    {flagshipProduct.name}
                  </h3>
                  <p className="text-[11px] text-[#667085] leading-relaxed mt-1 line-clamp-2">
                    {flagshipProduct.description}
                  </p>
                </div>

                {/* 5 Component Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {hamperComponents.map((comp, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E5E7EB] text-[10px] text-[#475467] font-medium"
                    >
                      <Check className="w-2.5 h-2.5 text-[#D49B27]" />
                      <span>{comp}</span>
                    </span>
                  ))}
                </div>

                {/* 2 Gray Spec Boxes */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB]">
                    <span className="text-[9px] uppercase tracking-wider text-[#667085] font-semibold block">
                      Minimum Order
                    </span>
                    <span className="text-xs font-bold text-[#101828]">
                      {flagshipProduct.moq}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#F8FAFC] border border-[#E5E7EB]">
                    <span className="text-[9px] uppercase tracking-wider text-[#667085] font-semibold block">
                      Custom Branding
                    </span>
                    <span className="text-xs font-bold text-[#C69214]">
                      Laser / Screen Print
                    </span>
                  </div>
                </div>

                {/* 2 Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    onClick={() => addToQuote(flagshipProduct, 50)}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      isAlreadyInQuote
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-[#0B111E] hover:bg-[#101828] text-white'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E8B43A]" />
                    <span>{isAlreadyInQuote ? 'Added to RFQ' : 'Add to Bulk Quote'}</span>
                  </button>

                  <Link
                    href={`/products/${flagshipProduct.id}`}
                    className="py-2.5 px-3 rounded-lg bg-white hover:bg-[#F8FAFC] text-[#101828] border border-[#E5E7EB] text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#667085]" />
                    <span>View Full Details</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
