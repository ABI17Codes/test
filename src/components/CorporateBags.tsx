'use client';

import React, { useState } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  Eye, 
  ShoppingBag, 
  MessageCircle, 
  FileText
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface CorporateBagsProps {
  onQuickView: (product: Product) => void;
  onOpenCatalogPage: (type: 'bags' | 'gifts', page: number) => void;
}

export const CorporateBags: React.FC<CorporateBagsProps> = ({
  onQuickView,
  onOpenCatalogPage
}) => {
  const { addToQuote } = useQuote();
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
    <section className="py-24 relative bg-white border-t border-neutral-200/60">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Top Brand Showcase Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf5e8] border border-[#b88e3e]/30 shadow-xs">
            <Briefcase className="w-3.5 h-3.5 text-[#916c27]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              OFFICIAL BAG COLLECTION 2025
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-serif-luxury">
            CORPORATE BAGS & BACKPACKS
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            Engineered by Globrands Lifestyle. Featuring two industry-leading sub-brands with 1-Year Manufacturer Warranty and 100% in-house quality control.
          </p>

          {/* Dual Brand Logos Banner in Clean Light Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto pt-4">
            <div 
              onClick={() => setSelectedBrand('Ninja Gear')}
              className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-center gap-4 ${
                selectedBrand === 'Ninja Gear'
                  ? 'bg-[#faf8f3] border-[#b88e3e] shadow-md ring-1 ring-[#b88e3e]/30'
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 hover:bg-white'
              }`}
            >
              <img
                src="/catalog/brands/ninja_gear_logo.jpg"
                alt="Ninja Gear Original"
                className="h-12 object-contain rounded-lg shadow-xs"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">NINJA GEAR</div>
                <div className="text-[11px] text-neutral-500 font-medium">Innovative & Feature-Packed</div>
              </div>
            </div>

            <div 
              onClick={() => setSelectedBrand('ADMA London')}
              className={`p-4 rounded-2xl cursor-pointer transition-all border flex items-center justify-center gap-4 ${
                selectedBrand === 'ADMA London'
                  ? 'bg-[#faf8f3] border-[#b88e3e] shadow-md ring-1 ring-[#b88e3e]/30'
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300 hover:bg-white'
              }`}
            >
              <img
                src="/catalog/brands/adma_london_logo.jpg"
                alt="ADMA London A Real Companion"
                className="h-12 object-contain rounded-lg shadow-xs"
              />
              <div className="text-left">
                <div className="text-xs font-bold text-neutral-900 uppercase tracking-wider">ADMA LONDON</div>
                <div className="text-[11px] text-neutral-500 font-medium">A Real Companion • Office Series</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-neutral-200/80">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 sm:pb-0">
            {[
              { id: 'all', label: 'All Bags' },
              { id: 'laptop', label: 'Laptop Backpacks' },
              { id: 'antitheft', label: 'Antitheft Series' },
              { id: 'briefcase', label: 'Executive Messengers' },
              { id: 'duffle', label: 'Duffles & Gym Bags' },
              { id: 'travel', label: '60L Travel Rucksacks' },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setBagTypeFilter(type.id)}
                className={`text-xs px-3.5 py-1.5 rounded-xl transition-all font-bold whitespace-nowrap shadow-xs ${
                  bagTypeFilter === type.id
                    ? 'bg-[#111317] text-white shadow-sm'
                    : 'bg-neutral-100 hover:bg-neutral-200/60 text-neutral-700 border border-neutral-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-neutral-600 font-semibold flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>1-Year Manufacturer Warranty on All Models</span>
          </div>
        </div>

        {/* Bags Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredBags.map((bag) => (
            <div
              key={bag.id}
              className="rounded-2xl bg-white border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xs hover:shadow-xl hover:shadow-[#b88e3e]/10 hover:-translate-y-1 text-left"
            >
              {/* Media Section */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-[#faf9f5] to-[#f4efe6] p-5 flex items-center justify-center overflow-hidden border-b border-neutral-100 shadow-inner">
                
                {/* Brand & Warranty Tag */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 items-start">
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[#916c27] border border-[#b88e3e]/30 shadow-xs uppercase">
                    {bag.brand}
                  </span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-xs">
                    1 Year Warranty
                  </span>
                </div>

                {/* MRP and Code */}
                <div className="absolute top-3 right-3 z-10 text-right">
                  <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-white/95 text-neutral-900 border border-neutral-200/80 shadow-xs block">
                    {bag.code}
                  </span>
                  {bag.mrp && (
                    <span className="text-[10px] text-neutral-400 line-through mt-0.5 block">
                      MRP ₹{bag.mrp}
                    </span>
                  )}
                </div>

                {/* Product Photo */}
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="max-h-full max-w-full object-contain transform group-hover:scale-106 transition-transform duration-500 drop-shadow-md"
                  loading="lazy"
                />

                {/* Hover Inspect Overlay */}
                <div className="absolute inset-0 bg-neutral-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button
                    onClick={() => onQuickView(bag)}
                    className="px-3.5 py-2 rounded-xl bg-white text-neutral-900 text-xs font-bold flex items-center gap-1.5 shadow-md hover:bg-neutral-50"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#b88e3e]" />
                    <span>View Specifications</span>
                  </button>

                  <button
                    onClick={() => onOpenCatalogPage(bag.catalogType, bag.pageNumber)}
                    className="px-3.5 py-2 rounded-xl bg-white/95 text-neutral-800 text-xs font-bold flex items-center gap-1.5 border border-neutral-200 hover:text-[#916c27]"
                  >
                    <FileText className="w-3.5 h-3.5 text-[#b88e3e]" />
                    <span>Page {bag.pageNumber}</span>
                  </button>
                </div>
              </div>

              {/* Body Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4 text-left bg-white">
                <div>
                  <h3 
                    onClick={() => onQuickView(bag)}
                    className="text-base font-bold text-neutral-900 group-hover:text-[#b88e3e] transition-colors cursor-pointer font-serif-luxury"
                  >
                    {bag.name}
                  </h3>

                  <p className="text-xs text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                    {bag.description}
                  </p>

                  {/* Spec Chips from Catalogue */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-neutral-100 text-[11px]">
                    {bag.specs.slice(0, 4).map((s, idx) => (
                      <div key={idx} className="bg-neutral-50 p-2 rounded-lg border border-neutral-100">
                        <span className="text-neutral-400 block text-[9px] uppercase font-semibold">{s.label}</span>
                        <span className="text-neutral-800 font-bold truncate block">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-neutral-100 space-y-2.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-500">Min. Bulk MOQ: <b className="text-neutral-900">{bag.moq}</b></span>
                    <span className="text-[#916c27] font-bold">Tiered Quote Available</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => addToQuote(bag, 50)}
                      className="py-2.5 px-3 rounded-xl primary-luxury-button text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#eddab4]" />
                      <span>Bulk Quote</span>
                    </button>

                    <a
                      href={`https://wa.me/919900020456?text=${encodeURIComponent(
                        `Hi Globrands Lifestyle, please share quotation and bulk quantity pricing for Bag: ${bag.name} (${bag.code}).`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
