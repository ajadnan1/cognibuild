from PIL import Image

def extract_icon(input_path, output_path_png, output_path_ico):
    print(f"Extracting icon from: {input_path}")
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Clean background first to find bounds
    datas = img.getdata()
    newData = []
    for item in datas:
        # Tuning tolerance: 240 is safer for "pure white" backgrounds
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    
    bbox = img.getbbox()
    if not bbox:
        print("Empty image")
        return
    img = img.crop(bbox) # Cropped to content

    # 2. Split Icon and Text (Assuming icon is on the left)
    width, height = img.size
    pixels = img.load()
    
    gap_start = 0
    in_content = False
    
    for x in range(width):
        is_column_transparent = True
        for y in range(height):
            if pixels[x, y][3] > 0: # Non-transparent pixel
                is_column_transparent = False
                break
        
        if not in_content and not is_column_transparent:
            in_content = True
        
        if in_content and is_column_transparent:
            # Found end of icon
            gap_start = x
            break
            
    if gap_start == 0:
        print("Could not separate icon and text cleanly. Using whole image.")
        icon_img = img
    else:
        print(f"Icon ends at x={gap_start}")
        icon_img = img.crop((0, 0, gap_start, height))
        
    # Crop icon to its minimal bounds
    icon_bbox = icon_img.getbbox()
    if icon_bbox:
        icon_img = icon_img.crop(icon_bbox)
        
    # Resize for icon.png (standard high res)
    # 512x512 is good for icon.png
    # But usually we want to keep aspect ratio and center it in a square?
    # For now, let's just save the extracted icon as is, or make it square?
    # Next.js generates sizes from icon.png. It's best to have it square.
    
    # Square canvas
    max_dim = max(icon_img.width, icon_img.height)
    square_size = max(512, max_dim) # Ensure at least 512 if possible, or just max_dim
    # Actually, let's just keep it tight or add a bit of padding. 
    # Let's simple create a square canvas of max_dim
    
    square_img = Image.new("RGBA", (max_dim, max_dim), (0,0,0,0))
    offset_x = (max_dim - icon_img.width) // 2
    offset_y = (max_dim - icon_img.height) // 2
    square_img.paste(icon_img, (offset_x, offset_y))
    
    print(f"Saving icon to {output_path_png}")
    square_img.save(output_path_png, "PNG")
    
    # Save as ICO (using 32x32, 64x64, etc is handled by format, but PIL handles it)
    # We need to resize to standard icon sizes for ICO
    # But usually providing just icon.png in app/ is enough for Next.js 13+
    
    # print(f"Saving favicon to {output_path_ico}")
    # icon_sizes = [(16,16), (32,32), (48,48), (64,64)]
    # square_img.save(output_path_ico, format='ICO', sizes=icon_sizes)


if __name__ == "__main__":
    extract_icon("public/logo_base.png", "app/icon.png", "app/favicon.ico")
