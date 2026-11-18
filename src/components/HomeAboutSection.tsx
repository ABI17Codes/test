'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Factory, 
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';

export const HomeAboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#F7F8FA] border-b border-[#ECEFF3] text-left">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Company Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ECEFF3] shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#172B4D]">
                ABOUT GLOBRANDS LIFESTYLE PVT. LTD. &bull; BENGALURU PRODUCTION ATELIER
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B4D] tracking-tight leading-[1.12]">
              India&apos;s Dedicated <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#172B4D] via-[#0876B4] to-[#C5A46D]">
                Backpack Manufacturing Atelier
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
              <p>
                At <strong className="text-[#172B4D] font-bold">GLOBRANDS LIFESTYLE PVT. LTD.</strong>, we establish a new benchmark in industrial carrywear engineering. We are direct factory manufacturers of high-performance corporate backpacks, business laptop bags, and rugged travel carrywear, operating our own advanced manufacturing facility in Bengaluru.
              </p>
              <p>
                Unlike generic corporate gifting brokers, we maintain end-to-end control over the entire production cycle—from raw fabric selection (1680D ballistic dobby, water-resistant coatings) and precision laser cutting to computerized bar-tacking and custom enterprise branding.
              </p>
            </div>

            {/* 3 Core Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#ECEFF3] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#F7F8FA] border border-[#ECEFF3] flex items-center justify-center text-[#172B4D]">
                  <Factory className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">100% In-House</h4>
                <p className="text-[11px] text-[#667085] leading-relaxed">
                  Direct production in Bengaluru with zero broker markups.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#ECEFF3] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#F7F8FA] border border-[#ECEFF3] flex items-center justify-center text-[#172B4D]">
                  <Award className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">1-Year Warranty</h4>
                <p className="text-[11px] text-[#667085] leading-relaxed">
                  Direct factory replacement warranty on stitches and zippers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#ECEFF3] shadow-2xs space-y-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#F7F8FA] border border-[#ECEFF3] flex items-center justify-center text-[#172B4D]">
                  <Layers className="w-4 h-4 text-[#C5A46D]" />
                </div>
                <h4 className="text-sm font-bold text-[#172B4D]">In-House Brands</h4>
                <p className="text-[11px] text-[#667085] leading-relaxed">
                  Makers of Ninja Gear Original and ADMA London.
                </p>
              </div>
            </div>

            {/* Call to action */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#172B4D] hover:text-[#C5A46D] transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Factory Atelier Card & Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-[#ECEFF3] p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4 pb-6 border-b border-[#ECEFF3]">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#ECEFF3] bg-[#F7F8FA] p-2 flex items-center justify-center shrink-0">
                  <img
                    src="/globrands-emblem-clean.png"
                    alt="GLOBRANDS LIFESTYLE PVT. LTD."
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#C5A46D] uppercase tracking-wider block">
                    REGISTERED PRIVATE LIMITED
                  </span>
                  <h3 className="text-lg font-black text-[#172B4D]">
                    GLOBRANDS LIFESTYLE PVT. LTD.
                  </h3>
                  <span className="text-xs text-[#667085] font-semibold">
                    Primary Backpack Manufacturer &bull; B2B Partner
                  </span>
                </div>
              </div>

              {/* Verified Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#ECEFF3]">
                  <div className="text-2xl font-black text-[#172B4D]">32+</div>
                  <div className="text-xs font-bold text-[#172B4D] mt-0.5">Proprietary Bag Models</div>
                  <div className="text-[10px] text-[#667085]">Ninja Gear &bull; ADMA London</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#ECEFF3]">
                  <div className="text-2xl font-black text-[#172B4D]">1.2M+</div>
                  <div className="text-xs font-bold text-[#172B4D] mt-0.5">Units Delivered</div>
                  <div className="text-[10px] text-[#667085]">Across 28 Indian States</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#ECEFF3]">
                  <div className="text-2xl font-black text-[#172B4D]">500+</div>
                  <div className="text-xs font-bold text-[#172B4D] mt-0.5">Enterprise Clients</div>
                  <div className="text-[10px] text-[#667085]">Fortune 500 &amp; Tech Giants</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7F8FA] border border-[#ECEFF3]">
                  <div className="text-2xl font-black text-[#172B4D]">99.8%</div>
                  <div className="text-xs font-bold text-[#172B4D] mt-0.5">On-Time Dispatch</div>
                  <div className="text-[10px] text-[#667085]">Zero-Defect Quality SLA</div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-2xl bg-[#172B4D] text-white flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0" />
                  <div className="text-xs">
                    <div className="font-bold text-white">Bengaluru Atelier &amp; Showroom</div>
                    <div className="text-slate-300 text-[11px]">Vasanthapura, Bengaluru &ndash; 560061</div>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="px-3.5 py-1.5 rounded-lg bg-[#C5A46D] text-[#172B4D] text-[11px] font-bold shrink-0 hover:bg-[#b8955c] transition-colors"
                >
                  Visit Atelier
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
