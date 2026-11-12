'use client';

import React from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUp,
  ArrowRight
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B111E] border-t border-white/10 text-white/70 text-xs pt-16 pb-10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-10">
        
        {/* Main Footer Grid matching slice_6.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 text-left">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 bg-white px-3.5 py-2 rounded-lg shadow-xs">
              <div className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/globrands-emblem-clean.png"
                  alt="Globrands Lifestyle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-xs leading-none font-sans">
                  <span className="text-[#0876B4]">GLOBRANDS</span>{' '}
                  <span className="text-[#E8B43A]">LIFESTYLE</span>
                </span>
                <span className="text-[8px] uppercase tracking-wider text-[#667085] font-semibold mt-0.5 font-mono">
                  Corporate Gifting &amp; Bags
                </span>
              </div>
            </Link>

            <p className="text-white/65 leading-relaxed font-normal text-xs">
              A premier corporate gifting and executive carrywear manufacturer helping enterprises build unforgettable brand moments through thoughtfully curated gift hampers, engineered bags, and in-house logo customisation.
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 space-y-1">
              <div className="text-[11px] text-white font-bold tracking-wider">
                &ldquo;GIFTS THAT SPEAK YOUR BRAND.&rdquo;
              </div>
              <div className="text-[11px] text-white/60 font-normal">
                100% In-House Bengaluru Production &bull; 1-Year Warranty on Bags
              </div>
            </div>

            <div className="text-[11px] font-semibold text-[#D49B27]">
              Ninja Gear (Original) &bull; ADMA London
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-white/65">
              <li>
                <Link href="/products" className="hover:text-[#E8B43A] transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="hover:text-[#E8B43A] transition-colors">
                  Corporate Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/bags" className="hover:text-[#E8B43A] transition-colors">
                  Bags &amp; Backpacks
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#E8B43A] transition-colors">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-[#E8B43A] transition-colors">
                  Branding Studio
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#E8B43A] transition-colors">
                  Proprietary Brands
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#E8B43A] transition-colors">
                  Bulk RFQ Basket
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#E8B43A] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E8B43A] transition-colors">
                  Contact &amp; Helpdesk
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2.5 text-white/65">
              <li>
                <Link href="/products?category=gift-sets" className="hover:text-[#E8B43A] transition-colors block">
                  Corporate Gift Sets (HGS 2-in-1 to 5-in-1)
                </Link>
              </li>
              <li>
                <Link href="/products?category=bags" className="hover:text-[#E8B43A] transition-colors block">
                  Corporate Bags (Ninja Gear &amp; ADMA London)
                </Link>
              </li>
              <li>
                <Link href="/products?category=drinkware" className="hover:text-[#E8B43A] transition-colors block">
                  Smart Temperature Bottles &amp; Flasks
                </Link>
              </li>
              <li>
                <Link href="/products?category=diaries" className="hover:text-[#E8B43A] transition-colors block">
                  Laser Color-Changer Notebooks &amp; Diaries
                </Link>
              </li>
              <li>
                <Link href="/products?category=mugs" className="hover:text-[#E8B43A] transition-colors block">
                  Cork-Base Ceramic &amp; Bamboo Mugs
                </Link>
              </li>
              <li>
                <Link href="/products?category=desktop" className="hover:text-[#E8B43A] transition-colors block">
                  Wooden Desk Organizers &amp; Clocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Bengaluru Atelier
            </h4>
            <div className="space-y-2.5 text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D49B27] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #22, 2nd Floor, Sharadanagar Main Rd, opp. Vedantha College, Vasanthapura, Bengaluru, Karnataka &ndash; 560061
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D49B27] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919900020456" className="hover:text-[#E8B43A] font-bold text-white">+91 99000 20456</a>
                  <a href="tel:+919900026645" className="hover:text-[#E8B43A] font-medium">+91 99000 26645</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D49B27] shrink-0" />
                <a href="mailto:enquiry@globrandslifestyle.com" className="hover:text-[#E8B43A] font-semibold text-[#E8B43A]">
                  enquiry@globrandslifestyle.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#D49B27] shrink-0" />
                <span>www.globrandslifestyle.com</span>
              </div>
            </div>

            {/* Catalog shortcuts in footer */}
            <div className="pt-2 space-y-2">
              <Link
                href="/catalog-viewer?type=bags"
                className="w-full px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-[11px] font-semibold flex items-center justify-between transition-colors"
              >
                <span>Browse Bag PDF (37p)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D49B27]" />
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="w-full px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 text-[11px] font-semibold flex items-center justify-between transition-colors"
              >
                <span>Browse Gifts PDF (146p)</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D49B27]" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            &copy; 2026 Globrands Lifestyle Pvt Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>@admalondonblr &bull; @ninjagearblr</span>
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#E8B43A]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
