import fitz
import io
import os
from PIL import Image, ImageFilter, ImageOps, ImageDraw, ImageEnhance
import numpy as np

pdf_path = r"C:\Users\jbbas\.gemini\antigravity\brain\93486b88-295a-46f0-b67e-c37549b853a5\.user_uploaded\media_1793347859565_67c384bf.pdf"
doc = fitz.open(pdf_path)

out_studio_dir = r"public/catalog/backpacks-studio"
out_dark_dir = r"public/catalog/backpacks-dark"

os.makedirs(out_studio_dir, exist_ok=True)
os.makedirs(out_dark_dir, exist_ok=True)

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

def isolate(im_rgb):
    im = im_rgb.convert('RGBA')
    arr = np.array(im)
    dist = np.linalg.norm(255.0 - arr[:, :, :3].astype(float), axis=2)
    alpha = np.clip((dist - 14.0) * 12.0, 0, 255).astype(np.uint8)
    mask = Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(0.7))
    im.putalpha(mask)
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    return im

def build_renders(bag_rgba, brand, bag_id):
    canvas_w, canvas_h = 800, 800
    
    max_h = 630
    max_w = 640
    ratio = min(max_h / bag_rgba.height, max_w / bag_rgba.width)
    new_w = int(bag_rgba.width * ratio)
    new_h = int(bag_rgba.height * ratio)
    
    resized_bag = bag_rgba.resize((new_w, new_h), Image.Resampling.LANCZOS)
    enhancer = ImageEnhance.Sharpness(resized_bag)
    resized_bag = enhancer.enhance(1.25)
    
    paste_x = (canvas_w - new_w) // 2
    paste_y = (canvas_h - 60) - new_h
    if paste_y < 40:
        paste_y = 40
        
    # 1. Transparent PNG
    png_canvas = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    
    base_y = paste_y + new_h
    sw1 = int(new_w * 0.75)
    sx1 = (canvas_w - sw1) // 2
    s_draw.ellipse([(sx1, base_y - 14), (sx1 + sw1, base_y + 16)], fill=(33, 29, 26, 95))
    
    sw2 = int(new_w * 0.92)
    sx2 = (canvas_w - sw2) // 2
    s_draw.ellipse([(sx2, base_y - 8), (sx2 + sw2, base_y + 24)], fill=(33, 29, 26, 45))
    
    shadow = shadow.filter(ImageFilter.GaussianBlur(12))
    png_canvas.paste(shadow, (0, 0), shadow)
    png_canvas.paste(resized_bag, (paste_x, paste_y), resized_bag)
    
    png_path = os.path.join(out_studio_dir, f'{bag_id}.png')
    png_canvas.save(png_path)
    
    # 2. Studio JPG
    jpg_canvas = Image.new('RGB', (canvas_w, canvas_h), (250, 247, 242))
    j_draw = ImageDraw.Draw(jpg_canvas)
    center_x, center_y = canvas_w // 2, int(canvas_h * 0.48)
    for r in range(480, 0, -16):
        frac = r / 480.0
        cr = int(245 + 10 * (1 - frac))
        cg = int(240 + 15 * (1 - frac))
        cb = int(232 + 23 * (1 - frac))
        j_draw.ellipse([(center_x - r, center_y - r), (center_x + r, center_y + r)], fill=(cr, cg, cb))
        
    jpg_canvas.paste(png_canvas, (0, 0), png_canvas)
    jpg_path = os.path.join(out_studio_dir, f'{bag_id}.jpg')
    jpg_canvas.save(jpg_path, quality=95)
    
    # 3. Dark Studio JPG
    dark_canvas = Image.new('RGB', (canvas_w, canvas_h), (22, 29, 42))
    d_draw = ImageDraw.Draw(dark_canvas)
    for r in range(480, 0, -16):
        frac = r / 480.0
        cr = int(14 + 18 * (1 - frac))
        cg = int(20 + 22 * (1 - frac))
        cb = int(32 + 26 * (1 - frac))
        d_draw.ellipse([(center_x - r, center_y - r), (center_x + r, center_y + r)], fill=(cr, cg, cb))
        
    dark_shadow = Image.new('RGBA', (canvas_w, canvas_h), (0, 0, 0, 0))
    ds_draw = ImageDraw.Draw(dark_shadow)
    ds_draw.ellipse([(sx1, base_y - 12), (sx1 + sw1, base_y + 18)], fill=(0, 0, 0, 160))
    ds_draw.ellipse([(sx2, base_y - 6), (sx2 + sw2, base_y + 26)], fill=(0, 0, 0, 80))
    dark_shadow = dark_shadow.filter(ImageFilter.GaussianBlur(14))
    
    dark_canvas.paste(dark_shadow, (0, 0), dark_shadow)
    dark_canvas.paste(resized_bag, (paste_x, paste_y), resized_bag)
    dark_path = os.path.join(out_dark_dir, f'{bag_id}.jpg')
    dark_canvas.save(dark_path, quality=95)

if __name__ == '__main__':
    for page_num, (bag_id, xref, brand) in bag_mapping.items():
        base_img = doc.extract_image(xref)
        raw_im = Image.open(io.BytesIO(base_img['image']))
        bag_rgba = isolate(raw_im)
        build_renders(bag_rgba, brand, bag_id)
        print(f"Generated clean visuals for {bag_id}")
