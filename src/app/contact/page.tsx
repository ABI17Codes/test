'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Clock, 
  ShieldCheck,
  Building2,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="py-10 bg-[#F5F7FA] space-y-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-[#667085]">
            <Link href="/" className="hover:text-[#101828]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#0876B4] font-semibold">Contact &amp; Concierge Desk</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              CORPORATE B2B HELPDESK &bull; BENGALURU ATELIER
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-[-0.03em]">
            Connect With Our{' '}
            <span className="brand-gradient-text">
              Corporate Desk
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#667085] max-w-3xl font-normal leading-relaxed">
            Planning your company&apos;s next gifting milestone or looking for custom branded executive backpacks? Our dedicated enterprise account managers in Bengaluru are ready to guide you.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0876B4] flex items-center justify-center border border-blue-100">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">
              Factory &amp; Registered Office
            </h3>
            <p className="text-xs text-[#667085] leading-relaxed">
              #22, 2nd Floor, Sharadanagar Main Rd, Opp. Vedantha College, Vasanthapura, Bengaluru, Karnataka &ndash; 560061
            </p>
            <span className="text-[11px] text-[#0876B4] font-semibold block pt-1">
              Hours: Mon &ndash; Sat, 9:30 AM &ndash; 6:30 PM IST
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0876B4] flex items-center justify-center border border-blue-100">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">
              Direct Phone &amp; WhatsApp
            </h3>
            <div className="space-y-1 text-xs">
              <a href="tel:+919900020456" className="text-[#101828] font-bold hover:text-[#0876B4] block">
                +91 99000 20456 (Corporate Desk)
              </a>
              <a href="tel:+919900026645" className="text-[#101828] font-bold hover:text-[#0876B4] block">
                +91 99000 26645 (Bulk Accounts)
              </a>
            </div>
            <a
              href="https://wa.me/919900020456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-emerald-700 font-bold hover:underline block pt-1"
            >
              Chat Instant on WhatsApp &rarr;
            </a>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-[#E5E7EB] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0876B4] flex items-center justify-center border border-blue-100">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#101828]">
              Official RFQ Emails
            </h3>
            <div className="space-y-1 text-xs">
              <a href="mailto:enquiry@globrandslifestyle.com" className="text-[#0876B4] font-bold hover:underline block">
                enquiry@globrandslifestyle.com
              </a>
              <span className="text-[#667085] block">
                Response SLA: Within 2 business hours
              </span>
            </div>
            <span className="text-[11px] text-[#667085] block pt-1">
              Social: @admalondonblr &bull; @ninjagearblr
            </span>
          </div>

        </div>

      </div>

      {/* Main Form Section */}
      <ContactSection />

    </div>
  );
}
