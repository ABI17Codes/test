'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CORPORATE_GIFTING_DATA, COMPANY_INFO } from '../data/siteContent';

export const CorporateGiftingSection: React.FC = () => {
  const { header, featuredWelcomeKit, categories } = CORPORATE_GIFTING_DATA;

  return (
    <section className="py-20 sm:py-24 bg-[#F5F0E8] text-[#211D1A] text-left border-b border-[#EAE3D8]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#EAE3D8]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#A98554] block">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#211D1A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#69635C] font-normal leading-relaxed">
              Curated corporate gifting solutions designed to strengthen relationships and celebrate company milestones. Fully customized and delivered nationwide by <strong className="text-[#211D1A]">{COMPANY_INFO.legalName}</strong>
            </p>
          </div>

          <Link
            href={header.cta.href}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#211D1A] hover:text-[#A98554] transition-colors pb-1 border-b-2 border-[#211D1A] hover:border-[#A98554] self-start lg:self-end group"
          >
            <span>{header.cta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Feature 1: Featured Welcome Kit */}
        <div className="rounded-2xl overflow-hidden bg-white border border-[#EAE3D8] shadow-sm p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden shadow-xs border border-[#EAE3D8] bg-[#F5F0E8] group">
            <img
              src={featuredWelcomeKit.image}
              alt={featuredWelcomeKit.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-3.5 left-3.5">
              <span className="px-3 py-1 rounded-full bg-[#211D1A] text-white text-[9px] font-mono uppercase tracking-widest font-bold shadow-xs">
                {featuredWelcomeKit.badge}
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A98554] font-bold block">
                {featuredWelcomeKit.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A] uppercase tracking-tight">
                {featuredWelcomeKit.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#69635C] leading-relaxed">
                {featuredWelcomeKit.description}
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href={featuredWelcomeKit.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-sm group whitespace-nowrap"
              >
                <span>{featuredWelcomeKit.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href={featuredWelcomeKit.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F5F0E8] hover:bg-[#EAE3D8] border border-[#EAE3D8] text-[#211D1A] text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
              >
                <span>{featuredWelcomeKit.secondaryCta.label}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Category Cards from Centralized Data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.link}
                className="group rounded-xl bg-white border border-[#EAE3D8] hover:border-[#C5A16D] overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#F5F0E8] relative border-b border-[#EAE3D8]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#211D1A] text-white">
                    {cat.tag}
                  </span>
                </div>

                <div className="p-5 space-y-1.5 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#A98554] mb-1">
                      <IconComp className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-mono uppercase tracking-widest font-semibold block">
                        {cat.subtitle}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-[#211D1A] group-hover:text-[#40352D] transition-colors">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-[#69635C] leading-relaxed line-clamp-2 mt-1">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#211D1A] group-hover:text-[#A98554] transition-colors">
                    <span>Explore Products</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
