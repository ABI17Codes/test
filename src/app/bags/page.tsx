'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Briefcase,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Factory,
  Layers
} from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

type BrandFilter = 'all' | 'Ninja Gear' | 'ADMA London' | 'Skybags' | 'Arctic Hunter' | 'Swiss Military';

export default function BagsPage() {
  const [selectedBrand, setSelectedBrand] = useState<BrandFilter>('all');
  const [bagTypeFilter, setBagTypeFilter] = useState<string>('all');
  const [allBags, setAllBags] = useState<Product[]>(() =>
    PRODUCTS.filter((p) => p.category === 'bags')
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const brandParam = params.get('brand') || params.get('partner');
    if (brandParam && ['Ninja Gear', 'ADMA London', 'Skybags', 'Arctic Hunter', 'Swiss Military'].includes(brandParam)) {
      setSelectedBrand(brandParam as BrandFilter);
    }
    const typeParam = params.get('type');
    if (typeParam) {
      setBagTypeFilter(typeParam);
    }
  }, []);

  const filteredBags = allBags.filter((bag) => {
    const matchesBrand = selectedBrand === 'all' || bag.brand === selectedBrand;
    const nameLower = bag.name.toLowerCase();
    const descLower = bag.description.toLowerCase();
    const tagsLower = bag.tags.map(t => t.toLowerCase()).join(' ');

    const matchesType =
      bagTypeFilter === 'all' ||
      (bagTypeFilter === 'partner' && ['Skybags', 'Arctic Hunter', 'Swiss Military'].includes(bag.brand)) ||
      (bagTypeFilter === 'antitheft' && (tagsLower.includes('antitheft') || descLower.includes('anti-theft') || descLower.includes('antitheft'))) ||
      (bagTypeFilter === 'laptop' && (nameLower.includes('backpack') || nameLower.includes('boxer') || nameLower.includes('volvo') || nameLower.includes('smart') || nameLower.includes('jio') || nameLower.includes('inspire') || nameLower.includes('vip') || nameLower.includes('nexa'))) ||
      (bagTypeFilter === '17inch' && (nameLower.includes('volvo') || nameLower.includes('boxer') || descLower.includes('17') || descLower.includes('15.6'))) ||
      (bagTypeFilter === 'waterproof' && (descLower.includes('rain cover') || descLower.includes('water') || tagsLower.includes('weather') || descLower.includes('weather'))) ||
      (bagTypeFilter === 'duffle' && (nameLower.includes('duffle') || nameLower.includes('gym') || nameLower.includes('overnighter') || nameLower.includes('shine'))) ||
      (bagTypeFilter === 'sleeve' && (nameLower.includes('sleeve') || nameLower.includes('sling') || nameLower.includes('pouch') || nameLower.includes('waist') || nameLower.includes('strings'))) ||
      (bagTypeFilter === 'travel' && (nameLower.includes('rucksack') || nameLower.includes('kamiliant') || nameLower.includes('mountain') || nameLower.includes('volvo')));
    return matchesBrand && matchesType;
  });

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">

        {/* Breadcrumb & Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">Backpacks &amp; Bags (In-House + Partner Brands)</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] shadow-2xs">
            <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              IN-HOUSE BRANDS (NINJA GEAR &amp; ADMA LONDON) + PARTNER BRANDS (SKYBAGS, ARCTIC HUNTER, SWISS MILITARY)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight">
            All Corporate Backpacks &amp;{' '}
            <span className="text-[#0B4F82]">
              Multi-Brand Carrywear
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#475569] max-w-4xl font-normal leading-relaxed">
            Explore our complete range of corporate backpacks. Choose from <strong className="text-[#0B4F82]">32+ In-House Manufactured Models</strong> under our registered brands (<strong>Ninja Gear Original</strong> &amp; <strong>ADMA London</strong>) or order from our <strong className="text-[#0F172A]">Corporate Partner Brands (Skybags, Arctic Hunter &amp; Swiss Military)</strong> — all available with in-house <strong>DTF Printing, Embroidery &amp; Screen Printing</strong>.
          </p>
        </div>

        {/* Brand Selector Bar: Clearly separates In-House Brands vs Partner Brands */}
        <div className="p-5 rounded-3xl bg-white border-2 border-[#DBEAFE] shadow-xs space-y-4 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B4F82] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#E5A93C]" />
              <span>Filter by Brand (In-House Manufactured vs. Corporate Partner Brands):</span>
            </span>
            <Link href="/brands" className="text-xs font-bold text-[#D97706] hover:underline">
              Visit Dedicated In-House Brand Store &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {[
              { id: 'all', name: 'All Brands', sub: `${allBags.length} Models`, badge: 'All' },
              { id: 'Ninja Gear', name: 'Ninja Gear', sub: 'In-House Manufactured', badge: 'In-House' },
              { id: 'ADMA London', name: 'ADMA London', sub: 'In-House Manufactured', badge: 'In-House' },
              { id: 'Skybags', name: 'Skybags', sub: 'Partner Brand', badge: 'Partner' },
              { id: 'Arctic Hunter', name: 'Arctic Hunter', sub: 'Partner Brand', badge: 'Partner' },
              { id: 'Swiss Military', name: 'Swiss Military', sub: 'Partner Brand', badge: 'Partner' }
            ].map((b) => {
              const active = selectedBrand === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setSelectedBrand(b.id as BrandFilter)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-[#0B4F82] text-white border-[#0B4F82] shadow-md'
                      : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#0F172A] border-[#DBEAFE]'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-extrabold truncate">{b.name}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                      active ? 'bg-[#E5A93C] text-[#0F172A]' : 'bg-white text-[#0B4F82] border border-[#BFDBFE]'
                    }`}>
                      {b.badge}
                    </span>
                  </div>
                  <div className={`text-[10px] mt-0.5 truncate ${active ? 'text-[#DBEAFE]' : 'text-[#64748B]'}`}>
                    {b.sub}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Toolbar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#DBEAFE] shadow-2xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none w-full lg:w-auto pb-1 sm:pb-0">
            {[
              { id: 'all', label: `All Bags (${filteredBags.length})` },
              { id: 'laptop', label: 'Laptop Backpacks' },
              { id: 'antitheft', label: 'Anti-Theft & USB' },
              { id: 'waterproof', label: 'Rain Cover (38L-40L)' },
              { id: 'partner', label: 'Partner Brands (Skybags / Arctic Hunter / Swiss Military)' },
              { id: 'duffle', label: 'Duffles & Gym Bags' },
              { id: 'sleeve', label: 'Sleeves & Slings' },
              { id: 'travel', label: '60L-65L Rucksacks' }
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setBagTypeFilter(type.id)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                  bagTypeFilter === type.id
                    ? 'bg-[#0B4F82] text-white shadow-2xs'
                    : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#475569] border border-[#E2E8F0]'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 text-xs font-semibold shrink-0">
            <span className="text-[#0B4F82] bg-[#EFF6FF] px-3 py-1 rounded-full border border-[#BFDBFE] flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-4 h-4 text-[#E5A93C]" />
              Hover Angles on Any Bag Card (Front / Back / Side)
            </span>
          </div>
        </div>

        {/* Bags Grid with Interactive Multi-Angle Switcher on Every Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
