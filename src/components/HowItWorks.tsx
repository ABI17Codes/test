'use client';

import React from 'react';
import { 
  ShoppingBag, 
  Sparkles, 
  CheckCircle, 
  Truck, 
  ArrowRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import Link from 'next/link';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      badgeColor: 'bg-[#dcfce7] text-[#15803d]',
      title: 'Pick a Product',
      desc: 'Browse 180+ curated catalogue products across executive hampers, backpacks, bottles, and tech essentials.'
    },
    {
      number: '02',
      badgeColor: 'bg-[#e0f2fe] text-[#0369a1]',
      title: 'Customize Your Branding',
      desc: 'Add your company logo via laser engraving, UV full-color print, screen print, or elegant debossing.'
    },
    {
      number: '03',
      badgeColor: 'bg-[#fef9c3] text-[#a16207]',
      title: 'Get Instant Bulk Quote',
      desc: 'Receive transparent factory-direct tier pricing, digital mockups, and fast sample approval for your team.'
    },
    {
      number: '04',
      badgeColor: 'bg-[#d1fae5] text-[#047857]',
      title: 'Pan-India Direct Delivery',
      desc: 'We handle 5-stage QC inspection, luxury presentation packaging, and doorstep delivery on schedule.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-neutral-100 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
            — Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111317] tracking-tight">
            How It works?
          </h2>
          <p className="text-sm text-neutral-500 font-normal">
            Four simple steps to create unforgettable corporate brand experiences.
          </p>
        </div>

        {/* 4 Connected Stepper Cards */}
        <div className="relative">
          
          {/* Subtle connecting horizontal dashed line for desktop */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-neutral-200 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center space-y-4 group"
              >
                {/* Rounded Number Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl ${step.badgeColor} font-black text-xl flex items-center justify-center shadow-xs border-2 border-white group-hover:scale-110 transition-transform duration-300`}
                >
                  {step.number}
                </div>

                {/* Step Content */}
                <div className="space-y-2 max-w-[260px]">
                  <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#2563eb] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

