'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Printer, 
  Layers, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  Type,
  ShieldCheck,
  Send
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const BrandingSimulator: React.FC = () => {
  const { setIsDrawerOpen } = useQuote();
  
  const [companyName, setCompanyName] = useState('ACME ENTERPRISES');
  const [tagline, setTagline] = useState('LEADERSHIP IN INNOVATION');
  const [selectedProduct, setSelectedProduct] = useState<'bottle' | 'diary' | 'box' | 'bag'>('bottle');
  const [finish, setFinish] = useState<'gold' | 'silver' | 'white' | 'laser'>('gold');

  const products = [
    {
      id: 'bottle',
      title: 'Stainless Vacuum Flask (HGS-H125)',
      image: '/catalog/crops/hgs_h125_temp_display.jpg',
      technique: 'Fiber Precision Laser Engraving'
    },
    {
      id: 'diary',
      title: 'Executive PU Leather Notebook',
      image: '/catalog/crops/diary_no_67_engrave_changer.jpg',
      technique: 'Laser Color Reveal / Blind Deboss'
    },
    {
      id: 'box',
      title: '5-in-1 Luxury VIP Hamper (HGS-H74)',
      image: '/catalog/crops/hgs_h74.jpg',
      technique: 'Metallic Hot Foil Stamping / UV Print'
    },
    {
      id: 'bag',
      title: 'Ninja Gear Boxer Laptop Backpack',
      image: '/catalog/crops/boxer_ninja_gear_main.jpg',
      technique: 'High-Density Screen Print / Metal Plate'
    }
  ];

  const activeProduct = products.find((p) => p.id === selectedProduct)!;

  const getFinishStyle = () => {
    switch (finish) {
      case 'gold':
        return 'text-[#E8B43A] drop-shadow-[0_2px_4px_rgba(232,180,58,0.4)] border-[#E8B43A]/60 bg-black/60 backdrop-blur-md';
      case 'silver':
        return 'text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] border-slate-300/60 bg-black/60 backdrop-blur-md';
      case 'white':
        return 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] border-white/60 bg-black/60 backdrop-blur-md';
      case 'laser':
        return 'text-[#38BDF8] drop-shadow-[0_2px_4px_rgba(56,189,248,0.5)] border-[#38BDF8]/60 bg-black/70 backdrop-blur-md';
    }
  };

  return (
    <section id="custom-branding" className="py-16 relative bg-white border-y border-[#E5E7EB] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              INTERACTIVE 3D BRANDING SIMULATOR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight">
            Preview Your Identity on{' '}
            <span className="brand-gradient-text">
              Real Merchandise
            </span>
          </h2>

          <p className="text-sm text-[#667085] font-normal leading-relaxed">
            Test your brand name and custom finish dynamically across our bestselling executive items before placing your bulk corporate RFQ.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Customizer */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="p-6 rounded-3xl bg-[#F5F7FA] border border-[#E5E7EB] space-y-5 shadow-xs">
              <h3 className="text-sm font-extrabold text-[#101828] flex items-center gap-2 uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#0876B4]" />
                Live Mockup Controls
              </h3>

              {/* Product Selection */}
              <div>
                <label className="text-xs font-bold text-[#101828] block mb-2">
                  Select Product Surface:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all truncate cursor-pointer ${
                        selectedProduct === p.id
                          ? 'bg-[#101828] border-[#101828] text-white shadow-xs'
                          : 'bg-white border-[#E5E7EB] text-[#667085] hover:text-[#101828] hover:border-neutral-300'
                      }`}
                    >
                      {p.id.toUpperCase()} • {p.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Name Input */}
              <div>
                <label className="text-xs font-bold text-[#101828] block mb-1.5 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-[#0876B4]" />
                  Enter Company Name / Brand:
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value.toUpperCase())}
                  placeholder="e.g. GOOGLE, INFOSYS, TATA"
                  maxLength={30}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] font-bold tracking-wider placeholder-neutral-400 focus:outline-none focus:border-[#0876B4] focus:ring-2 focus:ring-[#0876B4]/10 shadow-xs"
                />
              </div>

              {/* Tagline Input */}
              <div>
                <label className="text-xs font-bold text-[#101828] block mb-1.5">
                  Optional Subtext / Slogan:
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value.toUpperCase())}
                  placeholder="e.g. ANNUAL LEADERSHIP MEET 2026"
                  maxLength={40}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#101828] tracking-wider placeholder-neutral-400 focus:outline-none focus:border-[#0876B4] shadow-xs"
                />
              </div>

              {/* Finish Technique */}
              <div>
                <label className="text-xs font-bold text-[#101828] block mb-2">
                  Branding Effect &amp; Finish:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'gold', label: 'Metallic Gold Foil' },
                    { id: 'silver', label: 'Chrome Silver Etch' },
                    { id: 'white', label: 'Crisp Screen White' },
                    { id: 'laser', label: 'Precision Laser Cyan' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFinish(f.id as any)}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                        finish === f.id
                          ? 'bg-blue-50 border-[#0876B4] text-[#0876B4] shadow-xs font-bold'
                          : 'bg-white border-[#E5E7EB] text-[#667085] hover:text-[#101828]'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => setIsDrawerOpen(true)}
                className="w-full py-3 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>ADD TO CORPORATE RFQ WITH LOGO</span>
                <ArrowRight className="w-4 h-4 text-[#E8B43A]" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#667085]">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>We provide free 3D studio mockups with exact Pantone PMS matching before bulk production.</span>
            </div>
          </div>

          {/* Right: Dynamic Interactive Preview Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full relative aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#F5F7FA] via-[#EEF2F6] to-[#E2E8F0] border border-[#E5E7EB] shadow-lg p-6 sm:p-10 flex items-center justify-center overflow-hidden">
              
              {/* Product Background Image */}
              <img
                src={activeProduct.image}
                alt={activeProduct.title}
                className="max-h-[90%] max-w-[90%] object-contain drop-shadow-2xl transition-all duration-300 rounded-xl"
              />

              {/* Dynamic Branding Stamp Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
                <div 
                  className={`px-5 py-3 rounded-2xl border transition-all duration-300 text-center max-w-[280px] sm:max-w-[340px] ${getFinishStyle()}`}
                >
                  <div className="text-sm sm:text-lg font-black tracking-widest uppercase truncate font-mono">
                    {companyName || 'YOUR LOGO'}
                  </div>
                  {tagline && (
                    <div className="text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase opacity-90 truncate mt-0.5">
                      {tagline}
                    </div>
                  )}
                  <div className="text-[8px] uppercase tracking-widest opacity-75 mt-1 border-t border-current/30 pt-1">
                    {activeProduct.technique}
                  </div>
                </div>
              </div>

              {/* Technique Ribbon */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E5E7EB] shadow-xs">
                <span className="font-bold text-[#101828] truncate">
                  {activeProduct.title}
                </span>
                <span className="text-[#0876B4] font-semibold shrink-0">
                  {activeProduct.technique}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
