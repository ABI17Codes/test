'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  ShieldCheck, 
  ChevronRight, 
  Award, 
  Zap, 
  Lock, 
  BatteryCharging, 
  ArrowRight,
  Droplets,
  Laptop,
  CheckCircle2,
  Truck,
  Sparkles
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BagsPage() {
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'Ninja Gear' | 'ADMA London'>('all');
  const [bagTypeFilter, setBagTypeFilter] = useState<string>('all');

  const allBags = PRODUCTS.filter((p) => p.category === 'bags');

  const filteredBags = allBags.filter((bag) => {
    const matchesBrand = selectedBrand === 'all' || bag.brand === selectedBrand;
    const nameLower = bag.name.toLowerCase();
    const descLower = bag.description.toLowerCase();
    const tagsLower = bag.tags.map(t => t.toLowerCase()).join(' ');

    const matchesType =
      bagTypeFilter === 'all' ||
      (bagTypeFilter === 'antitheft' && (tagsLower.includes('antitheft') || descLower.includes('anti-theft') || descLower.includes('antitheft'))) ||
      (bagTypeFilter === 'laptop' && (nameLower.includes('backpack') || nameLower.includes('boxer') || nameLower.includes('volvo') || nameLower.includes('smart'))) ||
      (bagTypeFilter === '17inch' && (nameLower.includes('volvo') || nameLower.includes('boxer') || descLower.includes('17') || descLower.includes('15.6'))) ||
      (bagTypeFilter === 'waterproof' && (descLower.includes('rain cover') || descLower.includes('water') || tagsLower.includes('weather'))) ||
      (bagTypeFilter === 'duffle' && (nameLower.includes('duffle') || nameLower.includes('gym') || nameLower.includes('overnighter'))) ||
      (bagTypeFilter === 'sleeve' && (nameLower.includes('sleeve') || nameLower.includes('sling') || nameLower.includes('pouch'))) ||
      (bagTypeFilter === 'travel' && (nameLower.includes('rucksack') || nameLower.includes('trolley') || nameLower.includes('kamiliant') || nameLower.includes('mountain')));
    return matchesBrand && matchesType;
  });

  return (
    <div className="py-10 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">Corporate Bags &amp; Laptop Backpacks</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Briefcase className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              GLOBRANDS BAG CATALOGUE 2026 &bull; B2B DIRECT FACTORY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight">
            Corporate Laptop Bags, Backpacks &amp;{' '}
            <span className="brand-gradient-text">
              Travel Carrywear
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            Engineered, patented, and manufactured by Globrands Lifestyle in Bengaluru. Featuring proprietary sub-brands <strong>Ninja Gear Original</strong> and <strong>ADMA London</strong> with an authentic 1-Year Direct Factory Replacement Warranty on all corporate orders.
          </p>
        </div>

        {/* Dual Brand Selector Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Ninja Gear Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'Ninja Gear' ? 'all' : 'Ninja Gear')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'Ninja Gear'
                ? 'bg-white border-[#0876B4] shadow-lg ring-2 ring-[#0876B4]/30'
                : 'bg-white border-[#E5E7EB] hover:border-neutral-300 shadow-2xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original Corporate Laptop Bags"
                  className="h-12 object-contain rounded-lg"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Tech &amp; Antitheft Series
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#101828]">
                NINJA GEAR ORIGINAL
              </h3>
              <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                Engineered with concealed anti-theft zipper geometry, quick-access RFID card pockets, external USB fast-charging ports, and reinforced tear-resistant ballistic poly fabric.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#0876B4]">
              <span>{selectedBrand === 'Ninja Gear' ? 'Showing Ninja Gear Bags ✓' : 'Filter Ninja Gear Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#E8B43A]" />
            </div>
          </div>

          {/* ADMA London Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'ADMA London' ? 'all' : 'ADMA London')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'ADMA London'
                ? 'bg-white border-[#0876B4] shadow-lg ring-2 ring-[#0876B4]/30'
                : 'bg-white border-[#E5E7EB] hover:border-neutral-300 shadow-2xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion Corporate Bags"
                  className="h-12 object-contain rounded-lg"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
                  Corporate &amp; Office Series
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#101828]">
                ADMA LONDON
              </h3>
              <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                &ldquo;A Real Companion&rdquo; for everyday executive travel. Features integrated waterproof rain covers, cushioned 15.6&quot; to 17&quot; laptop protection compartments, and professional corporate messengers.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-bold text-[#0876B4]">
              <span>{selectedBrand === 'ADMA London' ? 'Showing ADMA London Bags ✓' : 'Filter ADMA London Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform text-[#E8B43A]" />
            </div>
          </div>

        </div>

        {/* Filter Toolbar - High Intent Search Filters */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full lg:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: 'All Bags' },
              { id: 'laptop', label: 'Laptop Backpacks' },
              { id: '17inch', label: '17" & 15.6" Vault Bags' },
              { id: 'antitheft', label: 'Antitheft & USB' },
              { id: 'waterproof', label: 'Water-Resistant & Rain Cover' },
              { id: 'duffle', label: 'Duffle & Travel' },
              { id: 'sleeve', label: 'Laptop Sleeves & Slings' },
              { id: 'travel', label: 'Rucksacks & Trolley' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setBagTypeFilter(type.id)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                  bagTypeFilter === type.id
                    ? 'bg-[#101828] text-white shadow-xs'
                    : 'bg-[#F5F7FA] hover:bg-neutral-200/70 text-[#667085]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold shrink-0">
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              1-Year Warranty
            </span>
            <Link
              href="/catalog-viewer?type=bags"
              className="text-[#0E679C] hover:underline font-bold"
            >
              Open 36-Page Bag PDF →
            </Link>
          </div>
        </div>

        {/* Bags Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ======================================================= */}
        {/* SEO & CORPORATE PROCUREMENT INTELLIGENCE SECTION        */}
        {/* Target: High-Volume & High-CPC Commercial Search Intent */}
        {/* ======================================================= */}
        <section className="pt-12 pb-6 border-t border-neutral-200/90 text-left space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0E679C] text-[11px] font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Bengaluru Factory Atelier &bull; Direct Corporate Gifting</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Corporate Laptop Bags &amp; Backpacks Manufactured in Bangalore
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Globrands Lifestyle is India&apos;s trusted direct-from-factory manufacturer of corporate laptop bags, executive travel duffles, and tech backpacks. We eliminate intermediary commissions and deliver directly to enterprise offices in Bengaluru, Mumbai, Delhi NCR, Hyderabad, and Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E679C] flex items-center justify-center font-bold">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                15.6&quot; &amp; 17&quot; Laptop Compartment Architecture
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Engineered with high-density EVA shock-absorbing foam vaults, dedicated iPad sleeves, and anti-scratch velvet linings to protect enterprise IT assets during daily metro and flight transit.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#0E679C]">
                Featured in: BOXER 28L &bull; VOLVO 2.0 &bull; AVIATOR
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#F5B800] flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Water-Resistant Dobby &amp; Integrated Rain Cover
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Constructed from 1680D ballistic dobby with water-repellent coating. Models like the ADMA London Volvo feature a concealed all-weather rain cover deployed in seconds.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#F5B800]">
                Zero-Leakage Seam Sealing SLA
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-neutral-900">
                Custom Logo Printing &amp; Tajima Embroidery
              </h3>
              <p className="text-xs text-neutral-600 leading-relaxed">
                In-house custom branding studio offering high-density rubber print, reflective 3M safety graphics, metal badge riveting, and 12-needle Tajima Japanese thread embroidery calibrated to exact corporate Pantone guidelines.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-emerald-700">
                Free 3D Digital Proof in 24 Hours
              </div>
            </div>

          </div>

          {/* Quick FAQ Strip */}
          <div className="p-6 rounded-2xl bg-neutral-100/70 border border-neutral-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-neutral-900">
                Need customized laptop bags with your company logo for 50 to 5,000+ employees?
              </div>
              <div className="text-[11px] text-neutral-500">
                Minimum order: 50 units &bull; Ready stock dispatch: 2-4 days &bull; Pan-India delivery
              </div>
            </div>

            <Link
              href="/quote"
              className="px-5 py-2.5 rounded-full bg-[#0E679C] hover:bg-[#0A4E78] text-white text-xs font-bold transition-all shadow-xs shrink-0"
            >
              Request Custom Bulk Quote
            </Link>
          </div>

        </section>

      </div>
    </div>
  );
}
