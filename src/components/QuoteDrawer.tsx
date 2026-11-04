'use client';

import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Send, 
  MessageCircle, 
  CheckCircle2, 
  Building, 
  Mail, 
  Phone, 
  User, 
  FileCheck,
  ShoppingBag,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

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

  if (!isDrawerOpen) return null;

  const totalUnits = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store lead locally for CRM sync
    const lead = {
      id: 'LEAD-' + Date.now(),
      createdAt: new Date().toISOString(),
      fullName,
      companyName,
      email,
      phone,
      city,
      customizationType,
      message,
      items: items.map((i) => ({
        code: i.product.code,
        name: i.product.name,
        quantity: i.quantity,
        brand: i.product.brand
      })),
      totalUnits
    };

    try {
      const existingLeads = JSON.parse(localStorage.getItem('globrands_crm_leads') || '[]');
      existingLeads.unshift(lead);
      localStorage.setItem('globrands_crm_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.error(err);
    }

    setSubmitted(true);
  };

  const getWhatsAppForwardUrl = () => {
    const itemListText = items
      .map((i, idx) => `${idx + 1}. ${i.product.code} - ${i.product.name} (Qty: ${i.quantity} pcs)`)
      .join('\n');

    const text = encodeURIComponent(
      `*NEW CORPORATE RFQ - GLOBRANDS LIFESTYLE*\n\n` +
      `*Client:* ${fullName || 'Corporate Buyer'}\n` +
      `*Company:* ${companyName || 'Not Provided'}\n` +
      `*Contact:* ${phone} | ${email}\n` +
      `*City:* ${city || 'India'}\n` +
      `*Customization Preference:* ${customizationType}\n\n` +
      `*Shortlisted Products (${totalUnits} total units):*\n${itemListText}\n\n` +
      `*Notes:* ${message || 'Please send formal quote with timeline and tiered bulk pricing.'}`
    );

    return `https://wa.me/919900020456?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-xl h-full bg-white border-l border-neutral-200 flex flex-col justify-between shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-5 bg-[#FAF8F5] border-b border-neutral-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#916c27] border border-[#b88e3e]/20">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111317] font-serif-luxury">
                Corporate RFQ Basket
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                {items.length} Product Models Shortlisted ({totalUnits} Units)
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-lg bg-white border border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-100 transition-colors shadow-2xs"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex-1 space-y-6">
          
          {submitted ? (
            /* Success confirmation */
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="text-xl font-bold text-[#111317] font-serif-luxury">
                Corporate RFQ Dispatched!
              </h4>

              <p className="text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <b className="text-[#111317]">{fullName}</b> ({companyName}). Our enterprise sales team will review your specifications and contact you within 2 business hours.
              </p>

              <div className="pt-4 space-y-3">
                <a
                  href={getWhatsAppForwardUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Direct Copy via WhatsApp to Account Manager</span>
                </a>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    clearQuote();
                    setIsDrawerOpen(false);
                  }}
                  className="w-full py-2.5 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-700 text-xs font-semibold hover:bg-neutral-200 transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product Shortlist Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-neutral-500 pb-1 font-semibold">
                  <span>Selected Products</span>
                  {items.length > 0 && (
                    <button
                      onClick={clearQuote}
                      className="text-red-500 hover:underline text-[11px]"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {items.length === 0 ? (
                  <div className="text-center py-8 px-4 rounded-xl border border-dashed border-neutral-300 bg-[#FAF8F5] space-y-2">
                    <p className="text-xs text-neutral-600 font-medium">Your corporate quote basket is currently empty.</p>
                    <p className="text-[11px] text-neutral-400">
                      Click "Enquire for Bulk Pricing" on any gift set or backpack to build your RFQ.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2.5 max-h-56 overflow-y-auto pr-1">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3 rounded-xl bg-[#FAF8F5] border border-neutral-200 flex items-center justify-between gap-3 text-left"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-12 h-12 rounded-lg object-contain bg-white p-1 border border-neutral-200 shadow-2xs shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                          <span className="text-[10px] font-mono font-bold text-[#916c27] block">
                            {item.product.code}
                          </span>
                          <h5 className="text-xs font-bold text-[#111317] truncate">
                            {item.product.name}
                          </h5>
                          <span className="text-[10px] text-neutral-500 font-medium">
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
                            className="w-16 px-1.5 py-1 text-xs rounded-md bg-white border border-neutral-300 text-[#111317] text-center font-bold shadow-2xs"
                          />
                          <span className="text-[10px] text-neutral-500">pcs</span>
                        </div>

                        {/* Delete */}
                        <button
                          onClick={() => removeFromQuote(item.product.id)}
                          className="p-1.5 text-neutral-400 hover:text-red-500 transition-colors"
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
              <form onSubmit={handleSubmit} className="space-y-3.5 pt-4 border-t border-neutral-200 text-left">
                <span className="text-xs font-bold text-[#111317] uppercase tracking-wider block">
                  Enterprise Contact & Company Details:
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Your Full Name *</label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Company / Organization *</label>
                    <div className="relative">
                      <Building className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Infosys / Google / HDFC"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Official Email ID *</label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Mobile / WhatsApp Number *</label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Delivery City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Bengaluru / Mumbai / Delhi"
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Logo Branding Preference</label>
                    <select
                      value={customizationType}
                      onChange={(e) => setCustomizationType(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] focus:outline-none focus:border-[#b88e3e] shadow-2xs"
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
                  <label className="text-[11px] font-semibold text-neutral-700 block mb-1">Requirements / Expected Event Date</label>
                  <textarea
                    rows={2}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Need welcome kits dispatched by next month for 200 joiners."
                    className="w-full px-3 py-2 rounded-lg bg-white border border-neutral-200 text-xs text-[#111317] placeholder-neutral-400 focus:outline-none focus:border-[#b88e3e] shadow-2xs"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 space-y-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl gold-luxury-button text-xs font-bold tracking-wide shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT CORPORATE RFQ</span>
                  </button>

                  <a
                    href={getWhatsAppForwardUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
                  >
                    <MessageCircle className="w-4 h-4" />
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

