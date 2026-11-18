'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Factory, 
  ShieldCheck, 
  Award, 
  Scissors, 
  Palette, 
  Truck, 
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const CAPABILITY_PILLARS = [
  {
    icon: Factory,
    title: '100% In-House Bengaluru Production',
    subtitle: 'Zero Intermediary Commissions',
    description: 'Direct factory manufacturing with dedicated fabric cutting tables, heavy-duty bar-tack sewing stations, and final assembly lines capable of 50 to 50,000+ units per month.',
    badge: 'Direct Manufacturer'
  },
  {
    icon: ShieldCheck,
    title: '5-Stage Quality Control Protocol',
    subtitle: 'Zero-Defect Milestone SLA',
    description: 'Systematic 5-point audit covering Raw Material Inspection, Cutting Precision, Stitching Tension, QC Manager Defect Audit, and Factory Manager Dispatch Sign-off.',
    badge: 'ISO-Grade QC'
  },
  {
    icon: Award,
    title: '1-Year Factory Replacement Warranty',
    subtitle: 'Unconditional Hardware Backing',
    description: 'Every corporate backpack manufactured under our registered in-house brands (Ninja Gear & ADMA London) includes a full 1-year replacement warranty on stitches and zippers.',
    badge: '1-Year Guarantee'
  },
  {
    icon: Scissors,
    title: 'Precision Cutting & Bar-Tacking',
    subtitle: 'Engineered Stress Resilience',
    description: 'Automated pattern plotting and high-density industrial bar-tack reinforcement at high-stress shoulder harness and top handle anchor points.',
    badge: 'Tear-Resistant'
  },
  {
    icon: Palette,
    title: 'In-House Precision Branding Studio',
    subtitle: 'Tajima Embroidery & Fiber Laser',
    description: '12-needle Japanese Tajima thread embroidery, permanent fiber laser engraving, high-density screen printing, and molded rubber badges calibrated to client Pantone guidelines.',
    badge: 'Zero Distortion'
  },
  {
    icon: Truck,
    title: 'Pan-India Multi-City Fulfillment',
    subtitle: 'Doorstep & Palletized Logistics',
    description: 'Seamless deliveries across 28 Indian states—supporting bulk dispatches to regional branch warehouses or individual new-hire employee doorstep kit distribution.',
    badge: '99.8% On-Time'
  }
];

export const ManufacturingCapabilitiesSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#172B4D] via-[#20242C] to-[#172B4D] text-white border-b border-white/10 text-left relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0876B4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A46D]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span className="text-[11px] uppercase tracking-[0.16em] font-extrabold text-[#C5A46D]">
                WHY CHOOSE GLOBRANDS &bull; MANUFACTURING INFRASTRUCTURE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Engineered Manufacturing Capabilities <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A46D] via-amber-200 to-[#168FC9]">
                Built for Enterprise Procurement
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Procurement leaders and enterprise brand managers partner directly with <strong className="text-white">GLOBRANDS LIFESTYLE PVT. LTD.</strong> to eliminate vendor markups, secure authentic factory warranties, and ensure flawless product consistency.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#C5A46D] hover:bg-[#b8955c] text-[#172B4D] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md group shrink-0"
          >
            <span>Explore Factory Atelier</span>
            <ArrowRight className="w-4 h-4 text-[#172B4D] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-white/[0.05] border border-white/10 hover:border-[#C5A46D]/60 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:bg-white/[0.08] backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#C5A46D]/15 border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 border border-white/15">
                      {pillar.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#C5A46D] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#C5A46D] mt-0.5">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 font-normal">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center gap-2 text-[11px] font-medium text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                  <span>Factory Verified &bull; Available for OEM / ODM</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
