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
  subtitle: 'Backpack Manufacturers & Corporate Gifting • Bengaluru',
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
    headline: 'Primary: Direct Backpack Manufacturing (Ninja Gear & ADMA London) • Secondary: A-to-Z Corporate Gifting'
  },
  primaryLinks: [
    { label: 'In-House Brands', href: '/brands' },
    { label: 'Backpacks & Bags', href: '/bags' },
    { label: 'Corporate Gifting', href: '/gift-sets' },
  ],
  secondaryLinks: [
    { label: 'DTF & Embroidery', href: '/branding' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  catalogDropdownItems: [
    {
      title: 'In-House Brands (Ninja Gear & ADMA London)',
      description: '32 factory-manufactured models with 1-Yr Warranty',
      href: '/brands',
      icon: Sparkles
    },
    {
      title: 'All Backpacks & Partner Brands',
      description: 'Our Models + Skybags, Arctic Hunter & Swiss Military',
      href: '/bags',
      icon: Briefcase
    },
    {
      title: 'Corporate Gifting (A to Z)',
      description: 'Welcome Kits, Drinkware, Apparels, Trophies, Trolleys & More',
      href: '/gift-sets',
      icon: Gift
    },
    {
      title: 'Logo Branding (DTF, Embroidery & Screen Print)',
      description: 'In-house logo customization for bags & corporate gifts',
      href: '/branding',
      icon: Printer
    },
    {
      title: 'Digital PDF Catalogues',
      description: 'Browse full Bag & Corporate Gifting PDF books',
      href: '/catalog-viewer',
      icon: FileText
    }
  ]
};

// ============================================================================
// 3. HERO SECTION CONTENT (Highlights BOTH Backpack Manufacturing & Corporate Gifting)
// ============================================================================
export const HERO_CONTENT = {
  badge: 'BENGALURU DIRECT FACTORY • 1-YEAR WARRANTY',
  pretitle: 'GLOBRANDS LIFESTYLE PVT. LTD.',
  title: 'BACKPACK MANUFACTURING',
  titleHighlight: '& CORPORATE GIFTING.',
  subheading: 'Primary Business: Direct Backpack Manufacturing • Secondary Business: Complete A-to-Z Corporate Gifting Solutions.',
  description: 'We manufacture 32+ proprietary backpack models in Bengaluru under our registered brands Ninja Gear Original & ADMA London, supply top partner brands (Skybags, Arctic Hunter, Swiss Military), and deliver A-to-Z corporate gifts with in-house DTF Printing, Embroidery & Screen Printing.',
  image: '/images/hero/hero-backpack.jpg',
  imageAlt: 'Ninja Gear Boxer & ADMA London Volvo 2.0 Manufactured by Globrands Lifestyle Pvt. Ltd.',
  imageBadge: 'IN-HOUSE FLAGSHIPS • NINJA GEAR BOXER & ADMA LONDON VOLVO 2.0',
  primaryCta: {
    label: 'EXPLORE IN-HOUSE BRANDS',
    href: '/brands'
  },
  secondaryCta: {
    label: 'EXPLORE CORPORATE GIFTING',
    href: '#corporate-gifting'
  },
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
      title: 'Employee Welcome Kits & Gift Boxes',
      subtitle: '2-in-1 to 6-in-1 Executive Combos',
      description: 'Rigid magnetic gift boxes with custom diary, steel flask, metal pen, keychain, and mug.',
      image: '/catalog/crops/hgs_h74.jpg',
      images: [
        '/catalog/crops/hgs_h74.jpg',
        '/catalog/crops/hgs_h71.jpg',
        '/catalog/crops/hgs_h72.jpg',
        '/catalog/crops/hgs_h65.jpg'
      ],
      link: '/gift-sets',
      tag: '4+ Varieties',
      icon: Gift
    },
    {
      title: 'Customized Drinkware & Water Bottles',
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
      title: 'Sustainable Bamboo Products',
      subtitle: 'Eco-Friendly Corporate Gifts',
      description: 'Natural bamboo vacuum flasks, bamboo tumblers, wooden diaries, cork mugs, and eco desk sets.',
      image: '/catalog/crops/hgs_h117_bamboo.jpg',
      images: [
        '/catalog/crops/hgs_h117_bamboo.jpg',
        '/catalog/crops/hgs_h135_bamboo_temp.jpg',
        '/catalog/crops/hgs_h204_bamboo_mug.jpg',
        '/catalog/crops/hgs_h206_bamboo_tumbler.jpg'
      ],
      link: '/gift-sets',
      tag: 'Eco Series',
      icon: Sparkles
    },
    {
      title: 'Corporate Apparels & Wearables',
      subtitle: 'T-Shirts, Hoodies, Jackets & Caps',
      description: 'Custom polo T-shirts, corporate hoodies, windcheaters, and caps with DTF, embroidery & screen printing.',
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
      title: 'Trolleys & Travel Luggage',
      subtitle: 'Hard-Shell Cabin & Check-In Trolleys',
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
      title: 'Kitchen Essentials & Appliances',
      subtitle: 'Festive & Diwali Home Gifting',
      description: 'Electric kettles, stainless steel lunch boxes, cookware gift sets, mixers, and premium home utilities.',
      image: '/images/gifting-categories/kitchen-1.jpg',
      images: [
        '/images/gifting-categories/kitchen-1.jpg',
        '/images/gifting-categories/kitchen-2.jpg',
        '/images/gifting-categories/kitchen-3.jpg',
        '/images/gifting-categories/kitchen-4.jpg'
      ],
      link: '#contact',
      tag: 'Festive Gifting',
      icon: Utensils
    },
    {
      title: 'Executive Diaries & Desk Organizers',
      subtitle: 'PU Leather Notebooks & Metal Pens',
      description: 'Magnetic clasp diaries, wooden finish notebooks, powerbank folders, and executive desk clocks.',
      image: '/catalog/crops/diary_no_03_leather.jpg',
      images: [
        '/catalog/crops/diary_no_03_leather.jpg',
        '/catalog/crops/diary_no_12_mobile_pocket.jpg',
        '/catalog/crops/diary_no_51_wooden.jpg',
        '/catalog/crops/diary_no_64_gold_fitting.jpg'
      ],
      link: '/products?category=diaries',
      tag: 'Custom Embossed',
      icon: BookOpen
    },
    {
      title: 'Multi-Brand & A-to-Z Custom Sourcing',
      subtitle: 'Any Brand • Any Product • Bulk Supply',
      description: 'From premium electronics and office utilities to any specific brand item your company needs — we source and brand it all.',
      image: '/catalog/crops/hgs_h83.jpg',
      images: [
        '/catalog/crops/hgs_h83.jpg',
        '/catalog/crops/hgs_h93.jpg',
        '/catalog/crops/hgs_h01.jpg',
        '/catalog/crops/hgs_h101.jpg'
      ],
      link: '#contact',
      tag: 'A-to-Z Supply',
      icon: Award
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
