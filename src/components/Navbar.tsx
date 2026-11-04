'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  ShoppingBag, 
  MessageCircle, 
  Menu, 
  X, 
  FileText,
  ChevronDown,
  ExternalLink,
  BookOpen,
  Briefcase,
  User,
  ShieldCheck,
  Building2,
  LogOut,
  UserPlus,
  LogIn
} from 'lucide-react';
import { useQuote } from '../context/QuoteContext';

export const Navbar: React.FC = () => {
  const { items } = useQuote();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [catalogDropdownOpen, setCatalogDropdownOpen] = useState(false);
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const accountRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

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
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or outside click
  useEffect(() => {
    setMobileMenuOpen(false);
    setCatalogDropdownOpen(false);
    setAccountDropdownOpen(false);
  }, [pathname]);

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

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Gift Sets', href: '/gift-sets' },
    { label: 'Bags', href: '/bags' },
    { label: 'Branding', href: '/branding' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || pathname !== '/'
          ? 'bg-white/95 backdrop-blur-md border-b border-neutral-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]'
          : 'bg-white/85 backdrop-blur-md border-b border-neutral-200/70'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo - Crisp & Clearly Visible with Authentic Brand Colors */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            title="Globrands Lifestyle Home"
          >
            <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-neutral-200 shadow-2xs group-hover:border-[#0E679C] transition-colors bg-white p-1 flex items-center justify-center">
              <img
                src="/globrands-emblem-clean.png"
                alt="Globrands Lifestyle Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold tracking-wider text-base sm:text-lg font-sans leading-tight flex items-center gap-1.5">
                <span className="text-[#0E679C]">GLOBRANDS</span>
                <span className="text-[#F5B800]">LIFESTYLE</span>
              </span>
              <span className="text-[10px] tracking-widest text-neutral-500 uppercase font-bold">
                Corporate Gifting & Bags
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Minimized, Clean, Spaced */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-[13px] font-medium tracking-tight rounded-md transition-colors ${
                    isActive
                      ? 'text-[#0E679C] font-bold bg-[#EBF4F9]'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0E679C] rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* Compact Catalogues Dropdown */}
            <div className="relative ml-1" ref={dropdownRef}>
              <button
                onClick={() => setCatalogDropdownOpen(!catalogDropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-md transition-colors ${
                  pathname.startsWith('/catalog-viewer') || catalogDropdownOpen
                    ? 'text-[#0E679C] bg-[#EBF4F9] font-bold'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/60'
                }`}
              >
                <FileText className="w-3.5 h-3.5 text-[#0E679C]" />
                <span>Catalogues</span>
                <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${catalogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {catalogDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-xl shadow-lg p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link
                    href="/catalog-viewer?type=bags"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#faf7f2] transition-colors group text-left"
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#b88e3e]/10">
                      <Briefcase className="w-4 h-4 text-[#b88e3e]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900 group-hover:text-[#916c27]">
                        Bag Catalogue
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        37 Pages • Ninja Gear & ADMA
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/catalog-viewer?type=gifts"
                    className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#faf7f2] transition-colors group text-left"
                    onClick={() => setCatalogDropdownOpen(false)}
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0 group-hover:bg-[#b88e3e]/10">
                      <BookOpen className="w-4 h-4 text-[#b88e3e]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-neutral-900 group-hover:text-[#916c27]">
                        All-in-One Gifting
                      </p>
                      <p className="text-[11px] text-neutral-500">
                        146 Pages • Hampers, Bottles, Pens
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Action CTAs - Minimized & Sleek */}
          <div className="flex items-center gap-2">
            
            {/* WhatsApp - Compact Pill */}
            <a
              href="https://wa.me/919900020456?text=Hi%20Globrands%20Lifestyle,%20I%20am%20interested%20in%20your%20Corporate%20Gifting%20and%20Bag%20Catalogues."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/70 text-xs font-semibold tracking-tight transition-colors"
              title="Chat with B2B Sales on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            {/* Account / Admin Menu Dropdown */}
            <div className="relative" ref={accountRef}>
              <button
                onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-colors border ${
                  user
                    ? 'bg-blue-50/80 text-[#2563eb] border-blue-200 hover:bg-blue-100'
                    : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                }`}
                title="Account & Admin Portal"
              >
                {user ? (
                  <div className="w-4 h-4 rounded-full bg-[#2563eb] text-white flex items-center justify-center text-[9px] font-black shrink-0">
                    {user.name?.charAt(0) || 'U'}
                  </div>
                ) : (
                  <User className="w-3.5 h-3.5 text-neutral-600" />
                )}
                <span className="hidden md:inline font-bold">
                  {user ? (user.role === 'admin' ? 'Admin' : user.name?.split(' ')[0]) : 'Account'}
                </span>
                <ChevronDown className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${accountDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {accountDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-neutral-200 rounded-2xl shadow-xl p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-left">
                  {user ? (
                    <>
                      <div className="p-2.5 border-b border-neutral-100 mb-1">
                        <p className="font-extrabold text-xs text-neutral-900 truncate">
                          {user.name}
                        </p>
                        <p className="text-[11px] text-neutral-500 truncate flex items-center gap-1 mt-0.5">
                          <Building2 className="w-3 h-3 text-neutral-400 shrink-0" />
                          <span>{user.company_name || user.email}</span>
                        </p>
                        <div className="mt-1.5">
                          {user.role === 'admin' ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                              <ShieldCheck className="w-3 h-3" /> System Admin
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                              <Building2 className="w-3 h-3" /> Corporate Buyer
                            </span>
                          )}
                        </div>
                      </div>

                      {user.role === 'admin' && (
                        <Link
                          href="/admin"
                          onClick={() => setAccountDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-neutral-800 hover:bg-neutral-100 transition-colors"
                        >
                          <ShieldCheck className="w-4 h-4 text-[#2563eb]" />
                          <span>Admin Console</span>
                        </Link>
                      )}

                      <Link
                        href="/quote"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4 text-[#b88e3e]" />
                        <span>My Quote Requests</span>
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="p-2 border-b border-neutral-100 mb-1">
                        <p className="font-bold text-xs text-neutral-900">Corporate Portal</p>
                        <p className="text-[11px] text-neutral-500">Sign in to manage orders & RFQs</p>
                      </div>

                      <Link
                        href="/login"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold text-neutral-800 hover:bg-neutral-100 transition-colors"
                      >
                        <LogIn className="w-4 h-4 text-[#2563eb]" />
                        <span>Sign In</span>
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setAccountDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
                      >
                        <UserPlus className="w-4 h-4 text-emerald-600" />
                        <span>Create Corporate Account</span>
                      </Link>

                      <div className="pt-1 border-t border-neutral-100 mt-1">
                        <Link
                          href="/admin"
                          onClick={() => setAccountDropdownOpen(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-[#b88e3e] hover:bg-amber-50/50 transition-colors"
                        >
                          <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Admin Console</span>
                          </span>
                          <span className="text-[10px] text-neutral-400 font-normal">Demo</span>
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Bulk RFQ Cart Button */}
            <Link
              href="/quote"
              className="relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#111317] hover:bg-[#0E679C] text-white text-xs font-semibold tracking-tight transition-all shadow-xs"
              title="View Bulk RFQ Basket"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F5B800]" />
              <span>RFQ</span>
              {totalItems > 0 && (
                <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] font-black bg-[#F5B800] text-neutral-900 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-neutral-700 hover:text-black rounded-md hover:bg-neutral-100 transition-colors ml-1"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-100 py-3 bg-white space-y-1 text-left animate-in fade-in slide-in-from-top-1 duration-150">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                  pathname === link.href
                    ? 'bg-[#faf6ee] text-[#916c27] font-bold'
                    : 'text-neutral-700 hover:bg-neutral-50 font-medium'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t border-neutral-100 grid grid-cols-2 gap-2 mt-2 px-1">
              <Link
                href="/catalog-viewer?type=bags"
                className="p-2 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-800 flex items-center justify-center gap-1.5 text-center hover:bg-neutral-200 transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#b88e3e]" />
                Bag PDF (37p)
              </Link>
              <Link
                href="/catalog-viewer?type=gifts"
                className="p-2 rounded-lg bg-neutral-100 text-xs font-semibold text-neutral-800 flex items-center justify-center gap-1.5 text-center hover:bg-neutral-200 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#b88e3e]" />
                Gifts PDF (146p)
              </Link>
            </div>

            {/* Mobile Account & Admin Links */}
            <div className="pt-2 border-t border-neutral-100 space-y-1 mt-2 px-1">
              {user ? (
                <>
                  <div className="px-3 py-2 rounded-lg bg-neutral-50 text-xs font-bold text-neutral-900 flex items-center justify-between">
                    <div>
                      <span>{user.name}</span>
                      <span className="block text-[10px] text-neutral-500 font-normal">{user.company_name || user.email}</span>
                    </div>
                    {user.role === 'admin' && (
                      <span className="text-[10px] bg-purple-100 text-purple-700 px-2 py-0.5 rounded font-bold">Admin</span>
                    )}
                  </div>
                  {user.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-[#2563eb] hover:bg-blue-50"
                    >
                      Admin Console
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/login"
                    className="p-2 rounded-lg bg-neutral-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 text-center"
                  >
                    <LogIn className="w-3.5 h-3.5 text-[#eddab4]" />
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    className="p-2 rounded-lg border border-neutral-300 text-neutral-800 text-xs font-bold flex items-center justify-center gap-1.5 text-center hover:bg-neutral-50"
                  >
                    <UserPlus className="w-3.5 h-3.5 text-emerald-600" />
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

