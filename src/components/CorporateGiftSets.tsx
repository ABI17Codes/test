'use client';

import React, { useState } from 'react';
import { 
  Gift, 
  CheckCircle2, 
  ShoppingBag, 
  MessageCircle, 
  Eye
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface CorporateGiftSetsProps {
  onQuickView: (product: Product) => void;
  onOpenCatalogPage: (type: 'bags' | 'gifts', page: number) => void;
}

export const CorporateGiftSets: React.FC<CorporateGiftSetsProps> = ({
  onQuickView,
  onOpenCatalogPage
}) => {
  const { addToQuote } = useQuote();
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
    <section className="py-24 relative bg-gradient-to-b from-[#fcfbf9] via-[#f7f4ec] to-[#fcfbf9] border-t border-neutral-200/60">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fbf5e8] border border-[#b88e3e]/30 shadow-xs">
              <Gift className="w-3.5 h-3.5 text-[#916c27]" />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
                FEATURED GIFT HAMPERS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-serif-luxury">
              GIFTS THAT CREATE <br className="hidden sm:inline" />
              <span className="gold-gradient-text">LASTING IMPRESSIONS.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              Carefully engineered combination sets from the ALL In One catalogue. Choose from 2-in-1 executive duos to 5-in-1 VIP leadership hampers in luxury rigid magnetic presentation boxes.
            </p>
          </div>

          {/* Filter Sub-Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'all', label: 'All Gift Sets' },
              { id: '5-in-1', label: '5-in-1 VIP Hampers' },
              { id: '4-in-1', label: '4-in-1 Bottle Sets' },
              { id: 'bamboo', label: 'Eco Bamboo Sets' },
              { id: '3-in-1', label: '3-in-1 Starters' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id as any)}
                className={`text-xs px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap shadow-xs ${
                  filterType === tab.id
                    ? 'bg-[#111317] text-white shadow-sm'
                    : 'bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Sets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredSets.map((set) => (
            <div
              key={set.id}
              className="rounded-2xl bg-white border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 p-6 flex flex-col justify-between group shadow-xs hover:shadow-xl hover:shadow-[#b88e3e]/10 hover:-translate-y-1 text-left"
            >
              <div>
                {/* Top Bar with Code & Page Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <span className="text-sm font-mono font-bold text-[#916c27]">
                    {set.code}
                  </span>
                  <button
                    onClick={() => onOpenCatalogPage(set.catalogType, set.pageNumber)}
                    className="text-[11px] px-2.5 py-0.5 rounded-md bg-neutral-50 hover:bg-[#faf8f3] text-neutral-600 hover:text-[#916c27] border border-neutral-200 transition-colors font-medium"
                  >
                    Catalog Page {set.pageNumber}
                  </button>
                </div>

                {/* Image Container with zoom preview */}
                <div
                  onClick={() => onQuickView(set)}
                  className="relative my-4 aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#faf9f5] to-[#f4efe6] border border-neutral-200/60 p-4 flex items-center justify-center cursor-pointer group/img shadow-inner"
                >
                  <img
                    src={set.image}
                    alt={set.name}
                    className="max-h-full max-w-full object-contain transform group-hover/img:scale-106 transition-transform duration-500 drop-shadow-sm"
                  />
                  <div className="absolute inset-0 bg-neutral-900/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-2 rounded-xl bg-white text-neutral-900 text-xs font-bold flex items-center gap-1.5 border border-neutral-200 shadow-md">
                      <Eye className="w-3.5 h-3.5 text-[#b88e3e]" />
                      Inspect Set Items
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onQuickView(set)}
                  className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#b88e3e] transition-colors cursor-pointer font-serif-luxury"
                >
                  {set.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                  {set.description}
                </p>

                {/* Included Components List */}
                {set.composition && (
                  <div className="mt-4 pt-4 border-t border-neutral-100 space-y-1.5">
                    <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                      Hamper Includes:
                    </span>
                    <ul className="space-y-1">
                      {set.composition.map((item, i) => (
                        <li key={i} className="text-xs text-neutral-700 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#b88e3e] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Bottom Quote & Action */}
              <div className="mt-6 pt-4 border-t border-neutral-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500 font-medium">Min. Order: <b className="text-neutral-900">{set.moq}</b></span>
                  <span className="text-[#916c27] font-semibold bg-[#fbf5e8] px-2 py-0.5 rounded border border-[#b88e3e]/20">Custom Logo Included</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => addToQuote(set, 50)}
                    className="py-2.5 px-3 rounded-xl primary-luxury-button text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#eddab4]" />
                    <span>Add to RFQ</span>
                  </button>

                  <a
                    href={`https://wa.me/919900020456?text=${encodeURIComponent(
                      `Hello Globrands Lifestyle, please share quotation and stock for Gift Set ${set.code} (${set.name}).`
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
          ))}
        </div>

      </div>
    </section>
  );
};
