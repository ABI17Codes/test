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
  Lock,
  Droplets,
  Factory,
  Sparkles
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BrandsPage() {
  const ninjaGearProducts = PRODUCTS.filter(p => p.brand === 'Ninja Gear').slice(0, 4);
  const admaProducts = PRODUCTS.filter(p => p.brand === 'ADMA London').slice(0, 4);
  const globrandsProducts = PRODUCTS.filter(p => p.brand.startsWith('Globrands')).slice(0, 4);

  return (
    <div className="py-10 bg-gradient-to-b from-[#F5F0E8] via-[#F5F0E8] to-[#F5F0E8] min-h-screen space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#69635C]">
            <Link href="/" className="hover:text-[#211D1A]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A98554] font-semibold">In-House Brand Portfolio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D8] border border-[#C5A16D] shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-[#A98554]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#A98554]">
              GLOBRANDS LIFESTYLE PVT. LTD. &bull; PROPRIETARY REGISTERED BRANDS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-[-0.03em]">
            Proprietary Carrywear &amp;{' '}
            <span className="brand-gradient-text">
              In-House Brand Portfolio
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#69635C] max-w-3xl font-normal leading-relaxed">
            At <strong className="text-[#211D1A]">Globrands Lifestyle Pvt. Ltd.</strong>, we are primary backpack manufacturers with direct factory production in Bengaluru. We own, design, and assemble every product under our registered proprietary brand identities—backed by our 1-Year Direct Factory Replacement Warranty.
          </p>
        </div>

        {/* 1. NINJA GEAR ORIGINAL (Primary Brand) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE3D8] hover:border-amber-400/60 shadow-xs hover:shadow-xl transition-all text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#EAE3D8]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-36 rounded-2xl overflow-hidden border border-[#EAE3D8] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider block">
                  Primary In-House Brand &bull; Tactical &bull; Antitheft &bull; Tech
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A]">
                  NINJA GEAR ORIGINAL
                </h2>
                <p className="text-xs sm:text-sm text-[#69635C] mt-1 max-w-xl">
                  Flagship engineered technical backpacks. Features concealed rear anti-theft zips, external USB fast charging, 17&quot; suspended laptop protection, and breathable honeycomb back mesh.
                </p>
              </div>
            </div>

            <Link
              href="/bags?brand=Ninja+Gear"
              className="px-6 py-3 rounded-xl bg-[#C5A16D] hover:bg-[#A98554] text-[#211D1A] text-xs font-bold whitespace-nowrap self-start md:self-center transition-all shadow-xs flex items-center gap-2"
            >
              <span>View Ninja Gear Collection ({PRODUCTS.filter(p => p.brand === 'Ninja Gear').length} Models)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ninjaGearProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 2. ADMA LONDON (Primary Brand) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE3D8] hover:border-sky-400/60 shadow-xs hover:shadow-xl transition-all text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#EAE3D8]">
            <div className="flex items-center gap-5">
              <div className="h-20 w-36 rounded-2xl overflow-hidden border border-[#EAE3D8] bg-white p-3 shadow-2xs flex items-center justify-center shrink-0">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion"
                  className="max-h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#A98554] uppercase tracking-wider block">
                  Primary In-House Brand &bull; Executive &bull; Weatherproof &bull; Travel
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A]">
                  ADMA LONDON
                </h2>
                <p className="text-xs sm:text-sm text-[#69635C] mt-1 max-w-xl">
                  &ldquo;A Real Companion&rdquo; for enterprise commute and business travel. Features integrated deployable waterproof rain covers, RFID security pockets, 38L–40L jumbo compartments, and isolated shoe sacks.
                </p>
              </div>
            </div>

            <Link
              href="/bags?brand=ADMA+London"
              className="px-6 py-3 rounded-xl bg-[#A98554] hover:bg-[#40352D] text-white text-xs font-bold whitespace-nowrap self-start md:self-center transition-all shadow-xs flex items-center gap-2"
            >
              <span>View ADMA London Collection ({PRODUCTS.filter(p => p.brand === 'ADMA London').length} Models)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {admaProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

        {/* 3. GLOBRANDS LIFESTYLE PVT. LTD. (Parent Atelier & Secondary Corporate Gifting) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#EAE3D8] shadow-xs text-left space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#EAE3D8]">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border border-[#EAE3D8] bg-white p-2 shadow-2xs shrink-0 flex items-center justify-center">
                <img
                  src="/globrands-emblem-clean.png"
                  alt="Globrands Lifestyle Pvt. Ltd."
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#211D1A] uppercase tracking-wider block">
                  Parent Manufacturing Company &bull; Secondary Corporate Gifting Focus
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#211D1A]">
                  GLOBRANDS LIFESTYLE PVT. LTD.
                </h2>
                <p className="text-xs sm:text-sm text-[#69635C] mt-1 max-w-xl">
                  Direct factory backpack manufacturing facility in Bengaluru alongside turnkey corporate gifting hampers, smart LED temperature flasks, bamboo drinkware, and bespoke welcome kits.
                </p>
              </div>
            </div>

            <Link
              href="/gift-sets"
              className="px-6 py-3 rounded-xl bg-[#211D1A] hover:bg-[#A98554] text-white text-xs font-bold whitespace-nowrap self-start md:self-center transition-all flex items-center gap-2 shadow-xs"
            >
              <span>Explore Gifting Hampers ({PRODUCTS.filter(p => p.brand.startsWith('Globrands')).length} Sets)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globrandsProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
