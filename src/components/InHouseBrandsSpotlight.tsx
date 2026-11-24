'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IN_HOUSE_BRANDS_DATA, COMPANY_INFO } from '../data/siteContent';

export const InHouseBrandsSpotlight: React.FC = () => {
  const { header, brands } = IN_HOUSE_BRANDS_DATA;
  const { ninjaGear, admaLondon } = brands;

  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 bg-white text-[#1E293B] text-left border-b border-[#DBEAFE]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              At <strong className="text-[#0B4F82]">{COMPANY_INFO.legalName}</strong>, we design and manufacture our own registered brands in Bengaluru — backed by our {COMPANY_INFO.warrantyText} and in-house <strong className="text-[#0F172A]">DTF Printing, Embroidery &amp; Screen Printing</strong>.
            </p>
          </div>

          <Link
            href="/brands"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider transition-all self-start lg:self-end group shadow-xs"
          >
            <span>Open In-House Brand Store (32 Models)</span>
            <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Two Side-by-Side High-Contrast Light Pastel Brand Store Showcases (Zero Dark Background so Black Bags Pop!) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* BRAND 1: NINJA GEAR ORIGINAL (Light Pastel Warm Cream & Gold Accent Stage — 100% Contrast for Black Bags) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#FFFDF7] to-[#FEF9E7] border-2 border-[#FDE68A] p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Brand Header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#FDE68A]">
                <div className="flex items-center gap-3.5">
                  <div className="h-14 w-24 rounded-xl bg-white border border-[#FCD34D] p-2 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={ninjaGear.logo}
                      alt={`${ninjaGear.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#B45309] font-extrabold block">
                      {ninjaGear.subtitle}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-[#0F172A] tracking-tight">
                      {ninjaGear.name}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#F59E0B]/40 text-[#92400E] text-[10px] font-extrabold uppercase whitespace-nowrap">
                  12 Models
                </span>
              </div>

              {/* High-Contrast White Product Stage (Black Backpack Pops Cleanly!) */}
              <div className="grid grid-cols-12 gap-3">
                <Link
                  href={ninjaGear.cta.href}
                  className="col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#FDE68A] shadow-xs group flex items-center justify-center p-4"
                >
                  <img
                    src={ninjaGear.flagship.image}
                    alt={ninjaGear.flagship.alt}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-[#0B4F82] text-white px-2.5 py-1 rounded-md text-[9px] font-mono font-bold shadow-xs">
                    {ninjaGear.flagship.badge}
                  </span>
                </Link>

                <div className="col-span-4 flex flex-col gap-2.5 justify-between">
                  {ninjaGear.supportingImages.map((item, idx) => (
                    <Link
                      key={idx}
                      href={ninjaGear.cta.href}
                      className="relative flex-1 rounded-xl overflow-hidden bg-white border border-[#FDE68A] p-1.5 flex items-center justify-center group shadow-2xs"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="max-h-20 w-auto object-contain group-hover:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 bg-[#FEF3C7] text-[#92400E] px-1.5 py-0.2 rounded text-[8px] font-mono font-bold">
                        {(item as any).label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {ninjaGear.description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                {ninjaGear.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#FDE68A] flex items-center gap-2 shadow-2xs">
                      <IconComponent className="w-4 h-4 text-[#D97706] shrink-0" />
                      <span className="text-xs font-bold text-[#0F172A]">{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={ninjaGear.cta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E5A93C] hover:bg-[#D4952A] text-[#0F172A] text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>{ninjaGear.cta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* BRAND 2: ADMA LONDON (Light Pastel Sky Blue Stage — 100% Contrast for Dark Bags) */}
          <div className="rounded-3xl bg-gradient-to-b from-[#F8FBFF] to-[#EAF3FE] border-2 border-[#BFDBFE] p-6 sm:p-8 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              {/* Brand Header */}
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#BFDBFE]">
                <div className="flex items-center gap-3.5">
                  <div className="h-14 w-24 rounded-xl bg-white border border-[#93C5FD] p-2 flex items-center justify-center shadow-2xs shrink-0">
                    <img
                      src={admaLondon.logo}
                      alt={`${admaLondon.name} Logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#0B4F82] font-extrabold block">
                      {admaLondon.subtitle}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-[#0F172A] tracking-tight">
                      {admaLondon.name}
                    </h3>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#DBEAFE] border border-[#93C5FD] text-[#0B4F82] text-[10px] font-extrabold uppercase whitespace-nowrap">
                  20 Models
                </span>
              </div>

              {/* High-Contrast White Product Stage */}
              <div className="grid grid-cols-12 gap-3">
                <Link
                  href={admaLondon.cta.href}
                  className="col-span-8 relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#BFDBFE] shadow-xs group flex items-center justify-center p-4"
                >
                  <img
                    src={admaLondon.flagship.image}
                    alt={admaLondon.flagship.alt}
                    className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-[#0B4F82] text-white px-2.5 py-1 rounded-md text-[9px] font-mono font-bold shadow-xs">
                    {admaLondon.flagship.badge}
                  </span>
                </Link>

                <div className="col-span-4 flex flex-col gap-2.5 justify-between">
                  {admaLondon.supportingImages.map((item, idx) => (
                    <Link
                      key={idx}
                      href={admaLondon.cta.href}
                      className="relative flex-1 rounded-xl overflow-hidden bg-white border border-[#BFDBFE] p-1.5 flex items-center justify-center group shadow-2xs"
                    >
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="max-h-20 w-auto object-contain group-hover:scale-108 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 bg-[#DBEAFE] text-[#0B4F82] px-1.5 py-0.2 rounded text-[8px] font-mono font-bold">
                        {(item as any).label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                {admaLondon.description}
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                {admaLondon.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div key={idx} className="p-2.5 rounded-xl bg-white border border-[#BFDBFE] flex items-center gap-2 shadow-2xs">
                      <IconComponent className="w-4 h-4 text-[#0B4F82] shrink-0" />
                      <span className="text-xs font-bold text-[#0F172A]">{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href={admaLondon.cta.href}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-extrabold uppercase tracking-wider transition-all shadow-sm group"
              >
                <span>{admaLondon.cta.label}</span>
                <ArrowRight className="w-4 h-4 text-[#FDE047] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
