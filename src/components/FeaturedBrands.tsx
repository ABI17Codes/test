'use client';

import React from 'react';
import { Sparkles, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FeaturedBrandsProps {
  onSelectBrand: (brand: string) => void;
}

export const FeaturedBrands: React.FC<FeaturedBrandsProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-20 relative bg-white border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
            BRAND ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
            OUR PROPRIETARY BRANDS
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Engineered, designed, and manufactured under the Globrands Lifestyle corporate umbrella.
          </p>
        </div>

        {/* 3 Brand Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Globrands Lifestyle */}
          <div 
            onClick={() => onSelectBrand('Globrands Lifestyle')}
            className="luxury-card p-8 rounded-2xl bg-[#FCFBF9] border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#b88e3e]/30 mb-6 bg-white p-1 flex items-center justify-center shadow-xs">
                <img
                  src="/globrands-logo.jpg"
                  alt="Globrands Lifestyle"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="text-xs font-mono font-bold text-[#916c27] uppercase tracking-wider mb-1">
                Parent Company
              </div>
              <h3 className="text-xl font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                GLOBRANDS LIFESTYLE
              </h3>

              <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                Curator of premium corporate hampers, luxury executive drinkware, smart temperature bottles, notebooks, and bespoke employee welcome kits across India.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-[#916c27] font-semibold">
              <span>View Corporate Gifting</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* 2. Ninja Gear Original */}
          <div 
            onClick={() => onSelectBrand('Ninja Gear')}
            className="luxury-card p-8 rounded-2xl bg-[#FCFBF9] border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="h-16 rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-white p-2.5 flex items-center justify-center shadow-xs">
                <img
                  src="/catalog/brands/ninja_gear_logo.jpg"
                  alt="Ninja Gear Original"
                  className="max-h-full object-contain"
                />
              </div>

              <div className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider mb-1">
                Innovative & High-Feature Series
              </div>
              <h3 className="text-xl font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                NINJA GEAR ORIGINAL
              </h3>

              <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                Our cutting-edge backpack line from concept to usage. Engineered with anti-theft zipper geometry, external USB charging, and reinforced multi-pocket organizers.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-[#916c27] font-semibold">
              <span>Explore Ninja Gear Bags</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

          {/* 3. ADMA London */}
          <div 
            onClick={() => onSelectBrand('ADMA London')}
            className="luxury-card p-8 rounded-2xl bg-[#FCFBF9] border border-neutral-200/80 hover:border-[#b88e3e]/50 transition-all duration-300 text-left flex flex-col justify-between group cursor-pointer hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="h-16 rounded-2xl overflow-hidden border border-neutral-200 mb-6 bg-white p-2.5 flex items-center justify-center shadow-xs">
                <img
                  src="/catalog/brands/adma_london_logo.jpg"
                  alt="ADMA London A Real Companion"
                  className="max-h-full object-contain"
                />
              </div>

              <div className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-1">
                Executive & Corporate Series
              </div>
              <h3 className="text-xl font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                ADMA LONDON
              </h3>

              <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                "A Real Companion" for everyday corporate life. Featuring modern office backpacks with rain covers, executive laptop messenger bags, and RFID security sling pouches.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs text-[#916c27] font-semibold">
              <span>Explore ADMA London</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

