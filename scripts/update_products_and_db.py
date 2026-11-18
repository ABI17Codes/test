import json
import os
import re

# 1. Define all 32 bags with studio images
all_32_bags = [
  {
    "id": "bg-inspire",
    "code": "BG-INSPIRE",
    "name": "Ninja Gear INSPIRE Professional Laptop Backpack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Clean, minimalist corporate backpack engineered for modern executives. Features dedicated 17-inch laptop compartment, multilevel stationery organizer, concealed internal water bottle pouch, and breathable honeycomb back mesh.",
    "image": "/catalog/backpacks-studio/bg-inspire.jpg",
    "catalogPage": "/catalog/bags/page_04.jpg",
    "catalogType": "bags",
    "pageNumber": 4,
    "mrp": 2499,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "25 Liters" },
      { "label": "Dimensions", "value": "H: 42cm | W: 31cm | D: 19cm" },
      { "label": "Laptop Holder", "value": "17-Inch Padded Protective Sleeve" },
      { "label": "Compartments", "value": "1 + 1 Compartments with Multilevel Organizer" },
      { "label": "Bottle Holder", "value": "Internal Dedicated Water Bottle Pouch" },
      { "label": "Ergonomics", "value": "Breathable Honeycomb Back Mesh, Padded Straps" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" },
      { "label": "Origin", "value": "Manufactured by Globrands Lifestyle Pvt. Ltd." }
    ],
    "colors": [{ "name": "Stealth Black", "hex": "#111111" }],
    "tags": ["Executive Choice", "Minimalist", "17\" Laptop", "In-House Factory"],
    "brandingOptions": ["High-Density Screen Printing", "Embroidered Patch", "Laser Engraved Metal Plaque"]
  },
  {
    "id": "bg-boxer",
    "code": "BG-BOXER",
    "name": "Ninja Gear BOXER Antitheft Laptop Backpack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Flagship anti-theft corporate backpack with concealed rear zippers, integrated external USB fast-charging port, 17-inch padded laptop holder, multi-tier organizer, and ergonomic breathable lumbar mesh.",
    "image": "/catalog/backpacks-studio/bg-boxer.jpg",
    "catalogPage": "/catalog/bags/page_05.jpg",
    "catalogType": "bags",
    "pageNumber": 5,
    "mrp": 2999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "28 Liters" },
      { "label": "Dimensions", "value": "H: 44cm | W: 32cm | D: 19cm" },
      { "label": "Laptop Holder", "value": "Up to 17-Inch Dedicated Sleeve" },
      { "label": "Compartments", "value": "1 + 1 Main & Organizer Compartments" },
      { "label": "Special Features", "value": "Concealed Antitheft Zipper Design, External USB Fast-Charging Port" },
      { "label": "Ergonomics", "value": "Breathable Honeycomb Back Mesh, Contour Padded Straps" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" },
      { "label": "Origin", "value": "Manufactured by Globrands Lifestyle Pvt. Ltd." }
    ],
    "colors": [{ "name": "Executive Black", "hex": "#111111" }],
    "tags": ["Antitheft", "USB Charging", "17\" Laptop", "Flagship Bestseller"],
    "brandingOptions": ["High-Density Screen Printing", "Rubber Patch", "Metal Badge", "Heat Transfer"]
  },
  {
    "id": "bg-aviator",
    "code": "BG-AVIATOR",
    "name": "Ninja Gear AVIATOR Heavy-Duty Executive Backpack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Top-tier executive commuter bag with reinforced flap top, built-in USB port, 2+1 heavy-duty compartments, internal bottle pouch, and extra cushioned shoulder harness for daily enterprise professionals.",
    "image": "/catalog/backpacks-studio/bg-aviator.jpg",
    "catalogPage": "/catalog/bags/page_06.jpg",
    "catalogType": "bags",
    "pageNumber": 6,
    "mrp": 3999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "24 Liters" },
      { "label": "Dimensions", "value": "H: 44cm | W: 30cm | D: 18cm" },
      { "label": "Compartments", "value": "2 + 1 Compartments with Flap Cover" },
      { "label": "Features", "value": "USB Charging Port, Internal Bottle Pouch, Organizer" },
      { "label": "Laptop Fit", "value": "17 Inch Laptop Protective Holder" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Jet Black with Cognac Trim", "hex": "#1b1b1b" }],
    "tags": ["Luxury Executive", "Heavy-Duty", "17\" Laptop"],
    "brandingOptions": ["Screen Printing", "Metal Badge", "Embossed Leather Patch"]
  },
  {
    "id": "bg-smart",
    "code": "BG-SMART",
    "name": "ADMA London SMART High-Value Office Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "The smart corporate choice for bulk company onboarding. 26L capacity, dedicated 17-inch laptop sleeve, padded shoulder straps, and 100% durable water-repellent polyester at an unbeatable factory price point.",
    "image": "/catalog/backpacks-studio/bg-smart.jpg",
    "catalogPage": "/catalog/bags/page_07.jpg",
    "catalogType": "bags",
    "pageNumber": 7,
    "mrp": 999,
    "moq": "100 pcs",
    "specs": [
      { "label": "Capacity", "value": "26 Liters" },
      { "label": "Dimensions", "value": "H: 50cm | W: 36cm | D: 14cm" },
      { "label": "Laptop Holder", "value": "17 Inch Dedicated Laptop Holder" },
      { "label": "Material", "value": "100% Durable Water-Repellent Polyester" },
      { "label": "Features", "value": "Padded Shoulder Strap, Water Bottle Pouch, 1+1 Compartments" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Dual Black / Denim Blue Accent", "hex": "#2b2d42" }],
    "tags": ["Budget Champion", "Employee Onboarding", "Under ₹1000", "Volume Value"],
    "brandingOptions": ["Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-nexa",
    "code": "BG-NEXA",
    "name": "ADMA London NEXA Urban Laptop Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Contemporary two-compartment corporate backpack designed for everyday urban transit. Features padded 17-inch laptop compartment, ergonomic mesh padding, and reinforced top handle.",
    "image": "/catalog/backpacks-studio/bg-nexa.jpg",
    "catalogPage": "/catalog/bags/page_08.jpg",
    "catalogType": "bags",
    "pageNumber": 8,
    "mrp": 1599,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "26 Liters" },
      { "label": "Dimensions", "value": "H: 45cm | W: 32cm | D: 16cm" },
      { "label": "Compartments", "value": "Two Full Main Compartments" },
      { "label": "Laptop Holder", "value": "17 Inch Dedicated Laptop Holder" },
      { "label": "Ergonomics", "value": "Padded Shoulder Straps & Breathable Back Mesh" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Graphite Grey & Blue", "hex": "#4a5568" }],
    "tags": ["Urban Transit", "Two Compartments", "17\" Laptop"],
    "brandingOptions": ["High-Density Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-essential",
    "code": "BG-ESSENTIAL",
    "name": "Ninja Gear ESSENTIAL Everyday Laptop Pack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Streamlined, resilient corporate pack engineered for high-usage environments. Features 1+1 compartment layout, 17-inch padded sleeve, external bottle pouch, and reinforced bar-tacked stress points.",
    "image": "/catalog/backpacks-studio/bg-essential.jpg",
    "catalogPage": "/catalog/bags/page_09.jpg",
    "catalogType": "bags",
    "pageNumber": 9,
    "mrp": 1499,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "24 Liters" },
      { "label": "Dimensions", "value": "H: 43cm | W: 31cm | D: 15cm" },
      { "label": "Compartments", "value": "1 + 1 Compartments with Stationer Organizer" },
      { "label": "Laptop Holder", "value": "17 Inch Padded Laptop Holder" },
      { "label": "Ergonomics", "value": "Breathable Lumbar Mesh & Padded Harness" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Stealth Black", "hex": "#111111" }],
    "tags": ["Everyday Pack", "Reinforced Bar-Tacking", "High Durability"],
    "brandingOptions": ["Screen Printing", "Embroidered Badge"]
  },
  {
    "id": "bg-jio",
    "code": "BG-JIO",
    "name": "ADMA London JIO Sleek Commuter Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Sleek aerodynamic laptop backpack built for IT executives and daily metro commuters. Offers lightweight mobility, 17-inch laptop protection, and clean modern aesthetic.",
    "image": "/catalog/backpacks-studio/bg-jio.jpg",
    "catalogPage": "/catalog/bags/page_10.jpg",
    "catalogType": "bags",
    "pageNumber": 10,
    "mrp": 1699,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "25 Liters" },
      { "label": "Dimensions", "value": "H: 44cm | W: 31cm | D: 16cm" },
      { "label": "Laptop Sleeve", "value": "17 Inch Shockproof Laptop Padded Sleeve" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Features", "value": "Breathable Back Mesh, Bottle Pouch, Padded Straps" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Deep Charcoal / Neon Accent", "hex": "#2d3748" }],
    "tags": ["Aerodynamic", "IT Executive", "17\" Laptop"],
    "brandingOptions": ["Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-jio-2",
    "code": "BG-JIO-2",
    "name": "ADMA London JIO 2.0 Dual Compartment Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Enhanced 28L upgrade to the JIO series with 2+1 full compartments, enhanced dual water bottle pockets, reinforced haul strap, and thick honeycomb padding for maximum back support.",
    "image": "/catalog/backpacks-studio/bg-jio-2.jpg",
    "catalogPage": "/catalog/bags/page_11.jpg",
    "catalogType": "bags",
    "pageNumber": 11,
    "mrp": 1899,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "28 Liters" },
      { "label": "Dimensions", "value": "H: 46cm | W: 33cm | D: 18cm" },
      { "label": "Compartments", "value": "2 + 1 Full-Depth Compartments" },
      { "label": "Laptop Protection", "value": "17 Inch Padded Compartment" },
      { "label": "Back Mesh", "value": "High-Airflow Honeycomb Mesh" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Dual Navy & Slate", "hex": "#1a365d" }],
    "tags": ["Dual Compartment", "28L Volume", "Airflow Mesh"],
    "brandingOptions": ["Screen Printing", "Rubber Patch", "Metal Plaque"]
  },
  {
    "id": "bg-vip",
    "code": "BG-VIP",
    "name": "ADMA London VIP Corporate Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Executive class backpack designed for senior leadership and conference attendees. Features textured premium twill weave, 17-inch laptop compartment, and gold/silver accent hardware.",
    "image": "/catalog/backpacks-studio/bg-vip.jpg",
    "catalogPage": "/catalog/bags/page_12.jpg",
    "catalogType": "bags",
    "pageNumber": 12,
    "mrp": 1999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "28 Liters" },
      { "label": "Dimensions", "value": "H: 45cm | W: 32cm | D: 17cm" },
      { "label": "Laptop Sleeve", "value": "17 Inch Dedicated Sleeve" },
      { "label": "Compartments", "value": "Dual Main Compartments + Stationery Suite" },
      { "label": "Fabric", "value": "Textured High-Density Poly-Twill" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Obsidian Black", "hex": "#111111" }],
    "tags": ["VIP Series", "Executive Twill", "Leadership Gifting"],
    "brandingOptions": ["Laser Engraved Metal Plaque", "Screen Printing", "Embossed Patch"]
  },
  {
    "id": "bg-vip-2",
    "code": "BG-VIP-2",
    "name": "ADMA London VIP 2.0 Executive Laptop Pack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Top-tier 32L executive powerhouse with 3+1 cavernous compartments, multi-level file dividers, 17-inch laptop cradle, and ergonomic weight-distribution harness.",
    "image": "/catalog/backpacks-studio/bg-vip-2.jpg",
    "catalogPage": "/catalog/bags/page_13.jpg",
    "catalogType": "bags",
    "pageNumber": 13,
    "mrp": 2299,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "32 Liters" },
      { "label": "Dimensions", "value": "H: 48cm | W: 33cm | D: 20cm" },
      { "label": "Compartments", "value": "3 + 1 Full Depth Compartments" },
      { "label": "Laptop Sleeve", "value": "17 Inch Suspended Padded Sleeve" },
      { "label": "Ergonomics", "value": "Padded Shoulder Strap & Lumbar Air-Mesh" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Midnight Charcoal", "hex": "#1a202c" }],
    "tags": ["VIP 2.0", "32L Executive", "3+1 Compartments"],
    "brandingOptions": ["Metal Badge", "Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-classic",
    "code": "BG-CLASSIC",
    "name": "ADMA London CLASSIC Business Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Timeless corporate backpack featuring 1+1 compartments, inside water bottle pouch for clean external silhouette, dedicated 17-inch laptop holder, and breathable back mesh.",
    "image": "/catalog/backpacks-studio/bg-classic.jpg",
    "catalogPage": "/catalog/bags/page_14.jpg",
    "catalogType": "bags",
    "pageNumber": 14,
    "mrp": 1999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "27 Liters" },
      { "label": "Dimensions", "value": "H: 45cm | W: 32cm | D: 18cm" },
      { "label": "Laptop Sleeve", "value": "17 Inch Laptop Holder" },
      { "label": "Bottle Pouch", "value": "Internal Dedicated Concealed Bottle Pouch" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Classic Black", "hex": "#111111" }],
    "tags": ["Timeless Design", "Concealed Bottle Pouch", "17\" Laptop"],
    "brandingOptions": ["Screen Printing", "Embroidered Patch", "Metal Plaque"]
  },
  {
    "id": "bg-volvo-1",
    "code": "BG-VOLVO-1",
    "name": "ADMA London VOLVO 40L Jumbo Office Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Our high-capacity 40L executive backpack built for multi-day business trips. Features 3 cavernous main compartments, multi-pocket stationery organizer, 17-inch laptop sleeve, and reinforced haul handle.",
    "image": "/catalog/backpacks-studio/bg-volvo-1.jpg",
    "catalogPage": "/catalog/bags/page_15.jpg",
    "catalogType": "bags",
    "pageNumber": 15,
    "mrp": 2499,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "40 Liters (Jumbo Volume)" },
      { "label": "Dimensions", "value": "H: 49cm | W: 34cm | D: 23cm" },
      { "label": "Compartments", "value": "Three Full Main Compartments + Organizer" },
      { "label": "Laptop Sleeve", "value": "17 Inch Laptop Dedicated Protective Sleeve" },
      { "label": "Features", "value": "Dual Bottle Pockets, Padded Straps, Heavy Haul Handle" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Deep Black", "hex": "#111111" }],
    "tags": ["40L Jumbo", "Business Trips", "Three Compartments", "High Capacity"],
    "brandingOptions": ["Screen Printing", "Custom Zipper Pulls", "Metal Badge"]
  },
  {
    "id": "bg-volvo-2",
    "code": "BG-VOLVO-2",
    "name": "ADMA London VOLVO 2.0 with Integrated Rain Cover",
    "category": "bags",
    "brand": "ADMA London",
    "description": "High-capacity 38L travel & office backpack equipped with an all-weather deployable high-viz rain cover, 3 full-size compartments, 17-inch laptop sleeve, and airflow ventilation system.",
    "image": "/catalog/backpacks-studio/bg-volvo-2.jpg",
    "catalogPage": "/catalog/bags/page_16.jpg",
    "catalogType": "bags",
    "pageNumber": 16,
    "mrp": 2799,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "38 Liters (Spacious Travel / Office)" },
      { "label": "Dimensions", "value": "H: 50cm | W: 34cm | D: 22cm" },
      { "label": "Weather Protection", "value": "Built-in High-Viz Waterproof Rain Cover" },
      { "label": "Compartments", "value": "3 Full Compartments + Multilevel Organizer" },
      { "label": "Laptop Sleeve", "value": "17 Inch Padded Protection" },
      { "label": "Material", "value": "Heavy Duty 100% Water-Repellent Polyester" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Midnight Charcoal", "hex": "#2b2d42" }],
    "tags": ["Rain Cover Included", "38L High Capacity", "All-Weather", "Travel & Work"],
    "brandingOptions": ["Screen Printing", "Heat Transfer Logo", "Rubber Logo Badge"]
  },
  {
    "id": "bg-businessman",
    "code": "BG-BIZ-1",
    "name": "Ninja Gear BUSINESS MAN Executive Briefcase Backpack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Lightweight convertible executive bag that switches seamlessly between professional briefcase and backpack. Equipped with dedicated laptop holder, detachable shoulder strap, and quality smooth-glide zippers.",
    "image": "/catalog/backpacks-studio/bg-businessman.jpg",
    "catalogPage": "/catalog/bags/page_17.jpg",
    "catalogType": "bags",
    "pageNumber": 17,
    "mrp": 1699,
    "moq": "50 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 42cm | W: 32cm | D: 12cm" },
      { "label": "Style", "value": "Convertible Briefcase Backpack" },
      { "label": "Features", "value": "Lightweight Construction, Detachable Shoulder Strap" },
      { "label": "Laptop Holder", "value": "Dedicated Padded Laptop Section" },
      { "label": "Zippers", "value": "Heavy-Duty Smooth Gliding Hardware" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Executive Slate", "hex": "#334155" }],
    "tags": ["Convertible Briefcase", "Lightweight", "Executive Chic"],
    "brandingOptions": ["Screen Printing", "Metal Badge", "Heat Transfer"]
  },
  {
    "id": "bg-businessman-2",
    "code": "BG-BIZ-2",
    "name": "ADMA London BUSINESS MAN 2.0 Executive Messenger Bag",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Ultra-sleek lightweight executive briefcase with detachable padded sling, premium cross-body strap, reinforced hardware hooks, and multi-tier tech organizers in stylish heather grey.",
    "image": "/catalog/backpacks-studio/bg-businessman-2.jpg",
    "catalogPage": "/catalog/bags/page_18.jpg",
    "catalogType": "bags",
    "pageNumber": 18,
    "mrp": 1799,
    "moq": "50 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 33cm | W: 42cm | D: 8cm" },
      { "label": "Style", "value": "Executive Laptop Briefcase / Crossbody Sling" },
      { "label": "Hardware", "value": "Heavy Duty Metal Snap Hooks & Quality Zippers" },
      { "label": "Compartments", "value": "1 + 1 Padded Laptop Section & Document Folder" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [
      { "name": "Heather Grey", "hex": "#8d99ae" },
      { "name": "Navy Blue", "hex": "#1d3557" }
    ],
    "tags": ["Executive Briefcase", "Lightweight", "Crossbody", "Bestseller"],
    "brandingOptions": ["Screen Printing", "Laser Engraved Metal Plaque"]
  },
  {
    "id": "bg-soft-edge",
    "code": "BG-SOFT-EDGE",
    "name": "Ninja Gear SOFT EDGE Executive Bag",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Modern rounded executive daypack engineered with soft-edge contours, lightweight durable shell, dedicated laptop holder, and quick-access front tech pocket.",
    "image": "/catalog/backpacks-studio/bg-soft-edge.jpg",
    "catalogPage": "/catalog/bags/page_19.jpg",
    "catalogType": "bags",
    "pageNumber": 19,
    "mrp": 1499,
    "moq": "50 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 43cm | W: 31cm | D: 14cm" },
      { "label": "Weight", "value": "Ultralight Ergonomic Build" },
      { "label": "Compartments", "value": "1 + 1 Compartments with Quick Access" },
      { "label": "Laptop Protection", "value": "Padded Laptop Cradle" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Midnight Grey", "hex": "#1f2937" }],
    "tags": ["Soft Edge", "Ultralight", "Quick Access"],
    "brandingOptions": ["Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-alone-sleeve",
    "code": "BG-ALONE",
    "name": "ADMA London ALONE Padded Laptop Sleeve",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Slim, high-density protective laptop sleeve crafted in 100% durable polyester with soft microfiber interior to protect 15.6\" and 17\" corporate laptops from drops and scratches.",
    "image": "/catalog/backpacks-studio/bg-alone-sleeve.jpg",
    "catalogPage": "/catalog/bags/page_20.jpg",
    "catalogType": "bags",
    "pageNumber": 20,
    "mrp": 799,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 30cm | W: 40cm" },
      { "label": "Compatibility", "value": "Fits up to 17-Inch Laptops" },
      { "label": "Material", "value": "100% Water-Resistant Polyester with Soft Padding" },
      { "label": "Zippers", "value": "Dual Smooth-Glide Quality Zippers" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Heather Charcoal", "hex": "#374151" }],
    "tags": ["Laptop Sleeve", "17\" Laptop", "Lightweight Cushioning"],
    "brandingOptions": ["Screen Printing", "Embossed Leather Tag"]
  },
  {
    "id": "bg-duffle-bag",
    "code": "BG-DUFFLE",
    "name": "Ninja Gear DUFFLE 35L Multi-Pocket Gym Bag",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Rugged yet lightweight 35L overnighter and gym duffle bag with dedicated pocket for toiletries and shoes, adjustable padded shoulder strap, and reinforced dual handgrips.",
    "image": "/catalog/backpacks-studio/bg-duffle-bag.jpg",
    "catalogPage": "/catalog/bags/page_21.jpg",
    "catalogType": "bags",
    "pageNumber": 21,
    "mrp": 1099,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "35 Liters" },
      { "label": "Dimensions", "value": "H: 25cm | W: 46cm | D: 26cm" },
      { "label": "Pockets", "value": "Overnighter Compartment + Dedicated Pocket for Toiletries" },
      { "label": "Straps", "value": "Adjustable Padded Shoulder Strap & Top Handles" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "All-Black Sport", "hex": "#111111" }],
    "tags": ["Gym & Travel", "35L Duffle", "Overnighter"],
    "brandingOptions": ["Screen Printing", "Embroidery"]
  },
  {
    "id": "bg-duffle-shine",
    "code": "BG-DUFFLE-SHINE",
    "name": "Ninja Gear SHINE 40L Overnighter Duffle Bag",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Sporty overnighter duffle with high-visibility contrast zipper accents, dedicated quick-access toiletry pocket, reinforced grab handles, and adjustable shoulder strap for active corporate teams.",
    "image": "/catalog/backpacks-studio/bg-duffle-shine.jpg",
    "catalogPage": "/catalog/bags/page_22.jpg",
    "catalogType": "bags",
    "pageNumber": 22,
    "mrp": 1099,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "40 Liters" },
      { "label": "Dimensions", "value": "H: 26cm | W: 48cm | D: 28cm" },
      { "label": "Compartments", "value": "1 + 1 Main + Quick Access Front Pockets" },
      { "label": "Utility", "value": "Dedicated Pocket for Toiletries & Shoes" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Navy with Tangerine Trim", "hex": "#1e3d59" }],
    "tags": ["Overnighter", "Gym & Travel", "Sporty", "40L Volume"],
    "brandingOptions": ["Screen Printing", "Embroidery"]
  },
  {
    "id": "bg-royal-duffle",
    "code": "BG-ROYAL-DUFFLE",
    "name": "ADMA London ROYAL 50L Duffle Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Versatile hybrid duffle that doubles as a travel backpack. Huge 50L volume, sea-green & black dual-tone aesthetic, shoe/toiletry compartment, and detachable shoulder sling.",
    "image": "/catalog/backpacks-studio/bg-royal-duffle.jpg",
    "catalogPage": "/catalog/bags/page_23.jpg",
    "catalogType": "bags",
    "pageNumber": 23,
    "mrp": 1899,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "50 Liters Jumbo" },
      { "label": "Dimensions", "value": "H: 32cm | W: 57cm | D: 27cm" },
      { "label": "Compartments", "value": "1 + 2 Compartments with Side Pockets" },
      { "label": "Utility", "value": "Overnighter Compartment + Toiletry Section" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Mint Teal & Jet Black", "hex": "#52b788" }],
    "tags": ["50L Jumbo Duffle", "Convertible", "Travel Backpack"],
    "brandingOptions": ["Screen Printing"]
  },
  {
    "id": "bg-ashwa",
    "code": "BG-ASHWA",
    "name": "ADMA London ASHWA Multipurpose Gym & Office Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "The ultimate hybrid bag for modern work-life balance. Features an isolated bottom shoe sack, dual laptop & iPad compartment, cylindrical sports-pack silhouette, and side bottle mesh.",
    "image": "/catalog/backpacks-studio/bg-ashwa.jpg",
    "catalogPage": "/catalog/bags/page_24.jpg",
    "catalogType": "bags",
    "pageNumber": 24,
    "mrp": 2999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Capacity", "value": "30 Liters" },
      { "label": "Dimensions", "value": "H: 44cm | W: 28cm | D: 21cm" },
      { "label": "Dedicated Shoe Sack", "value": "Isolated Ventilated Shoe Compartment" },
      { "label": "Device Sleeves", "value": "17 Inch Laptop & iPad Dedicated Holder" },
      { "label": "Compartments", "value": "1 + 2 Compartments with Mesh Bottle Pocket" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Stealth Black", "hex": "#111111" }],
    "tags": ["Shoe Compartment", "Gym to Office", "Hybrid Bestseller"],
    "brandingOptions": ["Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-gymbag",
    "code": "BG-GYMBAG",
    "name": "ADMA London GYMBAG Sports Edition Bag",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Dynamic cylindrical sports edition bag with integrated shoe sack, lightweight construction, heavy duty quality zippers, and adjustable shoulder strap for corporate fitness initiatives.",
    "image": "/catalog/backpacks-studio/bg-gymbag.jpg",
    "catalogPage": "/catalog/bags/page_25.jpg",
    "catalogType": "bags",
    "pageNumber": 25,
    "mrp": 1299,
    "moq": "50 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 26cm | W: 46cm | D: 24cm" },
      { "label": "Shoe Sack", "value": "Integrated Ventilated Shoe Compartment" },
      { "label": "Weight", "value": "Lightweight High-Tensile Polyester" },
      { "label": "Hardware", "value": "Smooth Quality Zippers & Reinforced Clips" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Cobalt Blue & Slate", "hex": "#2563eb" }],
    "tags": ["Sports Edition", "Shoe Sack", "Fitness Gifting"],
    "brandingOptions": ["Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-ninja-sling",
    "code": "BG-NINJA-SLING",
    "name": "Ninja Gear NINJA Crossbody Sling",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Ergonomic single-strap commuter sling bag with quick-access zippered compartment, quality hardware, and reversible strap clip for right or left shoulder carry.",
    "image": "/catalog/backpacks-studio/bg-ninja-sling.jpg",
    "catalogPage": "/catalog/bags/page_26.jpg",
    "catalogType": "bags",
    "pageNumber": 26,
    "mrp": 899,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 36cm | W: 20cm | D: 7cm" },
      { "label": "Compartment", "value": "Quick Access Multi-Pocket Compartment" },
      { "label": "Zippers", "value": "Heavy-Duty Quality Zippers" },
      { "label": "Strap", "value": "Adjustable Reversible Crossbody Webbing" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Stealth Black", "hex": "#111111" }],
    "tags": ["Crossbody Sling", "Commuter Pouch", "Quick Access"],
    "brandingOptions": ["Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-eno-sling",
    "code": "BG-ENO-SLING",
    "name": "ADMA London ENO Crossbody Sling with Front RFID Pocket",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Compact daily essentials crossbody sling featuring RFID blocking security compartment to safeguard contactless credit cards, water-resistant polyester construction, and adjustable webbing strap.",
    "image": "/catalog/backpacks-studio/bg-eno-sling.jpg",
    "catalogPage": "/catalog/bags/page_27.jpg",
    "catalogType": "bags",
    "pageNumber": 27,
    "mrp": 699,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 30cm | W: 24cm | D: 7cm" },
      { "label": "Security", "value": "Front RFID Protected Security Pocket" },
      { "label": "Compartments", "value": "1 + 3 Multiple Organizing Slots" },
      { "label": "Fabric", "value": "Water Resistant 100% Polyester" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Black with Electric Blue Zips", "hex": "#0077b6" }],
    "tags": ["RFID Blocking", "Everyday Carry", "Sling Bag"],
    "brandingOptions": ["Screen Printing", "Rubber Label"]
  },
  {
    "id": "bg-partner-sling",
    "code": "BG-PARTNER-SLING",
    "name": "ADMA London PARTNER RFID Travel Pouch",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Minimalist travel neck/crossbody pouch with certified front RFID-blocking passport pocket, water-resistant coating, and 1+1 quick organizer compartments.",
    "image": "/catalog/backpacks-studio/bg-partner-sling.jpg",
    "catalogPage": "/catalog/bags/page_28.jpg",
    "catalogType": "bags",
    "pageNumber": 28,
    "mrp": 599,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 24cm | W: 18cm | D: 5cm" },
      { "label": "Security", "value": "Front RFID Blocking Passport Pocket" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Fabric", "value": "Water Resistant Poly-Canvas" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Heather Grey", "hex": "#4b5563" }],
    "tags": ["RFID Travel Pouch", "Passport Holder", "Ultra-Compact"],
    "brandingOptions": ["Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-ninja-sleek",
    "code": "BG-NINJA-SLEEK",
    "name": "Ninja Gear NINJA SLEEK Simplistic Backpack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Ultra-lightweight minimalist daypack designed for corporate marathon kits, internal conferences, and campus recruiting. Features 1+1 compartments and comfortable padded shoulder straps.",
    "image": "/catalog/backpacks-studio/bg-ninja-sleek.jpg",
    "catalogPage": "/catalog/bags/page_29.jpg",
    "catalogType": "bags",
    "pageNumber": 29,
    "mrp": 699,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 42cm | W: 25cm | D: 8cm" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Straps", "value": "Padded Ergonomic Shoulder Straps" },
      { "label": "Weight", "value": "Ultra-lightweight 280g" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Jet Black", "hex": "#111111" }],
    "tags": ["Simplistic Pack", "Campus Kit", "Event Giveaway", "Value"],
    "brandingOptions": ["High-Density Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-waist-pouch",
    "code": "BG-WAIST",
    "name": "ADMA London WAIST RFID Travel Pouch",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Hands-free waist pouch featuring front RFID-blocking security compartment for cards and currency, heavy-duty snap buckle, and 100% water-resistant polyester shell.",
    "image": "/catalog/backpacks-studio/bg-waist-pouch.jpg",
    "catalogPage": "/catalog/bags/page_30.jpg",
    "catalogType": "bags",
    "pageNumber": 30,
    "mrp": 499,
    "moq": "100 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 14cm | W: 32cm | D: 6cm" },
      { "label": "Security", "value": "Front RFID Protected Card Compartment" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Material", "value": "100% Water-Resistant Polyester" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Stealth Black", "hex": "#111111" }],
    "tags": ["Waist Pouch", "RFID Protected", "Travel Utility"],
    "brandingOptions": ["Screen Printing", "Rubber Patch"]
  },
  {
    "id": "bg-toiletry-kit",
    "code": "BG-TOILETRY",
    "name": "Ninja Gear TOILETRY KIT Portable Organizer",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Convenient travel washbag and tech organizer with built-in metal hanging hook, 1+2 compartments, wipe-clean water-resistant inner lining, and durable dual zipper pulls.",
    "image": "/catalog/backpacks-studio/bg-toiletry-kit.jpg",
    "catalogPage": "/catalog/bags/page_31.jpg",
    "catalogType": "bags",
    "pageNumber": 31,
    "mrp": 599,
    "moq": "100 pcs",
    "specs": [
      { "label": "Compartments", "value": "1 + 2 Multiple Compartments with Mesh Sections" },
      { "label": "Features", "value": "Integrated Swivel Hanging Hook, Easy Portable Handle" },
      { "label": "Lining", "value": "Water-Resistant Wipe-Clean Inner Lining" },
      { "label": "Hardware", "value": "Smooth-Glide Quality Zippers" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Slate Grey", "hex": "#374151" }],
    "tags": ["Toiletry Kit", "Hanging Hook", "Travel Organizer"],
    "brandingOptions": ["Screen Printing", "Embossed Patch"]
  },
  {
    "id": "bg-drawstring",
    "code": "BG-STRINGS",
    "name": "ADMA London STRINGS Premium Drawstring Bag",
    "category": "bags",
    "brand": "ADMA London",
    "description": "High-durability gym and corporate swag cinch pack crafted with reinforced eyelets, thick comfortable dual-draw cords, and water-resistant 210D ripstop polyester.",
    "image": "/catalog/backpacks-studio/bg-drawstring.jpg",
    "catalogPage": "/catalog/bags/page_32.jpg",
    "catalogType": "bags",
    "pageNumber": 32,
    "mrp": 399,
    "moq": "150 pcs",
    "specs": [
      { "label": "Dimensions", "value": "H: 44cm | W: 35cm" },
      { "label": "Cords", "value": "Thick Reinforced Double Drawstrings" },
      { "label": "Fabric", "value": "Water-Resistant Ripstop Polyester" },
      { "label": "Utility", "value": "Spacious Main Cavity with Large Imprint Area" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Royal Blue", "hex": "#1d4ed8" }],
    "tags": ["Drawstring Bag", "Conference Swag", "Marathon Kit"],
    "brandingOptions": ["Screen Printing", "Heat Transfer"]
  },
  {
    "id": "bg-gear-toolkit",
    "code": "BG-GEAR",
    "name": "ADMA London GEAR Heavy-Duty Toolkit Backpack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Industrial heavy-duty technician and engineer toolkit backpack. Built with internal multi-loop tool holder system, reinforced abrasion-resistant base, 1+1 compartments, and lumbar air mesh.",
    "image": "/catalog/backpacks-studio/bg-gear-toolkit.jpg",
    "catalogPage": "/catalog/bags/page_33.jpg",
    "catalogType": "bags",
    "pageNumber": 33,
    "mrp": 2999,
    "moq": "50 pcs",
    "specs": [
      { "label": "Tool Storage", "value": "Dedicated Tool Holder Straps & Accessory Loops" },
      { "label": "Base", "value": "Reinforced Anti-Abrasion Heavy Molded Base" },
      { "label": "Compartments", "value": "1 + 1 Compartments" },
      { "label": "Ergonomics", "value": "Breathable Lumbar Back Mesh & Padded Shoulder Straps" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Tactical Black & Grey", "hex": "#1e293b" }],
    "tags": ["Toolkit Backpack", "Industrial Engineer", "Heavy-Duty"],
    "brandingOptions": ["Screen Printing", "Embroidered Patch", "Metal Plaque"]
  },
  {
    "id": "bg-kamiliant",
    "code": "BG-KAMILIANT",
    "name": "ADMA London KAMILIANT 60L Expedition Rucksack",
    "category": "bags",
    "brand": "ADMA London",
    "description": "Rugged 60-liter travel rucksack engineered for corporate trekking clubs, outdoor retreats, and adventure tours. Includes sternum whistle buckle, ergonomic hip belt, and water-repellent shell.",
    "image": "/catalog/backpacks-studio/bg-kamiliant.jpg",
    "catalogPage": "/catalog/bags/page_34.jpg",
    "catalogType": "bags",
    "pageNumber": 34,
    "mrp": 3599,
    "moq": "30 pcs",
    "specs": [
      { "label": "Capacity", "value": "60 Liters" },
      { "label": "Dimensions", "value": "H: 72cm | W: 33cm | D: 22cm" },
      { "label": "Harness", "value": "Heavy Duty Hip Belt Support & Whistle Sternum Buckle" },
      { "label": "Pockets", "value": "Laptop & Tablet Pouch, Dual Bottle Pockets" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Tactical Olive Green", "hex": "#4f5d2f" }],
    "tags": ["60L Expedition", "Corporate Treks", "Rucksack"],
    "brandingOptions": ["Screen Printing", "Embroidered Patch"]
  },
  {
    "id": "bg-mountain",
    "code": "BG-MOUNTAIN",
    "name": "Ninja Gear MOUNTAIN 65L Travel Rucksack",
    "category": "bags",
    "brand": "Ninja Gear",
    "description": "Our highest capacity 65L adventure travel pack. Features internal 17-inch laptop sleeve, load-lifter shoulder harness, padded hip belt with security pockets, and sternum whistle buckle.",
    "image": "/catalog/backpacks-studio/bg-mountain.jpg",
    "catalogPage": "/catalog/bags/page_35.jpg",
    "catalogType": "bags",
    "pageNumber": 35,
    "mrp": 3999,
    "moq": "30 pcs",
    "specs": [
      { "label": "Capacity", "value": "65 Liters (Maximum Volume)" },
      { "label": "Dimensions", "value": "H: 75cm | W: 35cm | D: 24cm" },
      { "label": "Laptop Sleeve", "value": "17 Inch Laptop Dedicated Protective Sleeve" },
      { "label": "Support", "value": "Hip Belt Support, Load-Lifter Straps & Whistle Buckle" },
      { "label": "Pockets", "value": "Single Vast Main Cavity + Exterior Tech Mesh" },
      { "label": "Warranty", "value": "1 Year Direct Factory Replacement Warranty" }
    ],
    "colors": [{ "name": "Stealth Charcoal", "hex": "#1f2937" }],
    "tags": ["65L Maximum Volume", "Mountain Rucksack", "Adventure Trekking"],
    "brandingOptions": ["Screen Printing", "Embroidered Badge"]
  }
]

print(f"Loaded {len(all_32_bags)} bags.")

# Now read existing products.ts
with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    orig = f.read()

# Update brand type
orig = orig.replace(
    "brand: 'Globrands Lifestyle' | 'Ninja Gear' | 'ADMA London';",
    "brand: 'Globrands Lifestyle Pvt. Ltd.' | 'Globrands Lifestyle' | 'Ninja Gear' | 'ADMA London';"
)

# Replace 'Globrands Lifestyle' in brand fields with 'Globrands Lifestyle Pvt. Ltd.'
orig = re.sub(r"brand:\s*'Globrands Lifestyle'", "brand: 'Globrands Lifestyle Pvt. Ltd.'", orig)

# Replace Categories
categories_pattern = re.compile(r"export const CATEGORIES = \[.*?\];", re.DOTALL)
new_categories = """export const CATEGORIES = [
  { id: 'all', name: 'All Collections', count: 68 },
  { id: 'bags', name: 'Backpacks & Carrywear (In-House)', count: 32, icon: 'Briefcase' },
  { id: 'gift-sets', name: 'Corporate Gift Sets (Secondary)', count: 18, icon: 'Gift' },
  { id: 'drinkware', name: 'Bottles & Smart Flasks', count: 8, icon: 'Flame' },
  { id: 'mugs', name: 'Coffee Mugs & Tumblers', count: 8, icon: 'Coffee' },
  { id: 'diaries', name: 'Executive Diaries', count: 8, icon: 'BookOpen' },
  { id: 'promotional', name: 'Keychains & Accessories', count: 6, icon: 'Award' },
  { id: 'desktop', name: 'Desk Organizers & Clocks', count: 6, icon: 'Clock' },
];"""
orig = categories_pattern.sub(new_categories, orig)

# Find boundaries of Bags section
start_marker = "// 2. CORPORATE BAGS & BACKPACKS (Globrands Bag Catalogue 2025)"
end_marker = "// 3. DRINKWARE & SMART FLASKS (ALL In One Catalogue)"

start_idx = orig.find(start_marker)
end_idx = orig.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Could not find bags boundaries in products.ts")
    exit(1)

# Format the 32 bags nicely in TS format
bag_ts_entries = []
for b in all_32_bags:
    entry = f"""  {{
    id: '{b["id"]}',
    code: '{b["code"]}',
    name: '{b["name"]}',
    category: 'bags',
    brand: '{b["brand"]}',
    description: '{b["description"]}',
    image: '{b["image"]}',
    catalogPage: '{b["catalogPage"]}',
    catalogType: 'bags',
    pageNumber: {b["pageNumber"]},
    mrp: {b["mrp"]},
    moq: '{b["moq"]}',
    specs: {json.dumps(b["specs"], indent=6).replace('"', "'")},
    colors: {json.dumps(b["colors"], indent=6).replace('"', "'")},
    tags: {json.dumps(b["tags"]).replace('"', "'")},
    brandingOptions: {json.dumps(b["brandingOptions"]).replace('"', "'")}
  }},"""
    bag_ts_entries.append(entry)

new_bags_section = f"""// 2. CORPORATE BAGS & BACKPACKS (Globrands Lifestyle Pvt. Ltd. Bag Catalogue)
  // 100% In-House Factory Manufactured &bull; Ninja Gear &bull; ADMA London
  // 1-Year Direct Factory Replacement Warranty
{chr(10).join(bag_ts_entries)}

  """

# Assemble new file
new_content = orig[:start_idx] + new_bags_section + orig[end_idx:]

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully written updated src/data/products.ts with 32 bags!")

# Now also update .data/globrands_store.json if it exists
store_path = os.path.join('.data', 'globrands_store.json')
if os.path.exists(store_path):
    with open(store_path, 'r', encoding='utf-8') as f:
        store = json.load(f)
    
    # Update products in store
    prods = store.get('products', {})
    for b in all_32_bags:
        prods[b['id']] = {
            "id": b['id'],
            "code": b['code'],
            "name": b['name'],
            "category": b['category'],
            "brand": b['brand'],
            "description": b['description'],
            "moq": b['moq'],
            "price": b['mrp'],
            "image_url": b['image'],
            "tags": b['tags'],
            "specifications": b['specs'],
            "branding_options": b['brandingOptions'],
            "colors": b['colors'],
            "catalog_page": b['catalogPage'],
            "is_active": True,
            "created_at": "2026-11-14T00:00:00.000Z",
            "updated_at": "2026-11-14T00:00:00.000Z"
        }
    
    # Also update any existing bags or gifts brand
    for pid, p in prods.items():
        if p.get('brand') == 'Globrands Lifestyle':
            p['brand'] = 'Globrands Lifestyle Pvt. Ltd.'
        if pid in [b['id'] for b in all_32_bags]:
            matching = next(b for b in all_32_bags if b['id'] == pid)
            p['image_url'] = matching['image']
            
    store['products'] = prods
    with open(store_path, 'w', encoding='utf-8') as f:
        json.dump(store, f, indent=2)
    print("Successfully updated .data/globrands_store.json!")
