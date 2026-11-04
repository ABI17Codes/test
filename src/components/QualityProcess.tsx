import React from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  Layers, 
  Clock, 
  Award, 
  Wrench, 
  Factory, 
  Sparkles,
  Scissors,
  CheckCheck
} from 'lucide-react';
import { BRAND_STRENGTHS, COMPANY_STATS } from '../data/products';

export const QualityProcess: React.FC = () => {
  return (
    <section id="quality-assurance" className="py-24 relative bg-[#F8F6F1] border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
              IN-HOUSE MANUFACTURING EXCELLENCE
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            THE 5-STAGE QUALITY <br />
            <span className="gold-gradient-text">CONTROL PROCESS.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Direct from our Bangalore manufacturing facility. We maintain zero tolerance for defects through systematic inspection at every milestone.
          </p>
        </div>

        {/* 5-Stage Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {BRAND_STRENGTHS.map((stage, idx) => (
            <div
              key={stage.stage}
              className="luxury-card relative p-5 rounded-2xl bg-white border border-neutral-200/80 hover:border-[#b88e3e]/40 shadow-xs hover:shadow-md text-left flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-3">
                  <span className="text-2xl font-black text-[#916c27] font-serif-luxury">
                    {stage.stage}
                  </span>
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Stage {idx + 1}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                  {stage.title}
                </h4>

                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <CheckCheck className="w-3.5 h-3.5" />
                <span>Zero Defect Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Strengths Grid (From Bag Catalogue Page 37) */}
        <div className="luxury-card rounded-3xl bg-white p-8 sm:p-12 border border-neutral-200/80 shadow-md">
          <div className="text-left mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111317] font-serif-luxury">
              Why Corporate Leaders Choose Globrands Lifestyle
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              Verified corporate credentials and manufacturing capabilities from our corporate profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            
            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">Creative Designs & Tailored Solutions</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Experience innovation at its best with our unique designs and customized products, complete with a fully functional prototype that brings your ideas to life.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <Factory className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">100% In-House Production</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Our streamlined process ensures efficiency and quality control, as we handle every step of production in-house. From concept to creation, we’ve got it covered.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">OEM & ODM Orders with Warranty</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Choose us for your OEM (Original Equipment Manufacturer) and ODM needs. Enjoy peace of mind with a one-year warranty on our bags, ensuring satisfaction.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">On-Time Every Time</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Our delivery motto is simple – “on time every time.” Rest easy knowing that your corporate event orders will be delivered promptly, meeting your deadlines seamlessly.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">Competitive Pricing, Reliable Quality</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                Expect the best of both worlds – competitive tier-based pricing without compromising on material or finish. Delivering tangible ROI for every client.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#FAF8F5] border border-neutral-200 hover:border-[#b88e3e]/30 transition-all">
              <div className="p-2.5 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20 w-fit mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#111317] font-serif-luxury">Sustainable Solutions in Budget</h4>
              <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                We believe in eco-friendly practices without compromising your budget. Explore our range of sustainable bamboo and recyclable merchandise.
              </p>
            </div>

          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 mt-10 border-t border-neutral-200">
            {COMPANY_STATS.map((stat, i) => (
              <div key={i} className="text-center md:text-left space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#916c27] font-serif-luxury">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-[#111317]">{stat.label}</div>
                <div className="text-[11px] text-neutral-500">{stat.sub}</div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

