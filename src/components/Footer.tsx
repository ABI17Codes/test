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
    <footer className="bg-white border-t border-neutral-200/90 text-neutral-600 text-xs pt-16 pb-12">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-200/80 text-left">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#0E679C]/25 shadow-xs bg-white p-1 flex items-center justify-center">
                <img
                  src="/globrands-emblem-clean.png"
                  alt="Globrands Lifestyle Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-extrabold text-base tracking-wider font-sans">
                <span className="text-[#0E679C]">GLOBRANDS</span>{' '}
                <span className="text-[#F5B800]">LIFESTYLE</span>
              </span>
            </Link>

            <p className="text-neutral-600 leading-relaxed font-normal text-xs">
              A premium corporate gifting partner helping businesses create memorable brand experiences through thoughtfully curated gifts, executive bags, and custom merchandise.
            </p>

            <div className="pt-2 text-[11px] text-[#0E679C] font-semibold space-y-1">
              <div>&ldquo;GIFTS THAT SPEAK YOUR BRAND.&rdquo;</div>
              <div className="text-neutral-500 font-normal">100% In-House Production &bull; 1-Year Warranty on Bags</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Multi-Page Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="hover:text-[#916c27] transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/gift-sets" className="hover:text-[#916c27] transition-colors">
                  Corporate Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/bags" className="hover:text-[#916c27] transition-colors">
                  Bags & Backpacks
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-[#916c27] transition-colors">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/branding" className="hover:text-[#916c27] transition-colors">
                  Custom Branding Studio
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-[#916c27] transition-colors">
                  Our Proprietary Brands
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-[#916c27] transition-colors">
                  Bulk RFQ Basket
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#916c27] transition-colors">
                  Company Profile
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#916c27] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Categories
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=gift-sets" className="hover:text-[#916c27] transition-colors block">
                  Corporate Gift Sets (HGS 2-in-1 to 5-in-1)
                </Link>
              </li>
              <li>
                <Link href="/products?category=bags" className="hover:text-[#916c27] transition-colors block">
                  Corporate Bags (Ninja Gear & ADMA London)
                </Link>
              </li>
              <li>
                <Link href="/products?category=drinkware" className="hover:text-[#916c27] transition-colors block">
                  Smart Temperature Bottles & Flasks
                </Link>
              </li>
              <li>
                <Link href="/products?category=diaries" className="hover:text-[#916c27] transition-colors block">
                  Laser Color-Changer Notebooks & Diaries
                </Link>
              </li>
              <li>
                <Link href="/products?category=mugs" className="hover:text-[#916c27] transition-colors block">
                  Cork-Base Ceramic & Bamboo Mugs
                </Link>
              </li>
              <li>
                <Link href="/products?category=desktop" className="hover:text-[#916c27] transition-colors block">
                  Wooden Desk Organizers & Clocks
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider">
              Corporate Office
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#b88e3e] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  22, 2nd floor, Sharadanagar Main Rd, opp. Vedantha College, Vasanthapura, Bengaluru, Karnataka 560061
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#b88e3e] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919900020456" className="hover:text-[#111317] font-medium">+91 99000 20456</a>
                  <a href="tel:+919900026645" className="hover:text-[#111317] font-medium">+91 99000 26645</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#b88e3e] shrink-0" />
                <a href="mailto:enquiry@globrandslifestyle.com" className="hover:text-[#916c27] font-medium">
                  enquiry@globrandslifestyle.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#b88e3e] shrink-0" />
                <span>www.globrandslifestyle.com</span>
              </div>
            </div>

            {/* Catalog shortcuts in footer */}
            <div className="pt-2 flex items-center gap-2">
              <Link
                href="/catalog-viewer?type=bags"
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 text-[11px] font-medium shadow-xs"
              >
                Browse Bag PDF (37p)
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="px-2.5 py-1 rounded-lg bg-white hover:bg-neutral-100 text-neutral-800 border border-neutral-300 text-[11px] font-medium shadow-xs"
              >
                Browse Gifts PDF (146p)
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © 2026 Globrands Lifestyle Pvt Ltd. All rights reserved.
            Brands: Ninja Gear (Original) & ADMA London.
          </div>

          <div className="flex items-center gap-6">
            <span>Social: @admalondonblr • @ninjagearblr</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200 flex items-center gap-1 transition-colors shadow-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
