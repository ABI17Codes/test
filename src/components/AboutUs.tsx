import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  CheckCircle2
} from 'lucide-react';  
import { COMPANY_INFO } from '../data/siteContent';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#F5F0E8] border-t border-[#EAE3D8]">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Story & Dual Brand Architecture */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE3D8] border border-[#C5A16D]/30 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#A98554]" />
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#211D1A]">
                DIRECT BENGALURU FACTORY ATELIER &bull; COMPANY PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#211D1A] tracking-tight">
              Architects of Exceptional <br />
              <span className="text-[#A98554]">Corporate Brand Experiences.</span>
            </h2>

            {/* Catalogue Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#69635C] font-normal leading-relaxed">
              <p>
                At <b className="text-[#211D1A] font-semibold">{COMPANY_INFO.legalName}</b>, we believe in functional industrial design and rigorous manufacturing craftsmanship. We are primary direct factory manufacturers of high-performance backpacks and business carrywear, alongside curated corporate gifting suites and welcome kits.
              </p>
              <p>
                Operating our own specialized cutting, assembly, and branding atelier in Bengaluru, Karnataka, <b className="text-[#211D1A]">{COMPANY_INFO.legalName}</b> delivers direct factory pricing with enterprise-grade {COMPANY_INFO.qcProtocol}s, guaranteed zero-distortion brand replication, and nationwide on-time SLA fulfillment.
              </p>
            </div>

            {/* Dual Brand Power Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#C5A16D] shadow-xs transition-all">
                <div className="text-[11px] font-mono font-bold text-[#A98554] uppercase tracking-wider mb-1">PROPRIETARY SERIES</div>
                <h4 className="text-base font-bold text-[#211D1A]">NINJA GEAR ORIGINAL</h4>
                <p className="text-xs text-[#69635C] mt-1.5 leading-relaxed">
                  Our flagship engineered backpack line. Built with 17&quot; padded laptop vaults, concealed anti-theft zips, quick-access tech organizers, and water-resistant coated ballistic nylon.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#EAE3D8] hover:border-[#C5A16D] shadow-xs transition-all">
                <div className="text-[11px] font-mono font-bold text-[#A98554] uppercase tracking-wider mb-1">EXECUTIVE SERIES</div>
                <h4 className="text-base font-bold text-[#211D1A]">ADMA LONDON</h4>
                <p className="text-xs text-[#69635C] mt-1.5 leading-relaxed">
                  &ldquo;A Real Companion&rdquo; delivering timeless corporate backpacks, integrated rain-cover travel bags, messenger cases, and RFID-protected everyday carry for enterprise workforces.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#211D1A] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A98554]" />
                {COMPANY_INFO.warrantyText}
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#A98554]" />
                In-House {COMPANY_INFO.qcProtocol}s
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C5A16D]" />
                Doorstep Pan-India Multi-Location SLA
              </span>
            </div>

          </div>

          {/* Right Column: Corporate Headquarters & Manufacturing Hub */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#EAE3D8] p-8 text-left space-y-6 shadow-xs">
              
              <div className="flex items-center gap-4 pb-5 border-b border-[#EAE3D8]">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#EAE3D8] bg-white p-1 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src="/globrands-logo.jpg"
                    alt={`${COMPANY_INFO.legalName} Logo`}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#211D1A]">
                    {COMPANY_INFO.legalName}
                  </h3>
                  <span className="text-xs text-[#A98554] font-semibold">Official Manufacturer &amp; B2B Partner</span>
                </div>
              </div>

              {/* Verified Contact Details from Centralized Data */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A98554] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#211D1A] block">Factory &amp; Registered Office:</span>
                    <span className="text-[#69635C] leading-relaxed block mt-0.5">
                      {COMPANY_INFO.contact.address.line1}, <br />
                      {COMPANY_INFO.contact.address.landmark}, <br />
                      {COMPANY_INFO.contact.address.city}, {COMPANY_INFO.contact.address.state} &ndash; {COMPANY_INFO.contact.address.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A98554] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#211D1A] block">Corporate Helplines:</span>
                    <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-[#211D1A] hover:text-[#A98554] block mt-0.5 font-medium">
                      {COMPANY_INFO.contact.corporatePhone}
                    </a>
                    <a href="tel:+919900026645" className="text-[#211D1A] hover:text-[#A98554] block font-medium">
                      {COMPANY_INFO.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A98554] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#211D1A] block">Official RFQ Email:</span>
                    <a href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`} className="text-[#211D1A] hover:text-[#A98554] hover:underline block mt-0.5 font-semibold">
                      {COMPANY_INFO.contact.enquiryEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#A98554] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#211D1A] block">Websites:</span>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      {COMPANY_INFO.contact.websites.map((web, idx) => (
                        <a key={idx} href={web.url} target="_blank" rel="noopener noreferrer" className="text-[#69635C] hover:text-[#211D1A]">
                          {web.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Media handles */}
              <div className="pt-4 border-t border-[#EAE3D8] flex items-center justify-between text-[11px] text-[#69635C]">
                <span>Social Handles:</span>
                <div className="flex items-center gap-3 font-semibold">
                  <span className="text-[#211D1A]">{COMPANY_INFO.contact.social.admaInstagram}</span>
                  <span className="text-[#211D1A]">{COMPANY_INFO.contact.social.ninjaInstagram}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
