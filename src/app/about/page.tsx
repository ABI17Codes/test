'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  Factory, 
  CheckCircle2,
  Clock,
  Layers,
  ArrowRight
} from 'lucide-react';
import { AboutUs } from '../../components/AboutUs';
import { QualityProcess } from '../../components/QualityProcess';

export default function AboutPage() {
  return (
    <div className="py-12 bg-[#FCFBF9] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <Building2 className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              GLOBRANDS LIFESTYLE PVT LTD
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            ARCHITECTS OF UNFORGETTABLE BRAND EXPERIENCES
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Founded with an unyielding commitment to craftsmanship, Globrands Lifestyle has established itself as an enterprise partner in corporate gifting, executive bags, and custom merchandise across India.
          </p>
        </div>

      </div>

      {/* Corporate Profile Section */}
      <AboutUs />

      {/* 5-Stage QC & Core Strengths */}
      <QualityProcess />

      {/* Location & Facility Card */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-neutral-200/90 shadow-sm text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#916c27]">
              <MapPin className="w-4 h-4" />
              <span>HEADQUARTERS & MANUFACTURING HUB</span>
            </div>
            <h3 className="text-2xl font-bold text-[#111317] font-serif-luxury">
              Schedule a Corporate Showroom Visit in Bengaluru
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Touch, inspect, and test all 183+ product models, leather diary finishes, vacuum bottles, and Ninja Gear backpacks in person at our Bengaluru facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl gold-luxury-button text-xs font-bold text-center shadow-xs"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+919900020456"
              className="px-6 py-3.5 rounded-xl primary-luxury-button text-xs font-bold text-center shadow-xs"
            >
              Call +91 99000 20456
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

