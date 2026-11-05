import React from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone, 
  Globe, 
  ShieldCheck, 
  Award, 
  Factory, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';  

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-[#F5F7FA] border-t border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Story & Dual Brand Architecture */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
              <Building2 className="w-3.5 h-3.5 text-[#0876B4]" />
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
                DIRECT BENGALURU FACTORY ATELIER &bull; COMPANY PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight">
              Architects of Exceptional <br />
              <span className="brand-gradient-text">Corporate Brand Experiences.</span>
            </h2>

            {/* Catalogue Text */}
            <div className="space-y-4 text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
              <p>
                At <b className="text-[#101828] font-semibold">Globrands Lifestyle Pvt Ltd</b>, we believe in the art of functional industrial design and the power of executive craftsmanship. We are direct factory manufacturers of curated corporate gift sets, engineered business carrywear, and bespoke executive merchandise.
              </p>
              <p>
                Founded with a commitment to unyielding engineering precision, Globrands Lifestyle operates its own specialized assembly and branding atelier in Bengaluru, Karnataka. We bridge direct factory pricing with enterprise-grade quality control, guaranteeing zero-distortion brand replication and reliable nationwide SLA fulfillment.
              </p>
            </div>

            {/* Dual Brand Power Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/50 shadow-xs transition-all">
                <div className="text-[11px] font-mono font-bold text-[#0876B4] uppercase tracking-wider mb-1">PROPRIETARY SERIES</div>
                <h4 className="text-base font-bold text-[#101828]">NINJA GEAR ORIGINAL</h4>
                <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                  Our flagship engineered backpack line. Built with 17&quot; padded laptop vaults, concealed anti-theft zips, quick-access tech organizers, and water-resistant coated ballistic nylon.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/50 shadow-xs transition-all">
                <div className="text-[11px] font-mono font-bold text-[#0876B4] uppercase tracking-wider mb-1">EXECUTIVE SERIES</div>
                <h4 className="text-base font-bold text-[#101828]">ADMA LONDON</h4>
                <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                  &ldquo;A Real Companion&rdquo; delivering timeless corporate backpacks, integrated rain-cover travel bags, messenger cases, and RFID-protected everyday carry for enterprise workforces.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#101828] font-semibold">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0876B4]" />
                1-Year Bag Replacement Warranty
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0876B4]" />
                In-House 5-Stage QC Audits
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#E8B43A]" />
                Doorstep Pan-India Multi-Location SLA
              </span>
            </div>

          </div>

          {/* Right Column: Corporate Headquarters & Manufacturing Hub */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#E5E7EB] p-8 text-left space-y-6 shadow-xs">
              
              <div className="flex items-center gap-4 pb-5 border-b border-[#E5E7EB]">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white p-1 flex items-center justify-center shrink-0 shadow-2xs">
                  <img
                    src="/globrands-logo.jpg"
                    alt="Globrands Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#101828]">
                    Globrands Lifestyle Pvt Ltd
                  </h3>
                  <span className="text-xs text-[#0876B4] font-semibold">Official Manufacturer &amp; B2B Partner</span>
                </div>
              </div>

              {/* Verified Contact Details from Catalogue */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101828] block">Factory &amp; Registered Office:</span>
                    <span className="text-[#667085] leading-relaxed block mt-0.5">
                      #22, 2nd Floor, Sharadanagar Main Rd, <br />
                      Opp. Vedantha College, Vasanthapura, <br />
                      Bengaluru, Karnataka &ndash; 560061
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101828] block">Corporate Helplines:</span>
                    <a href="tel:+919900020456" className="text-[#101828] hover:text-[#0876B4] block mt-0.5 font-medium">
                      +91 99000 20456
                    </a>
                    <a href="tel:+919900026645" className="text-[#101828] hover:text-[#0876B4] block font-medium">
                      +91 99000 26645
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101828] block">Official RFQ Email:</span>
                    <a href="mailto:enquiry@globrandslifestyle.com" className="text-[#0876B4] hover:underline block mt-0.5 font-semibold">
                      enquiry@globrandslifestyle.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#101828] block">Websites:</span>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      <a href="http://www.globrandslifestyle.com" target="_blank" rel="noopener noreferrer" className="text-[#667085] hover:text-[#0876B4]">
                        www.globrandslifestyle.com
                      </a>
                      <a href="http://www.ninjagear.co.in" target="_blank" rel="noopener noreferrer" className="text-[#667085] hover:text-[#0876B4]">
                        www.ninjagear.co.in
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Media handles from Catalogue */}
              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] text-[#667085]">
                <span>Social Handles:</span>
                <div className="flex items-center gap-3 font-semibold">
                  <span className="text-[#0876B4]">@admalondonblr</span>
                  <span className="text-[#0876B4]">@ninjagearblr</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
