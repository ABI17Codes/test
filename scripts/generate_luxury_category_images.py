import os
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

def create_editorial_card(source_bag_path, out_path, bg_color_top, bg_color_bot, accent_color=None):
    width, height = 1200, 896
    canvas = Image.new("RGB", (width, height), bg_color_top)
    draw = ImageDraw.Draw(canvas)

    # Gradient background
    r1, g1, b1 = bg_color_top
    r2, g2, b2 = bg_color_bot
    for y in range(height):
        ratio = y / height
        r = int(r1 * (1 - ratio) + r2 * ratio)
        g = int(g1 * (1 - ratio) + g2 * ratio)
        b = int(b1 * (1 - ratio) + b2 * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Add subtle architectural studio lighting/circle
    if accent_color:
        accent_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        accent_draw = ImageDraw.Draw(accent_layer)
        # Soft ambient glow
        accent_draw.ellipse(
            [(width // 2 - 380, height // 2 - 320), (width // 2 + 380, height // 2 + 320)],
            fill=accent_color
        )
        accent_layer = accent_layer.filter(ImageFilter.GaussianBlur(120))
        canvas.paste(accent_layer, (0, 0), accent_layer)

    # Floor shadow plinth
    shadow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow_layer)
    s_draw.ellipse(
        [(width // 2 - 340, height - 210), (width // 2 + 340, height - 90)],
        fill=(10, 15, 25, 140)
    )
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(35))
    canvas.paste(shadow_layer, (0, 0), shadow_layer)

    # Load authentic bag
    if os.path.exists(source_bag_path):
        bag = Image.open(source_bag_path).convert("RGBA")
        # Resize bag to fit prominently
        target_h = int(height * 0.74)
        aspect = bag.width / bag.height
        target_w = int(target_h * aspect)
        bag = bag.resize((target_w, target_h), Image.Resampling.LANCZOS)
        
        # Position centered
        pos_x = (width - target_w) // 2
        pos_y = height - target_h - 130
        
        # Soft ground contact shadow
        contact_shadow = Image.new("RGBA", (target_w, 40), (0, 0, 0, 0))
        cs_draw = ImageDraw.Draw(contact_shadow)
        cs_draw.ellipse([(20, 5), (target_w - 20, 35)], fill=(5, 8, 15, 180))
        contact_shadow = contact_shadow.filter(ImageFilter.GaussianBlur(10))
        canvas.paste(contact_shadow, (pos_x, pos_y + target_h - 25), contact_shadow)

        canvas.paste(bag, (pos_x, pos_y), bag)

    # Subtle contrast enhancement
    enhancer = ImageEnhance.Contrast(canvas)
    canvas = enhancer.enhance(1.04)

    canvas.save(out_path, quality=95)
    print(f"Saved: {out_path} ({width}x{height})")

def main():
    os.makedirs("public/catalog", exist_ok=True)

    # 3. Travel Backpacks: ADMA London Volvo 2.0 (38L Rain Cover)
    create_editorial_card(
        "public/catalog/backpacks-studio/bg-volvo-2.jpg",
        "public/catalog/cat-travel-backpack.jpg",
        bg_color_top=(24, 32, 44),
        bg_color_bot=(15, 20, 30),
        accent_color=(197, 164, 109, 45) # Champagne gold subtle glow
    )

    # 4. School & College Backpacks: Ninja Gear JIO 2.0
    create_editorial_card(
        "public/catalog/backpacks-studio/bg-jio-2.jpg",
        "public/catalog/cat-school-college.jpg",
        bg_color_top=(245, 243, 238),
        bg_color_bot=(228, 225, 218),
        accent_color=(197, 164, 109, 30) # Warm ivory studio tone
    )

    # 5. Casual Backpacks: ADMA London Soft Edge
    create_editorial_card(
        "public/catalog/backpacks-studio/bg-soft-edge.jpg",
        "public/catalog/cat-casual-backpack.jpg",
        bg_color_top=(238, 240, 243),
        bg_color_bot=(218, 222, 228),
        accent_color=(20, 36, 58, 25) # Cool slate tone
    )

    # 6. Customized Backpacks: Ninja Gear Boxer (Antitheft + Hardware)
    create_editorial_card(
        "public/catalog/backpacks-studio/bg-boxer.jpg",
        "public/catalog/cat-customized-backpack.jpg",
        bg_color_top=(28, 30, 36),
        bg_color_bot=(16, 18, 22),
        accent_color=(197, 164, 109, 50) # Deep charcoal & champagne
    )

if __name__ == "__main__":
    main()
