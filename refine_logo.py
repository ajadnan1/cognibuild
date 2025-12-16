from PIL import Image

def resize_icon_relative_to_text(input_path, output_path):
    print(f"Refining logo: {input_path}")
    img = Image.open(input_path).convert("RGBA")
    
    # 1. Clean background first to find bounds
    datas = img.getdata()
    newData = []
    for item in datas:
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

    # 2. Split Icon and Text
    # Assuming icon is on the left. We need to find the gap between icon and text.
    # We'll scan columns to find the first large vertical gap of transparency.
    width, height = img.size
    pixels = img.load()
    
    split_x = 0
    gap_found = False
    
    # Simple heuristic: scan from left (skip first few px) until we hit a gap of transparency
    # Then find where text starts
    # Let's just hard split at 1/3 width for safety check? No, that's risky.
    # Let's look for a column that is fully transparent after some non-transparent columns.
    
    in_content = False
    gap_start = 0
    
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
            
    # Now verify where text starts
    text_start = gap_start
    for x in range(gap_start, width):
        is_column_transparent = True
        for y in range(height):
            if pixels[x, y][3] > 0:
                is_column_transparent = False
                break
        if not is_column_transparent:
            text_start = x
            break
            
    print(f"Icon ends at {gap_start}, Text starts at {text_start}")
    
    if gap_start == 0 or text_start == width:
        print("Could not separate icon and text cleanly.")
        # Fallback: Just return current image processed
        img.save(output_path)
        return

    icon_img = img.crop((0, 0, gap_start, height))
    # Crop icon to its minimal bounds
    icon_bbox = icon_img.getbbox()
    if icon_bbox:
        icon_img = icon_img.crop(icon_bbox)
        
    text_img = img.crop((text_start, 0, width, height))
    # Crop text to its minimal bounds
    text_bbox = text_img.getbbox()
    if text_bbox:
        text_img = text_img.crop(text_bbox)

    # 3. Resize Icon (make it 80% of text height)
    text_h = text_img.height
    target_icon_h = int(text_h * 0.85) # 85% of text height
    
    # Maintain aspect ratio
    aspect = icon_img.width / icon_img.height
    new_icon_w = int(target_icon_h * aspect)
    
    icon_img_resized = icon_img.resize((new_icon_w, target_icon_h), Image.LANCZOS)
    
    # 4. Create new canvas
    # Gap between icon and text
    gap_size = int(text_h * 0.3) 
    
    total_w = new_icon_w + gap_size + text_img.width
    total_h = max(text_h, target_icon_h)
    
    new_img = Image.new("RGBA", (total_w, total_h), (0,0,0,0))
    
    # Paste Text (vertically centered if needed, but usually text is taller or we align to baseline? 
    # User said "vertically center the smaller icon relative to the text")
    
    # Center text in height
    text_y = (total_h - text_h) // 2
    new_img.paste(text_img, (new_icon_w + gap_size, text_y))
    
    # Center Icon in height
    icon_y = (total_h - target_icon_h) // 2
    new_img.paste(icon_img_resized, (0, icon_y))
    
    print(f"New logo size: {total_w}x{total_h}")
    new_img.save(output_path, "PNG")

if __name__ == "__main__":
    # Use logo_base.png which we know is quality source
    resize_icon_relative_to_text("public/logo_base.png", "public/logo_refined.png")
