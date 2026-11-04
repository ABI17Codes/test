'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SignatureCollections: React.FC = () => {
  return (
    <section className="py-20 bg-[#F8FAFC] border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header - Bold 2026 Grotesque */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs">
              <span className="live-pulse">
                <span className="bg-[#0E679C]" />
                <span className="bg-[#0E679C]" />
              </span>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0E679C]">
                Curated Brand Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0F172A] tracking-[-0.035em]">
              Signature collections,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E679C] to-[#F5B800]">
                built for scale.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
              Every collection is manufactured in-house, custom branded to your Pantone specs, and backed by a zero-defect milestone guarantee.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#0F172A] hover:bg-[#0E679C] text-white text-xs sm:text-sm font-bold tracking-tight self-start md:self-end transition-all shadow-md group cursor-pointer"
          >
            <span>Browse Full Product Directory</span>
            <ArrowRight className="w-4 h-4 text-[#F5B800] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2026 Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
          
          {/* Bento Cell 1: Large Feature (Span 7) - Executive Hampers */}
          <div className="lg:col-span-7 bento-card p-0 flex flex-col justify-between group">
            <Link
              href="/gift-sets"
              className="block relative aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden border-b border-neutral-200/80 p-6 flex items-center justify-center"
            >
              <img
                src="/catalog/crops/hgs_h74.jpg"
                alt="Executive Hampers & VIP Suites"
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0E679C] text-[10px] font-extrabold tracking-wider uppercase border border-neutral-200 shadow-xs">
                  01 &bull; Executive Hampers
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                  18 Curated Suites
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <span>Explore Hampers Collection</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E679C]" />
                </span>
              </div>
            </Link>

            <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                  Executive Hampers &amp; VIP Keepsake Suites
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  Curated corporate gift sets featuring smart temperature vacuum bottles, wireless charging mice, metallic rollerball pens, and executive journals.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Smart Temp LED Bottle', 'Wireless Mouse', 'Metallic Roller Pen', 'Keepsake Box'].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-neutral-50 text-neutral-700 text-[11px] font-semibold border border-neutral-200/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold">
                <Link href="/gift-sets" className="text-[#0E679C] flex items-center gap-1 hover:underline">
                  <span>View All 18 Hamper Sets</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-neutral-400 font-medium">B2B Direct Factory</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 2: Feature (Span 5) - In-House Personalization Studio */}
          <div className="lg:col-span-5 bento-card p-0 flex flex-col justify-between group">
            <Link
              href="/branding"
              className="block relative aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden border-b border-neutral-200/80 p-6 flex items-center justify-center"
            >
              <img
                src="/catalog/crops/diary_no_64_gold_fitting.jpg"
                alt="In-House Personalization Studio"
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0E679C] text-[10px] font-extrabold tracking-wider uppercase border border-neutral-200 shadow-xs">
                  02 &bull; In-House Studio
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                  100% In-House
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <span>Open Branding Studio</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E679C]" />
                </span>
              </div>
            </Link>

            <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                  Precision In-House Personalization
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  Direct factory branding with fiber laser debossing, Japanese Tajima 12-needle embroidery, and UV color printing calibrated to Pantone fidelity.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Fiber Laser', 'Tajima Embroidery', 'Blind Deboss', '24h Proofs'].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-neutral-50 text-neutral-700 text-[11px] font-semibold border border-neutral-200/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold">
                <Link href="/branding" className="text-[#0E679C] flex items-center gap-1 hover:underline">
                  <span>Try Interactive Simulator</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-neutral-400 font-medium">Digital Mockups in 24h</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 3: Feature (Span 5) - Turnkey Solutions */}
          <div className="lg:col-span-5 bento-card p-0 flex flex-col justify-between group">
            <Link
              href="/solutions"
              className="block relative aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden border-b border-neutral-200/80 p-6 flex items-center justify-center"
            >
              <img
                src="/catalog/crops/businessman_2_adma_london_main.jpg"
                alt="Turnkey Enterprise Gifting Architecture"
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0E679C] text-[10px] font-extrabold tracking-wider uppercase border border-neutral-200 shadow-xs">
                  03 &bull; Enterprise Programs
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                  Multi-City Dispatch
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <span>Explore Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E679C]" />
                </span>
              </div>
            </Link>

            <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                  Turnkey Workforce Gifting Programs
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  End-to-end B2B gifting programs tailored for enterprise HR: employee welcome onboarding kits, festive Diwali hampers, and multi-city doorstep delivery.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Onboarding Kits', 'Diwali Festive', 'Pan-India SLA', 'GST Compliant'].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-neutral-50 text-neutral-700 text-[11px] font-semibold border border-neutral-200/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold">
                <Link href="/solutions" className="text-[#0E679C] flex items-center gap-1 hover:underline">
                  <span>View Corporate Programs</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-neutral-400 font-medium">Pan-India Network</span>
              </div>
            </div>
          </div>

          {/* Bento Cell 4: Large Feature (Span 7) - Engineered Bags */}
          <div className="lg:col-span-7 bento-card p-0 flex flex-col justify-between group">
            <Link
              href="/bags"
              className="block relative aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-[#E2E8F0] overflow-hidden border-b border-neutral-200/80 p-6 flex items-center justify-center"
            >
              <img
                src="/catalog/crops/boxer_ninja_gear_main.jpg"
                alt="Engineered Corporate Backpacks"
                className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0E679C] text-[10px] font-extrabold tracking-wider uppercase border border-neutral-200 shadow-xs">
                  04 &bull; Engineered Bags
                </span>
                <span className="px-3 py-1 rounded-full bg-[#0F172A]/80 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                  20+ Models &bull; 1-Yr Warranty
                </span>
              </div>

              <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white text-neutral-900 text-xs font-bold shadow-xl flex items-center gap-1.5 border border-neutral-200">
                  <span>Explore Corporate Bags</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0E679C]" />
                </span>
              </div>
            </Link>

            <div className="p-6 sm:p-7 space-y-4 bg-white flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-[#0E679C] transition-colors">
                  Engineered Corporate Backpacks (Ninja Gear &amp; ADMA London)
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                  High-performance corporate backpacks featuring antitheft architecture, 15.6" padded laptop sleeves, USB fast charging, and all-weather rain covers.
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3">
                  {['Antitheft Zippers', 'Fast USB Port', 'All-Weather Dobby', '1-Yr Warranty'].map((c) => (
                    <span key={c} className="px-2.5 py-1 rounded-lg bg-neutral-50 text-neutral-700 text-[11px] font-semibold border border-neutral-200/80">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold">
                <Link href="/bags" className="text-[#0E679C] flex items-center gap-1 hover:underline">
                  <span>Explore 20+ Models</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <span className="text-neutral-400 font-medium">1-Year Warranty Guarantee</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
