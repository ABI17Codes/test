import type { Metadata } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { QuoteProvider } from '../context/QuoteContext';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { QuoteDrawer } from '../components/QuoteDrawer';
import { FloatingWhatsApp } from '../components/FloatingWhatsApp';

export const metadata: Metadata = {
  metadataBase: new URL('https://globrandslifestyle.com'),
  title: 'Globrands Lifestyle | Premium Corporate Gifting & Promotional Products',
  description: 'A premium corporate gifting partner helping businesses create memorable brand experiences. Official distributor of Ninja Gear Original and ADMA London corporate backpacks, executive gift hampers, smart drinkware, and custom merchandise.',
  keywords: [
    'corporate gifting',
    'employee welcome kits',
    'corporate bags',
    'Ninja Gear Original',
    'ADMA London',
    'promotional merchandise',
    'executive gift sets',
    'Bengaluru corporate gifts'
  ],
  authors: [{ name: 'Globrands Lifestyle Pvt Ltd' }],
  openGraph: {
    title: 'Globrands Lifestyle | Premium Corporate Gifting & Bags',
    description: 'Discover luxury corporate gifts, customized merchandise, executive bags, and curated gifting solutions designed to make your brand unforgettable.',
    url: 'https://globrandslifestyle.com',
    siteName: 'Globrands Lifestyle',
    images: [
      {
        url: '/globrands-logo.jpg',
        width: 800,
        height: 800,
        alt: 'Globrands Lifestyle',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0E679C] selection:text-white">
        <QuoteProvider>
          {/* Global Sticky Navbar */}
          <Suspense fallback={<div className="h-16 bg-white" />}>
            <Navbar />
          </Suspense>

          {/* Page Body */}
          <main className="min-h-[85vh] pt-16">
            {children}
          </main>

          {/* Global Corporate Footer */}
          <Footer />

          {/* Slide-out RFQ Drawer & Floating WhatsApp */}
          <QuoteDrawer />
          <FloatingWhatsApp />
        </QuoteProvider>
      </body>
    </html>
  );
}

