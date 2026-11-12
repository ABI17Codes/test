'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const SIGNATURE_CARDS = [
  {
    title: 'VIP Executive Hampers',
    description: 'Five-piece signature hampers in gold-foil gift boxes, curated for leadership gifting and executive onboarding.',
    pills: ['5-in-1 & 4-in-1 configurations', 'Free 3D digital proof'],
    image: '/images/home/dark-hero-hamper.jpg',
    href: '/gift-sets',
    meta: '18 Curated Gift Sets',
  },
  {
    title: 'Engineered Corporate Backpacks',
    description: 'NINJA GEAR ORIGINAL — anti-theft commuter packs built in water-resistant ballistic weaves with USB charging.',
    pills: ['NINJA GEAR ORIGINAL', '1-year warranty'],
    image: '/images/home/dark-backpack.jpg',
    href: '/bags',
    meta: '20+ Backpack Models',
  },
  {
    title: 'ADMA London Travel Collection',
    description: 'Executive cabin trolleys, leather weekenders and oxford carrywear engineered for frequent business travel.',
    pills: ['Full-grain leather', '3-year warranty'],
    image: '/images/home/dark-travel.jpg',
    href: '/bags',
    meta: 'Executive Travel Series',
  },
  {
    title: 'Sustainable Bamboo Gifts',
    description: 'Certified bamboo desk sets, organic vacuum flasks, cork stationery and zero-plastic corporate packaging.',
    pills: ['FSC-certified bamboo', 'Zero-plastic packs'],
    image: '/images/home/dark-bamboo.jpg',
    href: '/products?category=gift-sets',
    meta: '100% Eco-Conscious Line',
  },
];

export const SignatureCollections: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Header matching slice_2.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-lg">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              Signature Collections
            </p>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Curated lines, engineered in-house
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (180+) products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2x2 Grid of Dark-Image + White-Footer Cards matching slice_2.jpg & slice_3.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {SIGNATURE_CARDS.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#D49B27]/50 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Dark Studio Image Frame */}
                <div className="relative aspect-[16/9] bg-[#0B111E] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Top-Left Floating White Pills */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                    {card.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-md bg-white/95 text-[#101828] text-[10px] font-bold shadow-xs"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom White Body */}
                <div className="p-6 pb-4 space-y-2">
                  <h3 className="font-editorial text-xl font-bold text-[#101828] group-hover:text-[#C69214] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Footer Divider Row */}
              <div className="px-6 py-4 border-t border-[#F2F4F7] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#475467]">
                  {card.meta}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C69214] group-hover:translate-x-0.5 transition-transform">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
