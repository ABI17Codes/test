'use client';

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Users, 
  Briefcase, 
  Award, 
  Calendar, 
  HeartHandshake, 
  Crown,
  ChevronRight
} from 'lucide-react';
import { CORPORATE_SOLUTIONS } from '../data/products';
import { useQuote } from '../context/QuoteContext';

interface GiftingSolutionsProps {
  onSelectSolution: (recommendedCodes: string[]) => void;
}

export const GiftingSolutions: React.FC<GiftingSolutionsProps> = ({ onSelectSolution }) => {
  const { setIsDrawerOpen } = useQuote();

  const getIcon = (id: string) => {
    switch (id) {
      case 'welcome-kits': return <Users className="w-5 h-5 text-[#b88e3e]" />;
      case 'client-appreciation': return <HeartHandshake className="w-5 h-5 text-[#b88e3e]" />;
      case 'event-conferences': return <Calendar className="w-5 h-5 text-[#b88e3e]" />;
      case 'promotional-merch': return <Award className="w-5 h-5 text-[#b88e3e]" />;
      case 'festival-diwali': return <Sparkles className="w-5 h-5 text-[#b88e3e]" />;
      case 'leadership-vip': return <Crown className="w-5 h-5 text-[#b88e3e]" />;
      default: return <Briefcase className="w-5 h-5 text-[#b88e3e]" />;
    }
  };

  return (
    <section id="solutions" className="py-24 relative bg-[#F8F6F1] border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold">
            <Sparkles className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
              STRATEGIC CORPORATE SOLUTIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            THE RIGHT GIFTS FOR <br />
            <span className="gold-gradient-text">EVERY BUSINESS MOMENT.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Whether welcoming 500 new team members or honoring executive leadership, our end-to-end B2B gifting programs are tailored to your company's milestones.
          </p>
        </div>

        {/* 6 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORPORATE_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="luxury-card rounded-2xl bg-white border border-neutral-200/80 hover:border-[#b88e3e]/40 p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-neutral-100">
                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-neutral-200 group-hover:border-[#b88e3e]/30 group-hover:bg-[#fbf5e8] transition-colors">
                    {getIcon(sol.id)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full badge-gold text-[#916c27]">
                    {sol.tag}
                  </span>
                </div>

                {/* Card Image */}
                <div className="relative my-4 aspect-[16/10] rounded-xl overflow-hidden bg-[#F3EFEA] border border-neutral-200/60 shadow-inner">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-xs text-white font-medium block drop-shadow-md">
                      {sol.subtitle}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-[#111317] group-hover:text-[#916c27] transition-colors font-serif-luxury">
                  {sol.title}
                </h3>

                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  {sol.description}
                </p>

                {/* Recommended Codes */}
                <div className="mt-4 pt-3 border-t border-neutral-100">
                  <span className="text-[10px] text-neutral-400 uppercase tracking-wider block mb-1.5 font-semibold">
                    Recommended SKUs:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.recommendedProducts.map((sku, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF8F5] text-neutral-700 border border-neutral-200"
                      >
                        {sku}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => setIsDrawerOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#111317] hover:bg-[#b88e3e] text-white text-xs font-semibold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-sm"
                >
                  <span>Enquire For {sol.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

