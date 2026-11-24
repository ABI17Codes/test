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
    <footer className="bg-[#F0F7FF] border-t-2 border-[#BFDBFE] text-[#334155] text-xs pt-14 pb-10">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10 space-y-12">

        {/* Main Footer Grid (Clean Light Pastel Blue & Warm Gold Brand Store Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#BFDBFE] text-left">

          {/* Brand & Factory Authority (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl border border-[#BFDBFE] shadow-2xs">
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="/globrands-emblem-clean.png"
                  alt={`${COMPANY_INFO.legalName} Logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-xs leading-none font-sans">
                  <span className="text-[#0B4F82]">GLOBRANDS</span>{' '}
                  <span className="text-[#D97706]">LIFESTYLE</span>{' '}
                  <span className="text-[#475569] text-[10px] font-bold">PVT. LTD.</span>
                </span>
                <span className="text-[8px] uppercase tracking-wider text-[#475569] font-semibold mt-0.5 font-mono">
                  {COMPANY_INFO.subtitle}
                </span>
              </div>
            </Link>

            <p className="text-[#334155] leading-relaxed font-normal text-xs">
              {aboutText}
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#BFDBFE] space-y-1.5 shadow-2xs">
              <div className="text-[11px] text-[#0B4F82] font-extrabold tracking-wider flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#E5A93C]" />
                <span>{atelierBadge.title}</span>
              </div>
              <p className="text-[11px] text-[#475569] leading-relaxed">
                {atelierBadge.text}
              </p>
            </div>
          </div>

          {/* Column 2: Backpack Manufacturing (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-[#0B4F82] uppercase tracking-wider border-b border-[#BFDBFE] pb-2">
              Backpack Manufacturing
            </h4>
            <ul className="space-y-2.5 text-[#334155] text-xs">
              {backpackCollections.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className={`transition-colors block ${
                      link.highlight ? 'font-bold text-[#0B4F82] hover:text-[#D97706]' : 'hover:text-[#0B4F82]'
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
            <h4 className="text-xs font-extrabold text-[#0B4F82] uppercase tracking-wider border-b border-[#BFDBFE] pb-2">
              In-House Brands
            </h4>
            <ul className="space-y-2.5 text-[#334155] text-xs">
              {proprietaryBrands.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="font-bold text-[#0F172A] hover:text-[#0B4F82] transition-colors block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li className="pt-2 border-t border-[#BFDBFE]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97706] font-bold block mb-1">
                  Corporate Gifting
                </span>
                {secondarySegmentLinks.map((link, idx) => (
                  <Link key={idx} href={link.href} className="hover:text-[#0B4F82] transition-colors block py-1">
                    {link.label}
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Column 4: Corporate Desk & Bulk Accounts (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-[#0B4F82] uppercase tracking-wider border-b border-[#BFDBFE] pb-2">
              Corporate Desk &amp; Bulk Accounts
            </h4>

            <div className="space-y-3 text-[#334155] text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0B4F82] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {COMPANY_INFO.contact.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="text-[#0F172A] hover:text-[#0B4F82] transition-colors font-bold">
                  {COMPANY_INFO.contact.corporatePhone} (Corporate Desk)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0B4F82] shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.bulkPhoneRaw}`} className="text-[#334155] hover:text-[#0B4F82] transition-colors font-semibold">
                  {COMPANY_INFO.contact.secondaryPhone} / {COMPANY_INFO.contact.tertiaryPhone} (Bulk Accounts)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0B4F82] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`} className="text-[#0F172A] hover:text-[#0B4F82] transition-colors font-semibold">
                  {COMPANY_INFO.contact.enquiryEmail}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white font-bold text-xs shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#FDE047]" />
                  <span>Direct WhatsApp Corporate Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[#475569] text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-[#0F172A]">{COMPANY_INFO.legalName}</strong> All rights reserved. Registered Indian Trademark.
          </div>

          <div className="flex items-center gap-6">
            {legalLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-[#0B4F82] transition-colors font-medium">
                {link.label}
              </Link>
            ))}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#0B4F82] hover:text-[#D97706] transition-colors font-bold cursor-pointer"
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
