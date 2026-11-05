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
    <section id="about" className="py-24 relative bg-[#F8F6F1] border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Official Story & Dual Brand Architecture */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold">
              <Building2 className="w-3.5 h-3.5 text-[#b88e3e]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
                COMPANY PROFILE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
              ARCHITECTS OF UNFORGETTABLE <br />
              <span className="gold-gradient-text">BRAND EXPERIENCES.</span>
            </h2>

            {/* Catalogue Text */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 font-normal leading-relaxed">
              <p>
                At <b className="text-[#111317] font-semibold">Globrands Lifestyle Pvt Ltd</b>, we believe in the art of design and the power of style. We are more than just a backpack and corporate gift manufacturing company; we are the architects of unforgettable moments and the curators of impeccable taste.
              </p>
              <p>
                Founded with a passion for elegance and an unyielding commitment to excellence, Globrands Lifestyle has established itself as a premier partner in the world of curated corporate gifting, executive bags, and custom merchandise. Our journey began with a simple idea: to transform the act of building eco-friendly, premium-quality products with the sophistication modern businesses demand.
              </p>
            </div>

            {/* Dual Brand Power Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#b88e3e]/40 shadow-xs transition-all">
                <div className="text-xs font-mono font-bold text-amber-600 mb-1">PROPRIETARY SERIES</div>
                <h4 className="text-sm font-bold text-[#111317] font-serif-luxury">NINJA GEAR ORIGINAL</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Our flagship backpack and gear series from concept to usage. Engineered with high-level features including antitheft architecture, quick-access tech organizers, and external USB ports.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 hover:border-[#b88e3e]/40 shadow-xs transition-all">
                <div className="text-xs font-mono font-bold text-blue-700 mb-1">EXECUTIVE SERIES</div>
                <h4 className="text-sm font-bold text-[#111317] font-serif-luxury">ADMA LONDON</h4>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  "A Real Companion" delivering timeless corporate backpacks, rain-covered business bags, messenger cases, and RFID-protected everyday carry gear for corporate workforces.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-neutral-700 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#b88e3e]" />
                1-Year Warranty on Bags
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#b88e3e]" />
                In-House 5-Stage QC
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#b88e3e]" />
                Pan-India Enterprise Delivery
              </span>
            </div>

          </div>

          {/* Right Column: Corporate Headquarters & Manufacturing Hub */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#b88e3e]/30 p-8 text-left space-y-6 shadow-xl shadow-[#b88e3e]/5">
              
              <div className="flex items-center gap-4 pb-5 border-b border-neutral-100">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-[#b88e3e]/30 bg-white p-1 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="/globrands-logo.jpg"
                    alt="Globrands Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
                    Globrands Lifestyle Pvt Ltd
                  </h3>
                  <span className="text-xs text-[#916c27] font-semibold">Official Manufacturer & B2B Partner</span>
                </div>
              </div>

              {/* Verified Contact Details from Catalogue */}
              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#b88e3e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Factory & Registered Office:</span>
                    <span className="text-neutral-600 leading-relaxed block mt-0.5">
                      #22, 2nd Floor, Sharadanagar Main Rd, <br />
                      Opp. Vedantha College, Vasanthapura, <br />
                      Bengaluru, Karnataka – 560061
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#b88e3e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Corporate Helplines:</span>
                    <a href="tel:+919900020456" className="text-neutral-700 hover:text-[#916c27] block mt-0.5 font-medium">
                      +91 99000 20456
                    </a>
                    <a href="tel:+919900026645" className="text-neutral-700 hover:text-[#916c27] block font-medium">
                      +91 99000 26645
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#b88e3e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Official RFQ Email:</span>
                    <a href="mailto:enquiry@globrandslifestyle.com" className="text-[#916c27] hover:underline block mt-0.5 font-semibold">
                      enquiry@globrandslifestyle.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-[#b88e3e] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#111317] block">Websites:</span>
                    <div className="flex flex-col gap-0.5 mt-0.5">
                      <a href="http://www.globrandslifestyle.com" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-[#916c27]">
                        www.globrandslifestyle.com
                      </a>
                      <a href="http://www.ninjagear.co.in" target="_blank" rel="noopener noreferrer" className="text-neutral-700 hover:text-[#916c27]">
                        www.ninjagear.co.in
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Media handles from Catalogue */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Social Handles:</span>
                <div className="flex items-center gap-3 font-semibold">
                  <span className="text-[#916c27]">@admalondonblr</span>
                  <span className="text-[#916c27]">@ninjagearblr</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

