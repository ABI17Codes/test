'use client';

import React from 'react';

const STATS = [
  {
    value: '500+',
    label: 'Enterprise Clients',
    sublabel: 'Fortune 500 & Global IT Hubs'
  },
  {
    value: '1.2M+',
    label: 'Gifts Delivered',
    sublabel: 'Across 28 Indian States'
  },
  {
    value: '100%',
    label: 'In-House Production',
    sublabel: 'Bengaluru Manufacturing Unit'
  },
  {
    value: '99.8%',
    label: 'On-Time Dispatch',
    sublabel: 'Zero-Defect Milestone Guarantee'
  }
];

const CLIENT_LOGOS = [
  'WIPRO',
  'INFOSYS',
  'TATA CONSULTANCY SERVICES',
  'TECH MAHINDRA',
  'COGNIZANT',
  'DELL TECHNOLOGIES',
  'ACCENTURE'
];

export const EnterpriseTrustBar: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-10 space-y-10">
        
        {/* Client Trust Strip */}
        <div className="space-y-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#0876B4]">
            Trusted by Procurement &amp; HR Leaders Across India
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-3">
            {CLIENT_LOGOS.map((brand, i) => (
              <span
                key={i}
                className="text-xs sm:text-sm font-extrabold tracking-[0.14em] text-[#98A2B3] hover:text-[#101828] transition-colors select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* 4 Minimal Enterprise Statistics */}
        <div className="pt-8 border-t border-[#F2F4F7] grid grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-[-0.03em]">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#101828]">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#667085]">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
