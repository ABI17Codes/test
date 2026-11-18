import os
from PIL import Image, ImageFilter, ImageEnhance, ImageDraw

def create_mfg_card(out_path, title_accent, bg_color_top, bg_color_bot, detail_type):
    width, height = 1000, 750
    canvas = Image.new("RGB", (width, height), bg_color_top)
    draw = ImageDraw.Draw(canvas)

    # Vertical gradient
    r1, g1, b1 = bg_color_top
    r2, g2, b2 = bg_color_bot
    for y in range(height):
        ratio = y / height
        r = int(r1 * (1 - ratio) + r2 * ratio)
        g = int(g1 * (1 - ratio) + g2 * ratio)
        b = int(b1 * (1 - ratio) + b2 * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Architectural grid lines for engineering aesthetic
    grid_color = (255, 255, 255, 12)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    
    for x in range(0, width, 50):
        ov_draw.line([(x, 0), (x, height)], fill=grid_color)
    for y in range(0, height, 50):
        ov_draw.line([(0, y), (width, y)], fill=grid_color)

    # Ambient radial glow
    glow = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow)
    g_draw.ellipse(
        [(width // 2 - 280, height // 2 - 200), (width // 2 + 280, height // 2 + 200)],
        fill=(197, 164, 109, 30) # Champagne gold
    )
    glow = glow.filter(ImageFilter.GaussianBlur(90))
    overlay.alpha_composite(glow)
    canvas.paste(overlay, (0, 0), overlay)

    # Composite specific detail visual
    if detail_type == "fabric":
        # Ballistic texture overlay
        pattern = Image.new("RGBA", (width, height), (0, 0, 0, 0))
        p_draw = ImageDraw.Draw(pattern)
        for i in range(0, width, 16):
            for j in range(0, height, 16):
                p_draw.rectangle([(i, j), (i + 8, j + 8)], fill=(255, 255, 255, 6))
        canvas.paste(pattern, (0, 0), pattern)

    canvas.save(out_path, quality=95)
    print(f"Saved: {out_path} ({width}x{height})")

def main():
    os.makedirs("public/catalog/mfg", exist_ok=True)
    create_mfg_card("public/catalog/mfg/mfg-fabric.jpg", "FABRIC ENGINEERING", (26, 32, 44), (16, 20, 28), "fabric")
    create_mfg_card("public/catalog/mfg/mfg-cutting.jpg", "PRECISION CAD CUTTING", (32, 35, 41), (18, 20, 24), "cutting")
    create_mfg_card("public/catalog/mfg/mfg-assembly.jpg", "BAR-TACK REINFORCEMENT", (20, 28, 40), (12, 18, 28), "assembly")
    create_mfg_card("public/catalog/mfg/mfg-qc.jpg", "5-STAGE ZERO-DEFECT QC", (24, 28, 36), (14, 16, 22), "qc")

if __name__ == "__main__":
    main()
