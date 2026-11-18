import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

curr = {}
products = []
for line in lines:
    line = line.strip()
    if line.startswith('id:'):
        curr['id'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('code:'):
        curr['code'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('name:'):
        curr['name'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('brand:'):
        curr['brand'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('category:'):
        curr['category'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('image:'):
        curr['image'] = line.split(':', 1)[1].strip().strip("',\"")
    elif line.startswith('moq:'):
        curr['moq'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('mrp:'):
        curr['mrp'] = line.split(':')[1].strip().strip("',\"")
    elif line.startswith('description:'):
        curr['desc'] = line.split(':', 1)[1].strip().strip("',\"")
    elif line.startswith('tags:'):
        curr['tags'] = line.split(':', 1)[1].strip().strip("',\"")
    elif line.startswith('},') and 'id' in curr:
        products.append(curr)
        curr = {}

print(f"Total products parsed: {len(products)}")
print("\n--- ADMA LONDON PRODUCTS ---")
adma = [p for p in products if p.get('brand') == 'ADMA London']
for p in adma:
    print(f"ID: {p.get('id')} | Name: {p.get('name')} | Image: {p.get('image')} | Desc: {p.get('desc')[:40] if p.get('desc') else ''}")

print("\n--- NINJA GEAR PRODUCTS ---")
ninja = [p for p in products if p.get('brand') == 'Ninja Gear']
for p in ninja:
    print(f"ID: {p.get('id')} | Name: {p.get('name')} | Image: {p.get('image')} | Desc: {p.get('desc')[:40] if p.get('desc') else ''}")
