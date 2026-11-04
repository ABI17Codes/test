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
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function BagsPage() {
  const [selectedBrand, setSelectedBrand] = useState<'all' | 'Ninja Gear' | 'ADMA London'>('all');
  const [bagTypeFilter, setBagTypeFilter] = useState<string>('all');

  const allBags = PRODUCTS.filter((p) => p.category === 'bags');

  const filteredBags = allBags.filter((bag) => {
    const matchesBrand = selectedBrand === 'all' || bag.brand === selectedBrand;
    const matchesType =
      bagTypeFilter === 'all' ||
      (bagTypeFilter === 'antitheft' && bag.tags.includes('Antitheft')) ||
      (bagTypeFilter === 'laptop' && bag.name.toLowerCase().includes('backpack')) ||
      (bagTypeFilter === 'duffle' && (bag.name.toLowerCase().includes('duffle') || bag.name.toLowerCase().includes('gym'))) ||
      (bagTypeFilter === 'briefcase' && bag.name.toLowerCase().includes('messenger')) ||
      (bagTypeFilter === 'travel' && bag.name.toLowerCase().includes('rucksack'));
    return matchesBrand && matchesType;
  });

  return (
    <div className="py-12 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Breadcrumb & Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Corporate Bags & Backpacks</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <Briefcase className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              GLOBRANDS BAG CATALOGUE 2025
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            EXECUTIVE BAGS, LAPTOP BACKPACKS & DUFFLES
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Engineered, patented, and manufactured by Globrands Lifestyle in Bengaluru. Featuring proprietary sub-brands **Ninja Gear Original** and **ADMA London** with a 1-Year Manufacturer Warranty on all corporate orders.
          </p>
        </div>

        {/* Dual Brand Selector Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          
          {/* Ninja Gear Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'Ninja Gear' ? 'all' : 'Ninja Gear')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'Ninja Gear'
                ? 'bg-white border-[#b88e3e] shadow-lg ring-2 ring-[#b88e3e]/30'
                : 'bg-white border-neutral-200/90 hover:border-neutral-300 shadow-2xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="h-12 object-contain rounded-lg"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  Tech & High-Feature Series
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111317] font-serif-luxury">
                NINJA GEAR ORIGINAL
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                Engineered with concealed anti-theft zipper geometry, quick-access card pockets, external USB charging ports, and reinforced tear-resistant ballistic poly fabric.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#916c27]">
              <span>{selectedBrand === 'Ninja Gear' ? 'Showing Ninja Gear Bags ✓' : 'Filter Ninja Gear Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* ADMA London Card */}
          <div 
            onClick={() => setSelectedBrand(selectedBrand === 'ADMA London' ? 'all' : 'ADMA London')}
            className={`p-6 sm:p-8 rounded-3xl cursor-pointer transition-all border flex flex-col justify-between group ${
              selectedBrand === 'ADMA London'
                ? 'bg-white border-[#b88e3e] shadow-lg ring-2 ring-[#b88e3e]/30'
                : 'bg-white border-neutral-200/90 hover:border-neutral-300 shadow-2xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion"
                  className="h-12 object-contain rounded-lg"
                />
                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  Corporate & Office Series
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#111317] font-serif-luxury">
                ADMA LONDON
              </h3>
              <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                "A Real Companion" for everyday office life. Features integrated waterproof rain covers, cushioned 15.6" to 17" laptop protection compartments, and professional corporate messengers.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#916c27]">
              <span>{selectedBrand === 'ADMA London' ? 'Showing ADMA London Bags ✓' : 'Filter ADMA London Bags'}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Bags' },
              { id: 'laptop', label: 'Laptop Backpacks' },
              { id: 'antitheft', label: 'Antitheft Series' },
              { id: 'briefcase', label: 'Executive Messengers' },
              { id: 'duffle', label: 'Duffle & Gym' },
              { id: 'travel', label: 'Travel & Rucksacks' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setBagTypeFilter(type.id)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                  bagTypeFilter === type.id
                    ? 'bg-[#111317] text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
            <span className="text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              1-Year Warranty Guaranteed
            </span>
            <Link
              href="/catalog-viewer?type=bags"
              className="text-[#916c27] hover:underline font-bold"
            >
              Open 37-Page Bag PDF →
            </Link>
          </div>
        </div>

        {/* Bags Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Manufacturer Customization Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200 shadow-md text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#916c27]">
              OEM & ODM BAG MANUFACTURING
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
              Custom Logo Badging & Metal Plates
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              We customize backpacks with your company badge using metallic alloy plates, high-density screen printing, or embroidered pullers with digital artwork approval.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/branding"
              className="px-6 py-3.5 rounded-xl gold-luxury-button text-xs font-bold text-center"
            >
              Preview in Branding Simulator
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl primary-luxury-button text-xs font-bold text-center"
            >
              Request Bulk Bag Quotation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

