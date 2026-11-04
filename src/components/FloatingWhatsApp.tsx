'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Clock, Check } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickPrompts = [
    'I want a Corporate Gift Sets quotation for 100+ employees.',
    'I want to inquire about Ninja Gear / ADMA London backpacks.',
    'Please share full catalogue PDFs with bulk price slabs.',
    'Can you share custom logo branding options and timeline?'
  ];

  const handleSendPrompt = (text: string) => {
    const url = `https://wa.me/919900020456?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-2xl bg-white border border-[#b88e3e]/30 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200 text-left">
          
          {/* Card Header */}
          <div className="p-4 bg-[#FAF8F5] border-b border-neutral-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#b88e3e]/50 bg-white">
                  <img
                    src="/globrands-logo.jpg"
                    alt="Globrands Desk"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-[#111317] font-serif-luxury">
                  Globrands B2B Desk
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Online • Typically replies in 5 min</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Greetings Body */}
          <div className="p-4 space-y-3 bg-white">
            <div className="p-3 rounded-xl bg-[#FAF8F5] border border-neutral-200 text-xs text-neutral-700 leading-relaxed font-normal">
              Hello! 👋 Welcome to <b className="text-[#111317] font-semibold">Globrands Lifestyle</b>. How can our corporate team assist you today?
            </div>

            <div className="space-y-1.5 pt-1">
              <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-wider block">
                Quick Options:
              </span>
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSendPrompt(prompt)}
                  className="w-full text-left p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-[#FAF6EE] text-xs text-neutral-700 hover:text-[#916c27] border border-neutral-200 hover:border-[#b88e3e]/40 transition-all flex items-center justify-between group font-medium"
                >
                  <span className="truncate pr-2">{prompt}</span>
                  <Send className="w-3 h-3 shrink-0 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#b88e3e]" />
                </button>
              ))}
            </div>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="p-3 bg-[#FAF8F5] border-t border-neutral-200 flex items-center justify-between text-xs">
            <span className="text-neutral-500 text-[11px]">Helpline: +91 99000 20456</span>
            <a
              href="https://wa.me/919900020456"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#916c27] hover:underline"
            >
              Open Direct Chat
            </a>
          </div>

        </div>
      )}

      {/* Floating Button Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:px-4 sm:py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 border border-emerald-500/30"
        title="Chat with Corporate Account Manager on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp B2B Desk
        </span>
      </button>

    </div>
  );
};

