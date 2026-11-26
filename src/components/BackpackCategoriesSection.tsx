'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Briefcase, CheckCircle2 } from 'lucide-react';
import { BACKPACK_CATEGORIES_DATA } from '../data/siteContent';

export const BackpackCategoriesSection: React.FC = () => {
  const { header, featuredCategory, stackedCategories, standardCategories, partnerBrands } = BACKPACK_CATEGORIES_DATA;

  return (
    <section className="py-16 sm:py-20 bg-[#F4F8FB] text-[#1E293B] text-left border-b border-[#DBEAFE]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFDBFE] text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>

          <Link
            href={header.cta.href}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-end group shadow-xs"
          >
            <span>{header.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* High-Contrast Light Pastel Editorial Grid (Zero Dark Overlays — Black Backpacks Stand Out Clearly!) */}
        <div className="space-y-6">

          {/* Row 1: Featured 7-col Card + Stacked 5-col Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

            {/* Featured Large Card (7 cols) */}
            <Link
              href={featuredCategory.href}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden bg-white border-2 border-[#DBEAFE] hover:border-[#0B4F82] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-[320px] sm:h-[350px] w-full overflow-hidden bg-[#F0F7FF] flex items-center justify-center">
                <img
                  src={featuredCategory.image}
                  alt={featuredCategory.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#0B4F82] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-xs">
                    {featuredCategory.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white border border-[#DBEAFE] flex items-center justify-center text-[#0B4F82] group-hover:bg-[#E5A93C] group-hover:text-[#0F172A] transition-colors shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6 bg-white border-t border-[#DBEAFE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] uppercase tracking-tight group-hover:text-[#0B4F82] transition-colors">
                    {featuredCategory.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-xl leading-relaxed">
                    {featuredCategory.description}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#EFF6FF] group-hover:bg-[#0B4F82] text-[#0B4F82] group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0">
                  <span>{featuredCategory.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>

            {/* Right Stack: 2 Balanced Landscape Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {stackedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group relative rounded-2xl overflow-hidden bg-white border-2 border-[#DBEAFE] hover:border-[#0B4F82] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between flex-1"
                >
                  <div className="relative h-[165px] w-full overflow-hidden bg-[#DCEBF7] flex items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white text-[9px] font-mono uppercase tracking-wider font-bold shadow-xs">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="p-4 px-5 bg-white border-t border-[#DBEAFE] flex items-center justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A] uppercase tracking-tight group-hover:text-[#0B4F82] transition-colors">
                      {cat.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0B4F82] group-hover:text-[#D97706] whitespace-nowrap">
                      <span>{cat.actionLabel}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2: Three Equal-Width Categories (4 cols each) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {standardCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group rounded-2xl overflow-hidden bg-white border-2 border-[#DBEAFE] hover:border-[#0B4F82] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-[#F8FAFC]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white text-[9px] font-mono uppercase tracking-wider font-bold shadow-xs">
                    {cat.tag}
                  </span>
                </div>

                <div className="p-5 bg-white border-t border-[#DBEAFE] space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-[#0F172A] uppercase tracking-tight group-hover:text-[#0B4F82] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B4F82] group-hover:text-[#D97706] transition-colors">
                    <span>{cat.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

        {/* Partner Brand Backpacks Strip (Skybags, Arctic Hunter, Swiss Military) — Clarifies "Backpacks & Bags" vs "In-House Brands" */}
        {partnerBrands && (
          <div className="rounded-3xl bg-white border-2 border-[#DBEAFE] p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest font-extrabold text-[#D97706] block">
                  MULTI-BRAND PARTNER BAGS ALSO SUPPLIED Under &ldquo;BACKPACKS &amp; BAGS&rdquo;
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight mt-0.5">
                  Looking for Skybags, Arctic Hunter, or Swiss Military Backpacks?
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Along with our in-house manufactured <strong>Ninja Gear</strong> &amp; <strong>ADMA London</strong> ranges, we supply and custom-brand leading national &amp; international bag brands for corporate orders.
                </p>
              </div>
              <Link
                href="/bags"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FEF3C7] hover:bg-[#FDE68A] border border-[#FCD34D] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider shrink-0 transition-all"
              >
                <Briefcase className="w-4 h-4 text-[#0B4F82]" />
                <span>Explore All Brands on Bags Page</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {partnerBrands.map((pb, idx) => (
                <Link
                  key={idx}
                  href={`/bags?partner=${encodeURIComponent(pb.name)}`}
                  className="p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-[#DBEAFE] transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base font-black text-[#0B4F82] uppercase tracking-tight">
                      {pb.name}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-[#BFDBFE] text-[#0B4F82]">
                      {pb.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#475569] leading-relaxed">
                    {pb.description}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] font-bold text-[#0F172A]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A93C]" />
                    <span>{pb.models}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
