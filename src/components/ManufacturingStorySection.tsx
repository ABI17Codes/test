'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MANUFACTURING_DATA, COMPANY_INFO } from '../data/siteContent';

export const ManufacturingStorySection: React.FC = () => {
  const { header, featuredCraft, processSteps, warrantySummary } = MANUFACTURING_DATA;

  return (
    <section className="py-20 sm:py-24 bg-[#211D1A] text-white text-left relative overflow-hidden border-b border-white/10">
      {/* Background Subtle Ambience Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C5A16D]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#40352D]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#C5A16D] block">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#EAE3D8] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>

          <a
            href={header.cta.href}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#C5A16D] hover:text-white transition-colors pb-1 border-b-2 border-[#C5A16D] hover:border-white self-start lg:self-end group"
          >
            <span>{header.cta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Structured Two-Part Composition: Left 7 cols + Right 5 cols (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 cols): Large Featured Craft Photograph */}
          <div className="lg:col-span-7 group relative rounded-2xl overflow-hidden h-[360px] sm:h-[464px] flex flex-col justify-end p-8 sm:p-10 shadow-2xl border border-[#40352D] bg-[#292725]">
            <img
              src={featuredCraft.image}
              alt={featuredCraft.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A]/95 via-[#211D1A]/40 to-transparent" />
            
            <div className="relative z-10 max-w-xl space-y-2.5">
              <span className="px-3 py-1 rounded-full bg-[#C5A16D] text-[#211D1A] text-[10px] font-mono uppercase tracking-widest font-bold inline-block">
                {featuredCraft.tag}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                {featuredCraft.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#EAE3D8] leading-relaxed font-normal">
                {featuredCraft.description}
              </p>
            </div>
          </div>

          {/* Right Column (5 cols): 4 Supporting Process Steps (2 x 2 Grid) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {processSteps.map((step) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.step}
                  className="group relative rounded-xl overflow-hidden bg-[#292725] border border-[#40352D] hover:border-[#C5A16D] flex flex-col justify-between h-[180px] sm:h-[216px] shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-full overflow-hidden bg-[#40352D]/40">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#211D1A] via-[#211D1A]/60 to-transparent" />
                    
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-[#211D1A]/85 backdrop-blur-sm text-[9px] font-mono font-bold text-[#C5A16D] border border-white/10">
                      STAGE {step.step}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-left space-y-0.5">
                      <div className="flex items-center gap-1.5 text-white">
                        <IconComp className="w-3.5 h-3.5 text-[#C5A16D]" />
                        <h4 className="text-xs font-bold uppercase tracking-wider group-hover:text-[#C5A16D] transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-[10px] text-[#EAE3D8] line-clamp-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Below the Grid: Aligned Summary Information & Warranty Assurance */}
        <div className="p-6 rounded-2xl bg-[#292725] border border-[#40352D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              {warrantySummary.title}
            </h4>
            <p className="text-xs text-[#EAE3D8] max-w-2xl leading-relaxed">
              Every unit manufactured at our Bengaluru factory is covered under our <strong className="text-white">{COMPANY_INFO.warrantyText}</strong> against material defects, zipper malfunction, and structural seam failure.
            </p>
          </div>

          <a
            href={warrantySummary.cta.href}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A16D] hover:bg-[#A98554] text-[#211D1A] text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors shrink-0 shadow-md"
          >
            <span>{warrantySummary.cta.label}</span>
            <ArrowRight className="w-4 h-4 text-[#211D1A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
