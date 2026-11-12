'use client';

import React from 'react';
import { Building2, Gift, Factory, ShieldCheck } from 'lucide-react';

const STATS = [
  {
    value: '500+',
    label: 'Enterprise Clients',
    sublabel: 'Fortune 500 & Global IT Hubs',
    icon: Building2,
  },
  {
    value: '1.2M+',
    label: 'Gifts Delivered',
    sublabel: 'Across 28 Indian States',
    icon: Gift,
  },
  {
    value: '100%',
    label: 'In-House Production',
    sublabel: 'Bengaluru Manufacturing Unit',
    icon: Factory,
  },
  {
    value: '99.8%',
    label: 'On-Time Dispatch',
    sublabel: 'Zero-Defect Milestone Guarantee',
    icon: ShieldCheck,
  }
];

const CLIENT_LOGOS = [
  'WIPRO',
  'INFOSYS',
  'TATA CONSULTANCY',
  'TECH MAHINDRA',
  'COGNIZANT',
  'DELL TECHNOLOGIES',
  'ACCENTURE'
];

export const EnterpriseTrustBar: React.FC = () => {
  return (
    <section className="py-14 bg-[#F8F9FA] border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 space-y-8">
        
        {/* Client Trust Strip in White Bordered Cards matching slice_2.jpg */}
        <div className="space-y-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.22em] font-bold text-[#C69214]">
            Trusted by Procurement &amp; HR Leaders Across India
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {CLIENT_LOGOS.map((brand, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E7EB] rounded-xl py-3.5 px-3 flex items-center justify-center text-[11px] font-extrabold tracking-wider text-[#475467] shadow-2xs select-none"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        {/* 4 White Bordered Stat Cards with Top-Right Gold Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-xl p-5 shadow-2xs flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#101828] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-[#FDF8EC] border border-[#F3E3B8] flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#D49B27]" />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-[#101828]">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-[#667085] mt-0.5">
                    {stat.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
