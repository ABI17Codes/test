import fitz # PyMuPDF
import os
from PIL import Image
import io

bag_pdf = r"C:\Users\jbbas\.gemini\antigravity\brain\93486b88-295a-46f0-b67e-c37549b853a5\.user_uploaded\media_1793347859565_67c384bf.pdf"
gift_pdf = r"C:\Users\jbbas\.gemini\antigravity\brain\93486b88-295a-46f0-b67e-c37549b853a5\.user_uploaded\media_1793348025982_f6a21a1c.pdf"

out_dir = r"c:\Users\jbbas\OneDrive\Desktop\projects\Globrands\public\catalog"
os.makedirs(out_dir, exist_ok=True)
os.makedirs(os.path.join(out_dir, "bags"), exist_ok=True)
os.makedirs(os.path.join(out_dir, "gifts"), exist_ok=True)

# 1. Inspect Bag PDF
doc_bags = fitz.open(bag_pdf)
print(f"Bag PDF pages: {len(doc_bags)}")

# 2. Inspect Gift PDF
doc_gifts = fitz.open(gift_pdf)
print(f"Gift PDF pages: {len(doc_gifts)}")

# Render high-res page screenshots
for page_num in range(len(doc_bags)):
    page = doc_bags[page_num]
    pix = page.get_pixmap(dpi=150)
    out_path = os.path.join(out_dir, "bags", f"page_{page_num+1:02d}.jpg")
    pix.save(out_path)

print(f"Saved {len(doc_bags)} bag catalog pages as high-res images.")

for page_num in range(len(doc_gifts)):
    page = doc_gifts[page_num]
    pix = page.get_pixmap(dpi=130)
    out_path = os.path.join(out_dir, "gifts", f"page_{page_num+1:03d}.jpg")
    pix.save(out_path)

print(f"Saved {len(doc_gifts)} gift catalog pages as high-res images.")

