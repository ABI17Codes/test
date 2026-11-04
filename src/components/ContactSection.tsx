'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  MessageCircle, 
  Building, 
  MapPin, 
  CheckCircle2, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Corporate Gift Sets',
    quantity: '100 - 250 pcs',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const existing = JSON.parse(localStorage.getItem('globrands_contact_leads') || '[]');
      existing.unshift({ id: 'CNT-' + Date.now(), ...formData, date: new Date().toISOString() });
      localStorage.setItem('globrands_contact_leads', JSON.stringify(existing));
    } catch (e) {
      console.error(e);
    }
    setFormSubmitted(true);
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Globrands Lifestyle,\n\nI am planning a corporate gifting campaign:\n• Name: ${formData.name || 'Corporate Buyer'}\n• Company: ${formData.company || 'Not Specified'}\n• Category: ${formData.category}\n• Quantity: ${formData.quantity}\n• Message: ${formData.message || 'Please send available options & quote'}`
    );
    return `https://wa.me/919900020456?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-neutral-200/80">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-gold">
            <Sparkles className="w-3.5 h-3.5 text-[#b88e3e]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#916c27]">
              START A CONVERSATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111317] tracking-tight font-serif-luxury">
            PLANNING YOUR NEXT <br />
            <span className="gold-gradient-text">CORPORATE GIFTING CAMPAIGN?</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-normal leading-relaxed">
            Tell us what you are looking for. Our specialized corporate account managers will guide you through curated solutions and rapid digital proofs.
          </p>
        </div>

        {/* Contact Form & Direct Channels Grid */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#FCFBF9] p-6 sm:p-12 border border-neutral-200 shadow-xl shadow-[#b88e3e]/5">
          
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#111317] font-serif-luxury">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Your campaign request has been received. Our Bangalore corporate desk will follow up with pricing, stock availability, and branding options shortly.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Fast Message on WhatsApp</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-white border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-50 shadow-xs transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Wipro / Amazon / Start-up"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99000 00000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Primary Category of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  >
                    <option value="Corporate Gift Sets">Corporate Gift Sets (HGS 2-in-1 to 5-in-1)</option>
                    <option value="Corporate Backpacks">Corporate Backpacks (Ninja Gear / ADMA London)</option>
                    <option value="Employee Welcome Kits">Employee Welcome Kits & Onboarding</option>
                    <option value="Smart Drinkware & Bottles">Smart Drinkware & Bottles (Temp Display)</option>
                    <option value="Executive Diaries">Executive Diaries & Notebooks</option>
                    <option value="Festival & Diwali Hampers">Festival & Diwali Corporate Hampers</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] focus:outline-none focus:border-[#b88e3e] shadow-xs"
                  >
                    <option value="50 - 100 pcs">50 – 100 units</option>
                    <option value="100 - 250 pcs">100 – 250 units</option>
                    <option value="250 - 500 pcs">250 – 500 units</option>
                    <option value="500 - 1000 pcs">500 – 1,000 units</option>
                    <option value="1000+ pcs">1,000+ units (Enterprise Contract)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1.5">
                  Specific Requirements or Event Date
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the branding, preferred colors, packaging, or delivery deadline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl gold-luxury-button text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>GET A CORPORATE QUOTE</span>
                </button>

                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

