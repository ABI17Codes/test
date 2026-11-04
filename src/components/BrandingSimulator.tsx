'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Printer, 
  Layers, 
  Flame, 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight,
  Upload,
  Type
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const BrandingSimulator: React.FC = () => {
  const { setIsDrawerOpen } = useQuote();
  
  const [companyName, setCompanyName] = useState('ACME ENTERPRISES');
  const [tagline, setTagline] = useState('LEADERSHIP IN INNOVATION');
  const [selectedProduct, setSelectedProduct] = useState<'bottle' | 'diary' | 'box' | 'bag'>('bottle');
  const [finish, setFinish] = useState<'gold' | 'silver' | 'white' | 'deboss'>('gold');

  const products = [
    {
      id: 'bottle',
      title: 'Stainless Vacuum Flask (HGS-H125)',
      image: '/catalog/crops/hgs_h125_temp_display.jpg',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      technique: 'Fiber Precision Laser Engraving'
    },
    {
      id: 'diary',
      title: 'Executive PU Leather Notebook',
      image: '/catalog/crops/diary_no_67_engrave_changer.jpg',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      technique: 'Laser Color Reveal / Blind Deboss'
    },
    {
      id: 'box',
      title: '5-in-1 Luxury VIP Hamper (HGS-H74)',
      image: '/catalog/crops/hgs_h74.jpg',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      technique: 'Metallic Hot Foil Stamping / UV Print'
    },
    {
      id: 'bag',
      title: 'Ninja Gear Boxer Antitheft Backpack',
      image: '/catalog/crops/boxer_ninja_gear_main.jpg',
      position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
      technique: 'High-Density Screen Print / Metal Plate'
    }
  ];

  const activeProduct = products.find((p) => p.id === selectedProduct)!;

  const getFinishStyle = () => {
    switch (finish) {
      case 'gold':
        return 'text-[#916c27] drop-shadow-[0_2px_4px_rgba(184,142,62,0.3)] border-[#b88e3e]/50 bg-white/90';
      case 'silver':
        return 'text-[#4b5563] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] border-neutral-300 bg-white/90';
      case 'white':
        return 'text-[#111317] drop-shadow-[0_2px_4px_rgba(0,0,0,0.08)] border-neutral-300 bg-white/95';
      case 'deboss':
        return 'text-[#1f2937] shadow-inner border-neutral-400 bg-[#ede8df]/90';
    }
  };

  return (
    <section id="custom-branding" className="py-24 relative bg-white border-t border-neutral-200/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b88e3e]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold">
            <Printer className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
              IN-HOUSE LOGO CUSTOMIZATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            PUT YOUR BRAND ON <br />
            <span className="gold-gradient-text">EVERY DETAIL.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Transform everyday products into powerful brand experiences. Preview your corporate identity dynamically across our catalogue items.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Customizer */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            <div className="luxury-card p-6 rounded-2xl bg-[#FCFBF9] border border-neutral-200 space-y-5 shadow-sm">
              <h3 className="text-base font-bold text-[#111317] flex items-center gap-2 font-serif-luxury">
                <Sparkles className="w-4 h-4 text-[#b88e3e]" />
                Live Brand Mockup Engine
              </h3>

              {/* Product Selection */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-2">
                  Select Product Surface:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProduct(p.id as any)}
                      className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all truncate ${
                        selectedProduct === p.id
                          ? 'bg-[#111317] border-[#111317] text-white font-bold shadow-xs'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:text-[#111317] hover:border-neutral-300'
                      }`}
                    >
                      {p.id.toUpperCase()} • {p.title.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Company Name Input */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5 flex items-center gap-1.5">
                  <Type className="w-3.5 h-3.5 text-[#b88e3e]" />
                  Enter Company Name / Brand:
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value.toUpperCase())}
                  placeholder="e.g. GOOGLE, INFOSYS, TATA"
                  maxLength={30}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] font-bold tracking-wider placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                />
              </div>

              {/* Tagline Input */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Optional Subtext / Slogan:
                </label>
                <input
                  type="text"
                  value={tagline}
                  onChange={(e) => setTagline(e.target.value.toUpperCase())}
                  placeholder="e.g. ANNUAL MEET 2025"
                  maxLength={40}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-neutral-200 text-xs text-[#111317] tracking-wider placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                />
              </div>

              {/* Finish Technique */}
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-2">
                  Branding Effect & Finish:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'gold', label: 'Laser Champagne Gold' },
                    { id: 'silver', label: 'Silver Chrome Etch' },
                    { id: 'white', label: 'Crisp Screen White' },
                    { id: 'deboss', label: 'Blind Debossing' }
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFinish(f.id as any)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium border text-center transition-all ${
                        finish === f.id
                          ? 'bg-[#FAF6EE] border-[#b88e3e] text-[#916c27] font-bold shadow-xs'
                          : 'bg-white border-neutral-200 text-neutral-600 hover:text-[#111317]'
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
                className="w-full py-3 rounded-xl gold-luxury-button text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
              >
                <span>CUSTOMIZE YOUR CORPORATE GIFTS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Supported Branding Methods Info */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FCFBF9] border border-neutral-200">
                <span className="font-bold text-[#111317] block">Fiber Laser Engraving</span>
                <span className="text-neutral-500 text-[11px] mt-0.5 block">Permanent, ultra-fine microscopic precision on metals and pens</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FCFBF9] border border-neutral-200">
                <span className="font-bold text-[#111317] block">UV & Screen Printing</span>
                <span className="text-neutral-500 text-[11px] mt-0.5 block">Multi-color Pantone matching for bags, bottles and gift sleeves</span>
              </div>
            </div>

          </div>

          {/* Right Live Simulation Canvas */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-white border border-[#b88e3e]/30 p-8 overflow-hidden shadow-xl shadow-[#b88e3e]/5">
              
              {/* Simulator Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-100 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-neutral-700 font-semibold">{activeProduct.title}</span>
                </div>
                <span className="text-[#916c27] font-semibold">{activeProduct.technique}</span>
              </div>

              {/* Canvas Preview Area */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-[#FAF8F5] flex items-center justify-center p-6 my-4 border border-neutral-200/60 shadow-inner">
                
                {/* Product Photo */}
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
                />

                {/* Simulated Laser / Print Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
                  <div className={`p-4 rounded-xl border border-dashed text-center max-w-xs transition-all duration-300 backdrop-blur-[2px] ${getFinishStyle()}`}>
                    
                    {/* Brand Mockup */}
                    <div className="font-serif-luxury font-black text-sm sm:text-base tracking-[0.2em] leading-tight">
                      {companyName || 'YOUR BRAND HERE'}
                    </div>

                    {tagline && (
                      <div className="text-[10px] tracking-[0.25em] font-medium opacity-90 mt-1">
                        {tagline}
                      </div>
                    )}
                  </div>
                </div>

                {/* Watermark Notice */}
                <div className="absolute bottom-3 right-3 text-[10px] text-neutral-500 bg-white/80 border border-neutral-200 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  Interactive Preview Simulation
                </div>
              </div>

              {/* Verified Note */}
              <div className="p-3.5 rounded-xl bg-[#FCFBF9] border border-neutral-200 text-left text-xs text-neutral-600 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#b88e3e] shrink-0" />
                <span>
                  Exact placement, engraving depth, and print proofs are shared digitally as a 3D prototype for your approval before bulk production begins.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

