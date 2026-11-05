'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
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
    <div className="py-10 bg-[#F5F7FA] space-y-16">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              GLOBRANDS LIFESTYLE PVT LTD &bull; FACTORY ATELIER
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-[-0.03em]">
            Architects of Exceptional <br />
            <span className="brand-gradient-text">
              Corporate Brand Experiences
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            Founded with an unyielding commitment to industrial craftsmanship, Globrands Lifestyle has established itself as an enterprise partner in corporate gifting, executive bags, and custom merchandise across India.
          </p>
        </div>

      </div>

      {/* Corporate Profile Section */}
      <AboutUs />

      {/* 5-Stage QC & Core Strengths */}
      <QualityProcess />

      {/* Location & Facility Card */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0876B4]">
              <MapPin className="w-4 h-4" />
              <span>HEADQUARTERS &amp; MANUFACTURING HUB</span>
            </div>
            <h3 className="text-2xl font-bold text-[#101828]">
              Schedule a Corporate Showroom Visit in Bengaluru
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Touch, inspect, and test all 183+ product models, leather diary finishes, vacuum bottles, and Ninja Gear backpacks in person at our Bengaluru facility.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs font-bold text-center shadow-xs transition-colors"
            >
              Book an Appointment
            </Link>
            <a
              href="tel:+919900020456"
              className="px-6 py-3 rounded-full bg-[#F5F7FA] hover:bg-neutral-200/70 border border-[#E5E7EB] text-[#101828] text-xs font-bold text-center shadow-xs transition-colors"
            >
              Call +91 99000 20456
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
