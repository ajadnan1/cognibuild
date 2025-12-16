from PIL import Image

def crop_and_remove_bg(input_path, output_path):
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    # 1. Remove white background with higher tolerance
    datas = img.getdata()
    newData = []
    for item in datas:
        # Check if pixel is white-ish (tolerance 200)
        # item[0] is R, item[1] is G, item[2] is B
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)

    # 2. Crop transparent borders tightly
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    # 3. Save as PNG
    img.save(output_path, "PNG")
    print(f"Processed image saved to {output_path}")

try:
    # Use the one we just generated in step 203/209 but wait, user might want the manual one?
    # Actually let's just use the current one.
    crop_and_remove_bg("public/logo.png", "public/logo_trimmed.png")
except Exception as e:
    print(f"Error: {e}")
