import React from "react";
import { Hero } from "../components/Hero";
import { InHouseBrandsSpotlight } from "../components/InHouseBrandsSpotlight";
import { CorporateGiftingSection } from "../components/CorporateGiftingSection";
import { BackpackCategoriesSection } from "../components/BackpackCategoriesSection";
import { ManufacturingStorySection } from "../components/ManufacturingStorySection";
import { EnterpriseTrustBar } from "../components/EnterpriseTrustBar";
import { ContactSection } from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col">
      {/* 1. Light Pastel Brand Store Hero: Highlights BOTH Backpack Manufacturing (Primary) & Corporate Gifting (Secondary) */}
      <Hero />

      {/* 2. Primary Business: In-House Backpack Brands (Ninja Gear & ADMA London) on High-Contrast Light Stage */}
      <InHouseBrandsSpotlight />

      {/* 3. Secondary Business (Moved Higher Up per Client Request!): 9 A-to-Z Corporate Gifting Categories with 4-Image Grids */}
      <CorporateGiftingSection />

      {/* 4. Backpack Categories & Multi-Brand Partner Bags (Skybags, Arctic Hunter, Swiss Military) */}
      <BackpackCategoriesSection />

      {/* 5. Backpack Materials & Simple In-House Branding (DTF Printing, Embroidery & Screen Printing) */}
      <ManufacturingStorySection />

      {/* 6. Why Globrands & Client Trust */}
      <EnterpriseTrustBar />

      {/* 7. Direct Factory & Corporate Gifting Enquiry Desk */}
      <ContactSection />
    </div>
  );
}
