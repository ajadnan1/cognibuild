from PIL import Image
import sys

def process_logo(input_path, output_path):
    print(f"Processing {input_path} -> {output_path}")
    img = Image.open(input_path).convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    # Remove white background
    for item in datas:
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Crop transparent borders
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print("Done.")

if __name__ == "__main__":
    process_logo("public/logo_new_base.png", "public/logo-final.png")
