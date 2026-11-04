'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  Play, 
  Sparkles, 
  Star, 
  Heart, 
  CheckCircle2, 
  Gift, 
  ShieldCheck,
  Package
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

interface ModernHeroProps {
  onExploreCollection: () => void;
  onScrollToProcess: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  onExploreCollection,
  onScrollToProcess
}) => {
  const { addToQuote } = useQuote();
  const spotlightProduct = PRODUCTS.find((p) => p.id === 'hgs-h74') || PRODUCTS[0];

  return (
    <section className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[#fafcf9]">
      {/* Decorative Organic Pastel Blobs in Background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-tr from-emerald-100/40 via-sky-100/30 to-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -left-20 w-80 h-80 bg-emerald-200/30 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      {/* Floating subtle dots / elements */}
      <div className="absolute top-32 left-[12%] w-3 h-3 rounded-full bg-amber-400 opacity-80 animate-pulse hidden md:block" />
      <div className="absolute top-44 right-[15%] w-2.5 h-2.5 rounded-full bg-rose-400 opacity-80 hidden md:block" />
      <div className="absolute bottom-20 left-[18%] w-3 h-3 rounded-full bg-blue-500 opacity-60 hidden md:block" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Text Block - Centered */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs text-xs font-semibold text-neutral-700 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Premium Corporate Gifting & Bags</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-black tracking-tight text-[#111317] leading-[1.08]">
            GIFTING GOODS LIKE <br className="hidden sm:inline" />
            <span className="text-[#2563eb]">WE SHOULD.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Send curated corporate gifts and executive merchandise that feel personal, arrive on time, and leave a lasting impression for every occasion.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <button
              onClick={onExploreCollection}
              className="px-7 py-3 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-bold tracking-tight shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onScrollToProcess}
              className="px-6 py-3 rounded-full bg-white hover:bg-neutral-50 border border-neutral-200/80 text-neutral-800 text-sm font-semibold tracking-tight shadow-2xs transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#111317] flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </div>
              <span>How It Works</span>
            </button>
          </div>
        </div>

        {/* Central Visual Showcase with Floating Cards & Blobs */}
        <div className="relative mt-12 md:mt-16 max-w-4xl mx-auto">
          
          {/* Main Visual Composition Container */}
          <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
            
            {/* Layered Organic Blobs Behind Center Image */}
            <div className="absolute w-[320px] sm:w-[420px] md:w-[480px] h-[320px] sm:h-[420px] md:h-[480px] bg-[#2563eb] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] transform rotate-6 transition-transform duration-700" />
            <div className="absolute w-[290px] sm:w-[380px] md:w-[440px] h-[290px] sm:h-[380px] md:h-[440px] bg-[#34d399] rounded-[55%_45%_35%_65%/45%_55%_45%_55%] transform -rotate-12 opacity-80" />
            <div className="absolute -bottom-4 w-[260px] sm:w-[340px] md:w-[400px] h-[180px] bg-[#f59e0b] rounded-[50%_50%_40%_60%/40%_60%_50%_50%] opacity-70" />

            {/* Central Featured Product Photo */}
            <div className="relative z-10 w-[260px] sm:w-[340px] md:w-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/catalog/crops/hgs_h74.jpg"
                alt="VIP Executive Corporate Gift Set"
                className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white text-left flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#2563eb] uppercase">
                    Bestseller 2025
                  </span>
                  <h3 className="text-sm font-bold text-neutral-900 leading-tight">
                    VIP 5-in-1 Executive Set
                  </h3>
                  <p className="text-[11px] text-neutral-500">
                    Wireless Mouse, Temp Bottle, Flap Diary & Pen
                  </p>
                </div>
                <Link
                  href="/products/hgs-h74"
                  className="px-3 py-1.5 rounded-full bg-neutral-100 hover:bg-[#2563eb] hover:text-white text-neutral-800 text-xs font-semibold transition-colors"
                >
                  View
                </Link>
              </div>
            </div>

            {/* Floating Left Chat Review Card (Matching Reference Image) */}
            <div className="absolute top-8 left-0 sm:left-4 md:-left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-100 max-w-[210px] sm:max-w-[240px] text-left transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-[11px] font-bold text-amber-700">
                  RR
                </div>
                <div className="text-[11px] font-semibold text-neutral-700">
                  Ronald Richards
                </div>
              </div>
              <div className="p-2 rounded-xl bg-neutral-50 text-[11px] font-medium text-neutral-800 leading-snug">
                How was the onboarding surprise? 😍
              </div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">
                  JW
                </div>
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-900 text-[11px] font-semibold">
                  Really Amazing, Love it! 🙌🎁
                </div>
              </div>
            </div>

            {/* Floating Top Emoji Reaction Sticker */}
            <div className="absolute top-4 right-16 sm:right-28 md:right-36 z-20 w-12 h-12 rounded-full bg-amber-100 border-2 border-white shadow-lg flex items-center justify-center text-2xl transform rotate-12 hover:scale-110 transition-transform select-none">
              😍
            </div>

            {/* Floating Right Product Preview Card (Matching Reference Image) */}
            <div className="absolute bottom-6 right-0 sm:right-4 md:-right-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-neutral-100 w-[190px] sm:w-[210px] text-left transform rotate-2 hover:rotate-0 transition-transform">
              <div className="w-full h-24 rounded-xl bg-neutral-100 overflow-hidden mb-2 relative">
                <img
                  src="/catalog/crops/boxer_ninja_gear_main.jpg"
                  alt="Ninja Gear Boxer Backpack"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md bg-white/90 text-[9px] font-bold text-neutral-800 shadow-2xs">
                  28L
                </span>
              </div>
              <div className="text-xs font-bold text-neutral-900 leading-tight">
                Ninja Gear Boxer
              </div>
              <div className="text-[10px] text-neutral-500 mb-1.5">
                Anti-Theft Laptop Bag
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-[10px] font-bold text-neutral-700 ml-1">5.0</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

