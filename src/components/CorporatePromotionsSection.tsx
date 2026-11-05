'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Sparkles, 
  Palette, 
  Truck, 
  ShieldCheck, 
  Award, 
  ArrowRight
} from 'lucide-react';

const WHY_CHOOSE_PILLARS = [
  {
    title: 'Direct Factory Manufacturing',
    description: '100% in-house Bengaluru production unit delivering transparent factory-direct volume slabs from 50 to 10,000+ units.',
    pills: ['Zero broker markup', '50 to 10,000+ MOQ'],
    icon: Building2,
    href: '/about',
  },
  {
    title: '5-Stage Quality Control',
    description: 'Every gift box, vacuum flask, and backpack zipper undergoes rigorous 5-point inspection before dispatch.',
    pills: ['ISO-grade inspection', 'Zero-defect SLA'],
    icon: ShieldCheck,
    href: '/about',
  },
  {
    title: 'In-House Branding Studio',
    description: 'Permanent fiber laser engraving, Japanese Tajima embroidery, UV digital print, and hot foil stamping under one roof.',
    pills: ['Pantone matched', 'Laser & UV print'],
    icon: Palette,
    href: '/branding',
  },
  {
    title: '1-Year Carrywear Warranty',
    description: 'All Ninja Gear and ADMA London corporate backpacks are backed by a comprehensive stitch and hardware warranty.',
    pills: ['Ballistic weave', 'Hardware replacement'],
    icon: Award,
    href: '/bags',
  },
  {
    title: 'Free 3D Digital Proofing',
    description: 'Receive photorealistic digital mockups and physical pre-production samples for stakeholder approval prior to mass run.',
    pills: ['24-hour SLA', 'Physical sample option'],
    icon: Sparkles,
    href: '/branding',
  },
  {
    title: 'Pan-India Multi-City Delivery',
    description: 'Seamless bulk palletized dispatches to regional branch offices or individual doorstep kitting across 28 Indian states.',
    pills: ['99.8% on-time', '28 states covered'],
    icon: Truck,
    href: '/solutions',
  }
];

export const CorporatePromotionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching media_1793878039758_2b665fa3.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2.5 max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0876B4]">
              Why Choose Globrands
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101828] tracking-[-0.025em] leading-[1.12]">
              Built for procurement leaders, trusted by HR teams
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0876B4] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>Explore Bengaluru factory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {WHY_CHOOSE_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-[#F8FAFC] hover:bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#0876B4]/40 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center group-hover:border-[#0876B4]/30 transition-colors shadow-2xs">
                    <Icon className="w-4 h-4 text-[#0876B4]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#101828] group-hover:text-[#0876B4] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[#667085] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E5E7EB]/80 flex flex-wrap items-center gap-2">
                  {item.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium text-[#475467] bg-white border border-[#E5E7EB]"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
