'use client';

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { MANUFACTURING_DATA } from '../data/siteContent';

export const ManufacturingStorySection: React.FC = () => {
  const { header, featuredCraft, processSteps, warrantySummary } = MANUFACTURING_DATA;

  return (
    <section className="py-16 sm:py-20 bg-white text-[#1E293B] text-left relative overflow-hidden border-b border-[#DBEAFE]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>

          <a
            href={header.cta.href}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-end group shadow-xs"
          >
            <span>{header.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Light High-Contrast Two-Part Composition: Left 6 cols + Right 6 cols (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column (6 cols): Featured Backpack Materials & Craft Showcase on Light Pastel Stage */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden border-2 border-[#DBEAFE] bg-[#F0F7FF] flex flex-col justify-between shadow-sm">
            <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden bg-white flex items-center justify-center">
              <img
                src={featuredCraft.image}
                alt={featuredCraft.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#0B4F82] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-xs">
                {featuredCraft.tag}
              </span>
            </div>

            <div className="p-6 bg-white border-t border-[#DBEAFE] space-y-2">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                {featuredCraft.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                {featuredCraft.description}
              </p>
            </div>
          </div>

          {/* Right Column (6 cols): 4 Cards for 1000D Backpack Fabrics, DTF Printing, Embroidery & Screen Printing */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.step}
                  className="rounded-2xl overflow-hidden bg-[#F8FAFC] border border-[#DBEAFE] hover:border-[#0B4F82] flex flex-col justify-between transition-all shadow-2xs"
                >
                  <div className="relative h-[135px] w-full overflow-hidden bg-white border-b border-[#E2E8F0]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#0B4F82] text-white text-[10px] font-mono font-bold">
                      STEP {item.step}
                    </span>
                  </div>

                  <div className="p-4 space-y-1 bg-white flex-1">
                    <div className="flex items-center gap-1.5 text-[#0B4F82]">
                      <IconComp className="w-4 h-4 text-[#E5A93C]" />
                      <h4 className="text-sm font-extrabold text-[#0F172A] uppercase tracking-tight">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#475569] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Warranty & Weekly New Models Bar */}
        <div className="p-6 rounded-2xl bg-[#FEF9E7] border-2 border-[#FDE68A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm font-extrabold text-[#0F172A] uppercase">
              <CheckCircle2 className="w-4 h-4 text-[#0B4F82]" />
              <span>{warrantySummary.title}</span>
            </div>
            <p className="text-xs text-[#475569]">
              {warrantySummary.description}
            </p>
          </div>
          <a
            href={warrantySummary.cta.href}
            className="px-5 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all"
          >
            {warrantySummary.cta.label}
          </a>
        </div>

      </div>
    </section>
  );
};
