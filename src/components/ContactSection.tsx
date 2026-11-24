'use client';

import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  MessageSquare,
  RefreshCw,
  AlertCircle,
  Briefcase,
  Gift,
  Phone,
  Mail,
  MapPin
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
      `Hello ${COMPANY_INFO.legalName},\n\nI have a bulk requirement:\n• Business: ${pathways[activePathway].label}\n• Name: ${formData.name || 'Corporate Buyer'}\n• Company: ${formData.company || 'Not Specified'}\n• Category: ${formData.category}\n• Quantity: ${formData.quantity}\n• Notes: ${formData.message || 'Please share options & bulk pricing'}`
    );
    return `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 relative bg-gradient-to-b from-[#FFFFFF] to-[#EFF6FF] border-t border-[#DBEAFE] text-left">
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FEF3C7] border border-[#FCD34D] text-[11px] uppercase tracking-wider font-extrabold text-[#92400E]">
            {header.tag}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B4F82] tracking-tight uppercase font-sans">
            {header.title}
          </h2>

          <p className="text-sm sm:text-base text-[#475569] font-normal leading-relaxed">
            {header.description}
          </p>

          {/* Direct Contact Numbers Strip (Corporate Desk + 2 Bulk Account Numbers) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-[#0B4F82] text-[#0B4F82] text-xs font-extrabold shadow-2xs hover:bg-[#EFF6FF]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Corporate Desk: {COMPANY_INFO.contact.corporatePhone}</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.contact.bulkPhoneRaw}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#334155] text-xs font-bold shadow-2xs hover:bg-[#F8FAFC]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0B4F82]" />
              <span>Bulk Accounts: {COMPANY_INFO.contact.secondaryPhone} / {COMPANY_INFO.contact.tertiaryPhone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#CBD5E1] text-[#334155] text-xs font-bold shadow-2xs hover:bg-[#F8FAFC]"
            >
              <Mail className="w-3.5 h-3.5 text-[#0B4F82]" />
              <span>{COMPANY_INFO.contact.enquiryEmail}</span>
            </a>
          </div>

          {/* Dual Enquiry Pathway Switcher */}
          <div className="pt-3 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#BFDBFE] shadow-xs">
              <button
                type="button"
                onClick={() => handlePathwayChange('manufacturing')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePathway === 'manufacturing'
                    ? 'bg-[#0B4F82] text-white shadow-xs'
                    : 'text-[#475569] hover:text-[#0B4F82]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>1. {pathways.manufacturing.label}</span>
              </button>

              <button
                type="button"
                onClick={() => handlePathwayChange('gifting')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePathway === 'gifting'
                    ? 'bg-[#E5A93C] text-[#0F172A] shadow-xs'
                    : 'text-[#475569] hover:text-[#0B4F82]'
                }`}
              >
                <Gift className="w-3.5 h-3.5" />
                <span>2. {pathways.gifting.label}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-white p-8 sm:p-12 border-2 border-[#DBEAFE] shadow-lg">
          {formSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EFF6FF] text-[#0B4F82] flex items-center justify-center mx-auto border border-[#BFDBFE]">
                <CheckCircle2 className="w-8 h-8 text-[#0B4F82]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Thank You! Enquiry Received {quoteNumber ? `(${quoteNumber})` : ''}
              </h3>
              <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
                Our Bengaluru Corporate Desk will contact you shortly with product options, logo branding details (DTF / Embroidery / Screen Print), and bulk pricing.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#FDE047]" />
                  <span>Chat on WhatsApp Now</span>
                </a>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold hover:bg-[#EFF6FF] transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Wipro / Infosys / Enterprise"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    Official Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    {activePathway === 'manufacturing' ? 'Backpack Category' : 'Gifting Category'}
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all cursor-pointer"
                  >
                    {pathways[activePathway].categories.map((cat, idx) => (
                      <option key={idx} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                    Estimated Quantity
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all cursor-pointer"
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
                <label className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block mb-1.5">
                  Logo Branding (DTF / Embroidery / Screen Print) &amp; Delivery Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your model preference, logo branding method (DTF, Embroidery, or Screen Printing), and delivery timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#0B4F82] focus:bg-white transition-all resize-none"
                />
              </div>

              {errorMsg && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-8 rounded-xl bg-[#0B4F82] hover:bg-[#083B63] disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-[#FDE047]" />
                      <span>Sending Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#FDE047]" />
                      <span>Submit Bulk Quote Request</span>
                    </>
                  )}
                </button>

                <a
                  href={getDirectWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-4 px-6 rounded-xl bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#0F172A] border border-[#FCD34D] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 text-[#0B4F82]" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
