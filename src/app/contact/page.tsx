'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  MessageCircle, 
  ChevronRight, 
  Clock, 
  ShieldCheck,
  Building2,
  Sparkles
} from 'lucide-react';
import { ContactSection } from '../../components/ContactSection';

export default function ContactPage() {
  return (
    <div className="py-12 bg-[#FCFBF9] space-y-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 space-y-8">
        
        {/* Header Breadcrumb */}
        <div className="text-left space-y-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <Link href="/" className="hover:text-black">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#916c27] font-semibold">Contact & Support</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full badge-gold">
            <MessageCircle className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-extrabold text-[#916c27]">
              CORPORATE B2B HELPDESK
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            CONNECT WITH OUR CORPORATE DESK
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 max-w-3xl font-normal leading-relaxed">
            Planning your company's next gifting milestone or looking for custom branded executive backpacks? Our dedicated account managers in Bengaluru are ready to guide you.
          </p>
        </div>

        {/* 3 Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <div className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Factory & Registered Office
            </h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              #22, 2nd Floor, Sharadanagar Main Rd, Opp. Vedantha College, Vasanthapura, Bengaluru, Karnataka – 560061
            </p>
            <span className="text-[11px] text-[#916c27] font-semibold block pt-1">
              Hours: Mon – Sat, 9:30 AM – 6:30 PM IST
            </span>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Direct Phone & WhatsApp
            </h3>
            <div className="space-y-1 text-xs">
              <a href="tel:+919900020456" className="text-[#111317] font-semibold hover:text-[#916c27] block">
                +91 99000 20456 (Corporate Desk)
              </a>
              <a href="tel:+919900026645" className="text-[#111317] font-semibold hover:text-[#916c27] block">
                +91 99000 26645 (Bulk Accounts)
              </a>
            </div>
            <a
              href="https://wa.me/919900020456"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-emerald-700 font-bold hover:underline block pt-1"
            >
              Chat Instant on WhatsApp →
            </a>
          </div>

          <div className="p-7 rounded-3xl bg-white border border-neutral-200/90 shadow-2xs space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF6EE] text-[#916c27] flex items-center justify-center border border-[#b88e3e]/20">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
              Official RFQ Emails
            </h3>
            <div className="space-y-1 text-xs">
              <a href="mailto:enquiry@globrandslifestyle.com" className="text-[#916c27] font-semibold hover:underline block">
                enquiry@globrandslifestyle.com
              </a>
              <span className="text-neutral-500 block">
                Response SLA: Within 2 business hours
              </span>
            </div>
            <span className="text-[11px] text-neutral-400 block pt-1">
              Social: @admalondonblr • @ninjagearblr
            </span>
          </div>

        </div>

      </div>

      {/* Main Form Section */}
      <ContactSection />

    </div>
  );
}

