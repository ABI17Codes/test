import os
import re

components = [
    'src/components/Hero.tsx',
    'src/components/BackpackCategoriesSection.tsx',
    'src/components/ManufacturingStorySection.tsx',
    'src/components/InHouseBrandsSpotlight.tsx',
    'src/components/CorporateGiftingSection.tsx',
    'src/components/EnterpriseTrustBar.tsx',
    'src/components/ContactSection.tsx',
    'src/components/Navbar.tsx',
    'src/components/Footer.tsx'
]

img_pattern = re.compile(r'src=[\'"](/[^\s\'"]+)[\'"]')
all_ok = True

for comp in components:
    with open(comp, 'r', encoding='utf-8') as f:
        content = f.read()
    matches = img_pattern.findall(content)
    for m in matches:
        local_path = os.path.join('public', m.lstrip('/'))
        exists = os.path.exists(local_path)
        if not exists:
            print(f'MISSING in {comp}: {m} -> {local_path}')
            all_ok = False
        else:
            print(f'OK [{comp}]: {m} ({os.path.getsize(local_path)} bytes)')

if all_ok:
    print('\n>>> ALL HOMEPAGE IMAGE ASSETS VERIFIED ON DISK! ZERO MISSING IMAGES!')
