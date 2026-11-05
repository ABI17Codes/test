'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Gift, 
  Sparkles, 
  ChevronRight, 
  Package, 
  ShieldCheck, 
  Award,
  Layers,
  ArrowRight,
  Truck
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function GiftSetsPage() {
  const [filterType, setFilterType] = useState<'all' | '5-in-1' | '4-in-1' | 'bamboo' | '3-in-1'>('all');

  const allGiftSets = PRODUCTS.filter((p) => p.category === 'gift-sets');

  const filteredSets = allGiftSets.filter((item) => {
    if (filterType === 'all') return true;
    if (filterType === '5-in-1') return item.name.toLowerCase().includes('5-in-1');
    if (filterType === '4-in-1') return item.name.toLowerCase().includes('4-in-1');
    if (filterType === 'bamboo') return item.name.toLowerCase().includes('bamboo') || item.tags.includes('Sustainable');
    if (filterType === '3-in-1') return item.name.toLowerCase().includes('3-in-1') || item.name.toLowerCase().includes('duo');
    return true;
  });

  return (
    <div className="py-10 bg-[#F5F7FA] min-h-screen">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-10">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">Corporate Gift Sets</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Gift className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              ALL IN ONE CATALOGUE COLLECTION &bull; B2B DIRECT FACTORY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-[-0.03em]">
            Curated Executive Hampers &amp;{' '}
            <span className="brand-gradient-text">
              VIP Welcome Kits
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            Thoughtfully curated corporate gift hampers featuring high-grade vacuum flasks, laser color-changer diaries, precision metal pens, and executive tech suites presented in rigid magnetic presentation boxes with custom EVA foam trays.
          </p>
        </div>

        {/* Feature Cards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0876B4] flex items-center justify-center border border-blue-100">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">Rigid Magnetic Keepsake Boxes</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Every HGS flagship set is packaged inside a heavy-duty, soft-touch magnetic closure box designed to elevate your brand unboxing experience.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 text-[#E8B43A] flex items-center justify-center border border-amber-100">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">Custom Color-Matched Sets</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Harmonized metallic and matte finishes across bottle, pen, keychain, and notebook binding for complete corporate visual unity.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#E5E7EB] shadow-2xs space-y-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">In-House Laser Customization</h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              Permanent microscopic laser engraving of your corporate logo on the bottle, pen, and notebook cover with free 3D digital proofing.
            </p>
          </div>
        </div>

        {/* Filter Tabs Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xs text-left">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Sets (18+ Models)' },
              { id: '5-in-1', label: '5-in-1 VIP Hampers' },
              { id: '4-in-1', label: '4-in-1 Executive' },
              { id: 'bamboo', label: 'Sustainable Bamboo' },
              { id: '3-in-1', label: '3-in-1 Starter Duos' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
                  filterType === tab.id
                    ? 'bg-[#101828] text-white shadow-xs'
                    : 'bg-[#F5F7FA] hover:bg-neutral-200/70 text-[#667085] border border-[#E5E7EB]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Link
            href="/catalog-viewer?type=gifts"
            className="text-xs text-[#0E679C] hover:underline font-bold whitespace-nowrap"
          >
            Open 146-Page Gifts PDF →
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Custom Corporate Hamper Assembly Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-900 to-slate-900 text-white shadow-xl text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5B800]">
              BESPOKE CORPORATE HAMPERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Need a Custom Combination for Your Next Event?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Mix and match any diary, bottle, pen, mug, and bag from our catalog. Our team will engineer a custom presentation box with your Pantone brand colors and logo foil stamping.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/branding"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 text-xs font-bold text-center transition-colors"
            >
              Logo Branding Studio
            </Link>
            <Link
              href="/quote"
              className="px-6 py-3.5 rounded-full bg-[#0E679C] hover:bg-[#0284C7] text-white text-xs font-bold text-center transition-all shadow-md"
            >
              Request Custom Hamper Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
