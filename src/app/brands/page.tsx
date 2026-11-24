'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronRight,
  Factory
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BrandsPage() {
  const ninjaGearProducts = PRODUCTS.filter(p => p.brand === 'Ninja Gear');
  const admaProducts = PRODUCTS.filter(p => p.brand === 'ADMA London');

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen space-y-14">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">

        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">In-House Brands (Ninja Gear &amp; ADMA London)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              GLOBRANDS LIFESTYLE PVT. LTD. &bull; 100% IN-HOUSE MANUFACTURED BRANDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            Our Registered In-House Brands:{' '}
            <span className="text-[#0B4F82]">
              Ninja Gear &amp; ADMA London
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-3xl font-normal leading-relaxed">
            At <strong className="text-[#0B4F82]">Globrands Lifestyle Pvt. Ltd.</strong>, we own, design, and manufacture every product under our two registered brands in Bengaluru — backed by our 1-Year Direct Factory Replacement Warranty and customized with <strong>DTF Printing, Embroidery &amp; Screen Printing</strong>. (Looking for partner brands like Skybags, Arctic Hunter, or Swiss Military? Visit our <Link href="/bags" className="text-[#0B4F82] font-bold underline">Backpacks &amp; Bags</Link> page).
          </p>
        </div>

        {/* 1. NINJA GEAR ORIGINAL (All 12 Models with Front/Back/Side Angle Switcher) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#FDE68A] shadow-sm text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#FDE68A]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-36 rounded-2xl overflow-hidden border border-[#FCD34D] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-extrabold text-[#B45309] uppercase tracking-wider block">
                  In-House Registered Brand #1 &bull; Tactical &bull; Anti-Theft &bull; USB Tech
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  NINJA GEAR ORIGINAL ({ninjaGearProducts.length} Models)
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-xl">
                  Engineered technical backpacks with concealed rear anti-theft zips, external USB charging, 17&quot; padded laptop protection, and breathable honeycomb back mesh.
                </p>
              </div>
            </div>

            <Link
              href="/bags?brand=Ninja+Gear"
              className="px-6 py-3 rounded-xl bg-[#E5A93C] hover:bg-[#D4952A] text-[#0F172A] text-xs font-extrabold whitespace-nowrap self-start md:self-center transition-all shadow-xs flex items-center gap-2"
            >
              <span>Filter Ninja Gear in Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ninjaGearProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 2. ADMA LONDON (All 20 Models with Front/Back/Side Angle Switcher) */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#BFDBFE] shadow-sm text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#DBEAFE]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-36 rounded-2xl overflow-hidden border border-[#93C5FD] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-extrabold text-[#0B4F82] uppercase tracking-wider block">
                  In-House Registered Brand #2 &bull; Executive &bull; Rain Cover &bull; Travel
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A]">
                  ADMA LONDON ({admaProducts.length} Models)
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-1 max-w-xl">
                  &ldquo;A Real Companion&rdquo; for enterprise commute and business travel. Features integrated waterproof rain covers, RFID pockets, 38L–40L jumbo compartments, and shoe pouches.
                </p>
              </div>
            </div>

            <Link
              href="/bags?brand=ADMA+London"
              className="px-6 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold whitespace-nowrap self-start md:self-center transition-all shadow-xs flex items-center gap-2"
            >
              <span>Filter ADMA London in Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admaProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
