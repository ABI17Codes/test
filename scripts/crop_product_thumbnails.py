import os
from PIL import Image

bags_dir = r"c:\Users\jbbas\OneDrive\Desktop\projects\Globrands\public\catalog\bags"
gifts_dir = r"c:\Users\jbbas\OneDrive\Desktop\projects\Globrands\public\catalog\gifts"
crops_dir = r"c:\Users\jbbas\OneDrive\Desktop\projects\Globrands\public\catalog\crops"
brands_dir = r"c:\Users\jbbas\OneDrive\Desktop\projects\Globrands\public\catalog\brands"

os.makedirs(crops_dir, exist_ok=True)
os.makedirs(brands_dir, exist_ok=True)

# 1. Extract Brand Logos from Bag Catalogue page 1
# Page 1 size:
page1 = Image.open(os.path.join(bags_dir, "page_01.jpg"))
w, h = page1.size

# Bottom section has the two brand logos on dark charcoal background
# Ninja Gear is bottom left, ADMA London is bottom right
# Bottom ~22% of page
bottom_y = int(h * 0.77)
ninja_logo = page1.crop((int(w * 0.12), bottom_y, int(w * 0.52), int(h * 0.96)))
ninja_logo.save(os.path.join(brands_dir, "ninja_gear_logo.jpg"))

adma_logo = page1.crop((int(w * 0.54), bottom_y, int(w * 0.90), int(h * 0.96)))
adma_logo.save(os.path.join(brands_dir, "adma_london_logo.jpg"))

print("Extracted brand logos.")

# 2. Crop featured products from Bag pages
# In bag pages (pages 4 to 35):
# Top left/center has the main large product image in a rounded rectangular container
# Let's crop the main product preview box:
# box roughly: x1=0.06*w, y1=0.20*h, x2=0.52*w, y2=0.58*h
bag_mapping = {
    4: "inspire_ninja_gear",
    5: "boxer_ninja_gear",
    6: "aviator_ninja_gear",
    7: "smart_adma_london",
    8: "nexa_adma_london",
    9: "essential_adma_london",
    10: "jio_adma_london",
    11: "jio_2_adma_london",
    12: "vip_adma_london",
    13: "vip_2_adma_london",
    14: "classic_adma_london",
    15: "volvo_adma_london",
    16: "volvo_2_adma_london",
    17: "businessman_ninja_gear",
    18: "businessman_2_adma_london",
    19: "soft_edge_ninja_gear",
    20: "alone_sleeve_adma_london",
    21: "duffle_bag_ninja_gear",
    22: "duffle_shine_ninja_gear",
    23: "royal_duffle_adma_london",
    24: "ashwa_multipurpose_adma_london",
    25: "gymbag_sports_adma_london",
    26: "ninja_sling_ninja_gear",
    27: "eno_sling_adma_london",
    28: "partner_sling_adma_london",
    29: "ninja_sleek_ninja_gear",
    30: "waist_pouch_adma_london",
    31: "toiletry_kit_ninja_gear",
    32: "strings_drawstring_adma_london",
    33: "gear_toolkit_adma_london",
    34: "kamiliant_rucksack_adma_london",
    35: "mountain_rucksack_ninja_gear",
}

for page_idx, name in bag_mapping.items():
    page_img = Image.open(os.path.join(bags_dir, f"page_{page_idx:02d}.jpg"))
    bw, bh = page_img.size
    # Main hero image box on the page
    main_box = page_img.crop((int(bw * 0.05), int(bh * 0.18), int(bw * 0.53), int(bh * 0.58)))
    main_box.save(os.path.join(crops_dir, f"{name}_main.jpg"))

print(f"Extracted {len(bag_mapping)} bag main product crops.")

# 3. Crop Gift sets from ALL In One
# Pages 62 to 113 have two gift sets per page: Top half is Set 1, Bottom half is Set 2.
# Left side of each half is the product photo box!
# Top gift box: x1=0.03*gw, y1=0.05*gh, x2=0.51*gw, y2=0.48*gh
# Bottom gift box: x1=0.03*gw, y1=0.55*gh, x2=0.51*gw, y2=0.98*gh

gift_sample_pages = [
    (62, "hgs_h01", "hgs_h02"),
    (64, "hgs_h03", "hgs_h04"),
    (81, "hgs_h35", "hgs_h36"),
    (82, "hgs_h37", "hgs_h38"),
    (83, "hgs_h39", "hgs_h40"),
    (91, "hgs_h55", "hgs_h56"),
    (92, "hgs_h57", "hgs_h58"),
    (96, "hgs_h65", "hgs_h66"),
    (97, "hgs_h67", "hgs_h68"),
    (99, "hgs_h71", "hgs_h72"),
    (100, "hgs_h73", "hgs_h74"),
    (101, "hgs_h75", "hgs_h76"),
    (105, "hgs_h83", "hgs_h84"),
    (106, "hgs_h85", "hgs_h86"),
    (110, "hgs_h93", "hgs_h94"),
]

for page_idx, top_name, bot_name in gift_sample_pages:
    page_img = Image.open(os.path.join(gifts_dir, f"page_{page_idx:03d}.jpg"))
    gw, gh = page_img.size
    top_box = page_img.crop((int(gw * 0.02), int(gh * 0.05), int(gw * 0.52), int(gh * 0.48)))
    top_box.save(os.path.join(crops_dir, f"{top_name}.jpg"))
    
    bot_box = page_img.crop((int(gw * 0.02), int(gh * 0.55), int(gw * 0.52), int(gh * 0.98)))
    bot_box.save(os.path.join(crops_dir, f"{bot_name}.jpg"))

# 4. Crop Drinkware & Mugs
# E.g. Page 114 (Bottles H101, H102), Page 127 (H125 Temp Display, H126), Page 132 (H135 Bamboo Temp, H136 Wood finish), Page 135 (Mugs H205, H206 Bamboo), Page 141 (Cork base H217, H218)
drinkware_pages = [
    (114, "hgs_h101", "hgs_h102"),
    (123, "hgs_h117_bamboo", "hgs_h118_vacuum"),
    (127, "hgs_h125_temp_display", "hgs_h126_rope"),
    (132, "hgs_h135_bamboo_temp", "hgs_h136_wood_finish"),
    (134, "hgs_h203_tumbler", "hgs_h204_bamboo_mug"),
    (135, "hgs_h205_steel_mug", "hgs_h206_bamboo_tumbler"),
    (140, "hgs_h215_cork_mug", "hgs_h216_coffee_cup"),
    (141, "hgs_h217_ceramic_cork", "hgs_h218_black_mug"),
]

for page_idx, top_name, bot_name in drinkware_pages:
    page_img = Image.open(os.path.join(gifts_dir, f"page_{page_idx:03d}.jpg"))
    gw, gh = page_img.size
    top_box = page_img.crop((int(gw * 0.02), int(gh * 0.02), int(gw * 0.50), int(gh * 0.50)))
    top_box.save(os.path.join(crops_dir, f"{top_name}.jpg"))
    bot_box = page_img.crop((int(gw * 0.50), int(gh * 0.50), int(gw * 0.98), int(gh * 0.98)))
    bot_box.save(os.path.join(crops_dir, f"{bot_name}.jpg"))

# 5. Crop Executive Diaries (Pages 1 to 35 in gifts)
diaries_pages = [
    (1, "diary_no_13_a5"),
    (4, "diary_no_03_leather"),
    (11, "diary_no_12_mobile_pocket"),
    (27, "diary_no_51_wooden"),
    (38, "diary_no_64_gold_fitting"),
    (41, "diary_no_67_engrave_changer"),
]
for page_idx, name in diaries_pages:
    page_img = Image.open(os.path.join(gifts_dir, f"page_{page_idx:03d}.jpg"))
    gw, gh = page_img.size
    # Top hero diary
    d_box = page_img.crop((int(gw * 0.35), int(gh * 0.03), int(gw * 0.95), int(gh * 0.52)))
    d_box.save(os.path.join(crops_dir, f"{name}.jpg"))

print("Cropping finished successfully!")
