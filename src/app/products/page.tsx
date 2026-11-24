'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Phone
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { COMPANY_INFO } from '../../data/siteContent';

// Reduced to 4 simple categories with only 3 representative products each (12 total instead of 68!)
const REDUCED_PRODUCT_CATEGORIES = [
  {
    id: 'all',
    label: 'Featured Highlights (6)',
    ids: ['bg-boxer', 'bg-volvo-2', 'bg-skybags-corporate-pro', 'hgs-h74', 'hgs-h117', 'hgs-h118']
  },
  {
    id: 'bags',
    label: 'Backpacks & Partner Bags (3)',
    ids: ['bg-boxer', 'bg-volvo-2', 'bg-arctic-hunter-tech']
  },
  {
    id: 'gift-sets',
    label: 'Welcome Kits & Bamboo (3)',
    ids: ['hgs-h74', 'hgs-h71', 'hgs-h117']
  },
  {
    id: 'drinkware',
    label: 'Drinkware & Diaries (3)',
    ids: ['hgs-h118', 'hgs-h125', 'diary-no-03']
  }
];

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get('category') || 'all';
  const [selectedCat, setSelectedCat] = useState<string>(
    REDUCED_PRODUCT_CATEGORIES.some(c => c.id === initialCat) ? initialCat : 'all'
  );

  const activeGroup = REDUCED_PRODUCT_CATEGORIES.find(c => c.id === selectedCat) || REDUCED_PRODUCT_CATEGORIES[0];
  const displayedProducts = activeGroup.ids
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">

        {/* Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">Featured Products</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Featured Backpacks &amp;{' '}
            <span className="text-[#0B4F82]">
              Corporate Gift Samples
            </span>
          </h1>

          <p className="text-sm text-[#475569] max-w-3xl leading-relaxed">
            Browse a concise selection of our top backpacks and corporate gifts. Need a specific category like Trophies, Apparels, Trolleys, Kitchen Essentials, or a custom model? Call our Corporate Desk directly.
          </p>
        </div>

        {/* Simple 4-Tab Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#DBEAFE]">
          <div className="flex flex-wrap items-center gap-2">
            {REDUCED_PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-[#0B4F82] text-white shadow-2xs'
                    : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#334155] border border-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <a
            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] text-xs font-extrabold whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Direct Desk: {COMPANY_INFO.contact.corporatePhone}</span>
          </a>
        </div>

        {/* 3-Column Concise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm font-bold text-[#0B4F82]">Loading...</div>}>
      <ProductsCatalogContent />
    </Suspense>
  );
}
