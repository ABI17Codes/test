'use client';

import React from 'react';
import { ShieldCheck, Award, Building2, Truck, CheckCircle2 } from 'lucide-react';

const ENTERPRISE_CLIENTS = [
  { name: 'WIPRO', tag: 'Global Tech' },
  { name: 'INFOSYS', tag: 'Enterprise IT' },
  { name: 'TCS', tag: 'Tata Sons' },
  { name: 'TECH MAHINDRA', tag: 'Digital Services' },
  { name: 'COGNIZANT', tag: 'Cloud & AI' },
  { name: 'DELL TECHNOLOGIES', tag: 'Hardware & Tech' },
  { name: 'ACCENTURE', tag: 'Global Strategy' },
];

const METRICS = [
  {
    value: '500+',
    label: 'Enterprise Clients',
    sublabel: 'Fortune 500 & MNC workforces',
    progress: '95%',
  },
  {
    value: '1.2M+',
    label: 'Gifts Delivered',
    sublabel: 'Pan-India direct employee delivery',
    progress: '98%',
  },
  {
    value: '100%',
    label: 'In-House Factory',
    sublabel: 'Bengaluru production & laser facility',
    progress: '100%',
  },
  {
    value: '99.8%',
    label: 'On-Time SLA',
    sublabel: 'Zero-defect milestone fulfillment',
    progress: '99.8%',
  },
];

export const EnterpriseTrustBar: React.FC = () => {
  return (
    <section className="py-14 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        
        {/* Client Logos Header */}
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold text-[#0876B4] tracking-[0.2em] uppercase font-mono">
            Trusted by Procurement &amp; HR Leaders Across India
          </p>

          {/* Client Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            {ENTERPRISE_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="px-3.5 py-2 rounded-xl bg-[#F5F7FA] hover:bg-white border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all flex items-center gap-2 group shadow-2xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0876B4] group-hover:bg-[#E8B43A] transition-colors" />
                <span className="text-xs font-bold tracking-wider text-[#101828] font-sans">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Refined Enterprise Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-[#F5F7FA] hover:bg-white border border-[#E5E7EB] hover:border-[#0876B4]/40 hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#101828] tracking-tight group-hover:text-[#0876B4] transition-colors">
                  {metric.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E8B43A]" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#101828] mt-2">
                {metric.label}
              </div>
              <div className="text-[11px] text-[#667085] mt-0.5">
                {metric.sublabel}
              </div>

              {/* Progress Micro-Bar */}
              <div className="w-full bg-[#E5E7EB] h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#0876B4] h-full rounded-full transition-all duration-700"
                  style={{ width: metric.progress }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
