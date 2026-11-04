'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShoppingBag, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles,
  Layers,
  Award
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

export const GiftOfTheDay: React.FC = () => {
  const { addToQuote } = useQuote();
  
  // Spotlight product: ADMA London Boxer or VIP Hamper
  const product = PRODUCTS.find((p) => p.id === 'bg-boxer') || PRODUCTS[0];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading and Story */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-1">
              <span className="text-xs font-black tracking-widest text-[#2563eb] uppercase">
                Spotlight Pick
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-[#111317] tracking-tight leading-none">
                GIFT <br />
                <span className="text-neutral-400 font-extrabold">OF THE DAY</span>
              </h2>
            </div>

            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              Our gift of the day is chosen by corporate gifting specialists who live and breathe great brands. Thoughtfully selected, beautifully crafted, and ready to impress — today&apos;s pick is engineered for maximum brand impact.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Ninja Gear Original 28L Anti-Theft Oxford Architecture</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dedicated 15.6&quot; Padded Laptop + Tablet Compartment</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Official 1-Year Globrands Replacement Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Custom Corporate Logo Printing & Rubber Badging Available</span>
              </div>
            </div>

            {/* Price / MOQ & Action Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => addToQuote(product, 50, 'Rubber Patch / Screen Print')}
                className="px-6 py-3 rounded-full bg-[#111317] hover:bg-[#2563eb] text-white text-xs font-bold tracking-tight shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add 50 pcs to Bulk RFQ</span>
              </button>

              <Link
                href="/products/bg-boxer"
                className="px-5 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors"
              >
                View Full Specifications
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual with Organic Curved Geometry (matching reference image) */}
          <div className="lg:col-span-7 relative flex items-center justify-center">
            
            {/* Organic Color Blobs */}
            <div className="absolute w-[380px] sm:w-[480px] h-[320px] sm:h-[380px] bg-[#2563eb] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-90 transform rotate-12" />
            <div className="absolute -top-6 right-6 w-32 h-32 bg-[#fb7185] rounded-full blur-xl opacity-60" />
            <div className="absolute -bottom-6 left-6 w-40 h-40 bg-[#34d399] rounded-full blur-xl opacity-60" />

            {/* Product Centerpiece */}
            <div className="relative z-10 w-full max-w-lg p-6 sm:p-10 flex flex-col items-center">
              <div className="relative w-full max-w-md h-[300px] sm:h-[360px] rounded-3xl bg-white shadow-2xl p-4 border border-neutral-100 flex items-center justify-center overflow-hidden group">
                <img
                  src="/catalog/crops/boxer_ninja_gear_main.jpg"
                  alt="Ninja Gear Boxer 28L Backpack"
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#111317] text-white text-[10px] font-bold tracking-wider uppercase">
                  Best Value
                </span>
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                  Ready in Stock
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

