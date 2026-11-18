import re

files = [
    'src/components/Hero.tsx',
    'src/components/BackpackCategoriesSection.tsx',
    'src/components/ManufacturingStorySection.tsx',
    'src/components/InHouseBrandsSpotlight.tsx',
    'src/components/CorporateGiftingSection.tsx',
    'src/components/EnterpriseTrustBar.tsx',
    'src/components/ContactSection.tsx',
    'src/components/Navbar.tsx'
]

for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        code = f.read()
    
    m = re.search(r'import\s+\{([^}]+)\}\s+from\s+[\'"]lucide-react[\'"]', code)
    if m:
        icons = [i.strip() for i in m.group(1).split(',') if i.strip()]
        body = code[m.end():]
        unused = [i for i in icons if not re.search(r'\b' + re.escape(i) + r'\b', body)]
        used = [i for i in icons if re.search(r'\b' + re.escape(i) + r'\b', body)]
        print(f"{fpath}:")
        print("  Used:", used)
        print("  Unused:", unused)
