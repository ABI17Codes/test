'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Package,
  Layers,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../../components/ProductCard';

export default function GiftSetsPage() {
  const [filterType, setFilterType] = useState<'all' | '5-in-1' | '4-in-1' | 'bamboo' | '3-in-1'>('all');

  const giftSets = PRODUCTS.filter((p) => p.category === 'gift-sets');

  const filteredSets = giftSets.filter((p) => {
    if (filterType === '5-in-1') return p.code.includes('H71') || p.code.includes('H74') || p.code.includes('H67');
    if (filterType === '4-in-1') return p.code.includes('H36') || p.code.includes('H55') || p.code.includes('H66');
    if (filterType === 'bamboo') return p.tags.includes('Sustainable') || p.name.includes('Bamboo');
    if (filterType === '3-in-1') return p.code.includes('H03') || p.code.includes('H01');
    return true;
  });

  return (
    <div className="py-12 bg-[#FCFBF9]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Corporate Gift Sets</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <Gift className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              ALL IN ONE CATALOGUE COLLECTION
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            LUXURY CORPORATE GIFT SETS & HAMPERS
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Thoughtfully curated corporate gift hampers featuring high-grade vacuum flasks, laser color-changer diaries, precision metal pens, and executive accessories presented in rigid magnetic gift boxes with custom-molded EVA trays.
          </p>
        </div>

        {/* Feature Cards Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">Rigid Magnetic Box Packaging</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Every HGS series set is packaged inside a heavy-duty, soft-touch magnetic closure box designed to elevate your brand unboxing experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">Custom Color-Matched Sets</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Matching metallic finishes across bottle, pen, keychain, and notebook binding for unified visual harmony.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">In-House Laser Customization</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Permanent microscopic laser engraving of your corporate logo on the bottle, pen, and notebook cover with digital 3D proofing.
            </p>
          </div>
        </div>

        {/* Filter Tabs Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none w-full sm:w-auto">
            {[
              { id: 'all', label: 'All Sets (14+ Models)' },
              { id: '5-in-1', label: '5-in-1 VIP Hampers' },
              { id: '4-in-1', label: '4-in-1 Executive' },
              { id: 'bamboo', label: 'Sustainable Bamboo' },
              { id: '3-in-1', label: '3-in-1 Starters' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`text-xs px-4 py-2 rounded-xl font-bold transition-all whitespace-nowrap ${
                  filterType === tab.id
                    ? 'bg-[#111317] text-white shadow-xs'
                    : 'bg-neutral-100 hover:bg-neutral-200/70 text-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <Link
            href="/catalog-viewer?type=gifts"
            className="text-xs text-[#916c27] hover:underline font-bold whitespace-nowrap"
          >
            Open 146-Page Gifts PDF →
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredSets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Custom Corporate Hamper Assembly Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#b88e3e]/30 shadow-md text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#916c27]">
              BESPOKE CORPORATE HAMPERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
              Need a Custom Combination for Your Next Event?
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Mix and match any diary, bottle, pen, mug, and bag from our catalog. Our team will engineer a custom presentation box with your Pantone brand colors and logo foil stamping.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/branding"
              className="px-6 py-3.5 rounded-xl gold-luxury-button text-xs font-bold text-center"
            >
              Logo Branding Studio
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl primary-luxury-button text-xs font-bold text-center"
            >
              Request Custom Hamper Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

