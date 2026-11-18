'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Trash2, 
  Send, 
  CheckCircle2, 
  Building, 
  Mail, 
  Phone, 
  User, 
  ShoppingBag, 
  MessageSquare,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { COMPANY_INFO } from '../data/siteContent';

export const QuoteDrawer: React.FC = () => {
  const { items, isDrawerOpen, setIsDrawerOpen, removeFromQuote, updateQuantity, clearQuote } = useQuote();

  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [customizationType, setCustomizationType] = useState('Laser Engraving');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

  useEffect(() => {
    if (!isDrawerOpen) return;
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data?.authenticated && data?.user) {
          setFullName((prev) => prev || data.user.name || '');
          setCompanyName((prev) => prev || data.user.company_name || '');
          setEmail((prev) => prev || data.user.email || '');
          setPhone((prev) => prev || data.user.phone || '');
          setCity((prev) => prev || data.user.city || '');
        }
      })
      .catch(() => {});
  }, [isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const totalUnits = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (items.length === 0) {
      setErrorMsg('Please add at least one product to your quote basket.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          companyName,
          email,
          phone,
          city,
          customizationType,
          items: items.map((i) => ({
            productId: i.product.id,
            productCode: i.product.code,
            productName: i.product.name,
            quantity: i.quantity,
          })),
          notes: message,
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit RFQ.');
      }

      setQuoteNumber(data.quote?.quote_number || '');
      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || 'Unable to submit RFQ. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppForwardUrl = () => {
    const itemListText = items
      .map((i, idx) => `${idx + 1}. ${i.product.code} - ${i.product.name} (Qty: ${i.quantity} pcs)`)
      .join('\n');

    const text = encodeURIComponent(
      `*NEW CORPORATE RFQ - ${COMPANY_INFO.legalName}*\n\n` +
      `*Client:* ${fullName || 'Corporate Buyer'}\n` +
      `*Company:* ${companyName || 'Not Provided'}\n` +
      `*Contact:* ${phone} | ${email}\n` +
      `*City:* ${city || 'India'}\n` +
      `*Customization Preference:* ${customizationType}\n\n` +
      `*Shortlisted Products (${totalUnits} total units):*\n${itemListText}\n\n` +
      `*Notes:* ${message || 'Please send formal quote with timeline and tiered bulk pricing.'}`
    );

    return `https://wa.me/${COMPANY_INFO.contact.phoneRaw}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl h-full bg-white border-l border-[#EAE3D8] flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-5 bg-[#F5F0E8] border-b border-[#EAE3D8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#EAE3D8] text-[#211D1A] border border-[#C5A16D]/30">
              <ShoppingBag className="w-5 h-5 text-[#A98554]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#211D1A]">
                Corporate RFQ Basket
              </h3>
              <p className="text-xs text-[#69635C] font-medium">
                {items.length} Product Models &bull; {totalUnits} Units Total
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-xl bg-white border border-[#EAE3D8] text-[#69635C] hover:text-[#211D1A] hover:bg-[#EAE3D8] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex-1 space-y-6">
          
          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAE3D8] text-[#A98554] flex items-center justify-center mx-auto border border-[#C5A16D]/40 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-[#211D1A]">
                Corporate RFQ {quoteNumber ? `#${quoteNumber}` : ''} Dispatched!
              </h4>

              <p className="text-xs text-[#69635C] max-w-md mx-auto leading-relaxed">
                Thank you, <b className="text-[#211D1A]">{fullName}</b> ({companyName}). Our enterprise sales team will review your specifications and contact you within 2 business hours.
              </p>

              <div className="pt-4 space-y-3">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-full bg-[#211D1A] hover:bg-[#40352D] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A16D]" />
                  <span>Send Direct Copy via WhatsApp to Account Manager</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    clearQuote();
                    setIsDrawerOpen(false);
                  }}
                  className="w-full py-2.5 rounded-full bg-[#F5F0E8] border border-[#EAE3D8] text-[#211D1A] text-xs font-semibold hover:bg-[#EAE3D8] transition-colors cursor-pointer"
                >
                  Close &amp; Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product Shortlist Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#69635C] pb-1 font-semibold">
                  <span>Selected Products</span>
                  {items.length > 0 && (
                    <button
                      onClick={clearQuote}
                      className="text-red-500 hover:underline text-[11px] cursor-pointer"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-8 px-4 rounded-2xl border border-dashed border-[#EAE3D8] bg-[#F5F0E8] space-y-2">
                    <p className="text-xs text-[#211D1A] font-medium">Your corporate quote basket is currently empty.</p>
                    <p className="text-[11px] text-[#69635C]">
                      Click &ldquo;Add to RFQ&rdquo; on any gift set or backpack to build your proposal.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3 rounded-2xl bg-[#F5F0E8] border border-[#EAE3D8] flex items-center justify-between gap-3 text-left"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-xl object-contain bg-white p-1 border border-[#EAE3D8] shadow-2xs shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-mono font-bold text-[#A98554] block">
                            {item.product.code}
                          </span>
                          <h5 className="text-xs font-bold text-[#211D1A] truncate">
                            {item.product.name}
                          </h5>
                          <span className="text-[10px] text-[#69635C] font-medium">
                            Min MOQ: {item.product.moq}
                          </span>
                        </div>

                        {/* Quantity Stepper */}
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            min={10}
                            step={10}
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.product.id, parseInt(e.target.value) || 10)
                            }
                            className="w-16 px-1.5 py-1 text-xs rounded-lg bg-white border border-[#EAE3D8] text-[#211D1A] text-center font-bold shadow-2xs"
                          />
                          <span className="text-[10px] text-[#69635C]">pcs</span>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => removeFromQuote(item.product.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Form Inputs for Lead Capture */}
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-4 border-t border-[#EAE3D8] text-left">
                <span className="text-xs font-bold text-[#211D1A] uppercase tracking-wider block">
                  Enterprise Contact &amp; Company Details:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#69635C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Mehta"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Company / Organization *</label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-[#69635C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Infosys / Google / HDFC"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Official Work Email *</label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-[#69635C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Mobile / WhatsApp *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#69635C] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Delivery City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru / Mumbai / Delhi"
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Branding Preference</label>
                    <select
                      value={customizationType}
                      onChange={(e) => setCustomizationType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                    >
                      <option value="Laser Engraving">Laser Engraving</option>
                      <option value="Screen Printing">Screen Printing</option>
                      <option value="UV Full Color Printing">UV Full Color Printing</option>
                      <option value="Blind Emboss / Deboss">Blind Emboss / Deboss</option>
                      <option value="Custom Box Sleeve">Custom Box Packaging</option>
                      <option value="None / Plain Goods">None / Plain Stock</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-[#211D1A] block mb-1">Requirements / Expected Event Date</label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Need welcome kits dispatched by next month for 200 joiners."
                    className="w-full px-3 py-2 rounded-xl bg-white border border-[#EAE3D8] text-xs text-[#211D1A] placeholder-[#69635C] focus:outline-none focus:border-[#C5A16D] shadow-2xs"
                  />
                </div>

                {errorMsg && (
                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Submit Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-full bg-[#211D1A] hover:bg-[#40352D] text-white text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin text-[#C5A16D]" />
                        <span>SUBMITTING RFQ...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#C5A16D]" />
                        <span>SUBMIT CORPORATE RFQ</span>
                      </>
                    )}
                  </button>

                  <a
                    href={getWhatsAppForwardUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-[#F5F0E8] text-[#211D1A] border border-[#40352D]/30 hover:border-[#C5A16D] text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <MessageSquare className="w-4 h-4 text-[#A98554]" />
                    <span>Instant Send via WhatsApp</span>
                  </a>
                </div>
              </form>
            </>
          )}

        </div>

      </div>

    </div>
  );
};
