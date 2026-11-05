'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Truck, 
  Eye, 
  CheckCircle2, 
  FileText,
  MessageSquare,
  ShoppingBag
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { PRODUCTS } from '../data/products';

interface HeroProps {
  onExploreCollection: () => void;
  onRequestQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onRequestQuote }) => {
  const { addToQuote, setActiveProductModal } = useQuote();

  const heroShowcaseItems = [
    {
      id: 'hamper',
      product: PRODUCTS.find((p) => p.id === 'hgs-h74') || PRODUCTS[0],
      tabLabel: 'VIP Executive Hampers',
      categoryBadge: 'Flagship Collection',
      headline: 'VIP 5-in-1 Executive Tech Suite',
      description: 'Smart LED temp bottle, slim wireless mouse, PU leather journal, and metal rollerball pen in a luxury magnetic presentation box.',
      image: '/catalog/crops/hgs_h74.jpg',
      specs: [
        '304 Stainless Double-Wall Smart Temp Flask',
        'Ergonomic Silent Slim Optical Mouse',
        'Magnetic Loop A5 Executive Journal',
        'Matte Metal Rollerball Pen & Cardholder'
      ],
      moq: '50 sets',
      leadTime: '3-5 Days SLA',
      craft: 'Fiber Laser & UV Print'
    },
    {
      id: 'ninja-boxer',
      product: PRODUCTS.find((p) => p.id === 'bg-boxer') || PRODUCTS[1],
      tabLabel: 'Engineered Backpacks',
      categoryBadge: 'Ninja Gear Series',
      headline: 'Ninja Gear BOXER 28L Antitheft',
      description: '15.6" padded vault pocket, external USB fast charging, and tear-resistant ballistic dobby weave backed by a 1-year warranty.',
      image: '/catalog/crops/boxer_ninja_gear_main.jpg',
      specs: [
        '15.6" Shockproof Padded Laptop Sleeve',
        'Integrated USB Fast-Charging Pass-Through',
        'Weather-Resistant Ballistic Dobby Weave',
        '1-Year Direct Factory Replacement Warranty'
      ],
      moq: '50 units',
      leadTime: 'Ready Stock',
      craft: 'Tajima Multi-Thread Embroidery'
    },
    {
      id: 'adma-volvo',
      product: PRODUCTS.find((p) => p.id === 'bg-volvo-2') || PRODUCTS[2],
      tabLabel: 'ADMA London Travel',
      categoryBadge: 'Executive Travel',
      headline: 'ADMA London VOLVO 2.0 38L',
      description: 'Concealed all-weather rain cover, air-mesh spinal backing, and dual quick-stash security compartments for business travel.',
      image: '/catalog/crops/volvo_2_adma_london_main.jpg',
      specs: [
        'Integrated Concealed All-Weather Rain Cover',
        'Orthopedic Ergonomic Air-Flow Back Cushion',
        'Heavy-Duty Bar-Tack Stress Reinforcement',
        'Water-Repellent Hydro-Shield Finish'
      ],
      moq: '50 units',
      leadTime: 'Ready Stock',
      craft: 'High-Density Dual-Tone Screen'
    },
    {
      id: 'eco-bamboo',
      product: PRODUCTS.find((p) => p.id === 'hgs-h66') || PRODUCTS[3],
      tabLabel: 'Sustainable Bamboo',
      categoryBadge: 'Eco-Luxury 2026',
      headline: 'Organic Bamboo & Cork Executive Set',
      description: '100% biodegradable natural cork journal, double-wall bamboo flask, and laser-etched bamboo stylus pen.',
      image: '/catalog/crops/hgs_h66.jpg',
      specs: [
        'Natural Cork Bound A5 Sustainable Journal',
        'Double-Wall Vacuum Insulated Bamboo Flask',
        'Precision Laser-Etched Organic Bamboo Pen',
        'Recycled Eco-Kraft Gift Presentation Case'
      ],
      moq: '50 sets',
      leadTime: '4-6 Days SLA',
      craft: 'Organic Laser Deboss'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = heroShowcaseItems[activeIndex];

  const whatsappNumber = '919900020456';
  const whatsappMsg = encodeURIComponent(
    'Hello Globrands Lifestyle, I would like to inquire about customized corporate gifting collections for our organization.'
  );

  return (
    <section className="relative pt-8 pb-16 lg:pt-12 lg:pb-20 overflow-hidden bg-[#F5F7FA] border-b border-[#E5E7EB]">
      
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-gradient-to-tr from-[#0876B4]/10 via-[#A2AA9B]/8 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[300px] bg-gradient-to-br from-[#E8B43A]/8 via-transparent to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 w-full z-10">
        
        {/* Split Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ========================================================= */}
          {/* LEFT SIDE: Typography, Brand Messaging & Primary Actions   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB] shadow-2xs">
              <span className="live-pulse">
                <span className="bg-[#0876B4]" />
                <span className="bg-[#0876B4]" />
              </span>
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#101828]">
                DIRECT BENGALURU FACTORY ATELIER
              </span>
            </div>

            {/* Large Premium Headline with Brand Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#101828] tracking-[-0.035em] leading-[1.08]">
              Thoughtfully Curated Corporate Gifting.{' '}
              <span className="block brand-gradient-text">
                Engineered for Memorable Brands.
              </span>
            </h1>

            {/* Master Supporting Text */}
            <p className="text-base sm:text-lg text-[#667085] max-w-xl font-normal leading-relaxed">
              From executive gift hampers to engineered laptop carrywear, we create exceptional corporate gifting experiences, customised to your brand and delivered across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreCollection}
                className="px-7 py-3.5 btn-primary text-xs sm:text-sm flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 text-[#E8B43A] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onRequestQuote}
                className="px-6 py-3.5 btn-secondary text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#0876B4]" />
                <span>Request Custom RFQ</span>
              </button>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-2xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp B2B Desk</span>
              </a>
            </div>

            {/* Quick Enterprise Pillars Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E5E7EB]">
              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#101828]">
                  <ShieldCheck className="w-4 h-4 text-[#0876B4]" />
                  <span>5-Stage QC</span>
                </div>
                <div className="text-[11px] text-[#667085] mt-0.5">Zero-defect promise</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#101828]">
                  <Award className="w-4 h-4 text-[#0876B4]" />
                  <span>1-Yr Warranty</span>
                </div>
                <div className="text-[11px] text-[#667085] mt-0.5">On corporate bags</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#101828]">
                  <Sparkles className="w-4 h-4 text-[#E8B43A]" />
                  <span>In-House Studio</span>
                </div>
                <div className="text-[11px] text-[#667085] mt-0.5">Laser &amp; embroidery</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#101828]">
                  <Truck className="w-4 h-4 text-[#0876B4]" />
                  <span>Pan-India SLA</span>
                </div>
                <div className="text-[11px] text-[#667085] mt-0.5">Direct dispatch</div>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: Sophisticated Product Photography Showcase   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 relative">
            
            {/* Category Navigation Pills on Top */}
            <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-[#E5E7EB] shadow-2xs mb-3 overflow-x-auto scrollbar-none">
              {heroShowcaseItems.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 flex-1 text-center cursor-pointer ${
                    idx === activeIndex
                      ? 'bg-[#101828] text-white shadow-xs font-bold'
                      : 'text-[#667085] hover:text-[#101828] hover:bg-[#F5F7FA]'
                  }`}
                >
                  {item.tabLabel}
                </button>
              ))}
            </div>

            {/* Main Product Showcase Card */}
            <div className="premium-card p-0 shadow-xl text-left bg-white">
              
              {/* Product Staging Stage */}
              <div 
                onClick={() => setActiveProductModal(activeItem.product)}
                className="relative aspect-[16/11] bg-gradient-to-b from-[#F5F7FA] via-white to-[#EEF2F6] overflow-hidden cursor-pointer group flex items-center justify-center p-6 sm:p-8 border-b border-[#E5E7EB]"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.headline}
                  className="max-h-full max-w-full object-contain rounded-xl drop-shadow-xl transform group-hover:scale-104 transition-transform duration-500"
                />

                {/* Floating Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0876B4] text-[10px] font-bold uppercase tracking-wider shadow-2xs border border-[#E5E7EB]">
                    {activeItem.categoryBadge}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold flex items-center gap-1 border border-emerald-200 shadow-2xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Ready Stock
                  </span>
                </div>

                {/* Hover Quick View Button */}
                <div className="absolute inset-0 bg-neutral-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#101828] text-xs font-bold shadow-xl flex items-center gap-1.5 border border-[#E5E7EB]">
                    <Eye className="w-3.5 h-3.5 text-[#0876B4]" />
                    <span>View Specifications</span>
                  </span>
                </div>

                {/* SKU Code */}
                <div className="absolute bottom-3 left-4 pointer-events-none">
                  <span className="text-[10px] font-mono font-semibold text-[#667085] bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#E5E7EB]">
                    SKU: {activeItem.product.code}
                  </span>
                </div>
              </div>

              {/* Product Details Panel */}
              <div className="p-6 sm:p-7 space-y-4 bg-white">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#101828] tracking-tight">
                    {activeItem.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-1 font-normal leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                {/* Inclusions / Specs List */}
                <div className="space-y-1.5 pt-1">
                  {activeItem.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#101828]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0876B4] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Order Parameters */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[#E5E7EB] text-xs">
                  <div>
                    <span className="text-[#667085] block text-[10px] uppercase font-bold tracking-wider">Min. Order</span>
                    <span className="font-bold text-[#101828]">{activeItem.moq}</span>
                  </div>
                  <div>
                    <span className="text-[#667085] block text-[10px] uppercase font-bold tracking-wider">Turnaround</span>
                    <span className="font-bold text-emerald-700">{activeItem.leadTime}</span>
                  </div>
                  <div>
                    <span className="text-[#667085] block text-[10px] uppercase font-bold tracking-wider">Finishing</span>
                    <span className="font-bold text-[#0876B4] truncate block">{activeItem.craft}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={() => addToQuote(activeItem.product, 50)}
                    className="py-3 px-4 rounded-xl bg-[#0876B4] hover:bg-[#076296] text-white text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E8B43A]" />
                    <span>Add 50 sets to RFQ</span>
                  </button>

                  <button
                    onClick={() => setActiveProductModal(activeItem.product)}
                    className="py-3 px-4 rounded-xl bg-white hover:bg-[#F5F7FA] text-[#101828] border border-[#E5E7EB] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    View Details
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
