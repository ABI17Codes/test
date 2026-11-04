'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight, Eye, Sparkles } from 'lucide-react';

export const DigitalCataloguesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - 2026 Modern Grotesque */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-50 border border-neutral-200 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-[#0E679C]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0E679C]">
              Official Publications 2026
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em]">
            Official digital catalogues,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E679C] to-[#F5B800]">
              interactive & instant.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Over 180 pages of curated executive gifting suites, bespoke tech hampers, and engineered carrywear with interactive page navigation and one-click quotation.
          </p>
        </div>

        {/* Dual Catalogue Bento Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          
          {/* Catalogue 1: All In One Gifting */}
          <div className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center group">
            {/* Book Cover Visual with 3D Float */}
            <Link
              href="/catalog-viewer?type=gifts"
              className="w-full sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 shadow-md group-hover:shadow-2xl transition-all duration-300 bg-neutral-100 shrink-0 relative flex items-center justify-center p-2"
            >
              <img
                src="/catalog/gifts/page_001.jpg"
                alt="All In One Corporate Gifting Catalogue Cover"
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <Eye className="w-3.5 h-3.5 text-[#0E679C]" />
                  <span>Open Flipbook</span>
                </span>
              </div>
            </Link>

            {/* Content & Actions */}
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0E679C] text-[10px] font-bold tracking-wider uppercase border border-blue-200">
                  Volume I &bull; Hampers
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  146 Pages &bull; Full Color
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                All-in-One Corporate Gifting
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Featuring executive 5-in-1 and 4-in-1 tech suites, stainless steel vacuum temperature bottles, leatherette diaries, and sustainable bamboo sets.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Link
                  href="/catalog-viewer?type=gifts"
                  className="px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#0E679C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <span>Launch Reader</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
                </Link>

                <Link
                  href="/gift-sets"
                  className="px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors"
                >
                  View Product Grid
                </Link>
              </div>
            </div>
          </div>

          {/* Catalogue 2: Corporate Bags */}
          <div className="bento-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center group">
            {/* Book Cover Visual with 3D Float */}
            <Link
              href="/catalog-viewer?type=bags"
              className="w-full sm:w-48 aspect-[3/4] rounded-2xl overflow-hidden border border-neutral-200 shadow-md group-hover:shadow-2xl transition-all duration-300 bg-neutral-100 shrink-0 relative flex items-center justify-center p-2"
            >
              <img
                src="/catalog/bags/page_01.jpg"
                alt="Executive Bags Catalogue Cover"
                className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-neutral-900/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-3.5 py-1.5 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <Eye className="w-3.5 h-3.5 text-[#0E679C]" />
                  <span>Open Flipbook</span>
                </span>
              </div>
            </Link>

            {/* Content & Actions */}
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-[#D97706] text-[10px] font-bold tracking-wider uppercase border border-amber-200">
                  Volume II &bull; Bags
                </span>
                <span className="text-xs font-semibold text-neutral-400">
                  37 Pages &bull; 20 Models
                </span>
              </div>

              <h3 className="text-xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                Executive Bags & Carrywear
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                Antitheft backpacks, ergonomic laptop rucksacks, executive duffles, and gym bags engineered with water-resistant nylon and 1-year replacement warranty.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-2">
                <Link
                  href="/catalog-viewer?type=bags"
                  className="px-5 py-2.5 rounded-full bg-[#0F172A] hover:bg-[#0E679C] text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <span>Launch Reader</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#F5B800]" />
                </Link>

                <Link
                  href="/bags"
                  className="px-4 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-bold transition-colors"
                >
                  View Bags Collection
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
