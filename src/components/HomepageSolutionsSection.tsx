'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CORPORATE_SOLUTIONS } from '../data/products';

export const HomepageSolutionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching media_1793878039758_2b665fa3.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2.5 max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0876B4]">
              Corporate Gifting Solutions
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101828] tracking-[-0.025em] leading-[1.12]">
              Tailored programs for every milestone
            </h2>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0876B4] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (6) enterprise programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {CORPORATE_SOLUTIONS.map((sol) => (
            <Link
              key={sol.id}
              href="/solutions"
              className="group relative h-[290px] rounded-2xl overflow-hidden block border border-[#E5E7EB] shadow-xs hover:shadow-xl transition-all duration-300 bg-[#101828]"
            >
              {/* Product Background Image */}
              <img
                src={sol.image}
                alt={sol.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/95 via-[#101828]/55 to-transparent pointer-events-none" />

              {/* Frosted Glass Bottom Panel matching media_1793878039758_2b665fa3.jpg */}
              <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[#222934]/60 backdrop-blur-md border-t border-white/10 pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow-xs mb-2.5">
                  {sol.title}
                </h3>

                <p className="text-xs text-white/85 leading-snug line-clamp-2 mb-3.5 font-normal">
                  {sol.description}
                </p>

                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full text-[11px] font-medium text-white/95 bg-white/14 backdrop-blur-md border border-white/25">
                    {sol.tag}
                  </span>
                  {sol.recommendedProducts.slice(0, 2).map((sku, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium text-white/90 bg-white/10 backdrop-blur-md border border-white/20"
                    >
                      {sku}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
