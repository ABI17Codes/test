'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  User,
  LogIn,
  LogOut,
  UserPlus,
  Phone,
  Mail,
  MapPin,
  Sparkles
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';
import { NAVIGATION_CONFIG, COMPANY_INFO } from '../data/siteContent';

export const Navbar: React.FC = () => {
  const { items, setIsDrawerOpen } = useQuote();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const checkAuth = () => {
    fetch('/api/auth/me')
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated && data.user) {
          setUser(data.user);
        } else {
          setUser(null);
        }
      })
      .catch(() => setUser(null));
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } finally {
      setUser(null);
      setAccountDropdownOpen(false);
      router.push('/login');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCatalogDropdownOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(event.target as Node)) {
        setAccountDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setCatalogDropdownOpen(false);
    setAccountDropdownOpen(false);
  }, [pathname]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const { topUtilityStrip, primaryLinks, secondaryLinks, catalogDropdownItems } = NAVIGATION_CONFIG;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#BFDBFE]'
          : 'bg-white border-b border-[#DBEAFE]'
      }`}
    >
      {/* Top Utility Strip (Light Pastel Sky Blue & Warm Gold — No Dark Colors!) */}
      <div
        className={`bg-[#EFF6FF] text-[#0B4F82] transition-all duration-300 overflow-hidden ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-8 py-1.5 opacity-100 border-b border-[#DBEAFE]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-6 sm:px-10 flex items-center justify-between gap-4 text-[10.5px]">
          <div className="flex items-center gap-2 truncate font-bold uppercase tracking-wider text-[#0B4F82]">
            <span className="inline-flex items-center gap-1 text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded-full border border-[#FCD34D]">
              <MapPin className="w-2.5 h-2.5" />
              <span>{topUtilityStrip.atelierText}</span>
            </span>
            <span className="hidden sm:inline text-[#1E293B]">{topUtilityStrip.headline}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-bold text-[10.5px] text-[#0B4F82]">
            <a href={`tel:${COMPANY_INFO.contact.phoneRaw}`} className="flex items-center gap-1 hover:text-[#D97706] transition-colors">
              <Phone className="w-2.5 h-2.5 text-[#D97706]" />
              <span>{COMPANY_INFO.contact.corporatePhone}</span>
            </a>
            <span className="text-slate-300 hidden md:inline">|</span>
            <a href={`mailto:${COMPANY_INFO.contact.enquiryEmail}`} className="hidden md:flex items-center gap-1 hover:text-[#D97706] transition-colors">
              <Mail className="w-2.5 h-2.5 text-[#0B4F82]" />
              <span>{COMPANY_INFO.contact.enquiryEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-[1320px] mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-14">

          {/* Brand Logo & Legal Identity (Original Blue & Yellow Logo Colours Preserved) */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-white border border-[#BFDBFE] shadow-2xs flex items-center justify-center p-0.5 group-hover:scale-105 transition-transform">
              <img
                src="/globrands-emblem-clean.png"
                alt={`${COMPANY_INFO.legalName} Logo`}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-tight text-xs sm:text-[13.5px] leading-tight font-sans text-[#0B4F82]">
                GLOBRANDS <span className="text-[#D97706]">LIFESTYLE</span> <span className="text-[9.5px] font-bold text-[#475569]">PVT. LTD.</span>
              </span>
              <span className="text-[8px] uppercase tracking-[0.1em] text-[#475569] font-bold font-mono">
                {COMPANY_INFO.subtitle}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links ("In-House Brands" FIRST, then "Backpacks & Bags", then "Corporate Gifting") */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {primaryLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12.5px] font-bold tracking-normal transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#0B4F82]'
                      : idx === 0
                      ? 'text-[#0B4F82] hover:text-[#D97706]'
                      : 'text-[#1E293B] hover:text-[#0B4F82]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E5A93C] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Catalogues Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className={`inline-flex items-center gap-1 text-[12.5px] font-bold tracking-normal transition-colors py-1 cursor-pointer ${
                  catalogDropdownOpen ? 'text-[#0B4F82]' : 'text-[#1E293B] hover:text-[#0B4F82]'
                }`}
              >
                <span>Catalogues</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180 text-[#E5A93C]' : ''}`} />
              </button>

              {catalogDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white border border-[#BFDBFE] rounded-2xl shadow-xl p-2 space-y-1 z-50 text-left">
                  {catalogDropdownItems.map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <Link
                        key={idx}
                        href={item.href}
                        className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-[#EFF6FF] transition-colors"
                        onClick={() => setCatalogDropdownOpen(false)}
                      >
                        <ItemIcon className="w-4 h-4 text-[#0B4F82] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-xs font-extrabold text-[#0F172A]">{item.title}</div>
                          <div className="text-[10.5px] text-[#475569]">{item.description}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[12.5px] font-bold tracking-normal transition-colors relative py-1 ${
                    isActive ? 'text-[#0B4F82]' : 'text-[#1E293B] hover:text-[#0B4F82]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#E5A93C] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#BFDBFE] hover:border-[#0B4F82] text-[#0B4F82] text-xs font-bold transition-all shadow-2xs cursor-pointer"
              title="View Quote Basket"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="hidden sm:inline">Quote</span>
              {mounted && totalItems > 0 && (
                <span className="min-w-4 h-4 px-1 rounded-full bg-[#0B4F82] text-white text-[9px] font-bold flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#CBD5E1] hover:border-[#0B4F82] text-[#1E293B] text-xs font-bold transition-all shadow-2xs cursor-pointer"
              >
                <User className="w-3.5 h-3.5 text-[#0B4F82]" />
                <span className="hidden md:inline">
                  {mounted && user?.name ? user.name.split(' ')[0] : 'Account'}
                </span>
                <ChevronDown className="w-3 h-3 text-[#64748B]" />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-[#BFDBFE] rounded-xl shadow-xl p-2 space-y-1 z-50 text-left">
                  {user ? (
                    <>
                      <div className="px-3 py-2 border-b border-[#E2E8F0]">
                        <div className="text-xs font-bold text-[#0F172A] truncate">{user.name}</div>
                        <div className="text-[11px] text-[#475569] truncate">{user.email}</div>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-[#EFF6FF]"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <User className="w-3.5 h-3.5 text-[#0B4F82]" />
                        <span>My Profile &amp; RFQs</span>
                      </Link>
                      {user.role === 'admin' && (
                        <Link
                          href="/admin"
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-[#0B4F82] hover:bg-[#EFF6FF]"
                          onClick={() => setAccountDropdownOpen(false)}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                          <span>Admin Console (Upload Models)</span>
                        </Link>
                      )}
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="px-3 py-2 border-b border-[#E2E8F0]">
                        <div className="text-xs font-bold text-[#0B4F82]">Corporate Portal</div>
                        <div className="text-[10px] text-[#475569]">Sign in to manage bulk RFQs &amp; orders</div>
                      </div>
                      <Link
                        href="/login"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-[#EFF6FF]"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <LogIn className="w-3.5 h-3.5 text-[#0B4F82]" />
                        <span>Sign In</span>
                      </Link>
                      <Link
                        href="/register"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#0F172A] hover:bg-[#EFF6FF]"
                        onClick={() => setAccountDropdownOpen(false)}
                      >
                        <UserPlus className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>Create Corporate Account</span>
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-lg bg-white border border-[#BFDBFE] text-[#0B4F82] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#BFDBFE] px-6 py-4 space-y-3 shadow-xl text-left max-w-[1320px] mx-auto">
          <div className="space-y-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-xs font-bold text-[#0F172A] hover:text-[#0B4F82]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {catalogDropdownItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="block py-2 text-xs font-bold text-[#0B4F82] hover:text-[#D97706]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
            {secondaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-xs font-bold text-[#0F172A] hover:text-[#0B4F82]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
            <a
              href={`tel:${COMPANY_INFO.contact.phoneRaw}`}
              className="text-xs font-bold text-[#0B4F82] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#D97706]" />
              <span>{COMPANY_INFO.contact.corporatePhone}</span>
            </a>
            <Link
              href="/login"
              className="text-xs font-bold text-[#0B4F82]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In &rarr;
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
