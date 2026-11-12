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
    <section className="py-20 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching slice_3.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              Why Choose Globrands
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Built for procurement leaders, trusted by HR teams
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>Explore Bengaluru factory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 White Pillars Grid matching slice_3.jpg & slice_4.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {WHY_CHOOSE_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#D49B27]/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#D49B27]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#101828] group-hover:text-[#C69214] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-[#F2F4F7] flex flex-wrap items-center gap-1.5">
                  {item.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-[#475467] bg-[#F8FAFC] border border-[#E5E7EB]"
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
