import os
import shutil
import urllib.request
from PIL import Image

def ensure_dir(path):
    os.makedirs(path, exist_ok=True)

def download_image(url, dest, target_size=None):
    ensure_dir(os.path.dirname(dest))
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    tmp = dest + ".tmp"
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(tmp, 'wb') as f:
                f.write(data)
        im = Image.open(tmp).convert("RGB")
        if target_size:
            tw, th = target_size
            im_w, im_h = im.size
            target_ratio = tw / th
            im_ratio = im_w / im_h
            if im_ratio > target_ratio:
                new_w = int(im_h * target_ratio)
                offset = (im_w - new_w) // 2
                im = im.crop((offset, 0, offset + new_w, im_h))
            else:
                new_h = int(im_w / target_ratio)
                offset = (im_h - new_h) // 2
                im = im.crop((0, offset, im_w, offset + new_h))
            im = im.resize((tw, th), Image.Resampling.LANCZOS)
        im.save(dest, "JPEG", quality=92)
        if os.path.exists(tmp):
            os.remove(tmp)
        print(f"Downloaded & optimized: {dest} -> {im.size}")
        return True
    except Exception as e:
        print(f"Error downloading {dest} from {url}: {e}")
        if os.path.exists(tmp):
            os.remove(tmp)
        return False

def copy_and_resize(src, dest, target_size=None):
    ensure_dir(os.path.dirname(dest))
    try:
        im = Image.open(src).convert("RGB")
        if target_size:
            im = im.resize(target_size, Image.Resampling.LANCZOS)
        im.save(dest, "JPEG", quality=92)
        print(f"Copied & processed: {src} -> {dest} ({im.size})")
        return True
    except Exception as e:
        print(f"Error copying {src} to {dest}: {e}")
        return False

def main():
    base = "public/images"
    
    # 1. Hero
    ensure_dir(f"{base}/hero")
    # Master Hero Backpack: Large, dramatic, technical backpack photograph
    download_image(
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1920&q=85",
        f"{base}/hero/hero-backpack.jpg",
        (1920, 1280)
    )

    # 2. Backpack Categories (Strictly Backpacks, Zero Handbags/Accessories)
    ensure_dir(f"{base}/backpacks/laptop")
    ensure_dir(f"{base}/backpacks/business")
    ensure_dir(f"{base}/backpacks/travel")
    ensure_dir(f"{base}/backpacks/school")
    ensure_dir(f"{base}/backpacks/casual")
    ensure_dir(f"{base}/backpacks/customized")

    # Laptop Backpack: Dedicated tech backpack with padded sleeve
    download_image(
        "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/laptop/laptop-backpack.jpg",
        (1200, 1400)
    )

    # Business Backpack: Sleek corporate executive carrywear
    download_image(
        "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/business/business-backpack.jpg",
        (1200, 900)
    )

    # Travel Backpack: 40L technical travel backpack with rain cover & compression straps
    download_image(
        "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/travel/travel-backpack.jpg",
        (1200, 900)
    )

    # School & College Backpack: Dual-compartment student campus backpack
    download_image(
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/school/school-backpack.jpg",
        (1200, 900)
    )

    # Casual Backpack: Everyday urban daypack
    download_image(
        "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/casual/casual-backpack.jpg",
        (1200, 900)
    )

    # Customized Backpack: Corporate backpack with custom branding / emblem
    download_image(
        "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=1400&q=85",
        f"{base}/backpacks/customized/customized-backpack.jpg",
        (1200, 900)
    )

    # 3. ADMA London (100% Genuine Studio Product Assets)
    ensure_dir(f"{base}/adma-london")
    copy_and_resize("public/catalog/backpacks-studio/bg-volvo-2.jpg", f"{base}/adma-london/featured.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-studio/bg-vip-2.jpg", f"{base}/adma-london/sub-1.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-studio/bg-nexa.jpg", f"{base}/adma-london/sub-2.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-studio/bg-ashwa.jpg", f"{base}/adma-london/sub-3.jpg", (800, 800))
    shutil.copy2("public/catalog/brands/adma_london_logo.jpg", f"{base}/adma-london/logo.jpg")

    # 4. Ninja Gear (100% Genuine Studio Product Assets - No Hoodies!)
    ensure_dir(f"{base}/ninja-gear")
    copy_and_resize("public/catalog/backpacks-dark/bg-boxer.jpg", f"{base}/ninja-gear/featured.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-dark/bg-inspire.jpg", f"{base}/ninja-gear/sub-1.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-dark/bg-aviator.jpg", f"{base}/ninja-gear/sub-2.jpg", (800, 800))
    copy_and_resize("public/catalog/backpacks-dark/bg-mountain.jpg", f"{base}/ninja-gear/sub-3.jpg", (800, 800))
    shutil.copy2("public/catalog/brands/ninja_gear_logo.jpg", f"{base}/ninja-gear/logo.jpg")

    # 5. Manufacturing Story (Real Industrial Craftsmanship)
    ensure_dir(f"{base}/manufacturing")
    download_image(
        "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85",
        f"{base}/manufacturing/hero-stitching.jpg",
        (1600, 1100)
    )
    download_image(
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
        f"{base}/manufacturing/fabric-selection.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
        f"{base}/manufacturing/cad-cutting.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1000&q=85",
        f"{base}/manufacturing/reinforcement.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
        f"{base}/manufacturing/quality-inspection.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1000&q=85",
        f"{base}/manufacturing/finished-assembly.jpg",
        (1000, 750)
    )

    # 6. Corporate Gifting (Curated Flat-Lays and Hampers)
    ensure_dir(f"{base}/corporate-gifting")
    download_image(
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85",
        f"{base}/corporate-gifting/welcome-kit.jpg",
        (1600, 1000)
    )
    download_image(
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1000&q=85",
        f"{base}/corporate-gifting/gift-boxes.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85",
        f"{base}/corporate-gifting/custom-merch.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
        f"{base}/corporate-gifting/promo-products.jpg",
        (1000, 750)
    )
    download_image(
        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=85",
        f"{base}/corporate-gifting/business-accessories.jpg",
        (1000, 750)
    )

    print("\n--- ASSET ORGANIZATION COMPLETE ---")

if __name__ == "__main__":
    main()
