import React from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Clock, 
  Award, 
  Factory, 
  Sparkles,
  CheckCheck
} from 'lucide-react';
import { BRAND_STRENGTHS, COMPANY_STATS } from '../data/products';

export const QualityProcess: React.FC = () => {
  return (
    <section id="quality-assurance" className="py-20 relative bg-[#F5F7FA] border-t border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              IN-HOUSE MANUFACTURING EXCELLENCE &bull; ZERO DEFECT PROTOCOL
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight">
            The 5-Stage Precision <br />
            <span className="brand-gradient-text">Quality Control Protocol.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
            Direct from our Bengaluru manufacturing facility. We maintain zero tolerance for defects through systematic inspection at every milestone.
          </p>
        </div>

        {/* 5-Stage Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {BRAND_STRENGTHS.map((stage, idx) => (
            <div
              key={stage.stage}
              className="relative p-5 rounded-2xl bg-white border border-[#E5E7EB] hover:border-[#0876B4]/50 shadow-xs hover:shadow-md text-left flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] mb-3">
                  <span className="text-2xl font-black text-[#0876B4]">
                    {stage.stage}
                  </span>
                  <span className="text-[10px] font-bold text-[#667085] uppercase tracking-wider">
                    Stage {idx + 1}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#101828] group-hover:text-[#0876B4] transition-colors">
                  {stage.title}
                </h4>

                <p className="text-xs text-[#667085] mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCheck className="w-3.5 h-3.5" />
                <span>Zero Defect Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Strengths Grid */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-[#E5E7EB] shadow-xs">
          <div className="text-left mb-10 space-y-2">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              PROVEN ENTERPRISE RECORD
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101828] tracking-tight">
              Why Corporate Procurement Heads Choose Globrands Lifestyle
            </h3>
            <p className="text-xs sm:text-sm text-[#667085]">
              Verified corporate credentials and manufacturing capabilities from our corporate profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">Creative Designs &amp; Tailored Solutions</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                Experience innovation at its best with our unique designs and customized products, complete with a fully functional prototype that brings your ideas to life.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <Factory className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">100% In-House Production</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                Our streamlined process ensures efficiency and quality control, as we handle every step of production in-house. From concept to creation, we’ve got it covered.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">OEM &amp; ODM Orders with Warranty</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                Choose us for your OEM (Original Equipment Manufacturer) and ODM needs. Enjoy peace of mind with a one-year warranty on our bags, ensuring satisfaction.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">On-Time Every Time</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                Our delivery motto is simple – “on time every time.” Rest easy knowing that your corporate event orders will be delivered promptly, meeting your deadlines seamlessly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">Competitive Pricing, Reliable Quality</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                Expect the best of both worlds – competitive tier-based pricing without compromising on material or finish. Delivering tangible ROI for every client.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E5E7EB] hover:border-[#0876B4]/40 transition-all">
              <div className="p-2.5 rounded-xl bg-blue-50 text-[#0876B4] border border-blue-100 w-fit mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#101828]">Sustainable Solutions in Budget</h4>
              <p className="text-xs text-[#667085] mt-1.5 leading-relaxed">
                We believe in eco-friendly practices without compromising your budget. Explore our range of sustainable bamboo and recyclable merchandise.
              </p>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-[#E5E7EB]">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0876B4]">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#101828]">{stat.label}</div>
                <div className="text-[11px] text-[#667085]">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
