'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { MessageSquare, X, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';

export const FloatingWhatsApp: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const quickPrompts = [
    'I want a bulk quote for In-House Backpacks (Ninja Gear / ADMA London).',
    'I want a quote for Partner Bags (Skybags / Arctic Hunter / Swiss Military).',
    'I need A-to-Z Corporate Gifting (Welcome Kits, Bottles, Trophies, Apparels, Trolleys).',
    'Please share DTF Printing, Embroidery & Screen Printing branding options.'
  ];

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div
      className="fixed right-5 bottom-5 z-40 max-w-[calc(100vw-40px)] flex flex-col items-end"
      style={{
        position: 'fixed',
        right: '20px',
        bottom: '20px',
        maxWidth: 'calc(100vw - 40px)',
      }}
    >
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-40px)] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-left">
          <div className="p-4 bg-[#EFF6FF] border-b border-[#DBEAFE] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full overflow-hidden border border-[#BFDBFE] bg-white p-0.5">
                  <img
                    src="/globrands-emblem-clean.png"
                    alt={`${COMPANY_INFO.shortName} Desk`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-[#0B4F82]">
                  {COMPANY_INFO.shortName} Corporate Desk
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#0F172A] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{COMPANY_INFO.contact.corporatePhone}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#475569] hover:text-[#0F172A] hover:bg-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-3 bg-white">
            <div className="p-3 rounded-2xl bg-[#F8FAFC] border border-[#DBEAFE] text-xs text-[#334155] leading-relaxed font-normal">
              Hello! Welcome to <b className="font-bold text-[#0B4F82]">{COMPANY_INFO.legalName}</b>. How can we help you with <b>Backpack Manufacturing</b> or <b>A-to-Z Corporate Gifting</b> today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider block">
                Quick Inquiries:
              </span>
              <div className="space-y-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendPrompt(prompt)}
                    className="w-full p-2.5 rounded-xl bg-white hover:bg-[#EFF6FF] border border-[#DBEAFE] hover:border-[#0B4F82] text-xs text-left text-[#0F172A] font-semibold transition-all flex items-center justify-between group shadow-2xs cursor-pointer"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <Send className="w-3.5 h-3.5 text-[#0B4F82] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 bg-[#EFF6FF] border-t border-[#DBEAFE]">
            <button
              onClick={() => handleSendPrompt(`Hi ${COMPANY_INFO.shortName}, I have a bulk requirement.`)}
              className="w-full py-2.5 px-4 rounded-full bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#FDE047]" />
              <span>Start WhatsApp Chat ({COMPANY_INFO.contact.corporatePhone})</span>
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group px-4 py-2.5 rounded-full bg-[#0B4F82] hover:bg-[#083B63] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer border border-[#FDE047]/80 whitespace-nowrap max-w-full"
      >
        <MessageSquare className="w-4 h-4 text-[#FDE047] shrink-0" />
        <span className="text-xs font-extrabold tracking-wide truncate">
          WhatsApp Corporate Desk
        </span>
      </button>
    </div>
  );
};
