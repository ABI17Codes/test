'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUp, 
  Factory, 
  MessageSquare
} from 'lucide-react';
import { FOOTER_CONFIG, COMPANY_INFO } from '../data/siteContent';

export const Footer: React.FC = () => {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { aboutText, atelierBadge, backpackCollections, proprietaryBrands, secondarySegmentLinks, legalLinks } = FOOTER_CONFIG;

  return (
    <footer className="bg-[#211D1A] border-t border-white/10 text-[#EAE3D8]/80 text-xs pt-16 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 space-y-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10 text-left">
          
          {/* Brand & Factory Authority (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/globrands-emblem-clean.png"
                  alt={`${COMPANY_INFO.legalName} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-xs leading-none font-sans">
                  <span className="text-[#211D1A]">GLOBRANDS</span>{' '}
                  <span className="text-[#C5A16D]">LIFESTYLE</span>{' '}
                  <span className="text-[#69635C] text-[10px] font-bold">PVT. LTD.</span>
                </span>
                <span className="text-[8px] uppercase tracking-wider text-[#69635C] font-semibold mt-0.5 font-mono">
                  {COMPANY_INFO.subtitle}
                </span>
              </div>
            </Link>

            <p className="text-[#EAE3D8]/90 leading-relaxed font-normal text-xs">
              {aboutText}
            </p>

            <div className="p-4 rounded-xl bg-white/[0.04] border border-[#40352D] space-y-1.5">
              <div className="text-[11px] text-[#C5A16D] font-bold tracking-wider flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5" />
                <span>{atelierBadge.title}</span>
              </div>
              <p className="text-[11px] text-[#EAE3D8]/80 leading-relaxed">
                {atelierBadge.text}
              </p>
            </div>
          </div>

          {/* Column 2: Backpack Manufacturing (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Backpack Collections
            </h4>
            <ul className="space-y-3 text-[#EAE3D8]/90 text-xs">
              {backpackCollections.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className={`transition-colors block ${
                      link.highlight ? 'font-semibold text-[#C5A16D] hover:text-white' : 'hover:text-[#C5A16D]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: In-House Brands & Gifting (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Proprietary Brands
            </h4>
            <ul className="space-y-3 text-[#EAE3D8]/90 text-xs">
              {proprietaryBrands.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className={`transition-colors block ${link.bold ? 'font-bold text-white hover:text-[#C5A16D]' : 'hover:text-[#C5A16D]'}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              <li className="pt-2 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#EAE3D8]/60 block mb-1">
                  Secondary Segment
                </span>
                {secondarySegmentLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="hover:text-[#C5A16D] transition-colors block py-1">
                    {link.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Column 4: Factory Desk & Helpdesk (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Factory Helpdesk
            </h4>
            
            <div className="space-y-3 text-[#EAE3D8]/90 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A16D] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.contact.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-white hover:text-[#C5A16D] transition-colors font-medium">
                  {COMPANY_INFO.contact.corporatePhone} (Corporate Desk)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A16D] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.infoEmail}`} className="text-white hover:text-[#C5A16D] transition-colors font-medium">
                  {COMPANY_INFO.contact.infoEmail}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#40352D] hover:bg-[#292725] text-white border border-[#C5A16D]/30 hover:border-[#C5A16D] font-bold text-xs shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A16D]" />
                  <span>Direct WhatsApp B2B Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#EAE3D8]/60 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-white">{COMPANY_INFO.legalName}</strong> All rights reserved. Registered Indian Trademark.
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-[#C5A16D] transition-colors">
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C5A16D] hover:text-white transition-colors font-semibold cursor-pointer"
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
