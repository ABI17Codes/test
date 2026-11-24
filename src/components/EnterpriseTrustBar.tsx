'use client';

import React from 'react';
import { ENTERPRISE_TRUST_DATA } from '../data/siteContent';

export const EnterpriseTrustBar: React.FC = () => {
  const { header, capabilities, clientPartners } = ENTERPRISE_TRUST_DATA;

  return (
    <section className="py-16 sm:py-20 bg-[#F4F8FB] text-[#1E293B] text-left border-b border-[#DBEAFE]">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-4 border-b border-[#DBEAFE]">
          <div className="space-y-2.5 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#BFDBFE] text-[11px] uppercase tracking-wider font-extrabold text-[#0B4F82]">
              {header.tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] font-sans uppercase">
              {header.title}
            </h2>
            <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
              {header.description}
            </p>
          </div>
        </div>

        {/* 3-Column, 2-Row Benefit Grid (Clean White & Light Pastel Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => {
            const IconComponent = cap.icon;
            return (
              <div
                key={cap.number}
                className="p-6 rounded-2xl bg-white border border-[#DBEAFE] hover:border-[#0B4F82] shadow-2xs hover:shadow-md space-y-3 text-left group transition-all"
              >
                <div className="flex items-center justify-between pb-2.5 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] text-[#0B4F82] flex items-center justify-center border border-[#BFDBFE]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0B4F82]">
                      {cap.number}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E] uppercase tracking-wider">
                    {cap.metric}
                  </span>
                </div>

                <h3 className="text-base font-extrabold uppercase tracking-tight text-[#0F172A] group-hover:text-[#0B4F82] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-xs text-[#475569] leading-relaxed font-normal">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Partner Strip */}
        <div className="space-y-4 pt-4 border-t border-[#DBEAFE]">
          <p className="text-center text-[10px] uppercase tracking-[0.22em] font-extrabold text-[#475569]">
            TRUSTED BY CORPORATE TEAMS ACROSS INDIA
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {clientPartners.map((brand, i) => (
              <div
                key={i}
                className="bg-white border border-[#DBEAFE] rounded-xl py-3 px-2 flex items-center justify-center text-[11px] font-black tracking-wider text-[#0B4F82] shadow-2xs hover:border-[#E5A93C] transition-colors select-none"
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
