'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Printer, CheckCircle2, Layers } from 'lucide-react';
import { CORPORATE_GIFTING_DATA, COMPANY_INFO } from '../data/siteContent';

export const CorporateGiftingSection: React.FC = () => {
  const { header, featuredWelcomeKit, categories } = CORPORATE_GIFTING_DATA;

  return (
    <section
      id="corporate-gifting"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#FEFDFB] via-[#F4F9FF] to-[#FFFFFF] text-[#1E293B] text-left border-b border-[#DBEAFE]"
    >
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-[11px] font-extrabold uppercase tracking-wider">
              <span>{header.tag}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B4F82] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#E5A93C] hover:bg-[#D4952A] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider shadow-xs transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Corporate Desk: {COMPANY_INFO.contact.corporatePhone}</span>
            </a>
            <Link
              href={header.cta.href}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider shadow-xs transition-all group"
            >
              <span>{header.cta.label}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Featured Onboarding & Multi-Item Welcome Kit Banner (With 4-Image Collage Grid!) */}
        <div className="rounded-3xl overflow-hidden bg-white border-2 border-[#DBEAFE] shadow-md p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4-Image Collage Grid on Left */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 bg-[#F0F7FF] p-3.5 rounded-2xl border border-[#BFDBFE]">
            {(featuredWelcomeKit.collageImages || [
              '/catalog/crops/hgs_h74.jpg',
              '/catalog/crops/hgs_h71.jpg',
              '/catalog/crops/hgs_h65.jpg',
              '/catalog/crops/hgs_h55.jpg'
            ]).map((imgUrl, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#DBEAFE] shadow-2xs group flex items-center justify-center p-1.5"
              >
                <img
                  src={imgUrl}
                  alt={`Corporate Welcome Kit Option ${i + 1}`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute bottom-1.5 right-1.5 px-2 py-0.5 rounded bg-[#0B4F82]/90 text-white text-[9px] font-bold">
                  Combo #{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Right Info */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[#0B4F82] text-[10px] font-bold uppercase tracking-wider">
              <Printer className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>{featuredWelcomeKit.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              {featuredWelcomeKit.title}
            </h3>

            <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
              {featuredWelcomeKit.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              {['Employee Welcome Kits', 'Festive Hampers', 'Client Appreciation', 'Conference Giveaways', 'Any Brand Sourcing'].map((pill, i) => (
                <span key={i} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[11px] font-semibold text-[#334155]">
                  <CheckCircle2 className="w-3 h-3 text-[#0B4F82]" />
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={featuredWelcomeKit.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-sm group whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#FDE047]" />
                <span>{featuredWelcomeKit.primaryCta.label}</span>
              </a>

              <Link
                href={featuredWelcomeKit.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FEF3C7] hover:bg-[#FDE68A] border border-[#FCD34D] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                <span>{featuredWelcomeKit.secondaryCta.label}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 9 Corporate Gifting Categories — Every Card Shows a 4-Image Collage Grid (Not 1 Single Photo!) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#0B4F82] uppercase tracking-tight flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#E5A93C]" />
              <span>6 Core Corporate Gifting Categories (Multi-Product Preview)</span>
            </h3>
            <span className="text-xs font-semibold text-[#475569] hidden sm:inline">
              Looking for any specific item? Call us for instant bulk quotes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => {
              const IconComp = cat.icon;
              const multiImages = (cat as any).images || [cat.image, cat.image, cat.image, cat.image];
              return (
                <Link
                  key={idx}
                  href={cat.link}
                  className="group rounded-2xl bg-white border border-[#DBEAFE] hover:border-[#0B4F82] overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* 2x2 Multi-Image Grid Stage inside EVERY Card (4 distinct product photos per category!) */}
                  <div className="p-3 bg-gradient-to-b from-[#F0F7FF] to-[#F8FAFC] border-b border-[#DBEAFE] relative">
                    <div className="grid grid-cols-2 gap-2">
                      {multiImages.slice(0, 4).map((imgSrc: string, imgIdx: number) => (
                        <div
                          key={imgIdx}
                          className="aspect-[4/3] rounded-lg overflow-hidden bg-white border border-[#E2E8F0] flex items-center justify-center p-1 shadow-2xs"
                        >
                          <img
                            src={imgSrc}
                            alt={`${cat.title} sample ${imgIdx + 1}`}
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>

                    <span className="absolute top-4 left-4 text-[9px] font-mono font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white shadow-xs">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-2 text-left flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-1.5 text-[#D97706] mb-1">
                        <IconComp className="w-4 h-4 text-[#0B4F82]" />
                        <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B4F82] block">
                          {cat.subtitle}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-[#0F172A] group-hover:text-[#0B4F82] transition-colors">
                        {cat.title}
                      </h4>
                      <p className="text-xs text-[#475569] leading-relaxed mt-1">
                        {cat.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B4F82] group-hover:text-[#D97706] transition-colors">
                      <span>Enquire / View Range</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
