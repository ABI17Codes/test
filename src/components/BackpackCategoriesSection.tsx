'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { BACKPACK_CATEGORIES_DATA } from '../data/siteContent';

export const BackpackCategoriesSection: React.FC = () => {
  const { header, featuredCategory, stackedCategories, standardCategories } = BACKPACK_CATEGORIES_DATA;

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
              {header.description}
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

        {/* Structured Editorial Grid: Row 1 (7/5 split) + Row 2 (3 equal columns) */}
        <div className="space-y-8">
          
          {/* Row 1: Featured 7-col Card + Stacked 5-col Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Featured Large Card (7 cols) */}
            <Link
              href={featuredCategory.href}
              className="lg:col-span-7 group relative rounded-2xl overflow-hidden h-[460px] flex flex-col justify-end p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 bg-[#292725] border border-[#EAE3D8]"
            >
              <img
                src={featuredCategory.image}
                alt={featuredCategory.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/90 via-[#211D1A]/35 to-transparent" />
              
              <div className="relative z-10 space-y-2.5">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A16D] font-bold block">
                  {featuredCategory.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  {featuredCategory.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#EAE3D8] max-w-md leading-relaxed">
                  {featuredCategory.description}
                </p>
                <div className="pt-1 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A16D] group-hover:text-white transition-colors">
                  <span>{featuredCategory.actionLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>

              <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C5A16D] group-hover:text-[#211D1A] transition-colors shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>

            {/* Right Stack: 2 Balanced Landscape Cards (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              {stackedCategories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group relative rounded-2xl overflow-hidden h-[214px] flex flex-col justify-end p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 bg-[#292725] border border-[#EAE3D8]"
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/90 via-[#211D1A]/30 to-transparent" />
                  
                  <div className="relative z-10 space-y-1">
                    <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A16D] font-bold block">
                      {cat.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                      {cat.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A16D] group-hover:text-white transition-colors pt-0.5">
                      <span>{cat.actionLabel}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#C5A16D] group-hover:text-[#211D1A] transition-colors shadow-sm">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Row 2: Three Equal-Width Categories (4 cols each) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {standardCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative rounded-2xl overflow-hidden h-[320px] flex flex-col justify-end p-7 shadow-sm hover:shadow-xl transition-all duration-300 bg-[#292725] border border-[#EAE3D8]"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/90 via-[#211D1A]/30 to-transparent" />
                
                <div className="relative z-10 space-y-1.5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#C5A16D] font-bold block">
                    {cat.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#EAE3D8] line-clamp-1">
                    {cat.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C5A16D] group-hover:text-white transition-colors pt-1">
                    <span>{cat.actionLabel}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
