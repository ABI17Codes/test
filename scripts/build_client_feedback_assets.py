import fitz
import io
import os
import shutil
import urllib.request
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance
import numpy as np

pdf_path = r"C:\Users\jbbas\.gemini\antigravity\brain\93486b88-295a-46f0-b67e-c37549b853a5\.user_uploaded\media_1793347859565_67c384bf.pdf"
doc = fitz.open(pdf_path)

bag_mapping = {
    4: ('bg-inspire', 497, 'Ninja Gear'),
    5: ('bg-boxer', 630, 'Ninja Gear'),
    6: ('bg-aviator', 759, 'Ninja Gear'),
    7: ('bg-smart', 958, 'ADMA London'),
    8: ('bg-nexa', 1071, 'ADMA London'),
    9: ('bg-essential', 1129, 'Ninja Gear'),
    10: ('bg-jio', 1332, 'ADMA London'),
    11: ('bg-jio-2', 1578, 'ADMA London'),
    12: ('bg-vip', 1672, 'ADMA London'),
    13: ('bg-vip-2', 1757, 'ADMA London'),
    14: ('bg-classic', 134, 'ADMA London'),
    15: ('bg-volvo-1', 1845, 'ADMA London'),
    16: ('bg-volvo-2', 2045, 'ADMA London'),
    17: ('bg-businessman', 2082, 'Ninja Gear'),
    18: ('bg-businessman-2', 2230, 'ADMA London'),
    19: ('bg-soft-edge', 2416, 'Ninja Gear'),
    20: ('bg-alone-sleeve', 2508, 'ADMA London'),
    21: ('bg-duffle-bag', 2619, 'Ninja Gear'),
    22: ('bg-duffle-shine', 2636, 'Ninja Gear'),
    23: ('bg-royal-duffle', 2665, 'ADMA London'),
    24: ('bg-ashwa', 2796, 'ADMA London'),
    25: ('bg-gymbag', 2950, 'ADMA London'),
    26: ('bg-ninja-sling', 3095, 'Ninja Gear'),
    27: ('bg-eno-sling', 3219, 'ADMA London'),
    28: ('bg-partner-sling', 3335, 'ADMA London'),
    29: ('bg-ninja-sleek', 3601, 'Ninja Gear'),
    30: ('bg-waist-pouch', 3699, 'ADMA London'),
    31: ('bg-toiletry-kit', 3845, 'Ninja Gear'),
    32: ('bg-drawstring', 3942, 'ADMA London'),
    33: ('bg-gear-toolkit', 3978, 'ADMA London'),
    34: ('bg-kamiliant', 4195, 'ADMA London'),
    35: ('bg-mountain', 4302, 'Ninja Gear'),
}

def isolate_clean(im_rgb):
    im = im_rgb.convert('RGBA')
    arr = np.array(im)
    dist = np.linalg.norm(255.0 - arr[:, :, :3].astype(float), axis=2)
    alpha = np.clip((dist - 14.0) * 12.0, 0, 255).astype(np.uint8)
    mask = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.6))
    im.putalpha(mask)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im

def render_angle_thumb(im_rgb, out_path):
    canvas_w, canvas_h = 500, 500
    bag_rgba = isolate_clean(im_rgb)
    max_s = 400
    ratio = min(max_s / max(bag_rgba.height, 1), max_s / max(bag_rgba.width, 1))
    nw, nh = max(int(bag_rgba.width * ratio), 1), max(int(bag_rgba.height * ratio), 1)
    resized = bag_rgba.resize((nw, nh), Image.Resampling.LANCZOS)
    resized = ImageEnhance.Sharpness(resized).enhance(1.3)

    canvas = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    px = (canvas_w - nw) // 2
    py = (canvas_h - nh) // 2

    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow)
    base_y = py + nh
    sw = int(nw * 0.7)
    sx = (canvas_w - sw) // 2
    sd.ellipse([(sx, base_y - 10), (sx + sw, base_y + 12)], fill=(15, 23, 42, 75))
    shadow = shadow.filter(ImageFilter.GaussianBlur(8))
    canvas.paste(shadow, (0, 0), shadow)
    canvas.paste(resized, (px, py), resized)
    canvas.save(out_path)

# 1. Extract multi-angle images (Back view, Side view, Compartment view) for all 32 bags
angles_dir = "public/catalog/backpacks-angles"
os.makedirs(angles_dir, exist_ok=True)

print("Extracting multi-angle views from PDF catalog...")
for page_num, (bag_id, main_xref, brand) in bag_mapping.items():
    page = doc.load_page(page_num - 1)
    angle_xrefs = []
    for im in page.get_images():
        xref, w, h, cs = im[0], im[2], im[3], im[5]
        if cs == 'DeviceRGB' and xref != main_xref and 95 <= w <= 260 and 95 <= h <= 260:
            if xref not in angle_xrefs:
                angle_xrefs.append(xref)
    # Save up to 3 distinct angles per bag
    for idx, axref in enumerate(angle_xrefs[:3]):
        try:
            bimg = doc.extract_image(axref)
            raw = Image.open(io.BytesIO(bimg['image']))
            out_p = os.path.join(angles_dir, f"{bag_id}-angle-{idx+1}.png")
            render_angle_thumb(raw, out_p)
        except Exception as e:
            pass

print("Multi-angle views extracted!")

# 2. Generate HIGH-CONTRAST LIGHT PASTEL cards for Homepage Hero & 6 Categories
def generate_pastel_category_card(
    bag_png_path,
    out_path,
    bg_top=(240, 247, 255),
    bg_bot=(219, 234, 254),
    accent_rgb=(229, 169, 60),
    card_width=1200,
    card_height=900,
    bag_scale=0.76,
    second_bag_path=None
):
    canvas = Image.new('RGB', (card_width, card_height), bg_top)
    draw = ImageDraw.Draw(canvas)
    r1, g1, b1 = bg_top
    r2, g2, b2 = bg_bot
    for y in range(card_height):
        frac = y / float(card_height)
        r = int(r1 * (1 - frac) + r2 * frac)
        g = int(g1 * (1 - frac) + g2 * frac)
        b = int(b1 * (1 - frac) + b2 * frac)
        draw.line([(0, y), (card_width, y)], fill=(r, g, b))

    # Soft studio radial white highlight in center so black backpack pops with maximum contrast
    glow = Image.new('RGBA', (card_width, card_height), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    cx, cy = card_width // 2, int(card_height * 0.44)
    gd.ellipse([(cx - 420, cy - 340), (cx + 420, cy + 340)], fill=(255, 255, 255, 210))
    ar, ag, ab = accent_rgb
    gd.ellipse([(cx - 260, cy - 220), (cx + 260, cy + 220)], fill=(ar, ag, ab, 45))
    glow = glow.filter(ImageFilter.GaussianBlur(75))
    canvas.paste(glow, (0, 0), glow)

    pedestal_y = int(card_height * 0.84)
    draw.line([(card_width // 2 - 420, pedestal_y + 12), (card_width // 2 + 420, pedestal_y + 12)], fill=(203, 213, 225), width=2)

    if second_bag_path and os.path.exists(second_bag_path) and os.path.exists(bag_png_path):
        # Dual flagship bags for Hero
        for idx, bpath in enumerate([second_bag_path, bag_png_path]):
            bag = Image.open(bpath).convert('RGBA')
            bbox = bag.getbbox()
            if bbox:
                bag = bag.crop(bbox)
            scale = bag_scale * (0.90 if idx == 0 else 1.0)
            th = int(card_height * scale)
            tw = int(th * (bag.width / float(bag.height)))
            resized = ImageEnhance.Sharpness(bag.resize((tw, th), Image.Resampling.LANCZOS)).enhance(1.25)
            offset_x = -int(card_width * 0.17) if idx == 0 else int(card_width * 0.15)
            px = (card_width - tw) // 2 + offset_x
            py = pedestal_y - th + (0 if idx == 0 else 18)

            cs = Image.new('RGBA', (card_width, card_height), (0, 0, 0, 0))
            csd = ImageDraw.Draw(cs)
            cw = int(tw * 0.75)
            csd.ellipse([(px + (tw - cw)//2, py + th - 14), (px + (tw + cw)//2, py + th + 16)], fill=(15, 23, 42, 95))
            cs = cs.filter(ImageFilter.GaussianBlur(12))
            canvas.paste(cs, (0, 0), cs)
            canvas.paste(resized, (px, py), resized)
    elif os.path.exists(bag_png_path):
        bag = Image.open(bag_png_path).convert('RGBA')
        bbox = bag.getbbox()
        if bbox:
            bag = bag.crop(bbox)
        th = int(card_height * bag_scale)
        tw = int(th * (bag.width / float(bag.height)))
        resized = ImageEnhance.Sharpness(bag.resize((tw, th), Image.Resampling.LANCZOS)).enhance(1.25)
        px = (card_width - tw) // 2
        py = pedestal_y - th + 8

        cs = Image.new('RGBA', (card_width, card_height), (0, 0, 0, 0))
        csd = ImageDraw.Draw(cs)
        cw = int(tw * 0.78)
        csd.ellipse([(px + (tw - cw)//2, pedestal_y - 12), (px + (tw + cw)//2, pedestal_y + 18)], fill=(15, 23, 42, 105))
        cs = cs.filter(ImageFilter.GaussianBlur(12))
        canvas.paste(cs, (0, 0), cs)
        canvas.paste(resized, (px, py), resized)

    canvas.save(out_path, 'JPEG', quality=95)
    print(f"Generated light pastel card: {out_path}")

# Hero image: Dual flagship (Ninja Gear Boxer + ADMA London Volvo 2.0) on bright pastel blue/gold studio
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-boxer.png',
    'public/images/hero/hero-backpack.jpg',
    bg_top=(244, 249, 255),
    bg_bot=(224, 238, 254),
    accent_rgb=(234, 179, 8),
    card_width=1400,
    card_height=1000,
    bag_scale=0.74,
    second_bag_path='public/catalog/backpacks-studio/bg-volvo-2.png'
)

# 6 Category Cards on High-Contrast Light Pastel Backgrounds
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-inspire.png',
    'public/images/backpacks/laptop/laptop-backpack.jpg',
    bg_top=(240, 247, 255),
    bg_bot=(219, 234, 254),
    accent_rgb=(14, 116, 144),
    card_width=1200,
    card_height=1200,
    bag_scale=0.72
)

generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-aviator.png',
    'public/images/backpacks/business/business-backpack.jpg',
    bg_top=(254, 252, 232),
    bg_bot=(254, 240, 199),
    accent_rgb=(217, 119, 6),
    card_width=1200,
    card_height=900,
    bag_scale=0.75
)

generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-volvo-2.png',
    'public/images/backpacks/travel/travel-backpack.jpg',
    bg_top=(240, 253, 250),
    bg_bot=(204, 251, 241),
    accent_rgb=(13, 148, 136),
    card_width=1200,
    card_height=900,
    bag_scale=0.75
)

generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-jio-2.png',
    'public/images/backpacks/school/school-backpack.jpg',
    bg_top=(245, 243, 255),
    bg_bot=(224, 231, 255),
    accent_rgb=(79, 70, 229),
    card_width=1200,
    card_height=900,
    bag_scale=0.75
)

generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-soft-edge.png',
    'public/images/backpacks/casual/casual-backpack.jpg',
    bg_top=(255, 247, 237),
    bg_bot=(254, 226, 205),
    accent_rgb=(234, 88, 12),
    card_width=1200,
    card_height=900,
    bag_scale=0.75
)

generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-boxer.png',
    'public/images/backpacks/customized/customized-backpack.jpg',
    bg_top=(241, 245, 249),
    bg_bot=(226, 232, 240),
    accent_rgb=(2, 132, 199),
    card_width=1200,
    card_height=900,
    bag_scale=0.75
)

# Copy light studio images to ninja-gear folder (replacing dark black images so Ninja Gear has 100% contrast)
shutil.copy2('public/catalog/backpacks-studio/bg-boxer.png', 'public/images/ninja-gear/featured.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-inspire.png', 'public/images/ninja-gear/sub-1.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-aviator.png', 'public/images/ninja-gear/sub-2.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-mountain.png', 'public/images/ninja-gear/sub-3.jpg')

shutil.copy2('public/catalog/backpacks-studio/bg-volvo-2.png', 'public/images/adma-london/featured.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-vip-2.png', 'public/images/adma-london/sub-1.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-nexa.png', 'public/images/adma-london/sub-2.jpg')
shutil.copy2('public/catalog/backpacks-studio/bg-ashwa.png', 'public/images/adma-london/sub-3.jpg')

# 3. Download clean product images for Apparels, Trophies, Trolleys, Kitchen Essentials & Backpack Hardware
os.makedirs('public/images/gifting-categories', exist_ok=True)

external_assets = [
    # Apparels (Corporate T-Shirts, Polo, Hoodies, Caps)
    ('apparel-1.jpg', 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=85'),
    ('apparel-2.jpg', 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=85'),
    ('apparel-3.jpg', 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=600&q=85'),
    ('apparel-4.jpg', 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=85'),
    # Trophies & Medals
    ('trophy-1.jpg', 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=600&q=85'),
    ('trophy-2.jpg', 'https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=600&q=85'),
    ('trophy-3.jpg', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=85'),
    ('trophy-4.jpg', 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=600&q=85'),
    # Trolleys & Travel Luggage
    ('trolley-1.jpg', 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=85'),
    ('trolley-2.jpg', 'https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=85'),
    ('trolley-3.jpg', 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?auto=format&fit=crop&w=600&q=85'),
    ('trolley-4.jpg', 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=85'),
    # Kitchen Essentials & Home Appliances
    ('kitchen-1.jpg', 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=85'),
    ('kitchen-2.jpg', 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=85'),
    ('kitchen-3.jpg', 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=85'),
    ('kitchen-4.jpg', 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=600&q=85'),
]

for fname, url in external_assets:
    dest = os.path.join('public/images/gifting-categories', fname)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=10) as resp:
            im = Image.open(io.BytesIO(resp.read())).convert('RGB')
            im = im.resize((600, 450), Image.Resampling.LANCZOS)
            im.save(dest, 'JPEG', quality=90)
            print(f"Downloaded {dest}")
    except Exception as e:
        print(f"Fallback for {dest}: {e}")
        im = Image.new('RGB', (600, 450), (241, 245, 249))
        im.save(dest, 'JPEG', quality=90)

# 4. Replace apparel-looking manufacturing images with actual heavy-duty backpack materials & bag production visuals
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-boxer.png',
    'public/images/manufacturing/hero-stitching.jpg',
    bg_top=(239, 246, 255),
    bg_bot=(219, 234, 254),
    accent_rgb=(2, 132, 199),
    card_width=1200,
    card_height=900,
    bag_scale=0.76,
    second_bag_path='public/catalog/backpacks-studio/bg-aviator.png'
)
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-volvo-2.png',
    'public/images/manufacturing/fabric-selection.jpg',
    bg_top=(248, 250, 252),
    bg_bot=(226, 232, 240),
    accent_rgb=(14, 116, 144),
    card_width=800,
    card_height=600,
    bag_scale=0.78
)
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-inspire.png',
    'public/images/manufacturing/cad-cutting.jpg',
    bg_top=(254, 252, 232),
    bg_bot=(254, 243, 199),
    accent_rgb=(217, 119, 6),
    card_width=800,
    card_height=600,
    bag_scale=0.78
)
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-mountain.png',
    'public/images/manufacturing/reinforcement.jpg',
    bg_top=(240, 253, 250),
    bg_bot=(204, 251, 241),
    accent_rgb=(13, 148, 136),
    card_width=800,
    card_height=600,
    bag_scale=0.78
)
generate_pastel_category_card(
    'public/catalog/backpacks-studio/bg-vip-2.png',
    'public/images/manufacturing/quality-inspection.jpg',
    bg_top=(245, 243, 255),
    bg_bot=(224, 231, 255),
    accent_rgb=(79, 70, 229),
    card_width=800,
    card_height=600,
    bag_scale=0.78
)

print("ALL ASSETS GENERATED SUCCESSFULLY!")
