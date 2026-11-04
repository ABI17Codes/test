'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

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
      text: 'We ordered 1,200 Ninja Gear Boxer backpacks for our annual regional summit. The stitch quality, waterproof zips, and corporate rubber badging were flawless. Outstanding service from their Bangalore hub.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Sneha Venkatesh',
      role: 'Brand & Marketing Lead',
      company: 'Biocon Biologics',
      text: 'The sustainable bamboo 4-in-1 gift sets were an absolute hit for our annual leadership conference. Real luxury feel without the astronomical pricing. Will be our primary corporate gifting partner.',
      rating: 5,
      avatar: 'SV'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-white relative overflow-hidden border-t border-neutral-100">
      
      {/* Subtle floating colored dots matching reference image */}
      <div className="absolute top-12 left-[20%] w-3 h-3 rounded-full bg-amber-400 opacity-60 hidden md:block" />
      <div className="absolute top-28 right-[18%] w-3.5 h-3.5 rounded-full bg-blue-500 opacity-60 hidden md:block" />
      <div className="absolute bottom-16 left-[25%] w-2.5 h-2.5 rounded-full bg-emerald-400 opacity-60 hidden md:block" />
      <div className="absolute bottom-20 right-[22%] w-3 h-3 rounded-full bg-rose-400 opacity-60 hidden md:block" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="space-y-2 mb-14">
          <span className="text-xs font-bold text-neutral-400 tracking-widest uppercase">
            — Trusted by 500+ Enterprises
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111317] tracking-tight">
            Reviews from Our Customers
          </h2>
        </div>

        {/* Central Floating Avatar Circle */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-8">
          {testimonials.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all duration-300 border-2 cursor-pointer ${
                currentIndex === idx
                  ? 'bg-[#2563eb] text-white border-white shadow-lg scale-110'
                  : 'bg-neutral-100 text-neutral-600 border-transparent hover:bg-neutral-200'
              }`}
            >
              {t.avatar}
            </button>
          ))}
        </div>

        {/* Quote Card */}
        <div className="max-w-2xl mx-auto bg-neutral-50/80 border border-neutral-200/80 rounded-3xl p-8 sm:p-10 shadow-xs relative">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(current.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-medium italic mb-6">
            &ldquo;{current.text}&rdquo;
          </p>

          <div>
            <h4 className="text-sm font-bold text-neutral-900">
              {current.name}
            </h4>
            <p className="text-xs text-neutral-500 font-normal">
              {current.role} • <span className="font-semibold text-neutral-700">{current.company}</span>
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="p-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-neutral-400 font-semibold px-2">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={() => setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="p-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

