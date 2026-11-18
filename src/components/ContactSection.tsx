'use client';

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  RefreshCw,
  AlertCircle,
  Briefcase,
  Gift
} from 'lucide-react';
import { CONTACT_CONFIG, COMPANY_INFO } from '../data/siteContent';

export const ContactSection: React.FC = () => {
  const { header, pathways, quantitySlabs } = CONTACT_CONFIG;
  const [activePathway, setActivePathway] = useState<'manufacturing' | 'gifting'>('manufacturing');
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: pathways.manufacturing.categories[0].value,
    quantity: quantitySlabs[1].value,
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

  useEffect(() => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data?.authenticated && data?.user) {
          setFormData((prev) => ({
            ...prev,
            name: prev.name || data.user.name || '',
            company: prev.company || data.user.company_name || '',
            email: prev.email || data.user.email || '',
            phone: prev.phone || data.user.phone || '',
          }));
        }
      })
      .catch(() => {});
  }, []);

  const handlePathwayChange = (pathwayKey: 'manufacturing' | 'gifting') => {
    setActivePathway(pathwayKey);
    setFormData((prev) => ({ 
      ...prev, 
      category: pathways[pathwayKey].categories[0].value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.name,
          companyName: formData.company,
          email: formData.email,
          phone: formData.phone,
          category: formData.category,
          estimatedQuantity: formData.quantity,
          requirements: formData.message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry');
      }

      setQuoteNumber(data.inquiry?.quote_number || data.quote?.quote_number || '');
      setFormSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Could not submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello ${COMPANY_INFO.legalName},\n\nI am planning a requirement:\n• Pathway: ${pathways[activePathway].label}\n• Name: ${formData.name || 'Corporate Buyer'}\n• Company: ${formData.company || 'Not Specified'}\n• Category: ${formData.category}\n• Quantity: ${formData.quantity}\n• Notes: ${formData.message || 'Please share factory options & B2B quote'}`
    );
    return `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative bg-[#F5F0E8] border-t border-[#EAE3D8] text-left">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] uppercase tracking-[0.22em] font-extrabold text-[#A98554] block">
            {header.tag}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#211D1A] tracking-tight uppercase font-sans">
            {header.title}
          </h2>

          <p className="text-sm sm:text-base text-[#69635C] font-normal leading-relaxed">
            Discuss your custom backpack manufacturing requirements or corporate gifting campaign directly with our Bengaluru factory desk at <strong className="text-[#211D1A]">{COMPANY_INFO.legalName}</strong>
          </p>

          {/* Dual Enquiry Pathway Switcher */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#EAE3D8] shadow-sm">
              <button
                type="button"
                onClick={() => handlePathwayChange('manufacturing')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePathway === 'manufacturing'
                    ? 'bg-[#211D1A] text-white shadow-md'
                    : 'text-[#69635C] hover:text-[#211D1A]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>{pathways.manufacturing.label}</span>
              </button>

              <button
                type="button"
                onClick={() => handlePathwayChange('gifting')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePathway === 'gifting'
                    ? 'bg-[#211D1A] text-white shadow-md'
                    : 'text-[#69635C] hover:text-[#211D1A]'
                }`}
              >
                <Gift className="w-3.5 h-3.5" />
                <span>{pathways.gifting.label}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white p-8 sm:p-14 border border-[#EAE3D8] shadow-xl">
          
          {formSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAE3D8] text-[#211D1A] flex items-center justify-center mx-auto border border-[#C5A16D]/40 shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-[#A98554]" />
              </div>
              <h3 className="text-2xl font-bold text-[#211D1A]">
                Thank You for Reaching Out! {quoteNumber ? `(${quoteNumber})` : ''}
              </h3>
              <p className="text-sm text-[#69635C] max-w-md mx-auto leading-relaxed">
                Your request has been delivered to our factory desk. A senior representative will contact you with 3D mockups and B2B pricing within 2 hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-xl bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A16D]" />
                  <span>Send WhatsApp Message</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-[#211D1A] text-xs font-semibold hover:bg-[#EAE3D8] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Wipro / Amazon / Enterprise"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ramesh@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={COMPANY_INFO.contact.corporatePhone}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    {activePathway === 'manufacturing' ? 'Product Category' : 'Gifting Solution'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  >
                    {pathways[activePathway].categories.map((cat, idx) => (
                      <option key={idx} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs"
                  >
                    {quantitySlabs.map((slab, idx) => (
                      <option key={idx} value={slab.value}>
                        {slab.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#211D1A] block mb-2">
                  Project Notes or Timeline
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your preferred model, branding requirements, target delivery date, or multi-city dispatch..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F5F0E8] border border-[#EAE3D8] text-sm text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] focus:bg-white transition-all shadow-2xs resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-8 rounded-xl bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold uppercase tracking-[0.14em] shadow-lg flex items-center justify-center gap-2.5 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-white" />
                      <span>SUBMITTING REQUEST...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C5A16D]" />
                      <span>SUBMIT FACTORY ENQUIRY</span>
                    </>
                  )}
                </button>

                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-8 rounded-xl bg-white hover:bg-[#F5F0E8] text-[#211D1A] border border-[#40352D]/30 hover:border-[#C5A16D] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap shadow-2xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#A98554]" />
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
