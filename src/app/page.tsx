import React from 'react';
import { AmazonBrandStoreHome } from '../components/AmazonBrandStoreHome';
import { ContactSection } from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F3EF] text-[#0F172A] flex flex-col">
      {/* Official Amazon Brand Store Style Homepage:
          - Parent Store Banner (Globrands Lifestyle Pvt. Ltd.)
          - Store Sticky Tab Bar & Search (Home Page, ADMA London, Ninja Gear Original, Backpacks, Duffle & Luggage, Corporate Gifting, Partner Brands)
          - Official ADMA London Amazon Store Banners, Podium Showcase, Editorial Split Rows & Product Rows
          - Matching Ninja Gear Original & Corporate Gifting Podium Showcases & B2B Product Rows (with M.R.P., Min. Order & Add to Quote) */}
      <AmazonBrandStoreHome />

      {/* Direct Factory & Corporate Gifting Enquiry Desk */}
      <ContactSection />
    </div>
  );
}
