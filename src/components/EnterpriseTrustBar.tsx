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
    <section className="py-14 bg-white border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Client Logos Header */}
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold text-[#0E679C] tracking-[0.2em] uppercase font-mono">
            Trusted by Procurement & People Leaders Across India
          </p>

          {/* 2026 Modern Client Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            {ENTERPRISE_CLIENTS.map((client) => (
              <div
                key={client.name}
                className="px-3.5 py-2 rounded-xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/70 hover:border-[#0E679C]/40 transition-all flex items-center gap-2 group shadow-2xs"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0E679C] group-hover:bg-[#F5B800] transition-colors" />
                <span className="text-xs font-bold tracking-wider text-neutral-800 font-sans">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Modern Bento Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-5 rounded-2xl bg-neutral-50/70 hover:bg-white border border-neutral-200/80 hover:border-[#0E679C]/40 hover:shadow-md transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight group-hover:text-[#0E679C] transition-colors">
                  {metric.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#F5B800]" />
              </div>
              <div className="text-xs sm:text-sm font-bold text-neutral-900 mt-2">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                {metric.sublabel}
              </div>

              {/* Progress Micro-Bar */}
              <div className="w-full bg-neutral-200 h-1 rounded-full mt-3 overflow-hidden">
                <div
                  className="bg-[#0E679C] h-full rounded-full transition-all duration-700"
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
