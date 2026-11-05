'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Building2, CheckCircle2 } from 'lucide-react';

export const CustomerTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Aditi Sharma',
      role: 'Head of People Operations',
      company: 'Tech Mahindra, Bengaluru',
      text: 'Globrands Lifestyle took care of our 650+ new-hire welcome kits across 4 offices. The custom laser engraving on the smart bottles and the ADMA London bags exceeded our executive expectations. Arrived 2 days ahead of schedule!',
      rating: 5,
      avatar: 'AS'
    },
    {
      name: 'Rajesh K. Mehta',
      role: 'Procurement VP',
      company: 'Flipkart Logistics',
      text: 'We ordered 1,200 Ninja Gear Boxer backpacks for our annual regional summit. The stitch quality, waterproof zips, and corporate rubber badging were flawless. Outstanding service from their Bangalore factory hub.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Sneha Venkatesh',
      role: 'Brand & Marketing Lead',
      company: 'Biocon Biologics',
      text: 'The sustainable bamboo 4-in-1 gift sets were an absolute hit for our annual leadership conference. Real luxury feel without the astronomical broker pricing. They are our permanent corporate gifting partner.',
      rating: 5,
      avatar: 'SV'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#F5F7FA] border-b border-[#E5E7EB] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E7EB]">
            <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] font-bold text-[#0876B4] tracking-wider uppercase">
              Verified Enterprise Experiences
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#101828] tracking-tight">
            Trusted by Procurement Leaders Across India
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-[#E5E7EB] shadow-xl relative text-left space-y-6">
          <div className="flex items-center justify-between">
            {/* Stars */}
            <div className="flex items-center text-[#E8B43A]">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E8B43A] text-[#E8B43A]" />
              ))}
            </div>
            <Quote className="w-8 h-8 text-[#0876B4]/20" />
          </div>

          <p className="text-base sm:text-lg text-[#101828] leading-relaxed font-normal">
            &ldquo;{current.text}&rdquo;
          </p>

          <div className="pt-6 border-t border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue-50 text-[#0876B4] font-bold text-sm flex items-center justify-center border border-blue-100">
                {current.avatar}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#101828]">{current.name}</h4>
                <p className="text-xs text-[#667085]">{current.role} &bull; <span className="font-semibold text-[#0876B4]">{current.company}</span></p>
              </div>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-9 h-9 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F5F7FA] text-[#101828] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F5F7FA] text-[#101828] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
