'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Factory,
  Phone,
  ShieldCheck,
  Briefcase,
  Layers
} from 'lucide-react';
import { PRODUCTS, Product } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { COMPANY_INFO } from '../../data/siteContent';

// Curated Partner & Category Groups for Section 2
const PARTNER_AND_CATEGORY_TABS = [
  {
    id: 'partner',
    label: 'Partner Brands: Skybags, Arctic Hunter & Swiss Military (6)',
    ids: [
      'bg-skybags-corporate-pro',
      'bg-skybags-campus-lite',
      'bg-arctic-hunter-tech',
      'bg-arctic-hunter-briefcase',
      'bg-swiss-military-voyager',
      'bg-swiss-military-commuter'
    ]
  },
  {
    id: 'laptop',
    label: 'Laptop & Office Backpacks (3)',
    ids: ['bg-inspire', 'bg-smart', 'bg-classic']
  },
  {
    id: 'travel',
    label: 'Travel & Rain-Cover Backpacks (3)',
    ids: ['bg-volvo-2', 'bg-volvo-1', 'bg-mountain']
  },
  {
    id: 'duffle',
    label: 'Gym Duffles & Slings (3)',
    ids: ['bg-duffle-shine', 'bg-royal-duffle', 'bg-eno-sling']
  }
];

export default function BagsAndBrandsMergedPage() {
  const [activeTab, setActiveTab] = useState<string>('partner');
  const [showAllNinja, setShowAllNinja] = useState(false);
  const [showAllAdma, setShowAllAdma] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    const brandParam = params.get('brand');
    if (brandParam === 'Ninja Gear') {
      setShowAllNinja(true);
    } else if (brandParam === 'ADMA London') {
      setShowAllAdma(true);
    } else if (typeParam === 'laptop') {
      setActiveTab('laptop');
    } else if (typeParam === 'waterproof') {
      setActiveTab('travel');
    } else if (typeParam === 'duffle') {
      setActiveTab('duffle');
    }
  }, []);

  // Section 1: In-House Manufactured Brands (Top 3 by default, expandable if requested)
  const allNinjaProducts = PRODUCTS.filter((p) => p.brand === 'Ninja Gear');
  const allAdmaProducts = PRODUCTS.filter((p) => p.brand === 'ADMA London');

  const ninjaProducts = showAllNinja ? allNinjaProducts : allNinjaProducts.slice(0, 3);
  const admaProducts = showAllAdma ? allAdmaProducts : allAdmaProducts.slice(0, 3);

  // Section 2: Partner Brands & Category Selection
  const currentGroup =
    PARTNER_AND_CATEGORY_TABS.find((g) => g.id === activeTab) || PARTNER_AND_CATEGORY_TABS[0];
  const categoryBags = currentGroup.ids
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-8 space-y-12">

        {/* Page Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">
              In-House Brands &amp; Corporate Backpacks
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
            <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              1. IN-HOUSE BRANDS (NINJA GEAR &amp; ADMA LONDON) &bull; 2. PARTNER BRANDS (SKYBAGS, ARCTIC HUNTER, SWISS MILITARY)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F172A] tracking-tight">
            In-House Manufactured Brands &amp;{' '}
            <span className="text-[#0B4F82]">
              Corporate Backpacks
            </span>
          </h1>

          <p className="text-sm sm:text-[15px] text-[#475569] max-w-3xl font-normal leading-relaxed">
            At <strong className="text-[#0F172A]">Globrands Lifestyle Pvt. Ltd.</strong>, we manufacture our own registered brands (<strong className="text-[#0B4F82]">Ninja Gear Original</strong> &amp; <strong className="text-[#0B4F82]">ADMA London</strong>) in Bengaluru with a 1-Year Warranty, and also supply leading partner brands (<strong className="text-[#0F172A]">Skybags, Arctic Hunter, Swiss Military</strong>) with in-house <strong>DTF Printing, Embroidery &amp; Screen Printing</strong>.
          </p>
        </div>

        {/* ================================================================
            PART 1 (VERY FIRST): OUR REGISTERED IN-HOUSE BRANDS
        ================================================================ */}
        <div className="space-y-8">
          {/* 1A. NINJA GEAR ORIGINAL */}
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
                    In-House Manufactured Brand #1 &bull; Anti-Theft &bull; USB Tech
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    NINJA GEAR ORIGINAL
                  </h2>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Concealed anti-theft zippers, external USB charging port, and 17&quot; padded laptop protection.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-start md:self-center">
                <button
                  type="button"
                  onClick={() => setShowAllNinja(!showAllNinja)}
                  className="px-4 py-2.5 rounded-xl bg-[#FFFBEB] hover:bg-[#FEF3C7] border border-[#FCD34D] text-[#92400E] text-xs font-extrabold transition-all cursor-pointer"
                >
                  {showAllNinja ? 'Show Top 3 Only' : `View All ${allNinjaProducts.length} Ninja Gear Models`}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ninjaProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* 1B. ADMA LONDON */}
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
                    In-House Manufactured Brand #2 &bull; Rain Cover &bull; Executive Travel
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                    ADMA LONDON
                  </h2>
                  <p className="text-xs text-[#475569] mt-0.5">
                    38L–40L jumbo travel capacity, integrated waterproof rain cover, RFID security pocket, and shoe pouch.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 self-start md:self-center">
                <button
                  type="button"
                  onClick={() => setShowAllAdma(!showAllAdma)}
                  className="px-4 py-2.5 rounded-xl bg-[#EFF6FF] hover:bg-[#DBEAFE] border border-[#93C5FD] text-[#0B4F82] text-xs font-extrabold transition-all cursor-pointer"
                >
                  {showAllAdma ? 'Show Top 3 Only' : `View All ${allAdmaProducts.length} ADMA London Models`}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {admaProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>

        {/* ================================================================
            PART 2: PARTNER BRAND BACKPACKS (SKYBAGS, ARCTIC HUNTER, SWISS MILITARY) & CATEGORIES
        ================================================================ */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200/90 shadow-xs text-left space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-extrabold text-[#D97706] uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#0B4F82]" />
                <span>Multi-Brand Partner Backpacks &amp; Categories</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F172A]">
                Partner Brand Bags (Skybags, Arctic Hunter, Swiss Military) &amp; Categories
              </h2>
              <p className="text-xs text-[#475569]">
                We also supply and custom-brand leading national and international backpack brands for corporate gifting orders.
              </p>
            </div>

            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold whitespace-nowrap self-start lg:self-center"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDE047]" />
              <span>Bulk Enquiry: {COMPANY_INFO.contact.corporatePhone}</span>
            </a>
          </div>

          {/* 4 Simple Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PARTNER_AND_CATEGORY_TABS.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveTab(group.id)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  activeTab === group.id
                    ? 'bg-[#0B4F82] text-white shadow-2xs'
                    : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#334155] border border-[#E2E8F0]'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          {/* 3-Column Curated Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categoryBags.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
