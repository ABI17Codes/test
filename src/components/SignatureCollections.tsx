'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const SIGNATURE_CARDS = [
  {
    title: 'Ninja Gear Technical Backpacks',
    eyebrow: 'Primary Focus • In-House Brand',
    description: 'Proprietary anti-theft commuter packs engineered with concealed zippers, USB fast-charging conduits, and water-repellent ballistic weaves.',
    pills: ['NINJA GEAR ORIGINAL', 'Anti-Theft Zips', '1-Year Factory Warranty'],
    image: '/catalog/backpacks-dark/bg-boxer.jpg',
    href: '/bags?brand=Ninja+Gear',
    meta: '12 Factory Models',
  },
  {
    title: 'ADMA London Executive Carrywear',
    eyebrow: 'In-House Brand • Weatherproof',
    description: 'British-inspired executive backpacks and business travel gear featuring deployable high-viz rain covers, RFID security, and 40L jumbo compartments.',
    pills: ['ADMA LONDON', 'Rain Cover Included', '38L–40L Jumbo'],
    image: '/catalog/backpacks-dark/bg-volvo-2.jpg',
    href: '/bags?brand=ADMA+London',
    meta: '20 Factory Models',
  },
  {
    title: 'VIP Executive Hampers & Welcome Kits',
    eyebrow: 'Secondary Focus • Corporate Gifting',
    description: 'Curated 5-in-1 and 4-in-1 signature executive hampers in luxury gold-foil presentation boxes for employee onboarding and client gifting.',
    pills: ['Corporate Gifting Solutions', '5-in-1 Kits', 'Custom Packaging'],
    image: '/images/home/dark-hero-hamper.jpg',
    href: '/gift-sets',
    meta: '18 Curated Sets',
  },
  {
    title: 'Eco-Luxe Bamboo & Smart Drinkware',
    eyebrow: 'Secondary Focus • Gifting',
    description: 'Certified natural bamboo drinkware, smart LED temperature display vacuum flasks, and ceramic desk mugs engineered for daily hydration.',
    pills: ['SUS 304 Steel', 'Smart Temp Cap', 'Eco Bamboo'],
    image: '/images/home/dark-bamboo.jpg',
    href: '/products?category=drinkware',
    meta: 'Smart & Sustainable',
  },
];

export const SignatureCollections: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/50 to-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B27]" />
              <span>Signature Factory Lines &amp; Gifting</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
              Engineered In-House by Globrands Lifestyle Pvt. Ltd.
            </h2>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C69214] hover:text-[#101828] transition-colors self-start sm:self-end"
          >
            <span>View all products &rarr;</span>
          </Link>
        </div>

        {/* 2x2 Grid with Studio Frames */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {SIGNATURE_CARDS.map((card, idx) => (
            <Link
              key={idx}
              href={card.href}
              className="group rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#D49B27]/60 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Studio Image Frame */}
                <div className="relative aspect-[16/9] bg-[#0B132B] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-95"
                  />

                  {/* Top-Left Floating Badges */}
                  <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                    {card.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[#101828] text-[10px] font-bold shadow-xs"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>

                  {/* Top-Right Meta Chip */}
                  <div className="absolute top-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[10px] font-semibold border border-white/10">
                      {card.meta}
                    </span>
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="p-6 pb-4 space-y-2">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-[#D49B27]">
                    {card.eyebrow}
                  </span>
                  <h3 className="font-editorial text-xl font-bold text-[#101828] group-hover:text-[#C69214] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-[#667085] leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 py-3.5 bg-slate-50 border-t border-[#E5E7EB] flex items-center justify-between">
                <span className="text-[11px] font-semibold text-[#101828]">
                  Factory Direct Volume Pricing
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C69214] group-hover:translate-x-1 transition-transform">
                  <span>Explore Series</span>
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
