'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Sparkles, 
  Palette, 
  Truck, 
  Gift, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  CalendarCheck
} from 'lucide-react';

const CORPORATE_BENEFITS = [
  {
    title: 'Corporate Bulk Order Benefits',
    badge: 'Tiered Volume Slabs',
    description: 'Direct factory pricing with transparent volume discounts on 50 to 10,000+ units. Zero broker markups.',
    icon: Building2,
    href: '/quote',
    tag: 'Procurement Friendly'
  },
  {
    title: 'Custom Branding & Logo Engraving',
    badge: 'In-House Studio',
    description: 'Permanent fiber laser debossing, Japanese Tajima embroidery, and UV print matched to your exact corporate Pantone.',
    icon: Palette,
    href: '/branding',
    tag: 'Brand Fidelity'
  },
  {
    title: 'Free 3D Digital Proofing',
    badge: '24-Hour SLA',
    description: 'Receive photorealistic digital mockups and tangible golden samples for executive leadership sign-off before manufacturing.',
    icon: Sparkles,
    href: '/branding',
    tag: 'Pre-Production Approval'
  },
  {
    title: 'Enterprise Employee Welcome Kits',
    badge: 'HR Onboarding',
    description: 'Curated welcome kits that make new hires feel valued from Day 1, packed in custom magnetic keepsake boxes.',
    icon: Layers,
    href: '/solutions',
    tag: 'Turnkey Onboarding'
  },
  {
    title: 'Festival & Diwali Corporate Gifting',
    badge: 'Annual Celebrations',
    description: 'Pre-curated festive tech hampers and luxury dry fruit combos designed to meet strict festive dispatch timelines.',
    icon: Gift,
    href: '/gift-sets',
    tag: 'Festive Ready'
  },
  {
    title: 'Pan-India Multi-City Delivery',
    badge: 'Doorstep SLA',
    description: 'Direct individual doorstep deliveries to remote employees or palletized dispatches to multi-city branch offices.',
    icon: Truck,
    href: '/solutions',
    tag: 'Nationwide Logistics'
  }
];

export const CorporatePromotionsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200">
            <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              Enterprise Procurement Advantages
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-[-0.035em]">
            Built for procurement leaders,{' '}
            <span className="brand-gradient-text">
              trusted by HR teams.
            </span>
          </h2>

          <p className="text-base text-[#667085] font-normal leading-relaxed">
            Eliminating guesswork with transparent factory-direct pricing, guaranteed SLA milestones, and comprehensive branding support.
          </p>
        </div>

        {/* 6 Corporate Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {CORPORATE_BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Link
                key={idx}
                href={item.href}
                className="premium-card p-7 flex flex-col justify-between group hover:border-[#0876B4]/50 cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50/80 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#0876B4]" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#F5F7FA] text-[#667085] border border-[#E5E7EB]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-[#101828] group-hover:text-[#0876B4] transition-colors tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-semibold text-[#0876B4]">
                  <span>{item.tag}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
