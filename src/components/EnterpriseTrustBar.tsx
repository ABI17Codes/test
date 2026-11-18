'use client';

import React from 'react';
import { ENTERPRISE_TRUST_DATA } from '../data/siteContent';

export const EnterpriseTrustBar: React.FC = () => {
  const { header, capabilities, clientPartners } = ENTERPRISE_TRUST_DATA;

  return (
    <section className="py-20 sm:py-24 bg-white text-[#211D1A] text-left border-b border-[#EAE3D8]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2 border-b border-[#EAE3D8]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#A98554] block">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#211D1A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#69635C] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>
        </div>

        {/* 3-Column, 2-Row Benefit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div key={cap.number} className="p-6 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] space-y-3 text-left group hover:border-[#C5A16D] transition-colors">
                <div className="flex items-center justify-between pb-2 border-b border-[#EAE3D8]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAE3D8] text-[#A98554] flex items-center justify-center border border-[#EAE3D8] shadow-2xs">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#A98554]">
                      {cap.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#69635C] uppercase tracking-wider">
                    {cap.metric}
                  </span>
                </div>

                <h3 className="text-base font-bold uppercase tracking-tight text-[#211D1A] group-hover:text-[#40352D] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-[#69635C] leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Partner Strip */}
        <div className="space-y-4 pt-4 border-t border-[#EAE3D8]">
          <p className="text-center text-[10px] uppercase tracking-[0.22em] font-extrabold text-[#69635C]">
            TRUSTED BY PROCUREMENT LEADERS ACROSS INDIA
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {clientPartners.map((brand, i) => (
              <div
                key={i}
                className="bg-[#F5F0E8] border border-[#EAE3D8] rounded-xl py-3 px-2 flex items-center justify-center text-[11px] font-black tracking-wider text-[#211D1A] shadow-2xs hover:border-[#C5A16D] transition-colors select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
