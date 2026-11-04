'use client';

import React from 'react';
import { 
  Truck, 
  ShieldCheck, 
  Sparkles, 
  Heart, 
  Award, 
  PackageCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Link from 'next/link';

export const ValueGridShowcase: React.FC = () => {
  const values = [
    {
      icon: Truck,
      iconColor: 'text-[#0284c7]',
      iconBg: 'bg-sky-50',
      title: 'Pan-India Direct Delivery',
      desc: 'Seamless door-to-door delivery across 500+ Indian pincodes direct from our Bengaluru manufacturing and dispatch hub.'
    },
    {
      icon: ShieldCheck,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      title: '5-Stage Zero-Defect QC',
      desc: 'Every single bag, hamper, diary, and tumbler is manually inspected through our 5-stage quality control protocol.'
    },
    {
      icon: Sparkles,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50',
      title: 'Precision In-House Branding',
      desc: 'Fiber laser engraving, rotary screen printing, and UV full-color digital branding for razor-sharp company logos.'
    },
    {
      icon: Award,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50',
      title: 'Official 1-Year Brand Warranty',
      desc: 'Complete warranty on zippers, stitching, and runner durability on all Ninja Gear and ADMA London corporate bags.'
    }
  ];

  return (
    <section className="py-20 bg-[#fafcf9] border-t border-neutral-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Showcase (Photo of executive gifting) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Background Blob */}
            <div className="absolute inset-0 bg-[#34d399]/30 rounded-3xl blur-2xl transform rotate-3 scale-95" />

            <div className="relative z-10 w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/catalog/crops/hgs_h66.jpg"
                alt="Corporate Gifting Experience"
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white/95 backdrop-blur-md text-left">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
                  Sustainable Luxury
                </span>
                <h4 className="text-sm font-bold text-neutral-900">
                  Eco-Friendly Bamboo 4-in-1 Set
                </h4>
                <p className="text-[11px] text-neutral-500">
                  Natural bamboo flask, wood finish pen, cork diary & keychain
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Clean Cards (Matching reference image) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all text-left space-y-3 group"
                >
                  <div className={`w-10 h-10 rounded-xl ${v.iconBg} flex items-center justify-center ${v.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 group-hover:text-[#2563eb] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal mt-1">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

