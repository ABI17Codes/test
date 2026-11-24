'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  Factory,
  Phone
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';
import { COMPANY_INFO } from '../../data/siteContent';

// Curated, concise selection (3 models per category instead of dumping 38 products at once!)
const CURATED_BAG_GROUPS = [
  {
    id: 'all',
    label: 'Top Featured Backpacks (6)',
    ids: ['bg-boxer', 'bg-volvo-2', 'bg-inspire', 'bg-skybags-corporate-pro', 'bg-arctic-hunter-tech', 'bg-swiss-military-voyager']
  },
  {
    id: 'partner',
    label: 'Partner Brands: Skybags, Arctic Hunter & Swiss Military (6)',
    ids: ['bg-skybags-corporate-pro', 'bg-skybags-campus-lite', 'bg-arctic-hunter-tech', 'bg-arctic-hunter-briefcase', 'bg-swiss-military-voyager', 'bg-swiss-military-commuter']
  },
  {
    id: 'laptop',
    label: 'Laptop & Office Backpacks (3)',
    ids: ['bg-inspire', 'bg-boxer', 'bg-vip-2']
  },
  {
    id: 'travel',
    label: 'Travel & Duffle Bags (3)',
    ids: ['bg-volvo-2', 'bg-duffle-shine', 'bg-mountain']
  }
];

export default function BagsPage() {
  const [activeGroup, setActiveGroup] = useState<string>('all');

  const currentGroup = CURATED_BAG_GROUPS.find(g => g.id === activeGroup) || CURATED_BAG_GROUPS[0];
  const displayedBags = currentGroup.ids
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <div className="py-10 bg-[#F8FAFC] min-h-screen">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 space-y-8">

        {/* Breadcrumb & Header */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#475569]">
            <Link href="/" className="hover:text-[#0B4F82]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0B4F82] font-bold">Backpacks &amp; Partner Brands</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE]">
            <Factory className="w-3.5 h-3.5 text-[#0B4F82]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              OUR IN-HOUSE MODELS + SKYBAGS, ARCTIC HUNTER &amp; SWISS MILITARY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Corporate Backpacks &amp;{' '}
            <span className="text-[#0B4F82]">
              Partner Brand Bags
            </span>
          </h1>

          <p className="text-sm text-[#475569] max-w-3xl font-normal leading-relaxed">
            Along with our in-house manufactured <strong>Ninja Gear</strong> &amp; <strong>ADMA London</strong> backpacks, we supply and custom-brand partner bags from <strong>Skybags, Arctic Hunter, and Swiss Military</strong> with <strong>DTF Printing, Embroidery &amp; Screen Printing</strong>.
          </p>
        </div>

        {/* Reduced 4-Category Filter Bar (Clean & Simple) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3.5 rounded-2xl bg-white border-2 border-[#DBEAFE] shadow-2xs">
          <div className="flex flex-wrap items-center gap-2">
            {CURATED_BAG_GROUPS.map((group) => (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all cursor-pointer ${
                  activeGroup === group.id
                    ? 'bg-[#0B4F82] text-white shadow-2xs'
                    : 'bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#334155] border border-[#E2E8F0]'
                }`}
              >
                {group.label}
              </button>
            ))}
          </div>

          <a
            href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FEF3C7] text-[#92400E] border border-[#FCD34D] text-xs font-extrabold whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call for Full Catalog: {COMPANY_INFO.contact.corporatePhone}</span>
          </a>
        </div>

        {/* Concise 3-Column Product Grid (3 to 6 items max — no overwhelming wall of products!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedBags.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
