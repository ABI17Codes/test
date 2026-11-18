import os
import urllib.request
from PIL import Image

def download_and_optimize(url, dest_path, target_size=(1600, 1100), crop=True):
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            temp_path = dest_path + ".tmp"
            with open(temp_path, "wb") as f:
                f.write(data)
            
            # Open with PIL, crop/resize nicely
            im = Image.open(temp_path).convert("RGB")
            if crop and target_size:
                tw, th = target_size
                im_w, im_h = im.size
                
                # Center crop to target aspect ratio
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
            
            im.save(dest_path, "JPEG", quality=90)
            if os.path.exists(temp_path):
                os.remove(temp_path)
            print(f"OK: {dest_path} -> {im.size}")
            return True
    except Exception as e:
        print(f"FAILED {dest_path}: {e}")
        return False

def main():
    photos = [
        # 1. Main Hero Backpack - Large, clearly visible, beautifully lit, TUMI / Bellroy style
        ("https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1800&q=85",
         "public/images/redesign/hero-backpack-master.jpg", (1800, 1200)),
        
        # 2. Product Categories: Asymmetrical Editorial Grid
        ("https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-laptop.jpg", (1200, 1400)), # Tall portrait for featured
        ("https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-business.jpg", (1200, 800)), # Wide landscape
        ("https://images.unsplash.com/photo-1546938576-6e6a64f317cc?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-travel.jpg", (1200, 900)),
        ("https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-college.jpg", (1200, 900)),
        ("https://images.unsplash.com/photo-1581605405669-fcdf81165afa?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-casual.jpg", (1200, 900)),
        ("https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=1400&q=85",
         "public/images/redesign/cat-custom.jpg", (1200, 900)),

        # 3. Manufacturing Story: Real Workshop & Industrial Craftsmanship
        ("https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1600&q=85",
         "public/images/redesign/mfg-hero-stitching.jpg", (1600, 1100)), # Large main heroic image
        ("https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/mfg-textile.jpg", (1000, 750)),
        ("https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/mfg-cutting.jpg", (1000, 750)),
        ("https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/mfg-assembly.jpg", (1000, 750)),
        ("https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/mfg-qc.jpg", (1000, 750)),

        # 4. Corporate Gifting: Luxury Arranged Welcome Kit
        ("https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1600&q=85",
         "public/images/redesign/gifting-welcome-kit.jpg", (1600, 1000)),
        ("https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/gifting-journal.jpg", (1000, 750)),
        ("https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=1000&q=85",
         "public/images/redesign/gifting-drinkware.jpg", (1000, 750)),

        # 5. In-House Brands: Distinct Lifestyle & Tactical Photography
        ("https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?auto=format&fit=crop&w=1600&q=85",
         "public/images/redesign/brand-adma-hero.jpg", (1400, 1000)), # British executive luxury
        ("https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1600&q=85",
         "public/images/redesign/brand-ninja-hero.jpg", (1400, 1000)), # Tactical stealth tech
    ]

    for url, path, size in photos:
        download_and_optimize(url, path, size)

if __name__ == "__main__":
    main()
