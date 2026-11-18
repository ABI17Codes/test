'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { IN_HOUSE_BRANDS_DATA, COMPANY_INFO } from '../data/siteContent';

export const InHouseBrandsSpotlight: React.FC = () => {
  const { header, brands } = IN_HOUSE_BRANDS_DATA;
  const { admaLondon, ninjaGear } = brands;

  return (
    <section className="py-20 sm:py-24 bg-white text-[#211D1A] text-left border-b border-[#EAE3D8]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 pb-2 border-b border-[#EAE3D8]">
          <span className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#A98554] block">
            {header.tag}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#211D1A] font-sans uppercase">
            {header.title}
          </h2>
          <p className="text-sm sm:text-base text-[#69635C] font-normal leading-relaxed">
            At <strong className="text-[#211D1A]">{COMPANY_INFO.legalName}</strong>, we own, design, and manufacture every piece under our two proprietary registered labels—each engineered with distinct architectural DNA and backed by our {COMPANY_INFO.warrantyText}.
          </p>
        </div>

        {/* CAMPAIGN 1: ADMA LONDON (Warm Ivory, Espresso Typography & Champagne Accents) */}
        <div className="rounded-3xl bg-[#F5F0E8] border border-[#EAE3D8] p-8 sm:p-12 lg:p-14 shadow-lg relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visual Gallery */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#EAE3D8] bg-white group flex items-center justify-center p-4">
                <img
                  src={admaLondon.flagship.image}
                  alt={admaLondon.flagship.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#EAE3D8] flex items-center gap-2 shadow-xs">
                  <img
                    src={admaLondon.logo}
                    alt={`${admaLondon.name} Logo`}
                    className="h-3.5 w-auto object-contain"
                  />
                  <span className="text-[9px] font-bold text-[#211D1A] uppercase tracking-wider">{admaLondon.tagline}</span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-[#211D1A]/85 backdrop-blur-sm px-2.5 py-1 rounded-md text-white text-[9px] font-mono font-bold">
                  {admaLondon.flagship.badge}
                </div>
              </div>

              {/* Supporting Images */}
              <div className="grid grid-cols-3 gap-3">
                {admaLondon.supportingImages.map((item, idx) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-white border border-[#EAE3D8] p-2 flex items-center justify-center group shadow-2xs">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Story & Credentials */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#A98554] font-bold block">
                  {admaLondon.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-[#211D1A] tracking-tight">
                  {admaLondon.name}
                </h3>
                <p className="text-sm sm:text-base text-[#69635C] leading-relaxed font-normal">
                  {admaLondon.description}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {admaLondon.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-[#EAE3D8] flex items-center gap-2.5 shadow-2xs">
                      <IconComponent className="w-4 h-4 text-[#A98554] shrink-0" />
                      <span className="text-xs font-semibold text-[#211D1A]">{feat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="pt-1">
                <Link
                  href={admaLondon.cta.href}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md group"
                >
                  <span>{admaLondon.cta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* CAMPAIGN 2: NINJA GEAR (Deep Charcoal & Espresso with Bronze Accents) */}
        <div className="rounded-3xl bg-[#292725] text-white border border-[#40352D] p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visual Gallery */}
            <div className="lg:col-span-6 space-y-3.5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-[#40352D] bg-[#211D1A] group flex items-center justify-center p-4">
                <img
                  src={ninjaGear.flagship.image}
                  alt={ninjaGear.flagship.alt}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3.5 left-3.5 bg-[#211D1A]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-2 shadow-xs">
                  <img
                    src={ninjaGear.logo}
                    alt={`${ninjaGear.name} Logo`}
                    className="h-3.5 w-auto object-contain bg-white rounded-xs p-0.5"
                  />
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider">{ninjaGear.tagline}</span>
                </div>
                <div className="absolute bottom-3.5 right-3.5 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-md text-white text-[9px] font-mono font-bold">
                  {ninjaGear.flagship.badge}
                </div>
              </div>

              {/* Supporting Images */}
              <div className="grid grid-cols-3 gap-3">
                {ninjaGear.supportingImages.map((item, idx) => (
                  <div key={idx} className="aspect-square rounded-xl overflow-hidden bg-[#211D1A] border border-[#40352D] p-2 flex items-center justify-center group shadow-md">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Brand Story & Credentials */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5A16D] font-bold block">
                  {ninjaGear.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-tight">
                  {ninjaGear.name}
                </h3>
                <p className="text-sm sm:text-base text-[#EAE3D8] leading-relaxed font-normal">
                  {ninjaGear.description}
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                {ninjaGear.features.map((feat, idx) => {
                  const IconComponent = feat.icon;
                  return (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#211D1A]/70 border border-[#40352D] flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-[#A98554] shrink-0" />
                      <span className="text-xs font-semibold text-[#EAE3D8]">{feat.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="pt-1">
                <Link
                  href={ninjaGear.cta.href}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#C5A16D] hover:bg-[#A98554] text-[#211D1A] text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md group"
                >
                  <span>{ninjaGear.cta.label}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
