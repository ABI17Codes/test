'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';

const COLLECTIONS = [
  {
    id: 'hampers',
    title: 'VIP Executive Hampers',
    tagline: 'All-in-One Luxury Suites',
    description: 'Curated corporate gift sets featuring smart LED temperature flasks, wireless optical mice, metallic signature pens, and executive journals in magnetic presentation boxes.',
    image: '/catalog/crops/hgs_h74.jpg',
    href: '/gift-sets',
    badge: 'Flagship 2026',
    features: [
      'Smart Temp LED Vacuum Flask',
      'Ergonomic Wireless Silent Mouse',
      'Magnetic A5 Executive Journal',
      'Heavy Metal Signature Rollerball'
    ],
    ctaText: 'Explore Hamper Collections'
  },
  {
    id: 'ninja-gear',
    title: 'Engineered Corporate Backpacks',
    tagline: 'Ninja Gear Original Series',
    description: 'High-performance corporate backpacks featuring concealed antitheft architecture, 15.6" padded laptop sleeves, USB fast charging, and all-weather ballistic dobby fabric.',
    image: '/catalog/crops/boxer_ninja_gear_main.jpg',
    href: '/bags',
    badge: '1-Year Factory Warranty',
    features: [
      '15.6" Shockproof Laptop Vault',
      'Integrated USB Fast-Charging Port',
      'Concealed Anti-Theft Zipper Design',
      'Tear-Resistant Ballistic Dobby'
    ],
    ctaText: 'Explore Corporate Backpacks'
  },
  {
    id: 'adma-london',
    title: 'ADMA London Travel Collection',
    tagline: 'British Heritage Office & Travel',
    description: 'Executive carrywear with integrated waterproof rain covers, orthopedic air-mesh spinal backing, and reinforced stress joints designed for business executives on the move.',
    image: '/catalog/crops/volvo_2_adma_london_main.jpg',
    href: '/bags',
    badge: 'Rain Cover Integrated',
    features: [
      'Concealed High-Vis Rain Cover',
      'Orthopedic Ergonomic Air Mesh',
      'Dual Quick-Stash Tech Pockets',
      'Reinforced Bar-Tack Seams'
    ],
    ctaText: 'Explore ADMA London Series'
  },
  {
    id: 'bamboo-eco',
    title: 'Sustainable Bamboo Gifts',
    tagline: 'Eco-Conscious ESG Solutions',
    description: '100% biodegradable natural cork notebooks, vacuum-insulated double-wall bamboo bottles, and laser-engraved bamboo desk accessories for eco-forward corporate programs.',
    image: '/catalog/crops/hgs_h66.jpg',
    href: '/gift-sets',
    badge: '100% Natural Cork & Bamboo',
    features: [
      'Natural Cork Hardbound A5 Diary',
      'Insulated Bamboo Vacuum Thermos',
      'Natural Moso Bamboo Writing Pen',
      'Recycled Kraft Keepsake Box'
    ],
    ctaText: 'Explore Sustainable Gifts'
  }
];

export const SignatureCollections: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F7FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="live-pulse">
                <span className="bg-[#0876B4]" />
                <span className="bg-[#0876B4]" />
              </span>
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
                Curated Brand Architecture
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-[-0.035em]">
              Signature collections,{' '}
              <span className="brand-gradient-text">
                built for scale.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
              Every collection is manufactured in-house, custom branded to your Pantone specs, and backed by a zero-defect milestone guarantee.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 btn-primary text-xs sm:text-sm self-start md:self-end group cursor-pointer"
          >
            <span>Browse Full Directory (180+ SKUs)</span>
            <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Signature Collection Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 text-left">
          {COLLECTIONS.map((col, idx) => (
            <div 
              key={col.id}
              className="premium-card p-0 flex flex-col justify-between group bg-white"
            >
              {/* Product Staging Image */}
              <Link
                href={col.href}
                className="block relative aspect-[16/10] bg-gradient-to-b from-[#F5F7FA] via-white to-[#EEF2F6] overflow-hidden border-b border-[#E5E7EB] p-8 flex items-center justify-center cursor-pointer"
              >
                <img
                  src={col.image}
                  alt={col.title}
                  className="max-h-full max-w-full object-contain rounded-xl drop-shadow-lg group-hover:scale-104 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0876B4] text-[10px] font-extrabold tracking-wider uppercase border border-[#E5E7EB] shadow-2xs">
                    0{idx + 1} &bull; {col.tagline}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#101828]/85 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                    {col.badge}
                  </span>
                </div>

                <div className="absolute inset-0 bg-neutral-900/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#101828] text-xs font-bold shadow-xl flex items-center gap-1.5 border border-[#E5E7EB]">
                    <span>{col.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#0876B4]" />
                  </span>
                </div>
              </Link>

              {/* Details Body */}
              <div className="p-6 sm:p-8 space-y-4 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] group-hover:text-[#0876B4] transition-colors tracking-tight">
                    {col.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1.5 leading-relaxed font-normal">
                    {col.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4">
                    {col.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#101828]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0876B4] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold">
                  <Link href={col.href} className="text-[#0876B4] flex items-center gap-1 hover:underline">
                    <span>{col.ctaText}</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <span className="text-[#667085] font-medium font-mono text-[11px]">Direct Factory Pricing</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
