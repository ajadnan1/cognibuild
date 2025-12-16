from PIL import Image
import os

def process_image(input_path, output_path):
    print(f"Processing {input_path}")
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        newData = []

        # Simple white removal
        for item in datas:
            # High tolerance for white background
            if item[0] > 240 and item[1] > 240 and item[2] > 240:
                newData.append((255, 255, 255, 0))
            else:
                newData.append(item)

        img.putdata(newData)
        
        # Crop
        bbox = img.getbbox()
        if bbox:
            img = img.crop(bbox)
            
        img.save(output_path, "PNG")
        print(f"Saved to {output_path}")
    except Exception as e:
        print(f"Failed to process {input_path}: {e}")

# Process the numbered files directly to the named files
pairs = [
    ("public/services/1.png", "public/services/ai-automation.png"),
    ("public/services/2.png", "public/services/data-engineering.png"),
    ("public/services/3.png", "public/services/custom-projects.png")
]

for src, dest in pairs:
    process_image(src, dest)
