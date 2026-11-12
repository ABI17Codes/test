'use client';

import React from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Aditi Sharma',
    role: 'Head of People Operations',
    company: 'Tech Mahindra, Bengaluru',
    text: 'Globrands Lifestyle took care of our 650+ new-hire welcome kits across 4 offices. The custom laser engraving on the smart bottles and the ADMA London bags exceeded our executive expectations. Arrived 2 days ahead of schedule!',
    rating: 5,
    avatar: 'AS',
    pill: '650+ Welcome Kits'
  },
  {
    name: 'Rajesh K. Mehta',
    role: 'VP of Corporate Procurement',
    company: 'Flipkart Logistics',
    text: 'We ordered 1,200 Ninja Gear Boxer backpacks for our annual regional summit. The stitch quality, waterproof zips, and corporate rubber badging were flawless. Outstanding service from their Bengaluru factory hub.',
    rating: 5,
    avatar: 'RM',
    pill: '1,200 Ninja Gear Packs'
  },
  {
    name: 'Sneha Venkatesh',
    role: 'Brand & Marketing Lead',
    company: 'Biocon Biologics',
    text: 'The sustainable bamboo 4-in-1 gift sets were an absolute hit for our annual leadership conference. Real luxury feel without astronomical broker markups. They are our permanent corporate gifting partner.',
    rating: 5,
    avatar: 'SV',
    pill: '400+ Bamboo Hampers'
  }
];

export const CustomerTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10 space-y-12">
        
        {/* Centered Header matching slice_5.jpg */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C69214]">
            Client Testimonials
          </p>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#101828] leading-[1.12]">
            Trusted by procurement &amp; HR leaders
          </h2>
        </div>

        {/* 3-Column Testimonials Grid matching slice_5.jpg & slice_6.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-6 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-0.5 text-[#E8B43A]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E8B43A] text-[#E8B43A]" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md text-[10px] font-semibold text-[#475467] bg-white border border-[#E5E7EB]">
                    {item.pill}
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-[#101828] leading-relaxed font-normal">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#E5E7EB] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#0B111E] text-[#E8B43A] font-bold text-xs flex items-center justify-center shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#101828]">{item.name}</h4>
                  <p className="text-[11px] text-[#667085]">
                    {item.role} &bull; <span className="font-semibold text-[#101828]">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
