'use client';

import React from 'react';
import Link from 'next/link';
import {
  Gift,
  ChevronRight,
  Phone,
  MessageSquare
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { CORPORATE_GIFTING_DATA, COMPANY_INFO } from '../../data/siteContent';

export default function GiftSetsPage() {
  // Per Shravya ma'am: "1, 2, 3 images is fine! Sustainable bamboo is fine. Add trophies, apparels, trolleys, kitchen essentials, and brand category. Don't upload dozens of repetitive sets."
  const topGiftBoxes = ['hgs-h74', 'hgs-h71', 'hgs-h65']
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  const bambooAndBottles = ['hgs-h35', 'hgs-h117', 'hgs-h118']
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-12">

        {/* Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">Corporate Gifting (A to Z)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FCD34D]">
            <Gift className="w-3.5 h-3.5 text-[#B45309]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#92400E]">
              SECONDARY BUSINESS &bull; A-TO-Z CORPORATE GIFTING SOLUTIONS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            A-to-Z Corporate Gifting &amp;{' '}
            <span className="text-[#0B4F82]">
              Employee Welcome Kits
            </span>
          </h1>

          <p className="text-sm text-[#475569] max-w-3xl font-normal leading-relaxed">
            We supply complete corporate gifting categories across India — from <strong>Welcome Kits, Sustainable Bamboo, and Drinkware</strong> to <strong>Trophies &amp; Medals, Apparels, Brand Trolleys, Kitchen Essentials, and Multi-Brand Gifts</strong>. Call our Corporate Desk directly for custom combinations and bulk pricing.
          </p>
        </div>

        {/* All Corporate Gifting Categories with 4-Image Grids */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {CORPORATE_GIFTING_DATA.categories.map((cat, idx) => {
            const IconComp = cat.icon;
            const multiImages = (cat as any).images || [cat.image];
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border-2 border-[#DBEAFE] overflow-hidden shadow-2xs flex flex-col justify-between"
              >
                <div className="p-3 bg-[#F0F7FF] border-b border-[#DBEAFE] relative">
                  <div className="grid grid-cols-2 gap-2">
                    {multiImages.slice(0, 4).map((imgSrc: string, i: number) => (
                      <div key={i} className="aspect-[4/3] rounded-lg bg-white border border-[#E2E8F0] p-1 flex items-center justify-center">
                        <img src={imgSrc} alt={`${cat.title} ${i + 1}`} className="w-full h-full object-contain" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <span className="absolute top-4 left-4 text-[9px] font-mono font-extrabold uppercase px-2.5 py-0.5 rounded-full bg-[#0B4F82] text-white">
                    {cat.tag}
                  </span>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#0B4F82] mb-1">
                      <IconComp className="w-4 h-4 text-[#D97706]" />
                      <span className="text-[10px] font-mono uppercase font-bold">{cat.subtitle}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-[#0F172A]">{cat.title}</h3>
                    <p className="text-xs text-[#475569] mt-1 leading-relaxed">{cat.description}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <a
                      href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
                      className="text-xs font-extrabold text-[#0B4F82] hover:text-[#D97706] flex items-center gap-1"
                    >
                      <Phone className="w-3 h-3" />
                      <span>Call for Options</span>
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${encodeURIComponent(`Hello Globrands, please share options and bulk pricing for ${cat.title}.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concise 3 Sample Welcome Kits (Instead of 18 repetitive boxes) */}
        <div className="space-y-4 text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
            Sample Executive Gift Boxes (3 Featured Sets)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topGiftBoxes.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Concise 3 Sample Bamboo & Drinkware Items */}
        {bambooAndBottles.length > 0 && (
          <div className="space-y-4 text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
              Sample Sustainable Bamboo &amp; Vacuum Drinkware (3 Featured Items)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {bambooAndBottles.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
