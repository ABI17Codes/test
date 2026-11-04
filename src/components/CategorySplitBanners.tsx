'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase, Gift, ShieldCheck, Sparkles } from 'lucide-react';

export const CategorySplitBanners: React.FC = () => {
  return (
    <section className="py-16 bg-[#fafcf9]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Banner 1: Corporate Bags & Backpacks (Cyan/Blue Vibe matching image) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06b6d4] to-[#0284c7] p-8 sm:p-10 text-white shadow-lg group">
            {/* Organic Background Blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#1d4ed8]/30 rounded-full blur-xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[380px]">
              <div className="space-y-3 max-w-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white">
                  <Briefcase className="w-3.5 h-3.5" />
                  Ninja Gear & ADMA London
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  Executive Bags & Corporate Backpacks
                </h3>
                <p className="text-xs sm:text-sm text-cyan-50 leading-relaxed font-normal">
                  Anti-theft laptop compartments, water-repellent fabrics, USB fast charging, and official 1-year brand warranty.
                </p>
              </div>

              {/* Floating Product Image with subtle angle */}
              <div className="relative my-4 flex justify-end">
                <div className="w-48 sm:w-56 h-48 sm:h-56 rounded-2xl bg-white/15 backdrop-blur-md p-2 shadow-2xl border border-white/30 transform group-hover:scale-105 group-hover:-rotate-2 transition-transform duration-500">
                  <img
                    src="/catalog/crops/boxer_ninja_gear_main.jpg"
                    alt="Ninja Gear Boxer Backpack"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="/bags"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-bold tracking-tight shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Bags Collection</span>
                  <ArrowRight className="w-4 h-4 text-[#0284c7]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Banner 2: Corporate Gift Sets & Hampers (Coral/Rose Vibe matching image) */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f43f5e] to-[#e11d48] p-8 sm:p-10 text-white shadow-lg group">
            {/* Organic Background Blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none transform translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#9f1239]/30 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between h-full min-h-[380px]">
              <div className="space-y-3 max-w-sm">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase text-white">
                  <Gift className="w-3.5 h-3.5" />
                  All In One Catalogue
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
                  Curated Executive Gift Sets & Hampers
                </h3>
                <p className="text-xs sm:text-sm text-rose-50 leading-relaxed font-normal">
                  5-in-1, 4-in-1, and 3-in-1 executive sets with smart temperature bottles, flap diaries, metal pens, and wireless mice.
                </p>
              </div>

              {/* Floating Product Image with subtle angle */}
              <div className="relative my-4 flex justify-end">
                <div className="w-48 sm:w-56 h-48 sm:h-56 rounded-2xl bg-white/15 backdrop-blur-md p-2 shadow-2xl border border-white/30 transform group-hover:scale-105 group-hover:rotate-2 transition-transform duration-500">
                  <img
                    src="/catalog/crops/hgs_h74.jpg"
                    alt="VIP Executive Hamper"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Action Button */}
              <div>
                <Link
                  href="/gift-sets"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-neutral-900 hover:bg-neutral-100 text-xs font-bold tracking-tight shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Gift Sets</span>
                  <ArrowRight className="w-4 h-4 text-[#e11d48]" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

