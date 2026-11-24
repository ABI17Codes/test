'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Factory,
  Phone
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { COMPANY_INFO } from '../../data/siteContent';

export default function BrandsPage() {
  // Show only 3 flagship models per In-House Brand (per Shravya ma'am: "1, 2, 3 images is fine — don't show too many")
  const ninjaGearProducts = PRODUCTS.filter(p => p.brand === 'Ninja Gear').slice(0, 3);
  const admaProducts = PRODUCTS.filter(p => p.brand === 'ADMA London').slice(0, 3);

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen space-y-12">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-10">

        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">In-House Brands (Ninja Gear &amp; ADMA London)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              GLOBRANDS LIFESTYLE PVT. LTD. &bull; IN-HOUSE MANUFACTURED BRANDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Our In-House Brands:{' '}
            <span className="text-[#0B4F82]">
              Ninja Gear &amp; ADMA London
            </span>
          </h1>

          <p className="text-sm text-[#475569] max-w-3xl font-normal leading-relaxed">
            We design and manufacture our own registered brands in Bengaluru with a 1-Year Warranty and in-house <strong>DTF Printing, Embroidery &amp; Screen Printing</strong>. Below are our top 3 flagship models from each brand — call us directly for our full weekly model catalog.
          </p>
        </div>

        {/* 1. NINJA GEAR ORIGINAL (Top 3 Flagship Models) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#FDE68A] shadow-xs text-left space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#FDE68A]">
            <div className="flex items-center gap-4">
              <div className="h-16 w-28 rounded-xl overflow-hidden border border-[#FCD34D] bg-white p-2 flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-extrabold text-[#B45309] uppercase tracking-wider block">
                  In-House Brand #1 &bull; Anti-Theft &bull; USB Tech
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                  NINJA GEAR ORIGINAL (Top 3 Flagship Models)
                </h2>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-[#E5A93C] hover:bg-[#D4952A] text-[#0F172A] text-xs font-extrabold whitespace-nowrap self-start md:self-center transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Enquire for Bulk: {COMPANY_INFO.contact.corporatePhone}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ninjaGearProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 2. ADMA LONDON (Top 3 Flagship Models) */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#BFDBFE] shadow-xs text-left space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#DBEAFE]">
            <div className="flex items-center gap-4">
              <div className="h-16 w-28 rounded-xl overflow-hidden border border-[#93C5FD] bg-white p-2 flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-[11px] font-mono font-extrabold text-[#0B4F82] uppercase tracking-wider block">
                  In-House Brand #2 &bull; Executive &bull; Rain Cover &bull; Travel
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                  ADMA LONDON (Top 3 Flagship Models)
                </h2>
              </div>
            </div>

            <Link
              href="/bags"
              className="px-5 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold whitespace-nowrap self-start md:self-center transition-all flex items-center gap-2"
            >
              <span>See Partner Brands (Skybags, Arctic Hunter, Swiss Military)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {admaProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
