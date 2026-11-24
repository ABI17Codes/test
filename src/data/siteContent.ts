/**
 * Centralized Site Content & Configuration
 * Globrands Lifestyle Pvt. Ltd.
 *
 * Aligned with Shravya Ma'am's Client Review:
 * - Primary Business: Direct Backpack Manufacturing (In-House Brands: Ninja Gear & ADMA London + Partner Brands: Skybags, Arctic Hunter, Swiss Military)
 * - Secondary Business: A-to-Z Corporate Gifting (Welcome Kits, Drinkware, Bamboo, Apparels, Trophies & Medals, Trolleys, Kitchen Essentials, Diaries, Multi-Brand)
 * - Branding Terminology: DTF Printing, Embroidery, Screen Printing & Laser Engraving (Simple, clear business terms — no confusing jargon)
 * - Color Identity: Light, Mild & Pastel Blue + Warm Gold (Matching official Globrands Logo, high contrast for dark backpacks)
 */

import {
  Briefcase,
  Sparkles,
  Gift,
  Printer,
  Layers,
  FileText,
  Cpu,
  Scissors,
  ShieldCheck,
  CheckCircle2,
  Droplets,
  Radio,
  Award,
  Lock,
  Zap,
  Coffee,
  Laptop,
  BookOpen,
  Factory,
  Palette,
  Truck,
  Shirt,
  Trophy,
  Luggage,
  Utensils
} from 'lucide-react';

// ============================================================================
// 1. COMPANY INFORMATION & LEGAL IDENTITY
// ============================================================================
export const COMPANY_INFO = {
  legalName: 'GLOBRANDS LIFESTYLE PVT. LTD.',
  shortName: 'Globrands Lifestyle',
  tagline: 'DIRECT BACKPACK MANUFACTURING & CORPORATE GIFTING.',
  subtitle: 'Manufacturers • Bengaluru',
  establishedYear: 2014,
  locationLabel: 'Bengaluru Factory & Corporate Desk',
  primaryFocus: 'Direct Backpack Manufacturing',
  secondaryFocus: 'A-to-Z Corporate Gifting Solutions',
  warrantyText: '1-Year Direct Factory Replacement Warranty',
  qcProtocol: '5-Stage Quality Check',

  contact: {
    corporatePhone: '+91 99720 28250',
    secondaryPhone: '+91 99000 20456',
    tertiaryPhone: '+91 99000 26645',
    phoneRaw: '919972028250',
    bulkPhoneRaw: '919900020456',
    enquiryEmail: 'enquiry@globrandslifestyle.com',
    infoEmail: 'info@globrandslifestyle.com',
    address: {
      line1: '#22, 2nd Floor, Sharadanagar Main Rd',
      landmark: 'Opp. Vedantha College, Vasanthapura',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560061',
      country: 'India',
      full: '#22, 2nd Floor, Sharadanagar Main Rd, Opp. Vedantha College, Vasanthapura, Bengaluru – 560061'
    },
    social: {
      admaInstagram: '@admalondonblr',
      ninjaInstagram: '@ninjagearblr'
    },
    websites: [
      { label: 'www.globrandslifestyle.com', url: 'https://globrandslifestyle.com' },
      { label: 'www.ninjagear.co.in', url: 'https://ninjagear.co.in' }
    ]
  }
};

// ============================================================================
// 2. NAVIGATION CONFIGURATION ("In-House Brands" FIRST, distinct from "Backpacks & Bags")
// ============================================================================
export const NAVIGATION_CONFIG = {
  topUtilityStrip: {
    atelierText: 'Bengaluru Factory',
    headline: 'Backpack Manufacturing & Corporate Gifting'
  },
  primaryLinks: [] as { label: string; href: string }[],
  secondaryLinks: [
    { label: 'Branding', href: '/branding' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  catalogDropdownItems: [
    {
      title: '01. In-House Brands & Backpacks',
      description: 'Ninja Gear, ADMA London + Skybags, Arctic Hunter & Swiss Military',
      href: '/bags',
      icon: Briefcase
    },
    {
      title: '02. Corporate Gifting (A-to-Z)',
      description: 'Welcome Kits, Bamboo, Drinkware, Trophies, Apparels & Trolleys',
      href: '/gift-sets',
      icon: Gift
    },
    {
      title: '03. Digital PDF Flipbooks',
      description: 'Interactive 37-Page Backpack Catalogue & 146-Page Gift Catalogue',
      href: '/catalog-viewer',
      icon: FileText
    }
  ]
};

// ============================================================================
// 3. HERO SECTION CONTENT (Highlights BOTH Backpack Manufacturing & Corporate Gifting + 4-Slide Interactive Carousel)
// ============================================================================
export const HERO_CONTENT = {
  badge: 'BENGALURU DIRECT FACTORY | 1-YEAR WARRANTY',
  pretitle: 'GLOBRANDS LIFESTYLE PVT. LTD.',
  title: 'BACKPACK MANUFACTURING',
  titleHighlight: '& CORPORATE GIFTING.',
  subheading: 'Primary Business: Direct Backpack Manufacturing • Secondary Business: Complete A-to-Z Corporate Gifting Solutions.',
  description: 'We manufacture our own registered backpack brands (Ninja Gear Original & ADMA London) in Bengaluru, supply leading partner brands (Skybags, Arctic Hunter, Swiss Military), and deliver A-to-Z corporate gifts customized with in-house DTF Printing, Embroidery & Screen Printing.',
  image: '/images/hero/hero-backpack.jpg',
  imageAlt: 'Ninja Gear Boxer & ADMA London Volvo 2.0 Manufactured by Globrands Lifestyle Pvt. Ltd.',
  imageBadge: 'IN-HOUSE FLAGSHIPS • NINJA GEAR BOXER & ADMA LONDON VOLVO 2.0',
  primaryCta: {
    label: 'EXPLORE IN-HOUSE BRANDS',
    href: '/bags'
  },
  secondaryCta: {
    label: 'EXPLORE CORPORATE GIFTING',
    href: '/gift-sets'
  },
  tertiaryCta: {
    label: 'Contact Us',
    href: '/contact'
  },
  slides: [
    {
      id: 'ninja-gear',
      slideNumber: '01',
      tabLabel: 'Ninja Gear',
      label: 'IN-HOUSE BRAND',
      brandBadge: 'NINJA GEAR ORIGINAL',
      brandLogo: '/catalog/brands/ninja_gear_logo.jpg',
      title: 'Ninja Gear — Tactical & Tech Backpacks',
      description: 'Engineered with concealed anti-theft rear zippers, external USB fast-charging ports, and 17" suspended laptop protection.',
      ctaLabel: 'EXPLORE COLLECTION',
      ctaHref: '/brands',
      themeBg: 'from-[#F8FAFC] via-[#FFFFFF] to-[#FEF9E7]',
      accentColor: '#D97706',
      layout: 'trio-bags' as const,
      items: [
        {
          name: 'Ninja Gear INSPIRE',
          code: 'BG-INSPIRE',
          tag: '17" Tech Commuter',
          image: '/catalog/backpacks-studio/bg-inspire.png'
        },
        {
          name: 'Ninja Gear BOXER',
          code: 'BG-BOXER',
          tag: 'Flagship Anti-Theft',
          image: '/catalog/backpacks-studio/bg-boxer.png',
          featured: true
        },
        {
          name: 'Ninja Gear AVIATOR',
          code: 'BG-AVIATOR',
          tag: 'Heavy-Duty Executive',
          image: '/catalog/backpacks-studio/bg-aviator.png'
        }
      ]
    },
    {
      id: 'adma-london',
      slideNumber: '02',
      tabLabel: 'ADMA London',
      label: 'IN-HOUSE BRAND',
      brandBadge: 'ADMA LONDON',
      brandLogo: '/catalog/brands/adma_london_logo.jpg',
      title: 'ADMA London — Executive & Travel Backpacks',
      description: 'Spacious 38L–40L business travel carrywear with integrated waterproof rain covers, RFID pockets, and isolated shoe compartments.',
      ctaLabel: 'VIEW COLLECTION',
      ctaHref: '/brands',
      themeBg: 'from-[#F0F7FF] via-[#FFFFFF] to-[#E0F2FE]',
      accentColor: '#0B4F82',
      layout: 'trio-bags' as const,
      items: [
        {
          name: 'ADMA London VIP 2.0',
          code: 'BG-VIP-2',
          tag: 'Executive Laptop',
          image: '/catalog/backpacks-studio/bg-vip-2.png'
        },
        {
          name: 'ADMA London VOLVO 2.0',
          code: 'BG-VOLVO-2',
          tag: '38L + Rain Cover',
          image: '/catalog/backpacks-studio/bg-volvo-2.png',
          featured: true
        },
        {
          name: 'ADMA London NEXA',
          code: 'BG-NEXA',
          tag: 'Urban Office Pack',
          image: '/catalog/backpacks-studio/bg-nexa.png'
        }
      ]
    },
    {
      id: 'corporate-gifting',
      slideNumber: '03',
      tabLabel: 'Corporate Gifting',
      label: 'COMPLETE CORPORATE GIFTING',
      brandBadge: 'A-TO-Z GIFTING SOLUTIONS',
      title: 'Welcome Kits, Drinkware, Trophies & Accessories',
      description: 'Curated employee onboarding hampers, laser-engraved vacuum flasks, sustainable bamboo sets, crystal trophies, apparels, and trolleys.',
      ctaLabel: 'EXPLORE GIFTING',
      ctaHref: '/gift-sets',
      themeBg: 'from-[#FEFDFB] via-[#FFFFFF] to-[#FEF3C7]/60',
      accentColor: '#D97706',
      layout: 'grid-Showcase' as const,
      items: [
        {
          name: '5-in-1 VIP Welcome Kit',
          code: 'HGS-H74',
          tag: 'Employee Onboarding',
          image: '/images/hero-slider/gift-welcome-kit.jpg'
        },
        {
          name: 'Smart Vacuum Drinkware',
          code: 'HGS-H118',
          tag: 'Insulated Flasks',
          image: '/images/hero-slider/gift-drinkware.jpg'
        },
        {
          name: 'Trophies & Recognition Awards',
          code: 'AWARDS',
          tag: 'Custom Engraved',
          image: '/images/hero-slider/gift-trophies.jpg'
        },
        {
          name: 'Sustainable Bamboo Sets',
          code: 'HGS-H117',
          tag: 'Eco-Friendly Series',
          image: '/images/hero-slider/gift-bamboo.jpg'
        }
      ]
    },
    {
      id: 'custom-branding',
      slideNumber: '04',
      tabLabel: 'Custom Branding',
      label: 'IN-HOUSE CUSTOMIZATION',
      brandBadge: 'DTF • EMBROIDERY • SCREEN PRINT',
      title: 'In-House Logo Customization Studio',
      description: 'Precision company logo branding across backpacks, corporate T-shirts, hoodies, caps, and gift sets with fast bulk turnaround.',
      ctaLabel: 'DISCOVER BRANDING',
      ctaHref: '/branding',
      themeBg: 'from-[#F4F8FB] via-[#FFFFFF] to-[#EFF6FF]',
      accentColor: '#0B4F82',
      layout: 'branding-trio' as const,
      items: [
        {
          name: 'Computerized Embroidery',
          code: 'EMBROIDERY',
          tag: 'Multi-Thread Stitched Logo',
          image: '/catalog/backpacks-studio/bg-boxer.png',
          featured: true
        },
        {
          name: 'Full-Color DTF Printing',
          code: 'DTF PRINT',
          tag: 'Bags, T-Shirts & Hoodies',
          image: '/images/hero-slider/brand-apparel.jpg'
        },
        {
          name: 'Screen Print & Laser Engraving',
          code: 'SCREEN & LASER',
          tag: 'Bulk Bags & Metal Flasks',
          image: '/images/hero-slider/brand-laser-flask.jpg'
        }
      ]
    }
  ],
  giftingStrip: [
    {
      label: 'Welcome Kits',
      sub: '2-in-1 to 6-in-1 Sets',
      img: '/catalog/crops/hgs_h74.jpg',
      href: '/gift-sets'
    },
    {
      label: 'Drinkware',
      sub: 'Flasks & LED Bottles',
      img: '/catalog/crops/hgs_h118_vacuum.jpg',
      href: '/products?category=drinkware'
    },
    {
      label: 'Trophies & Awards',
      sub: 'Plaques & Medals',
      img: '/images/gifting-categories/trophy-1.jpg',
      href: '#corporate-gifting'
    },
    {
      label: 'Apparels & Trolleys',
      sub: 'T-Shirts & Luggage',
      img: '/images/gifting-categories/trolley-1.jpg',
      href: '#corporate-gifting'
    }
  ],
  stats: [
    {
      category: 'Primary Business',
      title: 'Backpack Manufacturing',
      subtitle: 'Direct Bengaluru Factory • 1-Yr Warranty',
      highlight: true
    },
    {
      category: 'In-House Brands',
      title: 'Ninja Gear & ADMA London',
      subtitle: 'Plus Skybags, Arctic Hunter & Swiss Military',
      highlight: false
    },
    {
      category: 'Secondary Business',
      title: 'A-to-Z Corporate Gifting',
      subtitle: 'Welcome Kits, Trophies, Apparels, Trolleys & More',
      highlight: true
    },
    {
      category: 'In-House Branding',
      title: 'DTF, Embroidery & Screen Print',
      subtitle: 'Custom Logo Branding • Fast Bulk Delivery',
      highlight: false
    }
  ]
};

// ============================================================================
// 4. BACKPACK CATEGORIES (PRIMARY BUSINESS FOCUS — HIGH CONTRAST LIGHT PASTEL)
// ============================================================================
export const BACKPACK_CATEGORIES_DATA = {
  header: {
    tag: 'PRIMARY BUSINESS • DIRECT BACKPACK MANUFACTURING & MULTI-BRAND SUPPLY',
    title: 'OUR BACKPACK COLLECTIONS.',
    description: 'Explore our factory-manufactured models from Ninja Gear & ADMA London (with Front, Back & Side views), alongside corporate partner bags from Skybags, Arctic Hunter, and Swiss Military.',
    cta: {
      label: 'View All Backpacks & Partner Brands',
      href: '/bags'
    }
  },
  featuredCategory: {
    id: 'laptop-backpacks',
    tag: 'IN-HOUSE MODEL • NINJA GEAR INSPIRE (BG-INSPIRE)',
    title: 'Laptop Backpacks',
    description: 'Engineered with padded 17" laptop compartments, multi-level stationery organizers, concealed bottle pockets, and breathable honeycomb back mesh.',
    image: '/images/backpacks/laptop/laptop-backpack.jpg',
    href: '/bags?type=laptop',
    actionLabel: 'View Laptop Backpacks'
  },
  stackedCategories: [
    {
      id: 'business-backpacks',
      tag: 'IN-HOUSE MODEL • NINJA GEAR AVIATOR (BG-AVIATOR)',
      title: 'Executive Business Backpacks',
      image: '/images/backpacks/business/business-backpack.jpg',
      href: '/bags?type=laptop',
      actionLabel: 'View Business Models'
    },
    {
      id: 'travel-backpacks',
      tag: 'IN-HOUSE MODEL • ADMA LONDON VOLVO 2.0 (38L–40L)',
      title: 'Travel & Rain-Cover Backpacks',
      image: '/images/backpacks/travel/travel-backpack.jpg',
      href: '/bags?type=waterproof',
      actionLabel: 'View Travel Models'
    }
  ],
  standardCategories: [
    {
      id: 'school-college',
      tag: 'IN-HOUSE MODEL • ADMA LONDON JIO 2.0 (BG-JIO-2)',
      title: 'College & Campus Backpacks',
      description: 'Dual-compartment daily packs with ergonomic padded shoulder straps.',
      image: '/images/backpacks/school/school-backpack.jpg',
      href: '/bags?type=all',
      actionLabel: 'View Campus Packs'
    },
    {
      id: 'casual-backpacks',
      tag: 'IN-HOUSE MODEL • NINJA GEAR SOFT EDGE',
      title: 'Everyday & Gym Duffle Bags',
      description: 'Lightweight office daypacks, 35L–50L gym duffles, and commuter slings.',
      image: '/images/backpacks/casual/casual-backpack.jpg',
      href: '/bags?type=duffle',
      actionLabel: 'View Everyday & Duffles'
    },
    {
      id: 'customized-backpacks',
      tag: 'DTF PRINTING • EMBROIDERY • SCREEN PRINTING',
      title: 'Custom Branded & Partner Bags',
      description: 'Custom logo branding on our models or Skybags, Arctic Hunter & Swiss Military.',
      image: '/images/backpacks/customized/customized-backpack.jpg',
      href: '/branding',
      actionLabel: 'Explore Logo Branding'
    }
  ],
  partnerBrands: [
    {
      name: 'Skybags',
      tag: 'Authorized Corporate Partner',
      description: ' Trendy corporate daypacks, college backpacks, and cabin trolleys available for bulk corporate gifting with custom branding.',
      models: 'Backpacks • Laptop Bags • Cabin Trolleys'
    },
    {
      name: 'Arctic Hunter',
      tag: 'Premium Tech & Hard-Shell Partner',
      description: 'Waterproof hard-shell executive laptop backpacks with USB ports, anti-theft locks, and expandable travel compartments.',
      models: 'Hard-Shell Tech Packs • Executive Briefcases'
    },
    {
      name: 'Swiss Military',
      tag: 'Global Executive Partner',
      description: 'Luxury international travel backpacks, overnighter trolley bags, and executive corporate gifting combos.',
      models: 'Executive Backpacks • Travel Trolleys • Combos'
    }
  ]
};

// ============================================================================
// 5. MANUFACTURING & SIMPLE LOGO BRANDING DATA (NO APPAREL FABRICS, NO JARGON)
// ============================================================================
export const MANUFACTURING_DATA = {
  header: {
    tag: 'BENGALURU BACKPACK FACTORY • IN-HOUSE LOGO BRANDING',
    title: 'HEAVY-DUTY BACKPACK MANUFACTURING & BRANDING.',
    description: 'We use heavy-duty 1000D backpack fabrics, water-resistant coatings, heavy metal zippers, and high-density back padding — customized in-house with DTF Printing, Embroidery, and Screen Printing.',
    cta: {
      label: 'Enquire for Bulk Manufacturing',
      href: '#contact'
    }
  },
  featuredCraft: {
    tag: '1000D Heavy-Duty Backpack Fabric • 1-Year Factory Warranty',
    title: 'Built with Real Backpack Materials & Reinforced Stitching',
    description: 'Every Ninja Gear and ADMA London backpack is crafted from heavy-duty water-resistant polyester and nylon with bar-tack reinforced shoulder straps and smooth dual metal zippers.',
    image: '/images/manufacturing/hero-stitching.jpg'
  },
  processSteps: [
    {
      step: '01',
      title: '1000D Backpack Fabrics',
      desc: 'Heavy-duty water-repellent bag nylon, honeycomb back mesh & high-density foam.',
      image: '/images/manufacturing/fabric-selection.jpg',
      icon: Layers
    },
    {
      step: '02',
      title: 'DTF Logo Printing',
      desc: 'Vibrant, full-color Direct-to-Film (DTF) logo transfer for sharp corporate logos on bags & gifts.',
      image: '/images/manufacturing/cad-cutting.jpg',
      icon: Printer
    },
    {
      step: '03',
      title: 'Computerized Embroidery',
      desc: 'Long-lasting, multi-thread stitched logo embroidery directly on backpack front panels & apparels.',
      image: '/images/manufacturing/reinforcement.jpg',
      icon: Sparkles
    },
    {
      step: '04',
      title: 'Screen Printing & QC Check',
      desc: 'Clean screen printing for bulk event bags & 5-stage quality check on every zipper and strap.',
      image: '/images/manufacturing/quality-inspection.jpg',
      icon: CheckCircle2
    }
  ],
  warrantySummary: {
    title: '1-Year Direct Factory Replacement Warranty',
    description: 'Every backpack manufactured at our Bengaluru facility comes with a 1-Year Warranty covering stitching, zippers, and buckles — plus weekly new model production.',
    cta: {
      label: 'Contact Factory Desk',
      href: '#contact'
    }
  }
};

// ============================================================================
// 6. IN-HOUSE BRANDS DATA (PROPRIETARY REGISTERED LABELS — HIGH CONTRAST LIGHT)
// ============================================================================
export const IN_HOUSE_BRANDS_DATA = {
  header: {
    tag: 'PRIMARY IN-HOUSE BRANDS • MANUFACTURED BY GLOBRANDS IN BENGALURU',
    title: 'OUR IN-HOUSE BACKPACK BRANDS',
    description: 'At GLOBRANDS LIFESTYLE PVT. LTD., we manufacture our own registered backpack brands in-house — Ninja Gear Original and ADMA London — with new models manufactured every week.'
  },
  brands: {
    ninjaGear: {
      name: 'NINJA GEAR ORIGINAL',
      tagline: 'Tactical & Tech Backpacks',
      subtitle: 'Primary In-House Brand • Anti-Theft • USB Charging',
      description: 'Designed for IT professionals, software teams, and daily commuters. Ninja Gear features concealed anti-theft zippers, external USB charging ports, 17" padded laptop sleeves, and breathable back mesh.',
      logo: '/images/ninja-gear/logo.jpg',
      flagship: {
        badge: 'FLAGSHIP • NINJA GEAR BOXER (BG-BOXER)',
        image: '/catalog/backpacks-studio/bg-boxer.png',
        alt: 'Ninja Gear Boxer Anti-Theft Flagship Backpack'
      },
      supportingImages: [
        { image: '/catalog/backpacks-studio/bg-inspire.png', alt: 'Ninja Gear Inspire Laptop Backpack', label: 'BG-INSPIRE' },
        { image: '/catalog/backpacks-studio/bg-aviator.png', alt: 'Ninja Gear Aviator Executive Backpack', label: 'BG-AVIATOR' },
        { image: '/catalog/backpacks-studio/bg-mountain.png', alt: 'Ninja Gear Mountain 65L Rucksack', label: 'BG-MOUNTAIN' }
      ],
      features: [
        { label: 'Concealed Anti-Theft Zips', icon: Lock },
        { label: 'Built-In USB Port', icon: Zap },
        { label: '17" Padded Laptop Sleeve', icon: ShieldCheck },
        { label: 'DTF, Embroidery & Screen Print', icon: Award }
      ],
      cta: {
        label: 'View All 12 Ninja Gear Models',
        href: '/bags?brand=Ninja+Gear'
      }
    },
    admaLondon: {
      name: 'ADMA LONDON',
      tagline: 'A Real Companion',
      subtitle: 'Primary In-House Brand • Rain Cover • Executive Travel',
      description: 'Crafted for corporate executives, field teams, and business travel. ADMA London combines spacious 38L–40L compartments with integrated waterproof rain covers, RFID pockets, and separate shoe pouches.',
      logo: '/images/adma-london/logo.jpg',
      flagship: {
        badge: 'FLAGSHIP • ADMA LONDON VOLVO 2.0 (38L)',
        image: '/catalog/backpacks-studio/bg-volvo-2.png',
        alt: 'ADMA London Volvo 2.0 with Integrated Rain Cover'
      },
      supportingImages: [
        { image: '/catalog/backpacks-studio/bg-vip-2.png', alt: 'ADMA London VIP 2.0 Executive Pack', label: 'BG-VIP-2' },
        { image: '/catalog/backpacks-studio/bg-nexa.png', alt: 'ADMA London NEXA Urban Laptop Backpack', label: 'BG-NEXA' },
        { image: '/catalog/backpacks-studio/bg-ashwa.png', alt: 'ADMA London ASHWA Multipurpose Office & Gym', label: 'BG-ASHWA' }
      ],
      features: [
        { label: 'Integrated Rain Cover', icon: Droplets },
        { label: 'RFID Security Pocket', icon: Radio },
        { label: '38L–40L Jumbo Capacity', icon: Briefcase },
        { label: '1-Yr Factory Warranty', icon: Award }
      ],
      cta: {
        label: 'View All 20 ADMA London Models',
        href: '/bags?brand=ADMA+London'
      }
    }
  }
};

// ============================================================================
// 7. CORPORATE GIFTING DATA (SECONDARY BUSINESS — 9 CATEGORIES, 4 IMAGES PER CARD)
// ============================================================================
export const CORPORATE_GIFTING_DATA = {
  header: {
    tag: 'SECONDARY BUSINESS SEGMENT • COMPLETE A-TO-Z CORPORATE GIFTING',
    title: 'A-TO-Z CORPORATE GIFTING SOLUTIONS.',
    description: 'From Employee Welcome Kits, Customized Drinkware, and Sustainable Bamboo to Apparels, Trophies & Medals, Trolleys, Kitchen Essentials, and Multi-Brand Gifts — we supply everything from A to Z. Call us directly for bulk customization!',
    cta: {
      label: 'Explore Corporate Gifting Catalogue',
      href: '/gift-sets'
    }
  },
  featuredWelcomeKit: {
    tag: 'Complete Employee Onboarding & Festive Gifting',
    badge: 'A-to-Z Custom Branding • DTF • Embroidery • Screen Print • Laser Engraving',
    title: 'Employee Welcome Kits & Custom Combo Hampers',
    description: 'Mix and match any backpack, vacuum flask, diary, metal pen, coffee mug, or tech accessory into a custom-branded gift box. Looking for a specific item or premium brand? Call our Corporate Desk directly and we will source and customize it for your company.',
    image: '/images/corporate-gifting/welcome-kit.jpg',
    collageImages: [
      '/catalog/crops/hgs_h74.jpg',
      '/catalog/crops/hgs_h71.jpg',
      '/catalog/crops/hgs_h65.jpg',
      '/catalog/crops/hgs_h55.jpg'
    ],
    primaryCta: {
      label: 'Call Corporate Desk (+91 99720 28250)',
      href: 'tel:919972028250'
    },
    secondaryCta: {
      label: 'Browse Gift Sets',
      href: '/gift-sets'
    }
  },
  categories: [
    {
      title: 'Welcome Kits & Sustainable Bamboo',
      subtitle: 'Executive Gift Boxes & Eco Sets',
      description: '2-in-1 to 6-in-1 onboarding gift boxes, natural bamboo vacuum flasks, wooden diaries, and cork mugs.',
      image: '/catalog/crops/hgs_h74.jpg',
      images: [
        '/catalog/crops/hgs_h74.jpg',
        '/catalog/crops/hgs_h71.jpg',
        '/catalog/crops/hgs_h117_bamboo.jpg',
        '/catalog/crops/hgs_h135_bamboo_temp.jpg'
      ],
      link: '/gift-sets',
      tag: 'Welcome & Bamboo',
      icon: Gift
    },
    {
      title: 'Customized Drinkware & Bottles',
      subtitle: 'Vacuum Flasks, LED Bottles & Mugs',
      description: 'Smart temperature display flasks, stainless steel bottles, insulated coffee mugs, and tumblers.',
      image: '/catalog/crops/hgs_h118_vacuum.jpg',
      images: [
        '/catalog/crops/hgs_h118_vacuum.jpg',
        '/catalog/crops/hgs_h125_temp_display.jpg',
        '/catalog/crops/hgs_h126_rope.jpg',
        '/catalog/crops/hgs_h205_steel_mug.jpg'
      ],
      link: '/products?category=drinkware',
      tag: 'Laser & Print',
      icon: Coffee
    },
    {
      title: 'Trophies, Medals & Awards',
      subtitle: 'Employee Recognition & Events',
      description: 'Crystal plaques, metal star trophies, custom sports medals, and wooden mementos for annual awards.',
      image: '/images/gifting-categories/trophy-1.jpg',
      images: [
        '/images/gifting-categories/trophy-1.jpg',
        '/images/gifting-categories/trophy-2.jpg',
        '/images/gifting-categories/trophy-3.jpg',
        '/images/gifting-categories/trophy-4.jpg'
      ],
      link: '#contact',
      tag: 'Custom Engraving',
      icon: Trophy
    },
    {
      title: 'Corporate Apparels & Wearables',
      subtitle: 'T-Shirts, Hoodies, Jackets & Caps',
      description: 'Custom polo T-shirts, corporate hoodies, jackets, and caps with DTF, embroidery & screen printing.',
      image: '/images/gifting-categories/apparel-1.jpg',
      images: [
        '/images/gifting-categories/apparel-1.jpg',
        '/images/gifting-categories/apparel-2.jpg',
        '/images/gifting-categories/apparel-3.jpg',
        '/images/gifting-categories/apparel-4.jpg'
      ],
      link: '#contact',
      tag: 'DTF & Embroidery',
      icon: Shirt
    },
    {
      title: 'Brand Trolleys & Travel Luggage',
      subtitle: 'Cabin & Check-In Spinner Trolleys',
      description: 'Branded hard-shell spinner trolleys, executive overnighter luggage, and travel bags from top brands.',
      image: '/images/gifting-categories/trolley-1.jpg',
      images: [
        '/images/gifting-categories/trolley-1.jpg',
        '/images/gifting-categories/trolley-2.jpg',
        '/images/gifting-categories/trolley-3.jpg',
        '/images/gifting-categories/trolley-4.jpg'
      ],
      link: '#contact',
      tag: 'Brand Trolleys',
      icon: Luggage
    },
    {
      title: 'Kitchen Essentials & Multi-Brand Gifts',
      subtitle: 'Home Appliances & A-to-Z Brands',
      description: 'Electric kettles, lunch boxes, cookware sets, electronics, and any brand item your company requires.',
      image: '/images/gifting-categories/kitchen-1.jpg',
      images: [
        '/images/gifting-categories/kitchen-1.jpg',
        '/images/gifting-categories/kitchen-2.jpg',
        '/images/gifting-categories/kitchen-3.jpg',
        '/catalog/crops/hgs_h83.jpg'
      ],
      link: '#contact',
      tag: 'Kitchen & Brands',
      icon: Utensils
    }
  ]
};

// ============================================================================
// 8. ENTERPRISE TRUST & CAPABILITIES DATA
// ============================================================================
export const ENTERPRISE_TRUST_DATA = {
  header: {
    tag: 'DIRECT MANUFACTURER & CORPORATE SUPPLIER • BENGALURU',
    title: 'WHY CHOOSE GLOBRANDS.',
    description: 'Over a decade of direct backpack manufacturing and A-to-Z corporate gifting supply for companies across India.'
  },
  capabilities: [
    {
      number: '01',
      title: 'Direct Factory Backpack Manufacturing',
      description: 'In-house production in Bengaluru with weekly new backpack designs and direct factory pricing.',
      icon: Factory,
      metric: '100% Direct Factory'
    },
    {
      number: '02',
      title: 'DTF, Embroidery & Screen Printing',
      description: 'Simple, reliable in-house logo branding using DTF printing, computerized embroidery, and screen printing.',
      icon: Palette,
      metric: 'In-House Branding'
    },
    {
      number: '03',
      title: 'In-House & Multi-Brand Bags',
      description: '32+ proprietary Ninja Gear & ADMA London models plus partner bags from Skybags, Arctic Hunter & Swiss Military.',
      icon: Layers,
      metric: 'In-House + Partner Brands'
    },
    {
      number: '04',
      title: 'Complete A-to-Z Corporate Gifting',
      description: 'Welcome kits, bottles, bamboo gifts, apparels, trophies, trolleys, kitchen essentials, and any custom product.',
      icon: Gift,
      metric: 'A-to-Z Categories'
    },
    {
      number: '05',
      title: 'Fast Pan-India Bulk Delivery',
      description: 'Ready stock availability and fast production turnaround from 50 units to 50,000+ units across India.',
      icon: Truck,
      metric: 'Pan-India Dispatch'
    },
    {
      number: '06',
      title: '1-Year Direct Factory Warranty',
      description: 'Every backpack we manufacture is backed by our 1-Year Direct Replacement Warranty on stitching & zippers.',
      icon: Award,
      metric: '1-Yr Warranty'
    }
  ],
  clientPartners: [
    'WIPRO',
    'INFOSYS',
    'TATA CONSULTANCY',
    'TECH MAHINDRA',
    'COGNIZANT',
    'DELL TECHNOLOGIES',
    'ACCENTURE'
  ]
};

// ============================================================================
// 9. CONTACT SECTION CONFIGURATION
// ============================================================================
export const CONTACT_CONFIG = {
  header: {
    tag: 'DIRECT BENGALURU FACTORY & CORPORATE DESK',
    title: 'GET A QUICK BULK QUOTE.',
    description: 'Call or WhatsApp our Corporate Desk directly for Backpack Manufacturing or A-to-Z Corporate Gifting requirements.'
  },
  pathways: {
    manufacturing: {
      id: 'manufacturing',
      label: 'Backpack Manufacturing',
      defaultCategory: 'In-House Backpacks (Ninja Gear / ADMA London)',
      categories: [
        { label: 'In-House Brands (Ninja Gear & ADMA London)', value: 'In-House Brands (Ninja Gear / ADMA London)' },
        { label: 'Partner Brand Bags (Skybags / Arctic Hunter / Swiss Military)', value: 'Partner Brand Bags' },
        { label: 'Laptop & Executive Backpacks', value: 'Laptop Backpacks' },
        { label: 'Travel Backpacks with Rain Cover (38L-40L)', value: 'Travel Backpacks' },
        { label: 'Gym Duffles, Slings & Laptop Sleeves', value: 'Duffles & Slings' },
        { label: 'Custom Logo Backpacks (DTF / Embroidery / Screen Print)', value: 'Custom Branded Backpacks' }
      ]
    },
    gifting: {
      id: 'gifting',
      label: 'Corporate Gifting (A to Z)',
      defaultCategory: 'Employee Welcome Kits & Gift Boxes',
      categories: [
        { label: 'Employee Welcome Kits & Combo Gift Boxes', value: 'Employee Welcome Kits' },
        { label: 'Customized Drinkware & Vacuum Bottles', value: 'Customized Drinkware' },
        { label: 'Sustainable Bamboo Corporate Gifts', value: 'Sustainable Bamboo Gifts' },
        { label: 'Corporate Apparels (T-Shirts, Hoodies, Caps)', value: 'Corporate Apparels' },
        { label: 'Trophies, Medals & Recognition Awards', value: 'Trophies & Medals' },
        { label: 'Trolleys & Branded Travel Luggage', value: 'Trolleys & Luggage' },
        { label: 'Kitchen Essentials & Home Appliances', value: 'Kitchen Essentials' },
        { label: 'Other Custom A-to-Z Corporate Requirement', value: 'Custom A-to-Z Gifting' }
      ]
    }
  },
  quantitySlabs: [
    { label: '50 – 100 units', value: '50 - 100 units' },
    { label: '100 – 250 units', value: '100 - 250 units' },
    { label: '250 – 500 units', value: '250 - 500 units' },
    { label: '500 – 1,000 units', value: '500 - 1000 units' },
    { label: '1,000+ units (Bulk Contract)', value: '1000+ units' }
  ]
};

// ============================================================================
// 10. FOOTER CONFIGURATION
// ============================================================================
export const FOOTER_CONFIG = {
  aboutText: "GLOBRANDS LIFESTYLE PVT. LTD. is a direct backpack manufacturer in Bengaluru (Primary Business) and an A-to-Z corporate gifting supplier (Secondary Business). We manufacture our registered brands Ninja Gear Original & ADMA London, supply partner brands (Skybags, Arctic Hunter, Swiss Military), and offer in-house DTF printing, embroidery, and screen printing.",
  atelierBadge: {
    title: 'DIRECT BENGALURU FACTORY & CORPORATE DESK',
    text: '1-Year Backpack Warranty • DTF, Embroidery & Screen Printing • A-to-Z Corporate Gifting'
  },
  backpackCollections: [
    { label: 'In-House Brands: Ninja Gear & ADMA London', href: '/brands', highlight: true },
    { label: 'Laptop & Executive Backpacks', href: '/bags?type=laptop' },
    { label: 'Travel Backpacks with Rain Cover', href: '/bags?type=waterproof' },
    { label: 'Partner Bags: Skybags, Arctic Hunter & Swiss Military', href: '/bags' },
    { label: 'Gym Duffles, Slings & Sleeves', href: '/bags?type=duffle' },
    { label: 'DTF, Embroidery & Screen Printing', href: '/branding', highlight: true }
  ],
  proprietaryBrands: [
    { label: 'Ninja Gear Original (12 Models)', href: '/bags?brand=Ninja+Gear', bold: true },
    { label: 'ADMA London (20 Models)', href: '/bags?brand=ADMA+London', bold: true }
  ],
  secondarySegmentLinks: [
    { label: 'Employee Welcome Kits & Gift Boxes', href: '/gift-sets' },
    { label: 'Customized Drinkware & Bamboo', href: '/products?category=drinkware' },
    { label: 'Apparels, Trophies, Trolleys & Kitchen', href: '/#corporate-gifting' }
  ],
  legalLinks: [
    { label: 'About Our Factory', href: '/about' },
    { label: 'Contact Corporate Desk', href: '/contact' }
  ]
};
