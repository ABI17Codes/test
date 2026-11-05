'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'Corporate Gift Sets',
    quantity: '100 - 250 pcs',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const leads = JSON.parse(localStorage.getItem('globrands_contact_inquiries') || '[]');
      leads.unshift({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('globrands_contact_inquiries', JSON.stringify(leads));
    } catch (err) {
      console.error(err);
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
    <section id="contact" className="py-20 relative bg-white border-t border-[#E5E7EB]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0876B4]" />
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-[#0876B4]">
              DIRECT ATELIER CONCIERGE &bull; START A CONVERSATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#101828] tracking-tight">
            Planning Your Next <br />
            <span className="brand-gradient-text">Corporate Gifting Campaign?</span>
          </h2>

          <p className="text-sm sm:text-base text-[#667085] font-normal leading-relaxed">
            Tell us what you are looking for. Our senior corporate gifting specialists will guide you through curated solutions, custom mockups, and tiered factory pricing.
          </p>
        </div>

        {/* Contact Form & Direct Channels Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#F5F7FA] p-6 sm:p-12 border border-[#E5E7EB] shadow-xs">
          
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#101828]">
                Thank You for Reaching Out!
              </h3>
              <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
                Your campaign request has been received. Our Bengaluru corporate desk will follow up with pricing, stock availability, and 3D digital mockups within 2 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Fast Message on WhatsApp</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3 rounded-full bg-white border border-[#E5E7EB] text-[#101828] text-xs font-semibold hover:bg-neutral-100 shadow-xs transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] placeholder-[#667085] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Wipro / Amazon / Start-up"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] placeholder-[#667085] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] placeholder-[#667085] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 99000 20456"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] placeholder-[#667085] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Primary Category of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  >
                    <option value="Corporate Gift Sets">Corporate Gift Sets (HGS 2-in-1 to 5-in-1)</option>
                    <option value="Corporate Backpacks">Corporate Backpacks (Ninja Gear / ADMA London)</option>
                    <option value="Employee Welcome Kits">Employee Welcome Kits &amp; Onboarding</option>
                    <option value="Smart Drinkware & Bottles">Smart Drinkware &amp; Bottles (Temp Display)</option>
                    <option value="Executive Diaries">Executive Diaries &amp; Notebooks</option>
                    <option value="Festival & Diwali Hampers">Festival &amp; Diwali Corporate Hampers</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#101828] block mb-1.5">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] focus:outline-none focus:border-[#0876B4] shadow-xs"
                  >
                    <option value="50 - 100 pcs">50 &ndash; 100 units</option>
                    <option value="100 - 250 pcs">100 &ndash; 250 units</option>
                    <option value="250 - 500 pcs">250 &ndash; 500 units</option>
                    <option value="500 - 1000 pcs">500 &ndash; 1,000 units</option>
                    <option value="1000+ pcs">1,000+ units (Enterprise Contract)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-[#101828] block mb-1.5">
                  Specific Requirements or Event Date
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about the branding, preferred colors, packaging, or delivery deadline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E5E7EB] text-sm text-[#101828] placeholder-[#667085] focus:outline-none focus:border-[#0876B4] shadow-xs"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-full bg-[#101828] hover:bg-[#0876B4] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#E8B43A]" />
                  <span>REQUEST CORPORATE PROPOSAL</span>
                </button>

                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 text-xs font-bold flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
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
