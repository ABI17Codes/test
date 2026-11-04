'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Printer, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Layers, 
  FileCheck, 
  ShieldCheck,
  Flame,
  ArrowRight
} from 'lucide-react';
import { BrandingSimulator } from '../../components/BrandingSimulator';

export default function BrandingStudioPage() {
  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-12">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Custom Branding Studio</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <Printer className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              IN-HOUSE BRANDING & PERSONALIZATION
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            PUT YOUR BRAND ON EVERY DETAIL
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            From precision laser engraving on vacuum bottles to metallic debossing on executive leather diaries, our in-house facility guarantees zero distortion, exact Pantone fidelity, and digital proofing before mass production.
          </p>
        </div>

      </div>

      {/* Embedded Live Branding Simulator Engine */}
      <BrandingSimulator />

      {/* 4 In-House Branding Techniques Breakdown */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="text-left mb-10 space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
            INDUSTRIAL MANUFACTURING TECHNIQUES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
            Engineered Customization Methods
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Select the optimal finish based on product substrate, corporate branding guidelines, and longevity requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Fiber Laser Engraving
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Ultra-high precision microscopic laser ablation directly into stainless steel (304), aluminum, and anodized metal pens. Permanent, scratch-resistant, and dishwasher-safe.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#916c27]">
              Best for: Vacuum Flasks, Metal Pens, Keychains
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              UV Flatbed & Screen Printing
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Full-color photographic printing with high UV-cured ink adhesion. Delivers vibrant Pantone color accuracy across backpacks, drinkware, coffee mugs, and gift box packaging.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#916c27]">
              Best for: Bags, Ceramic Mugs, Gift Box Sleeves
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Blind Deboss & Hot Foil
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Heated magnesium die stamps create elegant recessed impressions on thermo-PU leather diaries. Available in blind deboss (subtle tone) or metallic champagne gold/silver foil.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#916c27]">
              Best for: Executive Diaries, Leather Organizers
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Metallic Badge & Plates
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Custom cast zinc alloy metallic logo emblems secured onto backpacks, duffle bags, and VIP briefcases. Polished chrome or matte black nickel finish.
            </p>
            <div className="pt-2 text-[11px] font-semibold text-[#916c27]">
              Best for: Ninja Gear & ADMA London Backpacks
            </div>
          </div>

        </div>

        {/* Artwork Guideline Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-white border border-neutral-200 shadow-sm text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#916c27]">
              ARTWORK & DIGITAL PROOFING WORKFLOW
            </span>
            <h2 className="text-2xl font-bold text-[#111317] font-serif-luxury">
              How We Verify Your Brand Quality
            </h2>
            <div className="space-y-1.5 text-xs text-neutral-600">
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Submit your vector logo (.AI, .EPS, .SVG, or high-res PDF).
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Our studio prepares a photorealistic 3D digital proof within 2 hours.
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                Pre-production physical sample photos or physical courier proofs upon request.
              </p>
            </div>
          </div>

          <Link
            href="/quote"
            className="px-8 py-3.5 rounded-xl gold-luxury-button text-xs font-bold text-center shrink-0"
          >
            Start Corporate RFQ with Custom Logo
          </Link>
        </div>
      </div>

    </div>
  );
}

