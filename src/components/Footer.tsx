'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowUp, 
  FileText,
  ShieldCheck
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E5E7EB] text-[#667085] text-xs pt-8 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Horizontal Brand & Quick Nav Strip matching reference image */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 mb-10 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-5">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E5E7EB] shadow-2xs bg-white p-0.5 flex items-center justify-center">
                <img
                  src="/globrands-emblem-clean.png"
                  alt="Globrands Lifestyle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-sm leading-none font-sans">
                  <span className="text-[#0876B4]">GLOBRANDS</span>{' '}
                  <span className="text-[#E8B43A]">LIFESTYLE</span>
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#667085] font-semibold mt-0.5 font-mono">
                  Corporate Gifting &amp; Bags
                </span>
              </div>
            </Link>
            <div className="hidden lg:block h-6 w-[1px] bg-[#E5E7EB]" />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-[#101828]">
            <Link href="/products" className="hover:text-[#0876B4] transition-colors">Products</Link>
            <Link href="/gift-sets" className="hover:text-[#0876B4] transition-colors">Gift Sets</Link>
            <Link href="/bags" className="hover:text-[#0876B4] transition-colors">Bags</Link>
            <Link href="/branding" className="hover:text-[#0876B4] transition-colors">Branding</Link>
            <Link href="/solutions" className="hover:text-[#0876B4] transition-colors">Solutions</Link>
            <Link href="/about" className="hover:text-[#0876B4] transition-colors">About</Link>
            <Link href="/contact" className="hover:text-[#0876B4] transition-colors">Contact</Link>
          </nav>

          <div className="text-xs text-[#667085]">
            &copy; 2026 Globrands Lifestyle. All rights reserved.
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#E5E7EB] text-left">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#0876B4]/25 shadow-xs bg-white p-1 flex items-center justify-center">
                <img
                  src="/globrands-emblem-clean.png"
                  alt="Globrands Lifestyle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-base tracking-wider font-sans">
                <span className="text-[#0876B4]">GLOBRANDS</span>{' '}
                <span className="text-[#E8B43A]">LIFESTYLE</span>
              </span>
            </Link>

            <p className="text-[#667085] leading-relaxed font-normal text-xs">
              A premium corporate gifting and executive carrywear manufacturer helping enterprises build unforgettable brand moments through thoughtfully curated gift hampers, engineered bags, and in-house logo customisation.
            </p>

            <div className="pt-2 text-[11px] text-[#0876B4] font-semibold space-y-1">
              <div>&ldquo;GIFTS THAT SPEAK YOUR BRAND.&rdquo;</div>
              <div className="text-[#667085] font-normal">100% In-House Bengaluru Production &bull; 1-Year Warranty on Bags</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#101828] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-[#0876B4] transition-colors">
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="hover:text-[#0876B4] transition-colors">
                  Corporate Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/bags" className="hover:text-[#0876B4] transition-colors">
                  Bags &amp; Backpacks
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#0876B4] transition-colors">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-[#0876B4] transition-colors">
                  Branding Studio
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#0876B4] transition-colors">
                  Proprietary Brands
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#0876B4] transition-colors">
                  Bulk RFQ Basket
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#0876B4] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0876B4] transition-colors">
                  Contact &amp; Helpdesk
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#101828] uppercase tracking-wider">
              Collections
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=gift-sets" className="hover:text-[#0876B4] transition-colors block">
                  Corporate Gift Sets (HGS 2-in-1 to 5-in-1)
                </Link>
              </li>
              <li>
                <Link href="/products?category=bags" className="hover:text-[#0876B4] transition-colors block">
                  Corporate Bags (Ninja Gear &amp; ADMA London)
                </Link>
              </li>
              <li>
                <Link href="/products?category=drinkware" className="hover:text-[#0876B4] transition-colors block">
                  Smart Temperature Bottles &amp; Flasks
                </Link>
              </li>
              <li>
                <Link href="/products?category=diaries" className="hover:text-[#0876B4] transition-colors block">
                  Laser Color-Changer Notebooks &amp; Diaries
                </Link>
              </li>
              <li>
                <Link href="/products?category=mugs" className="hover:text-[#0876B4] transition-colors block">
                  Cork-Base Ceramic &amp; Bamboo Mugs
                </Link>
              </li>
              <li>
                <Link href="/products?category=desktop" className="hover:text-[#0876B4] transition-colors block">
                  Wooden Desk Organizers &amp; Clocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-[#101828] uppercase tracking-wider">
              Bengaluru Atelier
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0876B4] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  #22, 2nd Floor, Sharadanagar Main Rd, opp. Vedantha College, Vasanthapura, Bengaluru, Karnataka &ndash; 560061
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0876B4] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919900020456" className="hover:text-[#0876B4] font-bold text-[#101828]">+91 99000 20456</a>
                  <a href="tel:+919900026645" className="hover:text-[#0876B4] font-medium">+91 99000 26645</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0876B4] shrink-0" />
                <a href="mailto:enquiry@globrandslifestyle.com" className="hover:text-[#0876B4] font-semibold text-[#0876B4]">
                  enquiry@globrandslifestyle.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0876B4] shrink-0" />
                <span>www.globrandslifestyle.com</span>
              </div>
            </div>

            {/* Catalog shortcuts in footer */}
            <div className="pt-2 flex items-center gap-2">
              <Link
                href="/catalog-viewer?type=bags"
                className="px-2.5 py-1 rounded-lg bg-[#F5F7FA] hover:bg-neutral-200 text-[#101828] border border-[#E5E7EB] text-[11px] font-medium shadow-2xs"
              >
                Browse Bag PDF (37p)
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="px-2.5 py-1 rounded-lg bg-[#F5F7FA] hover:bg-neutral-200 text-[#101828] border border-[#E5E7EB] text-[11px] font-medium shadow-2xs"
              >
                Browse Gifts PDF (146p)
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#667085]">
          <div>
            &copy; 2026 Globrands Lifestyle Pvt Ltd. All rights reserved.
            Brands: Ninja Gear (Original) &amp; ADMA London.
          </div>

          <div className="flex items-center gap-6">
            <span>Social: @admalondonblr &bull; @ninjagearblr</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-neutral-100 text-[#101828] border border-[#E5E7EB] flex items-center gap-1 transition-colors shadow-2xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#0876B4]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
