'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  ArrowRight, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Zap, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BrandsPage() {
  const globrandsProducts = PRODUCTS.filter(p => p.brand === 'Globrands Lifestyle').slice(0, 4);
  const ninjaGearProducts = PRODUCTS.filter(p => p.brand === 'Ninja Gear').slice(0, 4);
  const admaProducts = PRODUCTS.filter(p => p.brand === 'ADMA London').slice(0, 4);

  return (
    <div className="py-10 bg-[#F5F7FA] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">Brand Portfolio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              GLOBRANDS LIFESTYLE CORPORATE UMBRELLA &bull; PROPRIETARY BRANDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-[-0.03em]">
            Our Engineered{' '}
            <span className="brand-gradient-text">
              Brand Portfolio
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            Every product we manufacture is engineered with exacting industrial standards under our proprietary brand portfolio. From patented antitheft geometries to executive corporate hampers, discover the craftsmanship behind each label.
          </p>
        </div>

        {/* 1. Globrands Lifestyle */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white p-2 shadow-2xs shrink-0">
                <img
                  src="/globrands-logo.jpg"
                  alt="Globrands Lifestyle"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#0876B4] uppercase tracking-wider block">
                  Parent Manufacturing Company
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
                  GLOBRANDS LIFESTYLE
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-xl">
                  Curator of luxury executive hampers, smart temperature bottles, bamboo eco sets, and bespoke employee welcome kits across India.
                </p>
              </div>
            </div>

            <Link
              href="/products?brand=Globrands+Lifestyle"
              className="px-6 py-3 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs font-bold whitespace-nowrap self-start md:self-center transition-colors"
            >
              View Globrands Products ({PRODUCTS.filter(p => p.brand === 'Globrands Lifestyle').length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globrandsProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 2. Ninja Gear Original */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-32 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">
                  Innovative Tech Gear Series
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
                  NINJA GEAR ORIGINAL
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-xl">
                  Our flagship engineered backpack line. Built with concealed antitheft architecture, quick-access tech organizers, and external USB ports.
                </p>
              </div>
            </div>

            <Link
              href="/products?brand=Ninja+Gear"
              className="px-6 py-3 rounded-full bg-[#E8B43A] hover:bg-[#d4a02c] text-[#101828] text-xs font-bold whitespace-nowrap self-start md:self-center transition-colors shadow-xs"
            >
              View Ninja Gear Bags ({PRODUCTS.filter(p => p.brand === 'Ninja Gear').length}) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ninjaGearProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 3. ADMA London */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-32 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#0876B4] uppercase tracking-wider block">
                  Corporate &amp; Office Lifestyle Series
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
                  ADMA LONDON
                </h2>
                <p className="text-xs sm:text-sm text-[#667085] mt-1 max-w-xl">
                  &ldquo;A Real Companion&rdquo; for executive daily commute. Features built-in waterproof rain covers, luggage trolley sleeves, and multi-compartment executive messenger cases.
                </p>
              </div>
            </div>

            <Link
              href="/products?brand=ADMA+London"
              className="px-6 py-3 rounded-full bg-[#0876B4] hover:bg-[#075f91] text-white text-xs font-bold whitespace-nowrap self-start md:self-center transition-colors shadow-xs"
            >
              View ADMA London Bags ({PRODUCTS.filter(p => p.brand === 'ADMA London').length}) &rarr;
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
