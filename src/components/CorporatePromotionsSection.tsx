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
  ArrowRight,
  Factory,
  Layers
} from 'lucide-react';

const WHY_CHOOSE_PILLARS = [
  {
    title: 'Direct Factory Backpack Manufacturing',
    description: '100% in-house manufacturing atelier in Bengaluru with computerized cutting, bar-tacking, and assembly across 32 proprietary bag models.',
    pills: ['Primary Business Focus', 'Zero Middlemen', '50 to 50,000+ MOQ'],
    icon: Factory,
    href: '/bags',
  },
  {
    title: 'In-House Brands: Ninja Gear & ADMA London',
    description: 'Two proprietary registered carrywear brands engineered for high performance—featuring anti-theft zips, USB ports, and rain covers.',
    pills: ['Registered Brands', 'Authentic IP', '1-Yr Warranty'],
    icon: Layers,
    href: '/bags',
  },
  {
    title: '1-Year Direct Replacement Warranty',
    description: 'Every corporate backpack manufactured by Globrands Lifestyle Pvt. Ltd. is backed by an unconditional 1-year stitch and hardware warranty.',
    pills: ['Zero-Defect Guarantee', 'Direct Factory Backing'],
    icon: Award,
    href: '/about',
  },
  {
    title: 'Secondary Business: Corporate Gifting Hampers',
    description: 'Comprehensive corporate gifting solutions including employee welcome kits, smart LED vacuum bottles, and curated executive gift hampers.',
    pills: ['Secondary Business Segment', 'Welcome Kits & Tech'],
    icon: Sparkles,
    href: '/gift-sets',
  },
  {
    title: 'In-House Precision Branding Studio',
    description: 'Permanent fiber laser engraving, Japanese Tajima embroidery, UV digital printing, and hot foil debossing under our single roof.',
    pills: ['Pantone Precision', 'Laser, UV & Screen'],
    icon: Palette,
    href: '/branding',
  },
  {
    title: 'Multi-City Pallet & Doorstep Dispatch',
    description: 'Reliable nationwide dispatches to enterprise branch offices or individual employee doorstep kitting across 28 Indian states.',
    pills: ['99.8% On-Time SLA', 'Pan-India Coverage'],
    icon: Truck,
    href: '/solutions',
  }
];

export const CorporatePromotionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5F7FA] via-slate-100/70 to-[#F5F7FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 text-left">
          <div className="space-y-2 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              Manufacturing Infrastructure &amp; Capabilities
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Why Enterprises Partner with Globrands Lifestyle Pvt. Ltd.
            </h2>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>Learn about our Bengaluru factory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {WHY_CHOOSE_PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="group rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D49B27]/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xs hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FDF8EC] to-[#F3E3B8]/60 border border-[#F3E3B8] flex items-center justify-center text-[#D49B27] group-hover:scale-105 transition-transform shadow-xs">
                    <Icon className="w-6 h-6 text-[#C69214]" />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-[#101828] group-hover:text-[#0876B4] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#667085] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[#F2F4F7] flex flex-wrap gap-1.5">
                  {item.pills.map((p, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-2 py-0.5 rounded-md bg-[#F8FAFC] border border-[#E5E7EB] text-[10px] text-[#475467] font-medium"
                    >
                      {p}
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
