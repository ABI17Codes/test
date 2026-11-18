export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'gift-sets' | 'bags' | 'drinkware' | 'mugs' | 'diaries' | 'promotional' | 'desktop';
  brand: 'Globrands Lifestyle Pvt. Ltd.' | 'Globrands Lifestyle' | 'Ninja Gear' | 'ADMA London';
  description: string;
  image: string;
  catalogPage: string;
  catalogType: 'bags' | 'gifts';
  pageNumber: number;
  specs: { label: string; value: string }[];
  colors?: { name: string; hex: string }[];
  mrp?: number;
  moq: string;
  composition?: string[];
  tags: string[];
  brandingOptions: string[];
}

export const CATEGORIES = [
  { id: 'all', name: 'All Collections', count: 68 },
  { id: 'bags', name: 'Backpacks & Carrywear (In-House)', count: 32, icon: 'Briefcase' },
  { id: 'gift-sets', name: 'Corporate Gift Sets (Secondary)', count: 18, icon: 'Gift' },
  { id: 'drinkware', name: 'Bottles & Smart Flasks', count: 8, icon: 'Flame' },
  { id: 'mugs', name: 'Coffee Mugs & Tumblers', count: 8, icon: 'Coffee' },
  { id: 'diaries', name: 'Executive Diaries', count: 8, icon: 'BookOpen' },
  { id: 'promotional', name: 'Keychains & Accessories', count: 6, icon: 'Award' },
  { id: 'desktop', name: 'Desk Organizers & Clocks', count: 6, icon: 'Clock' },
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. CORPORATE GIFT SETS (From ALL In One Catalogue)
  // ==========================================
  {
    id: 'hgs-h74',
    code: 'HGS - H74',
    name: 'VIP 5-in-1 Executive Hamper with Wireless Mouse & Tech Kit',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'The ultimate VIP welcome kit featuring a soft-touch magnetic loop diary, ergonomic wireless optical mouse, metallic visiting cardholder, digital temperature display vacuum bottle, and sleek metal ball pen in a luxury black magnetic presentation box.',
    image: '/catalog/crops/hgs_h74.jpg',
    catalogPage: '/catalog/gifts/page_100.jpg',
    catalogType: 'gifts',
    pageNumber: 100,
    mrp: 2999,
    moq: '50 sets',
    composition: [
      'Magnet Loop PU Leather Diary (A5, 192 pgs)',
      'Smart Digital LED Temperature Display Bottle (500ml)',
      'Ergonomic Slim Wireless Optical Mouse',
      'Brushed Metallic Visiting Card Holder',
      'Heavy Metal Executive Ball Pen',
      'Luxury Rigid Foam-Cut Gift Box'
    ],
    specs: [
      { label: 'Set Type', value: '5-in-1 VIP Executive Kit' },
      { label: 'Bottle Spec', value: '304 Double Wall Vacuum Insulated 500ml' },
      { label: 'Diary Refill', value: 'Natural 80 GSM Off-White Paper' },
      { label: 'Packaging', value: 'Custom Fitted Matte Black Gift Box' },
      { label: 'Customization', value: 'Logo Laser Engraving / UV Print' }
    ],
    colors: [
      { name: 'Midnight Black', hex: '#111111' },
      { name: 'Royal Navy', hex: '#1d3557' },
      { name: 'Executive Grey', hex: '#4a4e69' }
    ],
    tags: ['VIP Luxury', 'Bestseller', 'Employee Welcome Kit'],
    brandingOptions: ['Laser Engraving', 'UV Color Print', 'Embossing', 'Custom Box Sleeve']
  },
  {
    id: 'hgs-h71',
    code: 'HGS - H71',
    name: 'Executive 5-in-1 Luxury Travel Hamper',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Sophisticated all-black 5-in-1 executive collection including an insulated vacuum coffee mug, magnetic loop diary, 500ml vacuum flask bottle, metal pen, and zinc alloy keychain in a precision foam tray.',
    image: '/catalog/crops/hgs_h71.jpg',
    catalogPage: '/catalog/gifts/page_099.jpg',
    catalogType: 'gifts',
    pageNumber: 99,
    moq: '50 sets',
    composition: [
      '304 Insulated Vacuum Coffee Mug with Lid',
      '500ml Double Wall Vacuum Flask Water Bottle',
      'Magnet Loop Executive A5 Diary',
      'Heavyweight Metal Ball Pen',
      'Dual Metal Rotating Keychain',
      'Luxury Gift Case'
    ],
    specs: [
      { label: 'Set Type', value: '5-in-1 Complete Travel Set' },
      { label: 'Bottle Grade', value: 'SUS 304 Food Grade Stainless Steel' },
      { label: 'Diary', value: 'PU Leather with Magnetic Clasp' },
      { label: 'Finish', value: 'Matte Powder Coated' }
    ],
    colors: [{ name: 'Matte Black', hex: '#111111' }],
    tags: ['Executive', 'Diwali Gifting', 'Client Appreciation'],
    brandingOptions: ['Laser Engraving', 'Screen Printing', 'Custom Ribbon & Box']
  },
  {
    id: 'hgs-h66',
    code: 'HGS - H66',
    name: 'Eco-Friendly Bamboo 4-in-1 Sustainable Hamper',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Eco-conscious corporate gifting solution featuring natural bamboo casing: 500ml vacuum flask bottle, sustainable bamboo hardbound notebook, natural bamboo pen, and polished metal-wood keychain.',
    image: '/catalog/crops/hgs_h66.jpg',
    catalogPage: '/catalog/gifts/page_096.jpg',
    catalogType: 'gifts',
    pageNumber: 96,
    moq: '50 sets',
    composition: [
      '500ml Natural Bamboo Vacuum Flask (304 Steel)',
      'Natural Bamboo Hardbound A5 Diary',
      'Natural Bamboo Metal Ball Pen',
      'Dual-Tone Metal Bamboo Keychain',
      'Eco-Kraft / Charcoal Gift Packaging'
    ],
    specs: [
      { label: 'Set Type', value: '4-in-1 Sustainable Bamboo Set' },
      { label: 'Material', value: '100% Genuine Moso Bamboo + 304 Steel' },
      { label: 'Insulation', value: 'Hot & Cold 12-18 Hours' },
      { label: 'Eco Impact', value: 'Zero Plastic Exterior' }
    ],
    colors: [{ name: 'Natural Bamboo', hex: '#d4b278' }],
    tags: ['Sustainable', 'Eco-Friendly', 'Popular Choice'],
    brandingOptions: ['Laser Engraving', 'Screen Printing']
  },
  {
    id: 'hgs-h67',
    code: 'HGS - H67',
    name: 'Bamboo 5-in-1 Complete Eco Office Set',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Our most comprehensive eco-friendly gift set. Features a real bamboo coffee mug with handle, 450ml bamboo vacuum flask, bamboo diary, stylus bamboo pen, and keychain in an elegant presentation case.',
    image: '/catalog/crops/hgs_h67.jpg',
    catalogPage: '/catalog/gifts/page_097.jpg',
    catalogType: 'gifts',
    pageNumber: 97,
    moq: '50 sets',
    composition: [
      'Bamboo Coffee Mug with Insulated Steel Liner',
      '450ml Bamboo Thermos Vacuum Flask',
      'A5 Hardbound Natural Bamboo Diary',
      'Eco Bamboo Ball Pen',
      'Bamboo Metal Keychain'
    ],
    specs: [
      { label: 'Set Type', value: '5-in-1 Premium Eco Hamper' },
      { label: 'Mug Spec', value: 'Stainless Steel Inner 304 with Bamboo Shell' },
      { label: 'Flask Cap', value: '450 ml Hot & Cold' }
    ],
    colors: [{ name: 'Natural Bamboo', hex: '#cda869' }],
    tags: ['Eco-Friendly', 'Executive Hampers'],
    brandingOptions: ['Laser Engraving']
  },
  {
    id: 'hgs-h36',
    code: 'HGS - H36',
    name: 'Signature 4-in-1 Gift Set with 750ml Stainless Steel Bottle',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'A classic corporate best-seller. Includes a rich tan brown magnetic flap diary, 750ml stainless steel water bottle, heavy metal ball pen, and matching leather-metal keychain.',
    image: '/catalog/crops/hgs_h36.jpg',
    catalogPage: '/catalog/gifts/page_081.jpg',
    catalogType: 'gifts',
    pageNumber: 81,
    moq: '100 sets',
    composition: [
      'Magnet Flap A5 Diary (192 pages)',
      '750ml Stainless Steel 304 Water Bottle',
      'Executive Metal Ball Pen',
      'Matching Metal Leather Keychain',
      'Custom Fitted Gift Box'
    ],
    specs: [
      { label: 'Set Type', value: '4-in-1 Corporate Set' },
      { label: 'Bottle Capacity', value: '750 ml Stainless Steel' },
      { label: 'Diary Finish', value: 'Premium PU Leather with Magnet Flap' }
    ],
    colors: [
      { name: 'Tan Brown', hex: '#9c5b2a' },
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Corporate Blue', hex: '#1b3b6f' },
      { name: 'Slate Grey', hex: '#6c757d' }
    ],
    tags: ['Bestseller', 'Corporate Classic'],
    brandingOptions: ['Laser Engraving', 'Screen Printing', 'Debossing']
  },
  {
    id: 'hgs-h55',
    code: 'HGS - H55',
    name: 'Smart 4-in-1 Gift Set with Digital Temperature Bottle',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Modern corporate gift box with touch-activated smart LED temperature display vacuum flask (500ml), elastic strap notebook, executive metal pen, and keychain in vibrant Crimson Red.',
    image: '/catalog/crops/hgs_h55.jpg',
    catalogPage: '/catalog/gifts/page_091.jpg',
    catalogType: 'gifts',
    pageNumber: 91,
    moq: '50 sets',
    composition: [
      '500ml Smart LED Temperature Vacuum Flask',
      'Elastic Strap A5 PU Notebook',
      'Heavy Metal Ball Pen with Chrome Clip',
      'Metal Keychain with Leather Accent',
      'Custom Foam Display Box'
    ],
    specs: [
      { label: 'Display', value: 'Touch LED Waterproof Temperature Cap' },
      { label: 'Bottle', value: 'Double Wall 304 Stainless Steel' },
      { label: 'Battery Life', value: '500+ Days Battery Standby' }
    ],
    colors: [
      { name: 'Crimson Red', hex: '#b7094c' },
      { name: 'Royal Blue', hex: '#1d3557' },
      { name: 'Obsidian Black', hex: '#1a1a1a' }
    ],
    tags: ['Smart Tech', 'Modern'],
    brandingOptions: ['Laser Engraving', 'UV Print']
  },
  {
    id: 'hgs-h03',
    code: 'HGS - H03',
    name: 'Classic 3-in-1 Executive Desk Gift Set',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Clean and timeless 3-in-1 set including a magnetic flap PU leather diary, high-precision metal writing pen, and matching leather-strap metal keychain in rich Saddle Brown.',
    image: '/catalog/crops/hgs_h03.jpg',
    catalogPage: '/catalog/gifts/page_064.jpg',
    catalogType: 'gifts',
    pageNumber: 64,
    moq: '100 sets',
    composition: [
      'A5 Magnet Flap Diary (192 Natural Pages)',
      'Metal Twist Ball Pen',
      'Metal Keychain with PU Accent',
      'Rigid Black Tray Gift Box'
    ],
    specs: [
      { label: 'Set Type', value: '3-in-1 Starter Kit' },
      { label: 'Diary Size', value: 'A5 Standard 14.8 x 21 cm' },
      { label: 'Paper', value: '80 GSM Natural Off-white' }
    ],
    colors: [
      { name: 'Saddle Brown', hex: '#7f4f24' },
      { name: 'Ash Grey', hex: '#778da9' },
      { name: 'Charcoal Black', hex: '#212529' },
      { name: 'Sky Blue', hex: '#48cae4' }
    ],
    tags: ['Value For Money', 'High Volume'],
    brandingOptions: ['Laser Engraving', 'Embossing', 'Screen Printing']
  },
  {
    id: 'hgs-h84',
    code: 'HGS - H84',
    name: 'Stylus Pen & Heavy Metal Keychain 2-in-1 Duo',
    category: 'gift-sets',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Sleek pocket-friendly promotional gift set. Features a dual-function metal ball pen with capacitive touch stylus and a heavy-duty chrome-leatherette keychain in a compact gift case.',
    image: '/catalog/crops/hgs_h84.jpg',
    catalogPage: '/catalog/gifts/page_105.jpg',
    catalogType: 'gifts',
    pageNumber: 105,
    moq: '150 sets',
    composition: [
      'Metal Ball Pen with Touchscreen Stylus Tip',
      'Heavy Duty Zinc Alloy Keychain with Leather Loop',
      'Compact Presentation Box'
    ],
    specs: [
      { label: 'Pen Tip', value: '0.7mm German Ink Ball Pen + Stylus' },
      { label: 'Material', value: 'Aircraft Grade Aluminum & Zinc Alloy' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Silver Chrome', hex: '#ced4da' },
      { name: 'Electric Blue', hex: '#0077b6' },
      { name: 'Ruby Red', hex: '#c1121f' }
    ],
    tags: ['Event Giveaway', 'Conference Kit'],
    brandingOptions: ['Laser Engraving']
  },

  // ==========================================
  // 2. CORPORATE BAGS & BACKPACKS (Globrands Lifestyle Pvt. Ltd. Bag Catalogue)
  // 100% In-House Factory Manufactured &bull; Ninja Gear &bull; ADMA London
  // 1-Year Direct Factory Replacement Warranty
  {
    id: 'bg-inspire',
    code: 'BG-INSPIRE',
    name: 'Ninja Gear INSPIRE Professional Laptop Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Clean, minimalist corporate backpack engineered for modern executives. Features dedicated 17-inch laptop compartment, multilevel stationery organizer, concealed internal water bottle pouch, and breathable honeycomb back mesh.',
    image: '/catalog/backpacks-studio/bg-inspire.png',
    catalogPage: '/catalog/bags/page_04.jpg',
    catalogType: 'bags',
    pageNumber: 4,
    mrp: 2499,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '25 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 42cm | W: 31cm | D: 19cm'
      },
      {
            'label': 'Laptop Holder',
            'value': '17-Inch Padded Protective Sleeve'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments with Multilevel Organizer'
      },
      {
            'label': 'Bottle Holder',
            'value': 'Internal Dedicated Water Bottle Pouch'
      },
      {
            'label': 'Ergonomics',
            'value': 'Breathable Honeycomb Back Mesh, Padded Straps'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      },
      {
            'label': 'Origin',
            'value': 'Manufactured by Globrands Lifestyle Pvt. Ltd.'
      }
],
    colors: [
      {
            'name': 'Stealth Black',
            'hex': '#111111'
      }
],
    tags: ['Executive Choice', 'Minimalist', '17\' Laptop', 'In-House Factory'],
    brandingOptions: ['High-Density Screen Printing', 'Embroidered Patch', 'Laser Engraved Metal Plaque']
  },
  {
    id: 'bg-boxer',
    code: 'BG-BOXER',
    name: 'Ninja Gear BOXER Antitheft Laptop Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Flagship anti-theft corporate backpack with concealed rear zippers, integrated external USB fast-charging port, 17-inch padded laptop holder, multi-tier organizer, and ergonomic breathable lumbar mesh.',
    image: '/catalog/backpacks-studio/bg-boxer.png',
    catalogPage: '/catalog/bags/page_05.jpg',
    catalogType: 'bags',
    pageNumber: 5,
    mrp: 2999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '28 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 44cm | W: 32cm | D: 19cm'
      },
      {
            'label': 'Laptop Holder',
            'value': 'Up to 17-Inch Dedicated Sleeve'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Main & Organizer Compartments'
      },
      {
            'label': 'Special Features',
            'value': 'Concealed Antitheft Zipper Design, External USB Fast-Charging Port'
      },
      {
            'label': 'Ergonomics',
            'value': 'Breathable Honeycomb Back Mesh, Contour Padded Straps'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      },
      {
            'label': 'Origin',
            'value': 'Manufactured by Globrands Lifestyle Pvt. Ltd.'
      }
],
    colors: [
      {
            'name': 'Executive Black',
            'hex': '#111111'
      }
],
    tags: ['Antitheft', 'USB Charging', '17\' Laptop', 'Flagship Bestseller'],
    brandingOptions: ['High-Density Screen Printing', 'Rubber Patch', 'Metal Badge', 'Heat Transfer']
  },
  {
    id: 'bg-aviator',
    code: 'BG-AVIATOR',
    name: 'Ninja Gear AVIATOR Heavy-Duty Executive Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Top-tier executive commuter bag with reinforced flap top, built-in USB port, 2+1 heavy-duty compartments, internal bottle pouch, and extra cushioned shoulder harness for daily enterprise professionals.',
    image: '/catalog/backpacks-studio/bg-aviator.png',
    catalogPage: '/catalog/bags/page_06.jpg',
    catalogType: 'bags',
    pageNumber: 6,
    mrp: 3999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '24 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 44cm | W: 30cm | D: 18cm'
      },
      {
            'label': 'Compartments',
            'value': '2 + 1 Compartments with Flap Cover'
      },
      {
            'label': 'Features',
            'value': 'USB Charging Port, Internal Bottle Pouch, Organizer'
      },
      {
            'label': 'Laptop Fit',
            'value': '17 Inch Laptop Protective Holder'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Jet Black with Cognac Trim',
            'hex': '#1b1b1b'
      }
],
    tags: ['Luxury Executive', 'Heavy-Duty', '17\' Laptop'],
    brandingOptions: ['Screen Printing', 'Metal Badge', 'Embossed Leather Patch']
  },
  {
    id: 'bg-smart',
    code: 'BG-SMART',
    name: 'ADMA London SMART High-Value Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'The smart corporate choice for bulk company onboarding. 26L capacity, dedicated 17-inch laptop sleeve, padded shoulder straps, and 100% durable water-repellent polyester at an unbeatable factory price point.',
    image: '/catalog/backpacks-studio/bg-smart.png',
    catalogPage: '/catalog/bags/page_07.jpg',
    catalogType: 'bags',
    pageNumber: 7,
    mrp: 999,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '26 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 50cm | W: 36cm | D: 14cm'
      },
      {
            'label': 'Laptop Holder',
            'value': '17 Inch Dedicated Laptop Holder'
      },
      {
            'label': 'Material',
            'value': '100% Durable Water-Repellent Polyester'
      },
      {
            'label': 'Features',
            'value': 'Padded Shoulder Strap, Water Bottle Pouch, 1+1 Compartments'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Dual Black / Denim Blue Accent',
            'hex': '#2b2d42'
      }
],
    tags: ['Budget Champion', 'Employee Onboarding', 'Under \u20b91000', 'Volume Value'],
    brandingOptions: ['Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-nexa',
    code: 'BG-NEXA',
    name: 'ADMA London NEXA Urban Laptop Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Contemporary two-compartment corporate backpack designed for everyday urban transit. Features padded 17-inch laptop compartment, ergonomic mesh padding, and reinforced top handle.',
    image: '/catalog/backpacks-studio/bg-nexa.png',
    catalogPage: '/catalog/bags/page_08.jpg',
    catalogType: 'bags',
    pageNumber: 8,
    mrp: 1599,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '26 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 45cm | W: 32cm | D: 16cm'
      },
      {
            'label': 'Compartments',
            'value': 'Two Full Main Compartments'
      },
      {
            'label': 'Laptop Holder',
            'value': '17 Inch Dedicated Laptop Holder'
      },
      {
            'label': 'Ergonomics',
            'value': 'Padded Shoulder Straps & Breathable Back Mesh'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Graphite Grey & Blue',
            'hex': '#4a5568'
      }
],
    tags: ['Urban Transit', 'Two Compartments', '17\' Laptop'],
    brandingOptions: ['High-Density Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-essential',
    code: 'BG-ESSENTIAL',
    name: 'Ninja Gear ESSENTIAL Everyday Laptop Pack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Streamlined, resilient corporate pack engineered for high-usage environments. Features 1+1 compartment layout, 17-inch padded sleeve, external bottle pouch, and reinforced bar-tacked stress points.',
    image: '/catalog/backpacks-studio/bg-essential.png',
    catalogPage: '/catalog/bags/page_09.jpg',
    catalogType: 'bags',
    pageNumber: 9,
    mrp: 1499,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '24 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 43cm | W: 31cm | D: 15cm'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments with Stationer Organizer'
      },
      {
            'label': 'Laptop Holder',
            'value': '17 Inch Padded Laptop Holder'
      },
      {
            'label': 'Ergonomics',
            'value': 'Breathable Lumbar Mesh & Padded Harness'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Stealth Black',
            'hex': '#111111'
      }
],
    tags: ['Everyday Pack', 'Reinforced Bar-Tacking', 'High Durability'],
    brandingOptions: ['Screen Printing', 'Embroidered Badge']
  },
  {
    id: 'bg-jio',
    code: 'BG-JIO',
    name: 'ADMA London JIO Sleek Commuter Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Sleek aerodynamic laptop backpack built for IT executives and daily metro commuters. Offers lightweight mobility, 17-inch laptop protection, and clean modern aesthetic.',
    image: '/catalog/backpacks-studio/bg-jio.png',
    catalogPage: '/catalog/bags/page_10.jpg',
    catalogType: 'bags',
    pageNumber: 10,
    mrp: 1699,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '25 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 44cm | W: 31cm | D: 16cm'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Shockproof Laptop Padded Sleeve'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Features',
            'value': 'Breathable Back Mesh, Bottle Pouch, Padded Straps'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Deep Charcoal / Neon Accent',
            'hex': '#2d3748'
      }
],
    tags: ['Aerodynamic', 'IT Executive', '17\' Laptop'],
    brandingOptions: ['Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-jio-2',
    code: 'BG-JIO-2',
    name: 'ADMA London JIO 2.0 Dual Compartment Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Enhanced 28L upgrade to the JIO series with 2+1 full compartments, enhanced dual water bottle pockets, reinforced haul strap, and thick honeycomb padding for maximum back support.',
    image: '/catalog/backpacks-studio/bg-jio-2.png',
    catalogPage: '/catalog/bags/page_11.jpg',
    catalogType: 'bags',
    pageNumber: 11,
    mrp: 1899,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '28 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 46cm | W: 33cm | D: 18cm'
      },
      {
            'label': 'Compartments',
            'value': '2 + 1 Full-Depth Compartments'
      },
      {
            'label': 'Laptop Protection',
            'value': '17 Inch Padded Compartment'
      },
      {
            'label': 'Back Mesh',
            'value': 'High-Airflow Honeycomb Mesh'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Dual Navy & Slate',
            'hex': '#1a365d'
      }
],
    tags: ['Dual Compartment', '28L Volume', 'Airflow Mesh'],
    brandingOptions: ['Screen Printing', 'Rubber Patch', 'Metal Plaque']
  },
  {
    id: 'bg-vip',
    code: 'BG-VIP',
    name: 'ADMA London VIP Corporate Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Executive class backpack designed for senior leadership and conference attendees. Features textured premium twill weave, 17-inch laptop compartment, and gold/silver accent hardware.',
    image: '/catalog/backpacks-studio/bg-vip.png',
    catalogPage: '/catalog/bags/page_12.jpg',
    catalogType: 'bags',
    pageNumber: 12,
    mrp: 1999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '28 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 45cm | W: 32cm | D: 17cm'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Dedicated Sleeve'
      },
      {
            'label': 'Compartments',
            'value': 'Dual Main Compartments + Stationery Suite'
      },
      {
            'label': 'Fabric',
            'value': 'Textured High-Density Poly-Twill'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Obsidian Black',
            'hex': '#111111'
      }
],
    tags: ['VIP Series', 'Executive Twill', 'Leadership Gifting'],
    brandingOptions: ['Laser Engraved Metal Plaque', 'Screen Printing', 'Embossed Patch']
  },
  {
    id: 'bg-vip-2',
    code: 'BG-VIP-2',
    name: 'ADMA London VIP 2.0 Executive Laptop Pack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Top-tier 32L executive powerhouse with 3+1 cavernous compartments, multi-level file dividers, 17-inch laptop cradle, and ergonomic weight-distribution harness.',
    image: '/catalog/backpacks-studio/bg-vip-2.png',
    catalogPage: '/catalog/bags/page_13.jpg',
    catalogType: 'bags',
    pageNumber: 13,
    mrp: 2299,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '32 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 48cm | W: 33cm | D: 20cm'
      },
      {
            'label': 'Compartments',
            'value': '3 + 1 Full Depth Compartments'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Suspended Padded Sleeve'
      },
      {
            'label': 'Ergonomics',
            'value': 'Padded Shoulder Strap & Lumbar Air-Mesh'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Midnight Charcoal',
            'hex': '#1a202c'
      }
],
    tags: ['VIP 2.0', '32L Executive', '3+1 Compartments'],
    brandingOptions: ['Metal Badge', 'Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-classic',
    code: 'BG-CLASSIC',
    name: 'ADMA London CLASSIC Business Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Timeless corporate backpack featuring 1+1 compartments, inside water bottle pouch for clean external silhouette, dedicated 17-inch laptop holder, and breathable back mesh.',
    image: '/catalog/backpacks-studio/bg-classic.png',
    catalogPage: '/catalog/bags/page_14.jpg',
    catalogType: 'bags',
    pageNumber: 14,
    mrp: 1999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '27 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 45cm | W: 32cm | D: 18cm'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Laptop Holder'
      },
      {
            'label': 'Bottle Pouch',
            'value': 'Internal Dedicated Concealed Bottle Pouch'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Classic Black',
            'hex': '#111111'
      }
],
    tags: ['Timeless Design', 'Concealed Bottle Pouch', '17\' Laptop'],
    brandingOptions: ['Screen Printing', 'Embroidered Patch', 'Metal Plaque']
  },
  {
    id: 'bg-volvo-1',
    code: 'BG-VOLVO-1',
    name: 'ADMA London VOLVO 40L Jumbo Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Our high-capacity 40L executive backpack built for multi-day business trips. Features 3 cavernous main compartments, multi-pocket stationery organizer, 17-inch laptop sleeve, and reinforced haul handle.',
    image: '/catalog/backpacks-studio/bg-volvo-1.png',
    catalogPage: '/catalog/bags/page_15.jpg',
    catalogType: 'bags',
    pageNumber: 15,
    mrp: 2499,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '40 Liters (Jumbo Volume)'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 49cm | W: 34cm | D: 23cm'
      },
      {
            'label': 'Compartments',
            'value': 'Three Full Main Compartments + Organizer'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Laptop Dedicated Protective Sleeve'
      },
      {
            'label': 'Features',
            'value': 'Dual Bottle Pockets, Padded Straps, Heavy Haul Handle'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Deep Black',
            'hex': '#111111'
      }
],
    tags: ['40L Jumbo', 'Business Trips', 'Three Compartments', 'High Capacity'],
    brandingOptions: ['Screen Printing', 'Custom Zipper Pulls', 'Metal Badge']
  },
  {
    id: 'bg-volvo-2',
    code: 'BG-VOLVO-2',
    name: 'ADMA London VOLVO 2.0 with Integrated Rain Cover',
    category: 'bags',
    brand: 'ADMA London',
    description: 'High-capacity 38L travel & office backpack equipped with an all-weather deployable high-viz rain cover, 3 full-size compartments, 17-inch laptop sleeve, and airflow ventilation system.',
    image: '/catalog/backpacks-studio/bg-volvo-2.png',
    catalogPage: '/catalog/bags/page_16.jpg',
    catalogType: 'bags',
    pageNumber: 16,
    mrp: 2799,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '38 Liters (Spacious Travel / Office)'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 50cm | W: 34cm | D: 22cm'
      },
      {
            'label': 'Weather Protection',
            'value': 'Built-in High-Viz Waterproof Rain Cover'
      },
      {
            'label': 'Compartments',
            'value': '3 Full Compartments + Multilevel Organizer'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Padded Protection'
      },
      {
            'label': 'Material',
            'value': 'Heavy Duty 100% Water-Repellent Polyester'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Midnight Charcoal',
            'hex': '#2b2d42'
      }
],
    tags: ['Rain Cover Included', '38L High Capacity', 'All-Weather', 'Travel & Work'],
    brandingOptions: ['Screen Printing', 'Heat Transfer Logo', 'Rubber Logo Badge']
  },
  {
    id: 'bg-businessman',
    code: 'BG-BIZ-1',
    name: 'Ninja Gear BUSINESS MAN Executive Briefcase Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Lightweight convertible executive bag that switches seamlessly between professional briefcase and backpack. Equipped with dedicated laptop holder, detachable shoulder strap, and quality smooth-glide zippers.',
    image: '/catalog/backpacks-studio/bg-businessman.png',
    catalogPage: '/catalog/bags/page_17.jpg',
    catalogType: 'bags',
    pageNumber: 17,
    mrp: 1699,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 42cm | W: 32cm | D: 12cm'
      },
      {
            'label': 'Style',
            'value': 'Convertible Briefcase Backpack'
      },
      {
            'label': 'Features',
            'value': 'Lightweight Construction, Detachable Shoulder Strap'
      },
      {
            'label': 'Laptop Holder',
            'value': 'Dedicated Padded Laptop Section'
      },
      {
            'label': 'Zippers',
            'value': 'Heavy-Duty Smooth Gliding Hardware'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Executive Slate',
            'hex': '#334155'
      }
],
    tags: ['Convertible Briefcase', 'Lightweight', 'Executive Chic'],
    brandingOptions: ['Screen Printing', 'Metal Badge', 'Heat Transfer']
  },
  {
    id: 'bg-businessman-2',
    code: 'BG-BIZ-2',
    name: 'ADMA London BUSINESS MAN 2.0 Executive Messenger Bag',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Ultra-sleek lightweight executive briefcase with detachable padded sling, premium cross-body strap, reinforced hardware hooks, and multi-tier tech organizers in stylish heather grey.',
    image: '/catalog/backpacks-studio/bg-businessman-2.png',
    catalogPage: '/catalog/bags/page_18.jpg',
    catalogType: 'bags',
    pageNumber: 18,
    mrp: 1799,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 33cm | W: 42cm | D: 8cm'
      },
      {
            'label': 'Style',
            'value': 'Executive Laptop Briefcase / Crossbody Sling'
      },
      {
            'label': 'Hardware',
            'value': 'Heavy Duty Metal Snap Hooks & Quality Zippers'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Padded Laptop Section & Document Folder'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Heather Grey',
            'hex': '#8d99ae'
      },
      {
            'name': 'Navy Blue',
            'hex': '#1d3557'
      }
],
    tags: ['Executive Briefcase', 'Lightweight', 'Crossbody', 'Bestseller'],
    brandingOptions: ['Screen Printing', 'Laser Engraved Metal Plaque']
  },
  {
    id: 'bg-soft-edge',
    code: 'BG-SOFT-EDGE',
    name: 'Ninja Gear SOFT EDGE Executive Bag',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Modern rounded executive daypack engineered with soft-edge contours, lightweight durable shell, dedicated laptop holder, and quick-access front tech pocket.',
    image: '/catalog/backpacks-studio/bg-soft-edge.png',
    catalogPage: '/catalog/bags/page_19.jpg',
    catalogType: 'bags',
    pageNumber: 19,
    mrp: 1499,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 43cm | W: 31cm | D: 14cm'
      },
      {
            'label': 'Weight',
            'value': 'Ultralight Ergonomic Build'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments with Quick Access'
      },
      {
            'label': 'Laptop Protection',
            'value': 'Padded Laptop Cradle'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Midnight Grey',
            'hex': '#1f2937'
      }
],
    tags: ['Soft Edge', 'Ultralight', 'Quick Access'],
    brandingOptions: ['Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-alone-sleeve',
    code: 'BG-ALONE',
    name: 'ADMA London ALONE Padded Laptop Sleeve',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Slim, high-density protective laptop sleeve crafted in 100% durable polyester with soft microfiber interior to protect 15.6" and 17" corporate laptops from drops and scratches.',
    image: '/catalog/backpacks-studio/bg-alone-sleeve.png',
    catalogPage: '/catalog/bags/page_20.jpg',
    catalogType: 'bags',
    pageNumber: 20,
    mrp: 799,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 30cm | W: 40cm'
      },
      {
            'label': 'Compatibility',
            'value': 'Fits up to 17-Inch Laptops'
      },
      {
            'label': 'Material',
            'value': '100% Water-Resistant Polyester with Soft Padding'
      },
      {
            'label': 'Zippers',
            'value': 'Dual Smooth-Glide Quality Zippers'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Heather Charcoal',
            'hex': '#374151'
      }
],
    tags: ['Laptop Sleeve', '17\' Laptop', 'Lightweight Cushioning'],
    brandingOptions: ['Screen Printing', 'Embossed Leather Tag']
  },
  {
    id: 'bg-duffle-bag',
    code: 'BG-DUFFLE',
    name: 'Ninja Gear DUFFLE 35L Multi-Pocket Gym Bag',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Rugged yet lightweight 35L overnighter and gym duffle bag with dedicated pocket for toiletries and shoes, adjustable padded shoulder strap, and reinforced dual handgrips.',
    image: '/catalog/backpacks-studio/bg-duffle-bag.png',
    catalogPage: '/catalog/bags/page_21.jpg',
    catalogType: 'bags',
    pageNumber: 21,
    mrp: 1099,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '35 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 25cm | W: 46cm | D: 26cm'
      },
      {
            'label': 'Pockets',
            'value': 'Overnighter Compartment + Dedicated Pocket for Toiletries'
      },
      {
            'label': 'Straps',
            'value': 'Adjustable Padded Shoulder Strap & Top Handles'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'All-Black Sport',
            'hex': '#111111'
      }
],
    tags: ['Gym & Travel', '35L Duffle', 'Overnighter'],
    brandingOptions: ['Screen Printing', 'Embroidery']
  },
  {
    id: 'bg-duffle-shine',
    code: 'BG-DUFFLE-SHINE',
    name: 'Ninja Gear SHINE 40L Overnighter Duffle Bag',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Sporty overnighter duffle with high-visibility contrast zipper accents, dedicated quick-access toiletry pocket, reinforced grab handles, and adjustable shoulder strap for active corporate teams.',
    image: '/catalog/backpacks-studio/bg-duffle-shine.png',
    catalogPage: '/catalog/bags/page_22.jpg',
    catalogType: 'bags',
    pageNumber: 22,
    mrp: 1099,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '40 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 26cm | W: 48cm | D: 28cm'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Main + Quick Access Front Pockets'
      },
      {
            'label': 'Utility',
            'value': 'Dedicated Pocket for Toiletries & Shoes'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Navy with Tangerine Trim',
            'hex': '#1e3d59'
      }
],
    tags: ['Overnighter', 'Gym & Travel', 'Sporty', '40L Volume'],
    brandingOptions: ['Screen Printing', 'Embroidery']
  },
  {
    id: 'bg-royal-duffle',
    code: 'BG-ROYAL-DUFFLE',
    name: 'ADMA London ROYAL 50L Duffle Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Versatile hybrid duffle that doubles as a travel backpack. Huge 50L volume, sea-green & black dual-tone aesthetic, shoe/toiletry compartment, and detachable shoulder sling.',
    image: '/catalog/backpacks-studio/bg-royal-duffle.png',
    catalogPage: '/catalog/bags/page_23.jpg',
    catalogType: 'bags',
    pageNumber: 23,
    mrp: 1899,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '50 Liters Jumbo'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 32cm | W: 57cm | D: 27cm'
      },
      {
            'label': 'Compartments',
            'value': '1 + 2 Compartments with Side Pockets'
      },
      {
            'label': 'Utility',
            'value': 'Overnighter Compartment + Toiletry Section'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Mint Teal & Jet Black',
            'hex': '#52b788'
      }
],
    tags: ['50L Jumbo Duffle', 'Convertible', 'Travel Backpack'],
    brandingOptions: ['Screen Printing']
  },
  {
    id: 'bg-ashwa',
    code: 'BG-ASHWA',
    name: 'ADMA London ASHWA Multipurpose Gym & Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'The ultimate hybrid bag for modern work-life balance. Features an isolated bottom shoe sack, dual laptop & iPad compartment, cylindrical sports-pack silhouette, and side bottle mesh.',
    image: '/catalog/backpacks-studio/bg-ashwa.png',
    catalogPage: '/catalog/bags/page_24.jpg',
    catalogType: 'bags',
    pageNumber: 24,
    mrp: 2999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '30 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 44cm | W: 28cm | D: 21cm'
      },
      {
            'label': 'Dedicated Shoe Sack',
            'value': 'Isolated Ventilated Shoe Compartment'
      },
      {
            'label': 'Device Sleeves',
            'value': '17 Inch Laptop & iPad Dedicated Holder'
      },
      {
            'label': 'Compartments',
            'value': '1 + 2 Compartments with Mesh Bottle Pocket'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Stealth Black',
            'hex': '#111111'
      }
],
    tags: ['Shoe Compartment', 'Gym to Office', 'Hybrid Bestseller'],
    brandingOptions: ['Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-gymbag',
    code: 'BG-GYMBAG',
    name: 'ADMA London GYMBAG Sports Edition Bag',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Dynamic cylindrical sports edition bag with integrated shoe sack, lightweight construction, heavy duty quality zippers, and adjustable shoulder strap for corporate fitness initiatives.',
    image: '/catalog/backpacks-studio/bg-gymbag.png',
    catalogPage: '/catalog/bags/page_25.jpg',
    catalogType: 'bags',
    pageNumber: 25,
    mrp: 1299,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 26cm | W: 46cm | D: 24cm'
      },
      {
            'label': 'Shoe Sack',
            'value': 'Integrated Ventilated Shoe Compartment'
      },
      {
            'label': 'Weight',
            'value': 'Lightweight High-Tensile Polyester'
      },
      {
            'label': 'Hardware',
            'value': 'Smooth Quality Zippers & Reinforced Clips'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Cobalt Blue & Slate',
            'hex': '#2563eb'
      }
],
    tags: ['Sports Edition', 'Shoe Sack', 'Fitness Gifting'],
    brandingOptions: ['Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-ninja-sling',
    code: 'BG-NINJA-SLING',
    name: 'Ninja Gear NINJA Crossbody Sling',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Ergonomic single-strap commuter sling bag with quick-access zippered compartment, quality hardware, and reversible strap clip for right or left shoulder carry.',
    image: '/catalog/backpacks-studio/bg-ninja-sling.png',
    catalogPage: '/catalog/bags/page_26.jpg',
    catalogType: 'bags',
    pageNumber: 26,
    mrp: 899,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 36cm | W: 20cm | D: 7cm'
      },
      {
            'label': 'Compartment',
            'value': 'Quick Access Multi-Pocket Compartment'
      },
      {
            'label': 'Zippers',
            'value': 'Heavy-Duty Quality Zippers'
      },
      {
            'label': 'Strap',
            'value': 'Adjustable Reversible Crossbody Webbing'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Stealth Black',
            'hex': '#111111'
      }
],
    tags: ['Crossbody Sling', 'Commuter Pouch', 'Quick Access'],
    brandingOptions: ['Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-eno-sling',
    code: 'BG-ENO-SLING',
    name: 'ADMA London ENO Crossbody Sling with Front RFID Pocket',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Compact daily essentials crossbody sling featuring RFID blocking security compartment to safeguard contactless credit cards, water-resistant polyester construction, and adjustable webbing strap.',
    image: '/catalog/backpacks-studio/bg-eno-sling.png',
    catalogPage: '/catalog/bags/page_27.jpg',
    catalogType: 'bags',
    pageNumber: 27,
    mrp: 699,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 30cm | W: 24cm | D: 7cm'
      },
      {
            'label': 'Security',
            'value': 'Front RFID Protected Security Pocket'
      },
      {
            'label': 'Compartments',
            'value': '1 + 3 Multiple Organizing Slots'
      },
      {
            'label': 'Fabric',
            'value': 'Water Resistant 100% Polyester'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Black with Electric Blue Zips',
            'hex': '#0077b6'
      }
],
    tags: ['RFID Blocking', 'Everyday Carry', 'Sling Bag'],
    brandingOptions: ['Screen Printing', 'Rubber Label']
  },
  {
    id: 'bg-partner-sling',
    code: 'BG-PARTNER-SLING',
    name: 'ADMA London PARTNER RFID Travel Pouch',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Minimalist travel neck/crossbody pouch with certified front RFID-blocking passport pocket, water-resistant coating, and 1+1 quick organizer compartments.',
    image: '/catalog/backpacks-studio/bg-partner-sling.png',
    catalogPage: '/catalog/bags/page_28.jpg',
    catalogType: 'bags',
    pageNumber: 28,
    mrp: 599,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 24cm | W: 18cm | D: 5cm'
      },
      {
            'label': 'Security',
            'value': 'Front RFID Blocking Passport Pocket'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Fabric',
            'value': 'Water Resistant Poly-Canvas'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Heather Grey',
            'hex': '#4b5563'
      }
],
    tags: ['RFID Travel Pouch', 'Passport Holder', 'Ultra-Compact'],
    brandingOptions: ['Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-ninja-sleek',
    code: 'BG-NINJA-SLEEK',
    name: 'Ninja Gear NINJA SLEEK Simplistic Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Ultra-lightweight minimalist daypack designed for corporate marathon kits, internal conferences, and campus recruiting. Features 1+1 compartments and comfortable padded shoulder straps.',
    image: '/catalog/backpacks-studio/bg-ninja-sleek.png',
    catalogPage: '/catalog/bags/page_29.jpg',
    catalogType: 'bags',
    pageNumber: 29,
    mrp: 699,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 42cm | W: 25cm | D: 8cm'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Straps',
            'value': 'Padded Ergonomic Shoulder Straps'
      },
      {
            'label': 'Weight',
            'value': 'Ultra-lightweight 280g'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Jet Black',
            'hex': '#111111'
      }
],
    tags: ['Simplistic Pack', 'Campus Kit', 'Event Giveaway', 'Value'],
    brandingOptions: ['High-Density Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-waist-pouch',
    code: 'BG-WAIST',
    name: 'ADMA London WAIST RFID Travel Pouch',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Hands-free waist pouch featuring front RFID-blocking security compartment for cards and currency, heavy-duty snap buckle, and 100% water-resistant polyester shell.',
    image: '/catalog/backpacks-studio/bg-waist-pouch.png',
    catalogPage: '/catalog/bags/page_30.jpg',
    catalogType: 'bags',
    pageNumber: 30,
    mrp: 499,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 14cm | W: 32cm | D: 6cm'
      },
      {
            'label': 'Security',
            'value': 'Front RFID Protected Card Compartment'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Material',
            'value': '100% Water-Resistant Polyester'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Stealth Black',
            'hex': '#111111'
      }
],
    tags: ['Waist Pouch', 'RFID Protected', 'Travel Utility'],
    brandingOptions: ['Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-toiletry-kit',
    code: 'BG-TOILETRY',
    name: 'Ninja Gear TOILETRY KIT Portable Organizer',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Convenient travel washbag and tech organizer with built-in metal hanging hook, 1+2 compartments, wipe-clean water-resistant inner lining, and durable dual zipper pulls.',
    image: '/catalog/backpacks-studio/bg-toiletry-kit.png',
    catalogPage: '/catalog/bags/page_31.jpg',
    catalogType: 'bags',
    pageNumber: 31,
    mrp: 599,
    moq: '100 pcs',
    specs: [
      {
            'label': 'Compartments',
            'value': '1 + 2 Multiple Compartments with Mesh Sections'
      },
      {
            'label': 'Features',
            'value': 'Integrated Swivel Hanging Hook, Easy Portable Handle'
      },
      {
            'label': 'Lining',
            'value': 'Water-Resistant Wipe-Clean Inner Lining'
      },
      {
            'label': 'Hardware',
            'value': 'Smooth-Glide Quality Zippers'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Slate Grey',
            'hex': '#374151'
      }
],
    tags: ['Toiletry Kit', 'Hanging Hook', 'Travel Organizer'],
    brandingOptions: ['Screen Printing', 'Embossed Patch']
  },
  {
    id: 'bg-drawstring',
    code: 'BG-STRINGS',
    name: 'ADMA London STRINGS Premium Drawstring Bag',
    category: 'bags',
    brand: 'ADMA London',
    description: 'High-durability gym and corporate swag cinch pack crafted with reinforced eyelets, thick comfortable dual-draw cords, and water-resistant 210D ripstop polyester.',
    image: '/catalog/backpacks-studio/bg-drawstring.png',
    catalogPage: '/catalog/bags/page_32.jpg',
    catalogType: 'bags',
    pageNumber: 32,
    mrp: 399,
    moq: '150 pcs',
    specs: [
      {
            'label': 'Dimensions',
            'value': 'H: 44cm | W: 35cm'
      },
      {
            'label': 'Cords',
            'value': 'Thick Reinforced Double Drawstrings'
      },
      {
            'label': 'Fabric',
            'value': 'Water-Resistant Ripstop Polyester'
      },
      {
            'label': 'Utility',
            'value': 'Spacious Main Cavity with Large Imprint Area'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Royal Blue',
            'hex': '#1d4ed8'
      }
],
    tags: ['Drawstring Bag', 'Conference Swag', 'Marathon Kit'],
    brandingOptions: ['Screen Printing', 'Heat Transfer']
  },
  {
    id: 'bg-gear-toolkit',
    code: 'BG-GEAR',
    name: 'ADMA London GEAR Heavy-Duty Toolkit Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Industrial heavy-duty technician and engineer toolkit backpack. Built with internal multi-loop tool holder system, reinforced abrasion-resistant base, 1+1 compartments, and lumbar air mesh.',
    image: '/catalog/backpacks-studio/bg-gear-toolkit.png',
    catalogPage: '/catalog/bags/page_33.jpg',
    catalogType: 'bags',
    pageNumber: 33,
    mrp: 2999,
    moq: '50 pcs',
    specs: [
      {
            'label': 'Tool Storage',
            'value': 'Dedicated Tool Holder Straps & Accessory Loops'
      },
      {
            'label': 'Base',
            'value': 'Reinforced Anti-Abrasion Heavy Molded Base'
      },
      {
            'label': 'Compartments',
            'value': '1 + 1 Compartments'
      },
      {
            'label': 'Ergonomics',
            'value': 'Breathable Lumbar Back Mesh & Padded Shoulder Straps'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Tactical Black & Grey',
            'hex': '#1e293b'
      }
],
    tags: ['Toolkit Backpack', 'Industrial Engineer', 'Heavy-Duty'],
    brandingOptions: ['Screen Printing', 'Embroidered Patch', 'Metal Plaque']
  },
  {
    id: 'bg-kamiliant',
    code: 'BG-KAMILIANT',
    name: 'ADMA London KAMILIANT 60L Expedition Rucksack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Rugged 60-liter travel rucksack engineered for corporate trekking clubs, outdoor retreats, and adventure tours. Includes sternum whistle buckle, ergonomic hip belt, and water-repellent shell.',
    image: '/catalog/backpacks-studio/bg-kamiliant.png',
    catalogPage: '/catalog/bags/page_34.jpg',
    catalogType: 'bags',
    pageNumber: 34,
    mrp: 3599,
    moq: '30 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '60 Liters'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 72cm | W: 33cm | D: 22cm'
      },
      {
            'label': 'Harness',
            'value': 'Heavy Duty Hip Belt Support & Whistle Sternum Buckle'
      },
      {
            'label': 'Pockets',
            'value': 'Laptop & Tablet Pouch, Dual Bottle Pockets'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Tactical Olive Green',
            'hex': '#4f5d2f'
      }
],
    tags: ['60L Expedition', 'Corporate Treks', 'Rucksack'],
    brandingOptions: ['Screen Printing', 'Embroidered Patch']
  },
  {
    id: 'bg-mountain',
    code: 'BG-MOUNTAIN',
    name: 'Ninja Gear MOUNTAIN 65L Travel Rucksack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Our highest capacity 65L adventure travel pack. Features internal 17-inch laptop sleeve, load-lifter shoulder harness, padded hip belt with security pockets, and sternum whistle buckle.',
    image: '/catalog/backpacks-studio/bg-mountain.png',
    catalogPage: '/catalog/bags/page_35.jpg',
    catalogType: 'bags',
    pageNumber: 35,
    mrp: 3999,
    moq: '30 pcs',
    specs: [
      {
            'label': 'Capacity',
            'value': '65 Liters (Maximum Volume)'
      },
      {
            'label': 'Dimensions',
            'value': 'H: 75cm | W: 35cm | D: 24cm'
      },
      {
            'label': 'Laptop Sleeve',
            'value': '17 Inch Laptop Dedicated Protective Sleeve'
      },
      {
            'label': 'Support',
            'value': 'Hip Belt Support, Load-Lifter Straps & Whistle Buckle'
      },
      {
            'label': 'Pockets',
            'value': 'Single Vast Main Cavity + Exterior Tech Mesh'
      },
      {
            'label': 'Warranty',
            'value': '1 Year Direct Factory Replacement Warranty'
      }
],
    colors: [
      {
            'name': 'Stealth Charcoal',
            'hex': '#1f2937'
      }
],
    tags: ['65L Maximum Volume', 'Mountain Rucksack', 'Adventure Trekking'],
    brandingOptions: ['Screen Printing', 'Embroidered Badge']
  },

  // 3. DRINKWARE & SMART FLASKS (ALL In One Catalogue)
  // ==========================================
  {
    id: 'bot-h135',
    code: 'HGS - H135',
    name: 'Natural Bamboo 500ml Flask with Digital Temp Display',
    category: 'drinkware',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Eco-luxe thermos wrapped in authentic natural bamboo wood. Features a waterproof touch LED lid that reveals beverage temperature instantly, 6-layer precision vacuum thermal insulation.',
    image: '/catalog/crops/hgs_h135_bamboo_temp.jpg',
    catalogPage: '/catalog/gifts/page_132.jpg',
    catalogType: 'gifts',
    pageNumber: 132,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '500 ml' },
      { label: 'Construction', value: '6-Layer SUS 304 Stainless Steel Inner' },
      { label: 'Casing', value: '100% Real Sustainable Moso Bamboo' },
      { label: 'Smart Feature', value: 'Integrated Touch LED Temperature Sensor' },
      { label: 'Retention', value: 'Hot for 12 Hours, Cold for 24 Hours' }
    ],
    colors: [{ name: 'Natural Moso Bamboo', hex: '#d4b278' }],
    tags: ['Eco-Luxe', 'Smart Temp Display', '304 Steel'],
    brandingOptions: ['Laser Engraving', 'Pad Printing']
  },
  {
    id: 'bot-h125',
    code: 'HGS - H125',
    name: '304 Vacuum Insulated Smart Temp Bottle 500ml',
    category: 'drinkware',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Sleek cylindrical thermos bottle in matte black, cobalt blue, and crimson red with smart touch LCD temperature display on the cap and built-in tea infuser filter.',
    image: '/catalog/crops/hgs_h125_temp_display.jpg',
    catalogPage: '/catalog/gifts/page_127.jpg',
    catalogType: 'gifts',
    pageNumber: 127,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '500 ml' },
      { label: 'Grade', value: 'Food-Grade SUS 304 Stainless Steel' },
      { label: 'Features', value: 'Detachable Tea Infuser Strainer' },
      { label: 'Coating', value: 'Sweat-Proof Matte Powder Coating' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Cobalt Blue', hex: '#023e8a' },
      { name: 'Scarlet Red', hex: '#c1121f' }
    ],
    tags: ['Smart Display', 'Tea Infuser'],
    brandingOptions: ['Laser Engraving', 'Screen Printing', 'UV Print']
  },
  {
    id: 'bot-h117',
    code: 'HGS - H117',
    name: 'Matte 750ml Stainless Steel Flask with Bamboo Lid',
    category: 'drinkware',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Contemporary Scandinavian aesthetic featuring a wide-mouth matte black or white stainless steel bottle topped with a natural bamboo steel-threaded cap and stainless steel carry ring.',
    image: '/catalog/crops/hgs_h117_bamboo.jpg',
    catalogPage: '/catalog/gifts/page_123.jpg',
    catalogType: 'gifts',
    pageNumber: 123,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '750 ml' },
      { label: 'Cap Style', value: 'Natural Bamboo with Steel Handle Ring' },
      { label: 'Material', value: 'SUS 304 Double Wall Vacuum' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Matte White', hex: '#ffffff' }
    ],
    tags: ['Nordic Design', 'Bamboo Lid', 'Large 750ml'],
    brandingOptions: ['Laser Engraving', 'Screen Printing']
  },
  {
    id: 'bot-h101',
    code: 'HGS - H101',
    name: 'Curved Cola 750ml Sports Stainless Steel Bottle',
    category: 'drinkware',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Ergonomic contour-grip stainless steel 750ml sports bottle with carabiner loop hook cap. Built for rugged daily gym, marathon, and office hydration.',
    image: '/catalog/crops/hgs_h101.jpg',
    catalogPage: '/catalog/gifts/page_114.jpg',
    catalogType: 'gifts',
    pageNumber: 114,
    moq: '150 pcs',
    specs: [
      { label: 'Capacity', value: '750 ml' },
      { label: 'Material', value: 'Single Wall High Grade Stainless Steel' },
      { label: 'Cap', value: 'Leakproof Flip Spout with Carabiner Loop' }
    ],
    colors: [
      { name: 'Metallic Blue', hex: '#0077b6' },
      { name: 'Cherry Red', hex: '#d90429' },
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Brushed Silver', hex: '#e5e5e5' }
    ],
    tags: ['Active Sports', 'Carabiner Cap'],
    brandingOptions: ['Laser Engraving', 'Screen Printing']
  },

  // ==========================================
  // 4. COFFEE MUGS & TUMBLERS
  // ==========================================
  {
    id: 'mug-h217',
    code: 'HGS - H217',
    name: 'Ceramic Coffee Desk Mug with Natural Cork Base',
    category: 'mugs',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Artisanal ceramic desk mug featuring an integrated insulating natural cork base that protects table surfaces from heat rings. Comes with sliding splash-proof lid.',
    image: '/catalog/crops/hgs_h217_ceramic_cork.jpg',
    catalogPage: '/catalog/gifts/page_141.jpg',
    catalogType: 'gifts',
    pageNumber: 141,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '350 ml' },
      { label: 'Body', value: 'Premium Food-Safe Ceramic' },
      { label: 'Base', value: 'Integrated Heat-Insulating Natural Cork' },
      { label: 'Lid', value: 'BPA-Free Clear Slider Lid' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#111111' },
      { name: 'Warm Cream White', hex: '#f8f9fa' }
    ],
    tags: ['Natural Cork Base', 'Desk Essential'],
    brandingOptions: ['Screen Printing', 'Laser Engraving on Cork']
  },
  {
    id: 'mug-h206',
    code: 'HGS - H206',
    name: 'Eco-Friendly Bamboo Steel Travel Mug with Handle',
    category: 'mugs',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Distinctive ergonomic desk mug featuring a natural bamboo wood shell, food-grade 304 stainless steel interior liner, sturdy bamboo handle, and locking sipping lid.',
    image: '/catalog/crops/hgs_h206_bamboo_tumbler.jpg',
    catalogPage: '/catalog/gifts/page_135.jpg',
    catalogType: 'gifts',
    pageNumber: 135,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '450 ml' },
      { label: 'Inner', value: 'SUS 304 Food Grade Stainless Steel' },
      { label: 'Outer', value: '100% Genuine Bamboo with Handle' }
    ],
    colors: [{ name: 'Natural Bamboo', hex: '#cda869' }],
    tags: ['Eco Bamboo', 'Ergonomic Handle'],
    brandingOptions: ['Laser Engraving']
  },
  {
    id: 'mug-h211',
    code: 'HGS - H211',
    name: 'Egg-Shaped 304 Vacuum Insulated Wine & Coffee Tumbler',
    category: 'mugs',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Chic curved egg tumbler crafted from double-wall vacuum insulated 304 stainless steel. Keeps iced drinks icy for 9 hours and hot coffee steaming for 3 hours.',
    image: '/catalog/crops/hgs_h203_tumbler.jpg',
    catalogPage: '/catalog/gifts/page_138.jpg',
    catalogType: 'gifts',
    pageNumber: 138,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '350 ml' },
      { label: 'Shape', value: 'Curved Egg Stemless Silhouette' },
      { label: 'Insulation', value: 'Double Wall Vacuum Sealed' }
    ],
    colors: [
      { name: 'Cobalt Navy', hex: '#03045e' },
      { name: 'Pure White', hex: '#ffffff' },
      { name: 'Rose Red', hex: '#a4161a' },
      { name: 'Matte Black', hex: '#111111' }
    ],
    tags: ['Stemless Tumbler', 'Modern Chic'],
    brandingOptions: ['Laser Engraving', 'Screen Printing']
  },

  // ==========================================
  // 5. EXECUTIVE DIARIES & NOTEBOOKS
  // ==========================================
  {
    id: 'dia-no-67',
    code: 'DIARY NO:67',
    name: 'Color-Changer Laser Engraving Executive Notebook',
    category: 'diaries',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Innovative dual-layer thermo-PU notebook. When laser engraved with your corporate logo, the top black layer vaporizes to reveal the vibrant underlying corporate theme color!',
    image: '/catalog/crops/diary_no_67_engrave_changer.jpg',
    catalogPage: '/catalog/gifts/page_041.jpg',
    catalogType: 'gifts',
    pageNumber: 41,
    moq: '100 pcs',
    specs: [
      { label: 'Format', value: 'A5 Size Hardbound' },
      { label: 'Pages', value: '160/192 Natural Off-White 80 GSM Sheets' },
      { label: 'Unique Feature', value: 'Laser Engraving Reveals Inner Color' },
      { label: 'Closure', value: 'Color-Matched Elastic Band & Pen Loop' }
    ],
    colors: [
      { name: 'Orange Core', hex: '#fb8500' },
      { name: 'Cyan Blue Core', hex: '#00b4d8' },
      { name: 'Neon Green Core', hex: '#70e000' },
      { name: 'Sunburst Yellow Core', hex: '#ffb703' }
    ],
    tags: ['Laser Color Reveal', 'High Impact Branding'],
    brandingOptions: ['Laser Engraving (Reveals Color)']
  },
  {
    id: 'dia-no-12',
    code: 'DIARY NO:12',
    name: 'Executive Smartphone Pocket Diary with Pen Slot',
    category: 'diaries',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Designed for high-productivity meetings. Front cover incorporates a dedicated leather pocket for smartphones or business cards, plus a magnetic flap closure.',
    image: '/catalog/crops/diary_no_12_mobile_pocket.jpg',
    catalogPage: '/catalog/gifts/page_011.jpg',
    catalogType: 'gifts',
    pageNumber: 11,
    moq: '100 pcs',
    specs: [
      { label: 'Size', value: 'A5 Standard Notebook' },
      { label: 'Pages', value: '192 Natural Off-White Ruled Pages' },
      { label: 'Front Pocket', value: 'Integrated Mobile Phone / Card Pocket' },
      { label: 'Material', value: 'Textured Jute & PU Leather Finish' }
    ],
    colors: [
      { name: 'Saddle Tan', hex: '#b07d62' },
      { name: 'Slate Grey', hex: '#6c757d' },
      { name: 'Executive Blue', hex: '#1d3557' }
    ],
    tags: ['Mobile Pocket', 'Functional Design'],
    brandingOptions: ['Embossing / Debossing', 'Screen Printing']
  },
  {
    id: 'dia-no-51',
    code: 'DIARY NO:51',
    name: 'Nordic Wood PU Finish Magnetic Clasp Notebook',
    category: 'diaries',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Warm organic aesthetic featuring natural wood grain patterned PU leather cover, polished metal stud closure clasp, and ribbon bookmark.',
    image: '/catalog/crops/diary_no_51_wooden.jpg',
    catalogPage: '/catalog/gifts/page_027.jpg',
    catalogType: 'gifts',
    pageNumber: 27,
    moq: '100 pcs',
    specs: [
      { label: 'Size', value: 'A5 Size' },
      { label: 'Cover Finish', value: 'Natural Wood Texture PU Leather' },
      { label: 'Closure', value: 'Magnetic Clasp with Metal Accent' }
    ],
    colors: [
      { name: 'Teak Wood', hex: '#b5651d' },
      { name: 'Oak Wood', hex: '#d4a373' },
      { name: 'Mahogany', hex: '#582f0e' }
    ],
    tags: ['Wood Grain Finish', 'Natural Aesthetic'],
    brandingOptions: ['Laser Engraving', 'Hot Foil Stamping']
  },

  // ==========================================
  // 6. DESKTOP ORGANIZERS & WOODEN GIFTS
  // ==========================================
  {
    id: 'desk-602',
    code: 'DESK NO:602',
    name: 'Multi-Utility Wooden Desk Organizer with Clock & Calendar',
    category: 'desktop',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Handcrafted solid wood executive desk companion combining an analog quartz clock, rotating perpetual calendar blocks, dual pen slots, and mobile phone docking groove.',
    image: '/catalog/gifts/page_143.jpg',
    catalogPage: '/catalog/gifts/page_143.jpg',
    catalogType: 'gifts',
    pageNumber: 143,
    moq: '100 pcs',
    specs: [
      { label: 'Material', value: 'Seasoned Natural Steam Beech Wood' },
      { label: 'Features', value: 'Analog Quartz Clock, Perpetual Wooden Date Blocks' },
      { label: 'Utility', value: 'Smartphone Stand + Multi Pen Cups' }
    ],
    colors: [{ name: 'Natural Beech Wood', hex: '#d4b278' }],
    tags: ['Perpetual Calendar', 'Analog Clock', 'Wooden Craft'],
    brandingOptions: ['Laser Engraving', 'Metal Plaque']
  },
  {
    id: 'desk-613',
    code: 'DESK NO:613',
    name: 'Architectural Wave Wooden Desk Clock & Pen Stand',
    category: 'desktop',
    brand: 'Globrands Lifestyle Pvt. Ltd.',
    description: 'Sculptural wave dual-tone polished wood desk organizer with embedded gold-rimmed quartz timepiece and business card caddy.',
    image: '/catalog/gifts/page_145.jpg',
    catalogPage: '/catalog/gifts/page_145.jpg',
    catalogType: 'gifts',
    pageNumber: 145,
    moq: '100 pcs',
    specs: [
      { label: 'Style', value: 'Contoured Wave Luxury Desk Stand' },
      { label: 'Components', value: 'Gold Bezel Clock, Card Stand, Pen Slots' }
    ],
    colors: [{ name: 'Dual Natural Beech & Walnut', hex: '#7f5539' }],
    tags: ['Sculptural', 'VIP Desk Gift'],
    brandingOptions: ['Laser Engraving', 'Screen Printing']
  }
];

export const CORPORATE_SOLUTIONS = [
  {
    id: 'welcome-kits',
    title: 'Employee Welcome Kits',
    subtitle: 'Make every new team member feel valued from day one',
    description: 'Custom curated onboarding hampers including high-utility backpacks, personalized A5 diaries, insulated bottles, and engraved metal pens.',
    image: '/catalog/crops/boxer_ninja_gear_main.jpg',
    recommendedProducts: ['HGS - H74', 'BG-BOXER', 'BG-INSPIRE', 'DIARY NO:67'],
    tag: 'HR & Onboarding'
  },
  {
    id: 'client-appreciation',
    title: 'Client Appreciation & VIP Gifting',
    subtitle: 'Nurture key partnerships with memorable executive luxury',
    description: 'Prestigious 5-in-1 executive hampers, high-end bamboo eco-sets, and handcrafted wooden desktop timepieces for top accounts.',
    image: '/catalog/crops/hgs_h74.jpg',
    recommendedProducts: ['HGS - H74', 'HGS - H71', 'HGS - H67', 'DESK NO:602'],
    tag: 'Executive Relations'
  },
  {
    id: 'event-conferences',
    title: 'Corporate Events & Conferences',
    subtitle: 'Turn delegates and attendees into passionate brand advocates',
    description: 'High-volume conference kits featuring RFID sling pouches, touch-stylus metal pens, color-changer notebooks, and stainless bottles.',
    image: '/catalog/crops/eno_sling_adma_london_main.jpg',
    recommendedProducts: ['BG-ENO-SLING', 'HGS - H84', 'DIARY NO:67', 'HGS - H101'],
    tag: 'Events & Summits'
  },
  {
    id: 'promotional-merch',
    title: 'Promotional Brand Merchandise',
    subtitle: 'Keep your logo visible every single day across India',
    description: 'High-visibility lifestyle merchandise from dual-metal rotating keychains to ceramic cork mugs and durable lightweight backpacks.',
    image: '/catalog/crops/smart_adma_london_main.jpg',
    recommendedProducts: ['BG-SMART', 'HGS - H217', 'HGS - H84', 'BG-DUFFLE-SHINE'],
    tag: 'Brand Visibility'
  },
  {
    id: 'festival-diwali',
    title: 'Festival & Diwali Corporate Hampers',
    subtitle: 'Celebrate milestone moments with bespoke holiday collections',
    description: 'Opulent festive hampers combining smart temperature display flasks, vacuum mugs, premium diaries, and luxury custom branded packaging.',
    image: '/catalog/crops/hgs_h71.jpg',
    recommendedProducts: ['HGS - H71', 'HGS - H55', 'HGS - H66', 'HGS - H36'],
    tag: 'Festive Season'
  },
  {
    id: 'leadership-vip',
    title: 'Executive & Boardroom Gifts',
    subtitle: 'Uncompromising prestige for board members and senior executives',
    description: 'Crafted with top-grade ballistic polyester, genuine bamboo, and heavy chrome finishes that reflect the caliber of leadership.',
    image: '/catalog/crops/businessman_2_adma_london_main.jpg',
    recommendedProducts: ['BG-BIZ-2', 'BG-VOLVO-2', 'HGS - H74', 'HGS - H135'],
    tag: 'Leadership Tier'
  }
];

export const BRAND_STRENGTHS = [
  {
    stage: '01',
    title: 'Raw Material Inspection',
    desc: 'Every fabric roll, metal alloy, vacuum liner, and zipper batch is tested for tensile strength, food-grade purity, and colorfastness before manufacturing.'
  },
  {
    stage: '02',
    title: 'Laser Cutting Precision',
    desc: 'Computer-guided cutting tables ensure exact measurements and cross-checking against client size requirements with zero tolerance for deviations.'
  },
  {
    stage: '03',
    title: 'Stitching & Bond Quality Check',
    desc: 'Specialized reinforced bar-tack stitching on all bag stress points and thermal bonding checks on insulated drinkware.'
  },
  {
    stage: '04',
    title: 'QC Manager Product Inspection',
    desc: 'Each finished gift set and backpack undergoes individual 100% manual inspection prior to entering the gift-box packing line.'
  },
  {
    stage: '05',
    title: 'Factory Manager Dispatch Sign-Off',
    desc: 'The Factory Manager personally audits the final packed cartons to ensure zero defects, moisture protection, and prompt dispatch.'
  }
];

export const COMPANY_STATS = [
  { value: '500+', label: 'Corporate Clients', sub: 'Across IT, Banking, Auto & Pharma' },
  { value: '1 Year', label: 'Manufacturer Warranty', sub: 'On all Ninja Gear & ADMA London Bags' },
  { value: '100%', label: 'In-House Production', sub: 'Strict 5-Stage QC Standards' },
  { value: '180+', label: 'Verified Catalog SKUs', sub: 'Direct from Bangalore Factory Hub' }
];

