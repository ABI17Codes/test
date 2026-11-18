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
    'I want an in-house Backpacks (Ninja Gear / ADMA London) factory quotation.',
    'I want a Corporate Gift Sets quotation for 100+ employees.',
    'Please share full catalogue PDFs with bulk price slabs.',
    'Can you share custom logo branding options and timeline?'
  ];

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-3xl bg-white border border-[#EAE3D8] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-left">
          
          {/* Card Header */}
          <div className="p-4 bg-[#F5F0E8] border-b border-[#EAE3D8] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#EAE3D8] bg-white">
                  <img
                    src="/globrands-logo.jpg"
                    alt={`${COMPANY_INFO.shortName} Desk`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#C5A16D] border-2 border-white" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#211D1A]">
                  {COMPANY_INFO.shortName} B2B Desk
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#A98554] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C5A16D] animate-pulse" />
                  <span>Online &bull; Quick 5-min response</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-[#69635C] hover:text-[#211D1A] hover:bg-[#EAE3D8] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Greetings Body */}
          <div className="p-4 space-y-3 bg-white">
            <div className="p-3 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] text-xs text-[#292725] leading-relaxed font-normal">
              Hello! 👋 Welcome to <b className="font-semibold text-[#211D1A]">{COMPANY_INFO.legalName}</b> How can our factory backpack manufacturing &amp; corporate gifting team assist you today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-[#69635C] font-bold uppercase tracking-wider block">
                Quick Inquiries:
              </span>
              <div className="space-y-1.5">
                {quickPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendPrompt(prompt)}
                    className="w-full p-2.5 rounded-xl bg-white hover:bg-[#F5F0E8] border border-[#EAE3D8] hover:border-[#C5A16D] text-xs text-left text-[#292725] font-medium transition-all flex items-center justify-between group shadow-2xs cursor-pointer"
                  >
                    <span className="truncate pr-2">{prompt}</span>
                    <Send className="w-3.5 h-3.5 text-[#A98554] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Card Footer Button */}
          <div className="p-3.5 bg-[#F5F0E8] border-t border-[#EAE3D8]">
            <button
              onClick={() => handleSendPrompt(`Hi ${COMPANY_INFO.shortName}, I have a corporate bulk inquiry.`)}
              className="w-full py-2.5 px-4 rounded-full bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#C5A16D]" />
              <span>Start WhatsApp Chat Now</span>
            </button>
          </div>

        </div>
      )}

      {/* Floating Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group px-4 py-3 rounded-full bg-[#211D1A] hover:bg-[#40352D] text-white shadow-xl shadow-[#211D1A]/35 hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 hover:scale-105 cursor-pointer border border-[#C5A16D]/40"
      >
        <MessageSquare className="w-5 h-5 text-[#C5A16D]" />
        <span className="text-xs font-bold tracking-wide">
          WhatsApp B2B Desk
        </span>
      </button>

    </div>
  );
};
