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
  title: 'Globrands Lifestyle | Corporate Laptop Bags, Backpacks & Executive Gifting Manufacturer Bangalore',
  description: 'India\'s leading manufacturer of corporate laptop bags, customized backpacks, executive gift hampers, and premium merchandise. Official makers of Ninja Gear Original & ADMA London bags with 1-year warranty and in-house logo branding.',
  keywords: [
    // Top-Tier B2B & High-Intent Commercial Keywords
    'laptop bags corporate gifts',
    'corporate gifts premium',
    'corporate laptop bags',
    'corporate laptop backpacks',
    'customized laptop bags',
    'laptop bag with company logo',
    'laptop bags manufacturers in bangalore',
    'bags for corporate gifts',
    'corporate gifting bag',
    'company laptop bags',
    'custom corporate bags',
    'bag customization',
    // High-Volume Category Keywords
    'laptop bag',
    'laptop backpack',
    'laptop sleeve',
    'mens laptop bag',
    'mens laptop backpack',
    'trolley bag',
    'travel bag',
    'duffle bag',
    'laptop trolley bag',
    'laptop sling bag',
    // High-Intent Catalog Feature Keywords
    '17 inch laptop bag',
    '17 inch laptop backpack',
    'water resistant laptop backpack',
    'waterproof laptop bag',
    'laptop bag with rain cover',
    'laptop bag with trolley sleeve',
    'usb laptop backpack',
    'charging laptop bag',
    'laptop bag with water bottle holder',
    'leather laptop bag',
    'executive gift sets',
    'employee onboarding welcome kits',
    // Proprietary Brand Keywords
    'Ninja Gear Original',
    'ADMA London bags',
    'Globrands Lifestyle Bangalore'
  ],
  authors: [{ name: 'Globrands Lifestyle Pvt Ltd', url: 'https://globrandslifestyle.com' }],
  creator: 'Globrands Lifestyle',
  publisher: 'Globrands Lifestyle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://globrandslifestyle.com',
  },
  openGraph: {
    title: 'Globrands Lifestyle | Corporate Laptop Bags & Premium Executive Gifting',
    description: 'Direct Bangalore factory manufacturer of premium corporate laptop bags, engineered backpacks, executive gift hampers, and custom merchandise for India\'s leading enterprises.',
    url: 'https://globrandslifestyle.com',
    siteName: 'Globrands Lifestyle',
    images: [
      {
        url: '/globrands-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'Globrands Lifestyle Corporate Gifting & Executive Bags',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Globrands Lifestyle | Corporate Laptop Bags & Executive Gifting',
    description: 'Engineered corporate laptop bags, executive hampers & custom merchandise direct from Bengaluru atelier.',
    images: ['/globrands-logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Globrands Lifestyle',
    url: 'https://globrandslifestyle.com',
    logo: 'https://globrandslifestyle.com/globrands-logo.jpg',
    description: 'Premier B2B corporate gifting and executive bag manufacturer in Bengaluru, India. Proprietary brands include Ninja Gear Original and ADMA London.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9845012345',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Corporate Gifting & Executive Bags Catalog',
      itemListElement: [
        {
          '@type': 'OfferCatalog',
          name: 'Corporate Laptop Bags & Backpacks',
          description: '17-inch antitheft backpacks, executive travel duffles, and water-resistant laptop bags with USB charging.',
        },
        {
          '@type': 'OfferCatalog',
          name: 'VIP Executive Hampers & Welcome Kits',
          description: 'Curated 5-in-1 tech hampers, smart LED temperature bottles, and sustainable vegan leather journals.',
        },
      ],
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,600;1,700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0E679C] selection:text-white">
        <QuoteProvider>
          {/* Global Sticky Navbar */}
          <Suspense fallback={<div className="h-16 bg-white" />}>
            <Navbar />
          </Suspense>

          {/* Page Body */}
          <main className="min-h-[85vh] pt-[92px]">
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
