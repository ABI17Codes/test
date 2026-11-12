'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CORPORATE_SOLUTIONS } from '../data/products';

export const HomepageSolutionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching slice_4.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              Corporate Gifting Solutions
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Tailored programs for every milestone
            </h2>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (6) enterprise programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Clean Typographic Cards matching slice_4.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {CORPORATE_SOLUTIONS.map((sol) => (
            <Link
              key={sol.id}
              href="/solutions"
              className="group bg-[#F8F9FA] hover:bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D49B27]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md"
            >
              <div>
                <span className="inline-flex px-2.5 py-0.5 rounded-md bg-[#FDF8EC] border border-[#F3E3B8] text-[10px] font-bold text-[#C69214]">
                  {sol.tag}
                </span>

                <h3 className="font-editorial text-lg font-bold text-[#101828] group-hover:text-[#C69214] transition-colors mt-3.5">
                  {sol.title}
                </h3>

                <p className="text-xs text-[#667085] leading-relaxed font-normal mt-1.5">
                  {sol.description}
                </p>
              </div>

              <div className="pt-4 mt-5 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[10px] font-mono font-semibold text-[#667085]">
                  {sol.recommendedProducts.slice(0, 2).join(' • ')}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C69214] group-hover:translate-x-0.5 transition-transform">
                  <span>Configure</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
