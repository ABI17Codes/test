export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'gift-sets' | 'bags' | 'drinkware' | 'mugs' | 'diaries' | 'promotional' | 'desktop';
  brand: 'Globrands Lifestyle' | 'Ninja Gear' | 'ADMA London';
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
  { id: 'all', name: 'All Collections', count: 48 },
  { id: 'gift-sets', name: 'Corporate Gift Sets', count: 18, icon: 'Gift' },
  { id: 'bags', name: 'Bags & Backpacks', count: 20, icon: 'Briefcase' },
  { id: 'drinkware', name: 'Bottles & Flasks', count: 8, icon: 'Flame' },
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
  // 2. CORPORATE BAGS & BACKPACKS (Globrands Bag Catalogue 2025)
  // ==========================================
  {
    id: 'bg-boxer',
    code: 'BG-BOXER',
    name: 'Ninja Gear BOXER Antitheft Laptop Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Premium anti-theft corporate backpack with concealed zippers, integrated external USB fast-charging port, 17-inch padded laptop holder, and ergonomic breathable back mesh for maximum lumbar comfort.',
    image: '/catalog/crops/boxer_ninja_gear_main.jpg',
    catalogPage: '/catalog/bags/page_05.jpg',
    catalogType: 'bags',
    pageNumber: 5,
    mrp: 2999,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '28 Liters' },
      { label: 'Dimensions', value: 'H: 44cm | W: 32cm | D: 19cm' },
      { label: 'Laptop Holder', value: 'Up to 17-Inch Dedicated Sleeve' },
      { label: 'Compartments', value: '1 + 1 Main & Organizer Compartments' },
      { label: 'Special Features', value: 'Antitheft Design, External USB Port Support' },
      { label: 'Ergonomics', value: 'Breathable Honeycomb Back Mesh, Padded Straps' },
      { label: 'Warranty', value: '1 Year Globrands Manufacturer Warranty' },
      { label: 'Origin', value: 'Proudly Made in India' }
    ],
    colors: [{ name: 'Executive Black', hex: '#111111' }],
    tags: ['Antitheft', 'USB Charging', '17" Laptop', 'Bestseller'],
    brandingOptions: ['High-Density Screen Printing', 'Rubber Patch', 'Metal Badge']
  },
  {
    id: 'bg-inspire',
    code: 'BG-INSPIRE',
    name: 'Ninja Gear INSPIRE Professional Laptop Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Clean, minimalist corporate backpack engineered for modern executives. Features dedicated 17-inch laptop compartment, multilevel stationery organizer, and concealed internal water bottle pouch.',
    image: '/catalog/crops/inspire_ninja_gear_main.jpg',
    catalogPage: '/catalog/bags/page_04.jpg',
    catalogType: 'bags',
    pageNumber: 4,
    mrp: 2499,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '25 Liters' },
      { label: 'Dimensions', value: 'H: 42cm | W: 31cm | D: 19cm' },
      { label: 'Laptop Holder', value: '17-Inch Padded Protective Sleeve' },
      { label: 'Compartments', value: '1 + 1 Compartments with Multilevel Organizer' },
      { label: 'Bottle Holder', value: 'Internal Dedicated Water Bottle Pouch' },
      { label: 'Warranty', value: '1 Year Warranty' },
      { label: 'Origin', value: 'Made in India' }
    ],
    colors: [{ name: 'Stealth Black', hex: '#111111' }],
    tags: ['Executive Choice', 'Minimalist', '17" Laptop'],
    brandingOptions: ['Screen Printing', 'Embroidered Patch', 'Metal Logo Plate']
  },
  {
    id: 'bg-aviator',
    code: 'BG-AVIATOR',
    name: 'Ninja Gear AVIATOR Heavy-Duty Executive Backpack',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Top-tier executive commuter bag with reinforced flap top, built-in USB port, 2+1 heavy duty compartments, and extra cushioned shoulder harness for daily professionals.',
    image: '/catalog/crops/aviator_ninja_gear_main.jpg',
    catalogPage: '/catalog/bags/page_06.jpg',
    catalogType: 'bags',
    pageNumber: 6,
    mrp: 3999,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '24 Liters' },
      { label: 'Dimensions', value: 'H: 44cm | W: 30cm | D: 18cm' },
      { label: 'Compartments', value: '2 + 1 Compartments' },
      { label: 'Features', value: 'USB Charging Port, Internal Bottle Pouch, Organizer' },
      { label: 'Laptop Fit', value: '17 Inch Laptop Holder' },
      { label: 'Warranty', value: '1 Year Warranty' }
    ],
    colors: [{ name: 'Jet Black with Cognac Trim', hex: '#1b1b1b' }],
    tags: ['Luxury Executive', 'Premium Build'],
    brandingOptions: ['Screen Printing', 'Metal Badge', 'Embossed Leather Patch']
  },
  {
    id: 'bg-volvo-2',
    code: 'BG-VOLVO-2',
    name: 'ADMA London VOLVO 2.0 with Integrated Rain Cover',
    category: 'bags',
    brand: 'ADMA London',
    description: 'High-capacity 38L travel & office backpack equipped with an all-weather deployable rain cover, 3 full-size compartments, 17-inch laptop sleeve, and airflow ventilation system.',
    image: '/catalog/crops/volvo_2_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_16.jpg',
    catalogType: 'bags',
    pageNumber: 16,
    mrp: 2799,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '38 Liters (Spacious Travel / Office)' },
      { label: 'Dimensions', value: 'H: 50cm | W: 34cm | D: 22cm' },
      { label: 'Weather Protection', value: 'Built-in High-Viz Waterproof Rain Cover' },
      { label: 'Compartments', value: '3 Full Compartments + Multilevel Organizer' },
      { label: 'Laptop Sleeve', value: '17 Inch Padded Protection' },
      { label: 'Material', value: 'Heavy Duty 100% Water-Repellent Polyester' }
    ],
    colors: [{ name: 'Midnight Charcoal', hex: '#2b2d42' }],
    tags: ['Rain Cover Included', '38L High Capacity', 'Travel & Work'],
    brandingOptions: ['Screen Printing', 'Heat Transfer Logo', 'Rubber Logo Badge']
  },
  {
    id: 'bg-volvo-1',
    code: 'BG-VOLVO-1',
    name: 'ADMA London VOLVO 40L Jumbo Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Our largest 40L executive backpack built for multi-day business trips. Features 3 cavernous compartments, multi-pocket stationery organizer, and reinforced haul handle.',
    image: '/catalog/crops/alone_sleeve_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_15.jpg',
    catalogType: 'bags',
    pageNumber: 15,
    mrp: 2499,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '40 Liters' },
      { label: 'Dimensions', value: 'H: 49cm | W: 34cm | D: 23cm' },
      { label: 'Laptop', value: '17 Inch Laptop Sleeve' },
      { label: 'Pockets', value: 'Three Main Compartments + Outer Bottle Pockets' }
    ],
    colors: [{ name: 'Deep Black', hex: '#111111' }],
    tags: ['40L Jumbo', 'Business Trips'],
    brandingOptions: ['Screen Printing', 'Custom Zipper Pulls']
  },
  {
    id: 'bg-businessman-2',
    code: 'BG-BIZ-2',
    name: 'ADMA London BUSINESS MAN 2.0 Executive Messenger Bag',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Ultra-sleek lightweight executive briefcase with detachable padded sling, premium cross-body strap, reinforced hardware hooks, and multi-tier tech organizers in stylish heather grey.',
    image: '/catalog/crops/businessman_2_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_18.jpg',
    catalogType: 'bags',
    pageNumber: 18,
    mrp: 1799,
    moq: '50 pcs',
    specs: [
      { label: 'Dimensions', value: 'H: 33cm | W: 42cm | D: 8cm' },
      { label: 'Style', value: 'Executive Laptop Briefcase / Crossbody Sling' },
      { label: 'Hardware', value: 'Heavy Duty Metal Snap Hooks & Quality Zippers' },
      { label: 'Compartments', value: '1 + 1 Padded Laptop Section & Document Folder' }
    ],
    colors: [
      { name: 'Heather Grey', hex: '#8d99ae' },
      { name: 'Navy Blue', hex: '#1d3557' }
    ],
    tags: ['Executive Briefcase', 'Lightweight', 'Crossbody'],
    brandingOptions: ['Screen Printing', 'Laser Engraved Metal Plaque']
  },
  {
    id: 'bg-smart',
    code: 'BG-SMART',
    name: 'ADMA London SMART High-Value Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'The smart corporate choice for bulk company onboarding. 26L capacity, dedicated 17-inch laptop sleeve, padded shoulder straps, and 100% durable polyester at an unbeatable price point.',
    image: '/catalog/crops/smart_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_07.jpg',
    catalogType: 'bags',
    pageNumber: 7,
    mrp: 999,
    moq: '100 pcs',
    specs: [
      { label: 'Capacity', value: '26 Liters' },
      { label: 'Dimensions', value: 'H: 50cm | W: 36cm | D: 14cm' },
      { label: 'Laptop Holder', value: '17 Inch Laptop Holder' },
      { label: 'Material', value: '100% Durable Polyester' },
      { label: 'Features', value: 'Padded Shoulder Strap, Water Bottle Pouch' }
    ],
    colors: [{ name: 'Dual Black / Denim Blue Accent', hex: '#2b2d42' }],
    tags: ['Budget Champion', 'Employee Kits', 'Under ₹1000'],
    brandingOptions: ['Screen Printing']
  },
  {
    id: 'bg-duffle-shine',
    code: 'BG-DUFFLE-SHINE',
    name: 'Ninja Gear SHINE 40L Overnighter Duffle Bag',
    category: 'bags',
    brand: 'Ninja Gear',
    description: 'Sporty overnighter duffle with high-visibility contrast zipper accents, dedicated quick-access toiletry pocket, reinforced grab handles, and adjustable shoulder strap for active corporate teams.',
    image: '/catalog/crops/duffle_shine_ninja_gear_main.jpg',
    catalogPage: '/catalog/bags/page_22.jpg',
    catalogType: 'bags',
    pageNumber: 22,
    mrp: 1099,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '40 Liters' },
      { label: 'Dimensions', value: 'H: 26cm | W: 48cm | D: 28cm' },
      { label: 'Compartments', value: '1 + 1 Main + Quick Access Front Pockets' },
      { label: 'Utility', value: 'Dedicated Pocket for Toiletries & Shoes' }
    ],
    colors: [{ name: 'Navy with Tangerine Trim', hex: '#1e3d59' }],
    tags: ['Overnighter', 'Gym & Travel', 'Sporty'],
    brandingOptions: ['Screen Printing', 'Embroidery']
  },
  {
    id: 'bg-royal-duffle',
    code: 'BG-ROYAL-DUFFLE',
    name: 'ADMA London ROYAL 50L Duffle Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Versatile hybrid duffle that doubles as a travel backpack. Huge 50L volume, sea-green & black dual-tone aesthetic, shoe/toiletry compartment, and detachable shoulder sling.',
    image: '/catalog/crops/royal_duffle_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_23.jpg',
    catalogType: 'bags',
    pageNumber: 23,
    mrp: 1899,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '50 Liters' },
      { label: 'Dimensions', value: 'H: 32cm | W: 57cm | D: 27cm' },
      { label: 'Compartments', value: '1 + 2 Compartments with Side Pockets' },
      { label: 'Colorway', value: 'Mint Teal & Jet Black' }
    ],
    colors: [{ name: 'Mint Teal & Black', hex: '#52b788' }],
    tags: ['50L Jumbo Duffle', 'Convertible'],
    brandingOptions: ['Screen Printing']
  },
  {
    id: 'bg-ashwa',
    code: 'BG-ASHWA',
    name: 'ADMA London ASHWA Multipurpose Gym & Office Backpack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'The ultimate hybrid bag for modern work-life balance. Features an isolated bottom shoe sack, dual laptop & iPad compartment, cylindrical sports-pack silhouette, and side bottle mesh.',
    image: '/catalog/crops/ashwa_multipurpose_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_24.jpg',
    catalogType: 'bags',
    pageNumber: 24,
    mrp: 2999,
    moq: '50 pcs',
    specs: [
      { label: 'Capacity', value: '30 Liters' },
      { label: 'Dimensions', value: 'H: 44cm | W: 28cm | D: 21cm' },
      { label: 'Dedicated Shoe Sack', value: 'Isolated Ventilated Shoe Compartment' },
      { label: 'Device Sleeves', value: '17 Inch Laptop & iPad Holder' }
    ],
    colors: [{ name: 'Stealth Black', hex: '#111111' }],
    tags: ['Shoe Compartment', 'Gym to Office', 'Premium'],
    brandingOptions: ['Screen Printing', 'Rubber Patch']
  },
  {
    id: 'bg-kamiliant',
    code: 'BG-KAMILIANT',
    name: 'ADMA London KAMILIANT 60L Expedition Rucksack',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Rugged 60-liter travel rucksack engineered for corporate trekking clubs, outdoor retreats, and adventure tours. Includes sternum whistle buckle, ergonomic hip belt, and water-repellent shell.',
    image: '/catalog/crops/kamiliant_rucksack_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_34.jpg',
    catalogType: 'bags',
    pageNumber: 34,
    mrp: 3599,
    moq: '30 pcs',
    specs: [
      { label: 'Capacity', value: '60 Liters' },
      { label: 'Dimensions', value: 'H: 72cm | W: 33cm | D: 22cm' },
      { label: 'Harness', value: 'Heavy Duty Hip Belt Support & Whistle Buckle' },
      { label: 'Pockets', value: 'Laptop & Tablet Pouch, Dual Bottle Pockets' }
    ],
    colors: [{ name: 'Tactical Olive Green', hex: '#4f5d2f' }],
    tags: ['60L Expedition', 'Corporate Treks'],
    brandingOptions: ['Screen Printing', 'Embroidered Patch']
  },
  {
    id: 'bg-eno-sling',
    code: 'BG-ENO-SLING',
    name: 'ADMA London ENO Crossbody Sling with Front RFID Pocket',
    category: 'bags',
    brand: 'ADMA London',
    description: 'Compact daily essentials crossbody sling featuring RFID blocking security compartment to safeguard contactless credit cards, water-resistant polyester construction, and adjustable webbing strap.',
    image: '/catalog/crops/eno_sling_adma_london_main.jpg',
    catalogPage: '/catalog/bags/page_27.jpg',
    catalogType: 'bags',
    pageNumber: 27,
    mrp: 699,
    moq: '100 pcs',
    specs: [
      { label: 'Dimensions', value: 'H: 30cm | W: 24cm | D: 7cm' },
      { label: 'Security', value: 'Front RFID Protected Pocket' },
      { label: 'Compartments', value: '1 + 3 Multiple Organizing Slots' },
      { label: 'Fabric', value: 'Water Resistant 100% Polyester' }
    ],
    colors: [{ name: 'Black with Electric Blue Zips', hex: '#0077b6' }],
    tags: ['RFID Blocking', 'Everyday Carry', 'Sling Bag'],
    brandingOptions: ['Screen Printing', 'Rubber Label']
  },

  // ==========================================
  // 3. DRINKWARE & SMART FLASKS (ALL In One Catalogue)
  // ==========================================
  {
    id: 'bot-h135',
    code: 'HGS - H135',
    name: 'Natural Bamboo 500ml Flask with Digital Temp Display',
    category: 'drinkware',
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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
    brand: 'Globrands Lifestyle',
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

