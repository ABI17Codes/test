'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BENTO_COLLECTIONS = [
  {
    title: 'VIP Executive Hampers',
    description: 'Five-piece signature hampers in gold-foil gift boxes, curated for leadership gifting.',
    pills: ['5-in-1 & 4-in-1 configurations', 'Free 3D digital proof'],
    image: '/images/home/bento-hampers.jpg',
    href: '/gift-sets',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'Engineered Corporate Backpacks',
    description: 'NINJA GEAR ORIGINAL — anti-theft commuter packs built in ballistic weaves.',
    pills: ['NINJA GEAR ORIGINAL', '2-year warranty'],
    image: '/images/home/bento-backpacks.jpg',
    href: '/bags',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'ADMA London Travel Collection',
    description: 'Executive cabin trolleys, leather weekenders and oxford carrywear.',
    pills: ['Full-grain leather', '3-year warranty'],
    image: '/images/home/bento-adma.jpg',
    href: '/bags',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'Sustainable Bamboo Gifts',
    description: 'Certified bamboo desk sets, cork stationery and zero-plastic packaging.',
    pills: ['FSC-certified bamboo', 'Zero-plastic packs'],
    image: '/images/home/bento-bamboo.jpg',
    href: '/products?category=gift-sets',
    colSpan: 'lg:col-span-7',
  },
];

export const SignatureCollections: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Section Header matching media_1793878039758_2b665fa3.jpg */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2.5 max-w-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0876B4]">
              Signature Collections
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-[#101828] tracking-[-0.025em] leading-[1.12]">
              Curated lines, engineered in-house
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0876B4] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all (20) products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Asymmetric 2-Row Bento Grid (7/5 then 5/7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-left">
          {BENTO_COLLECTIONS.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className={`${card.colSpan} group relative h-[290px] sm:h-[325px] rounded-2xl overflow-hidden block border border-[#E5E7EB]/80 shadow-xs hover:shadow-xl transition-all duration-300`}
            >
              {/* Full-bleed Photo */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-103 transition-transform duration-500"
              />

              {/* Subtle Dark Gradient Shading for Title Readability */}
              <div className="absolute inset-x-0 bottom-0 h-[66%] bg-gradient-to-t from-[#161B22]/90 via-[#1E242E]/45 to-transparent pointer-events-none" />

              {/* Frosted Glass Bottom Panel matching reference */}
              <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[#2B323D]/55 backdrop-blur-md border-t border-white/10 pointer-events-none" />

              {/* Text & Glassmorphic Pills */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
                <h3 className="text-lg sm:text-[21px] font-bold text-white tracking-tight drop-shadow-xs mb-2.5">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-white/90 leading-snug max-w-md mb-3.5 font-normal">
                  {card.description}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  {card.pills.map((pill, pIdx) => (
                    <span
                      key={pIdx}
                      className="px-3 py-1 rounded-full text-[11px] font-medium text-white/95 bg-white/14 backdrop-blur-md border border-white/25"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};
