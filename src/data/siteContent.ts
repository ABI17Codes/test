/**
 * Centralized Site Content & Configuration
 * Globrands Lifestyle Pvt. Ltd.
 * 
 * All business metadata, brand collections, manufacturing data, capabilities,
 * navigation structure, and contact information are centralized here.
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
  Truck
} from 'lucide-react';

// ============================================================================
// 1. COMPANY INFORMATION & LEGAL IDENTITY
// ============================================================================
export const COMPANY_INFO = {
  legalName: 'GLOBRANDS LIFESTYLE PVT. LTD.',
  shortName: 'Globrands Lifestyle',
  tagline: 'BUILT TO MOVE. MADE TO LAST.',
  subtitle: 'Backpack Manufacturers • Bengaluru',
  establishedYear: 2014,
  locationLabel: 'Bengaluru Production Atelier',
  primaryFocus: 'Direct Backpack Manufacturing',
  secondaryFocus: 'Corporate Gifting & Welcome Kits',
  warrantyText: '1-Year Direct Factory Replacement Warranty',
  qcProtocol: '5-Stage QC Audit',
  
  contact: {
    corporatePhone: '+91 99000 20456',
    secondaryPhone: '+91 99000 26645',
    phoneRaw: '919900020456',
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
// 2. NAVIGATION CONFIGURATION
// ============================================================================
export const NAVIGATION_CONFIG = {
  topUtilityStrip: {
    atelierText: 'Bengaluru Atelier',
    headline: 'Direct Backpack Manufacturers • Ninja Gear • ADMA London'
  },
  primaryLinks: [
    { label: 'Backpacks & Bags', href: '/bags' },
    { label: 'In-House Brands', href: '/brands' },
    { label: 'Corporate Gifting', href: '/gift-sets' },
  ],
  secondaryLinks: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  catalogDropdownItems: [
    {
      title: 'Backpack Collection',
      description: '32 factory models across 4 tiers',
      href: '/bags',
      icon: Briefcase
    },
    {
      title: 'In-House Brand Lines',
      description: 'Ninja Gear • ADMA London',
      href: '/brands',
      icon: Sparkles
    },
    {
      title: 'Corporate Gifting Sets',
      description: 'Secondary onboarding & festive kits',
      href: '/gift-sets',
      icon: Gift
    },
    {
      title: 'Custom Branding Studio',
      description: 'Embroidery, deboss, metal plates',
      href: '/branding',
      icon: Printer
    },
    {
      title: 'OEM / ODM Solutions',
      description: 'Private label & contract manufacturing',
      href: '/solutions',
      icon: Layers
    },
    {
      title: 'Digital PDF Catalogues',
      description: 'Interactive Flipbook & downloads',
      href: '/catalog-viewer',
      icon: FileText,
      dividerAbove: true
    }
  ]
};

// ============================================================================
// 3. HERO SECTION CONTENT
// ============================================================================
export const HERO_CONTENT = {
  badge: 'BENGALURU PRODUCTION ATELIER • EST. 2014',
  pretitle: 'GLOBRANDS LIFESTYLE PVT. LTD.',
  title: 'BUILT TO MOVE.',
  titleHighlight: 'MADE TO LAST.',
  subheading: 'Premium Backpack Manufacturing Partner. Designed with Purpose. Crafted with Precision.',
  description: 'Direct from our Bengaluru production atelier. Engineering technical carrywear, custom OEM solutions, and our proprietary in-house labels: Ninja Gear Original & ADMA London.',
  image: '/images/hero/hero-backpack.jpg',
  imageAlt: 'Engineered Backpack by Globrands Lifestyle Pvt. Ltd.',
  imageBadge: 'Flagship Executive Carrywear • 1000D Ballistic Nylon • 1-Yr Warranty',
  primaryCta: {
    label: 'EXPLORE COLLECTION',
    href: '/bags'
  },
  secondaryCta: {
    label: 'DISCUSS REQUIREMENTS',
    href: '#contact'
  },
  stats: [
    {
      category: 'Direct Atelier',
      title: 'Bengaluru Production',
      subtitle: 'Zero intermediary markups',
      highlight: true
    },
    {
      category: 'Proprietary Labels',
      title: 'Ninja Gear & ADMA London',
      subtitle: '32 Verified Models',
      highlight: false
    },
    {
      category: 'Quality Protocol',
      title: '5-Stage QC Audit',
      subtitle: '1-Year Factory Warranty',
      highlight: false
    },
    {
      category: 'Custom OEM',
      title: 'Pantone & Embroidery',
      subtitle: 'MOQ 50 Units • Fast Delivery',
      highlight: false
    }
  ]
};

// ============================================================================
// 4. BACKPACK CATEGORIES (PRIMARY BUSINESS FOCUS)
// ============================================================================
export const BACKPACK_CATEGORIES_DATA = {
  header: {
    tag: 'PRIMARY BUSINESS FOCUS • DIRECT MANUFACTURING',
    title: 'DESIGNED FOR EVERY JOURNEY.',
    description: 'Discover our collection of thoughtfully engineered backpacks. From daily tech commutes to high-capacity international travel, crafted in our Bengaluru atelier.',
    cta: {
      label: 'Explore All 32 Models',
      href: '/bags'
    }
  },
  featuredCategory: {
    id: 'laptop-backpacks',
    tag: 'Daily Commute • Tech Protection',
    title: 'Laptop Backpacks',
    description: 'Engineered with suspended shockproof 17" laptop cradles, waterproof cable pass-throughs, and multi-tier organizational pockets.',
    image: '/images/backpacks/laptop/laptop-backpack.jpg',
    href: '/bags?type=laptop',
    actionLabel: 'Explore Collection'
  },
  stackedCategories: [
    {
      id: 'business-backpacks',
      tag: 'Executive Carrywear',
      title: 'Business Backpacks',
      image: '/images/backpacks/business/business-backpack.jpg',
      href: '/bags?type=laptop',
      actionLabel: 'Explore Collection'
    },
    {
      id: 'travel-backpacks',
      tag: '38L–40L • Integrated Rain Cover',
      title: 'Travel Backpacks',
      image: '/images/backpacks/travel/travel-backpack.jpg',
      href: '/bags?type=waterproof',
      actionLabel: 'Explore Collection'
    }
  ],
  standardCategories: [
    {
      id: 'school-college',
      tag: 'High-Tensile Academic Durability',
      title: 'School & College',
      description: 'Ergonomic load distribution for everyday campus carry.',
      image: '/images/backpacks/school/school-backpack.jpg',
      href: '/bags?type=all',
      actionLabel: 'Explore Collection'
    },
    {
      id: 'casual-backpacks',
      tag: 'Minimalist Everyday Carry',
      title: 'Casual Backpacks',
      description: 'Lightweight, modern carrywear built for urban lifestyles.',
      image: '/images/backpacks/casual/casual-backpack.jpg',
      href: '/bags?type=all',
      actionLabel: 'Explore Collection'
    },
    {
      id: 'customized-backpacks',
      tag: 'Tajima Embroidery • Molded Badges',
      title: 'Customized Backpacks',
      description: 'Factory-direct logo branding, custom pullers, and fabric dyes.',
      image: '/images/backpacks/customized/customized-backpack.jpg',
      href: '/branding',
      actionLabel: 'Explore Customization'
    }
  ]
};

// ============================================================================
// 5. MANUFACTURING STORY DATA
// ============================================================================
export const MANUFACTURING_DATA = {
  header: {
    tag: 'BENGALURU PRODUCTION ATELIER • FACTORY DIRECT',
    title: 'PRECISION IN EVERY STITCH.',
    description: 'From raw technical weaves to finished assembly, an inside look at our Bengaluru atelier where computerized precision meets industrial craftsmanship across every seam.',
    cta: {
      label: 'Request Factory Inspection',
      href: '#contact'
    }
  },
  featuredCraft: {
    tag: 'Industrial Bar-Tack Reinforcement • 15kg+ Dynamic Load Tolerance',
    title: 'Engineered For High-Stress Commutes',
    description: 'Every harness anchor point and haul handle is anchored with industrial bonded nylon stitching to ensure lifetime durability.',
    image: '/images/manufacturing/hero-stitching.jpg'
  },
  processSteps: [
    {
      step: '01',
      title: 'Fabric Selection',
      desc: '1000D ballistic nylon & Cordura.',
      image: '/images/manufacturing/fabric-selection.jpg',
      icon: Cpu
    },
    {
      step: '02',
      title: 'CAD Laser Cutting',
      desc: 'Zero-tolerance pattern development.',
      image: '/images/manufacturing/cad-cutting.jpg',
      icon: Scissors
    },
    {
      step: '03',
      title: 'Reinforced Stitching',
      desc: 'Multi-pass bonded nylon filaments.',
      image: '/images/manufacturing/reinforcement.jpg',
      icon: ShieldCheck
    },
    {
      step: '04',
      title: 'Quality Inspection',
      desc: '100% manual seam & load audit.',
      image: '/images/manufacturing/quality-inspection.jpg',
      icon: CheckCircle2
    }
  ],
  warrantySummary: {
    title: 'Direct Factory Warranty Protocol',
    description: 'Every unit manufactured at our Bengaluru factory is covered under our 1-Year Direct Factory Replacement Warranty against material defects, zipper malfunction, and structural seam failure.',
    cta: {
      label: 'Book Factory Visit',
      href: '#contact'
    }
  }
};

// ============================================================================
// 6. IN-HOUSE BRANDS DATA (PROPRIETARY REGISTERED LABELS)
// ============================================================================
export const IN_HOUSE_BRANDS_DATA = {
  header: {
    tag: 'PROPRIETARY REGISTERED LABELS • IN-HOUSE MANUFACTURING',
    title: 'OUR IN-HOUSE BRANDS',
    description: 'At GLOBRANDS LIFESTYLE PVT. LTD., we own, design, and manufacture every piece under our two proprietary registered labels—each engineered with distinct architectural DNA and backed by our 1-Year Direct Factory Replacement Warranty.'
  },
  brands: {
    admaLondon: {
      name: 'ADMA LONDON',
      tagline: 'A Real Companion',
      subtitle: 'British Heritage • Executive Carrywear',
      description: 'Crafted for senior corporate executives, global business travelers, and leadership summits. ADMA London combines timeless British styling with protective engineering—including deployable waterproof rain covers, RFID-shielded card protection, and cavernous 38L–40L compartments.',
      logo: '/images/adma-london/logo.jpg',
      flagship: {
        badge: 'FLAGSHIP • VOLVO 2.0 (38L)',
        image: '/images/adma-london/featured.jpg',
        alt: 'ADMA London Volvo 2.0 with Integrated Rain Cover'
      },
      supportingImages: [
        { image: '/images/adma-london/sub-1.jpg', alt: 'ADMA London VIP 2.0 Executive Pack' },
        { image: '/images/adma-london/sub-2.jpg', alt: 'ADMA London NEXA Urban Laptop Backpack' },
        { image: '/images/adma-london/sub-3.jpg', alt: 'ADMA London ASHWA Multipurpose Office & Gym' }
      ],
      features: [
        { label: 'Deployable Rain Cover', icon: Droplets },
        { label: 'Certified RFID Shield', icon: Radio },
        { label: '40L Jumbo Volume', icon: Briefcase },
        { label: '1-Yr Factory Warranty', icon: Award }
      ],
      cta: {
        label: 'Explore ADMA London Collection',
        href: '/bags?brand=ADMA+London'
      }
    },
    ninjaGear: {
      name: 'NINJA GEAR',
      tagline: 'Tactical Tech',
      subtitle: 'Tactical • Antitheft • Tech Commute',
      description: 'Engineered for software engineers, IT specialists, and modern urban commuters. Ninja Gear incorporates discreet anti-theft security architecture, external USB quick-charge conduits, and heavy-duty 1000D water-repellent ballistic weaves designed for heavy everyday use.',
      logo: '/images/ninja-gear/logo.jpg',
      flagship: {
        badge: 'FLAGSHIP • BOXER (ANTI-THEFT)',
        image: '/images/ninja-gear/featured.jpg',
        alt: 'Ninja Gear Boxer Anti-Theft Flagship Backpack'
      },
      supportingImages: [
        { image: '/images/ninja-gear/sub-1.jpg', alt: 'Ninja Gear Inspire Professional Laptop Backpack' },
        { image: '/images/ninja-gear/sub-2.jpg', alt: 'Ninja Gear Aviator Heavy-Duty Executive Backpack' },
        { image: '/images/ninja-gear/sub-3.jpg', alt: 'Ninja Gear Mountain 65L Expedition Rucksack' }
      ],
      features: [
        { label: 'Concealed Rear Zips', icon: Lock },
        { label: 'External USB Port', icon: Zap },
        { label: '17" Shockproof Cradle', icon: ShieldCheck },
        { label: '1-Yr Factory Warranty', icon: Award }
      ],
      cta: {
        label: 'Explore Ninja Gear Collection',
        href: '/bags?brand=Ninja+Gear'
      }
    }
  }
};

// ============================================================================
// 7. CORPORATE GIFTING DATA (SECONDARY BUSINESS SEGMENT)
// ============================================================================
export const CORPORATE_GIFTING_DATA = {
  header: {
    tag: 'SECONDARY BUSINESS SEGMENT • CORPORATE SOLUTIONS',
    title: 'THOUGHTFUL GIFTS. LASTING IMPRESSIONS.',
    description: 'Curated corporate gifting solutions designed to strengthen relationships and celebrate company milestones. Fully customized and delivered nationwide by GLOBRANDS LIFESTYLE PVT. LTD.',
    cta: {
      label: 'Explore All Gift Sets',
      href: '/gift-sets'
    }
  },
  featuredWelcomeKit: {
    tag: 'Flagship Onboarding Hamper',
    badge: 'Turnkey Onboarding Solution • MOQ 25 Kits',
    title: 'Employee Welcome Kits',
    description: 'Make day one memorable for new team members. Our onboarding hampers pair laser-engraved vacuum flasks, premium soft-touch notebooks, precision metal pens, and custom branded backpacks.',
    image: '/images/corporate-gifting/welcome-kit.jpg',
    primaryCta: {
      label: 'Customize Welcome Kit',
      href: '/solutions'
    },
    secondaryCta: {
      label: 'Request Slab Pricing',
      href: '#contact'
    }
  },
  categories: [
    {
      title: 'Corporate Gift Boxes',
      subtitle: 'Luxury Hampers & Sets',
      description: 'Custom molded rigid magnetic boxes with color-coordinated executive accessories.',
      image: '/images/corporate-gifting/gift-boxes.jpg',
      link: '/gift-sets',
      tag: 'MOQ 25 Sets',
      icon: Gift
    },
    {
      title: 'Customized Drinkware',
      subtitle: 'Smart Vacuum Flasks',
      description: 'Grade 304 food-safe insulated stainless bottles with permanent laser logo engraving.',
      image: '/images/corporate-gifting/custom-merch.jpg',
      link: '/products?category=drinkware',
      tag: 'MOQ 50 Pcs',
      icon: Coffee
    },
    {
      title: 'Promotional Products',
      subtitle: 'Tech & Desk Essentials',
      description: 'High-visibility corporate merchandise and organizers for conferences and summits.',
      image: '/images/corporate-gifting/promo-products.jpg',
      link: '/solutions',
      tag: 'Bulk Tiers',
      icon: Laptop
    },
    {
      title: 'Business Accessories',
      subtitle: 'Journals & Metal Pens',
      description: 'Soft-touch PU leatherette executive notebooks, precision pens, and desk sets.',
      image: '/images/corporate-gifting/business-accessories.jpg',
      link: '/products?category=stationery',
      tag: 'MOQ 50 Pcs',
      icon: BookOpen
    }
  ]
};

// ============================================================================
// 8. ENTERPRISE TRUST & CAPABILITIES DATA
// ============================================================================
export const ENTERPRISE_TRUST_DATA = {
  header: {
    tag: 'ENTERPRISE CREDIBILITY • VERIFIED ATELIER STRENGTHS',
    title: 'WHY GLOBRANDS.',
    description: 'Engineered reliability backed by over a decade of direct factory manufacturing experience for India\'s leading corporations.'
  },
  capabilities: [
    {
      number: '01',
      title: 'Direct Factory Manufacturing',
      description: '100% in-house production atelier in Bengaluru. Direct manufacturer pricing with zero middleman markups.',
      icon: Factory,
      metric: '100% In-House'
    },
    {
      number: '02',
      title: 'Precision OEM Customization',
      description: 'Japanese Tajima multi-needle embroidery, fiber laser engraving, and custom-molded metallic hardware.',
      icon: Palette,
      metric: 'Pantone Exact'
    },
    {
      number: '03',
      title: 'Rigorous 5-Stage QC Protocol',
      description: 'Systematic zero-defect inspection evaluating tensile strength, seam stress, and 10,000-cycle zipper tests.',
      icon: ShieldCheck,
      metric: 'Zero-Defect Audit'
    },
    {
      number: '04',
      title: 'Proprietary In-House Brands',
      description: 'Over 32 verified carrywear models designed and owned under our registered labels: Ninja Gear & ADMA London.',
      icon: Layers,
      metric: '32 Active Models'
    },
    {
      number: '05',
      title: 'Enterprise Bulk Capacity',
      description: 'Scalable production from 50 to 50,000+ units with over 1.2 million units delivered across 28 Indian states.',
      icon: Truck,
      metric: '1.2M+ Delivered'
    },
    {
      number: '06',
      title: '1-Year Factory Warranty',
      description: 'Unconditional direct factory replacement warranty covering all seams, zippers, and structural hardware.',
      icon: Award,
      metric: '1-Yr Replacement'
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
    tag: 'DIRECT FACTORY ATELIER • START A CONVERSATION',
    title: "LET'S BUILD SOMETHING TOGETHER.",
    description: 'Discuss your custom backpack manufacturing requirements or corporate gifting campaign directly with our Bengaluru factory desk at GLOBRANDS LIFESTYLE PVT. LTD.'
  },
  pathways: {
    manufacturing: {
      id: 'manufacturing',
      label: 'Backpack Manufacturing',
      defaultCategory: 'Backpacks & Carrywear',
      categories: [
        { label: 'Laptop Backpacks (17" Padded Sleeve)', value: 'Laptop Backpacks' },
        { label: 'Business Backpacks (Executive Carrywear)', value: 'Business Backpacks' },
        { label: 'Travel Backpacks (38L-40L Rain Cover)', value: 'Travel Backpacks' },
        { label: 'School & College Backpacks', value: 'School & College' },
        { label: 'Customized Brand Backpacks', value: 'Customized Backpacks' }
      ]
    },
    gifting: {
      id: 'gifting',
      label: 'Corporate Gifting',
      defaultCategory: 'Corporate Gift Sets & Welcome Kits',
      categories: [
        { label: 'Employee Welcome Kits & Onboarding', value: 'Employee Welcome Kits' },
        { label: 'Executive Corporate Gift Sets', value: 'Corporate Gift Sets' },
        { label: 'Smart Drinkware & Flasks', value: 'Smart Drinkware' },
        { label: 'Executive Leather Diaries & Folios', value: 'Executive Diaries' }
      ]
    }
  },
  quantitySlabs: [
    { label: '50 – 100 units', value: '50 - 100 units' },
    { label: '100 – 250 units', value: '100 - 250 units' },
    { label: '250 – 500 units', value: '250 - 500 units' },
    { label: '500 – 1,000 units', value: '500 - 1000 units' },
    { label: '1,000+ units (Enterprise Contract)', value: '1000+ units' }
  ]
};

// ============================================================================
// 10. FOOTER CONFIGURATION
// ============================================================================
export const FOOTER_CONFIG = {
  aboutText: "GLOBRANDS LIFESTYLE PVT. LTD. is India's premier direct factory backpack manufacturer. From our Bengaluru production atelier, we engineer, cut, and assemble high-performance carrywear under our registered in-house brands—Ninja Gear Original and ADMA London—backed by our 1-Year Direct Factory Replacement Warranty, alongside turnkey corporate gifting solutions.",
  atelierBadge: {
    title: 'DIRECT FACTORY PRODUCTION ATELIER',
    text: 'Bengaluru Factory • 1-Year Factory Replacement Warranty • 5-Stage QC Audit'
  },
  backpackCollections: [
    { label: 'Laptop Backpacks (17" Padded Sleeve)', href: '/bags?type=laptop' },
    { label: 'Executive Business Backpacks', href: '/bags?type=laptop' },
    { label: 'Travel Backpacks (38L–40L Rain Cover)', href: '/bags?type=waterproof' },
    { label: 'School & College Student Packs', href: '/bags?type=all' },
    { label: 'Casual Everyday Urban Daypacks', href: '/bags?type=all' },
    { label: 'Custom OEM Branding (Tajima Embroidery)', href: '/branding', highlight: true }
  ],
  proprietaryBrands: [
    { label: 'Ninja Gear (Original)', href: '/bags?brand=Ninja+Gear', bold: true },
    { label: 'ADMA London', href: '/bags?brand=ADMA+London', bold: true }
  ],
  secondarySegmentLinks: [
    { label: 'Corporate Gift Sets', href: '/gift-sets' },
    { label: 'Employee Welcome Kits', href: '/solutions' },
    { label: 'About Our Factory', href: '/about' }
  ],
  legalLinks: [
    { label: 'Factory Credentials', href: '/about' },
    { label: 'Terms of Supply', href: '/contact' }
  ]
};
