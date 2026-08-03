from PIL import Image
import os

def process_logo(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Error: {input_path} does not exist.")
        return
        
    # Open the image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    width, height = img.size
    
    # 1. Find the bounding box of the logo (non-white pixels)
    # White threshold is set to 240 for R, G, B
    left = width
    top = height
    right = 0
    bottom = 0
    
    pixels = img.load()
    found_logo = False
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # If not white
            if r < 245 or g < 245 or b < 245:
                found_logo = True
                if x < left:
                    left = x
                if x > right:
                    right = x
                if y < top:
                    top = y
                if y > bottom:
                    bottom = y
                    
    if not found_logo:
        print("Error: Could not locate the logo within the image.")
        return
        
    print(f"Logo bounding box found: Left={left}, Top={top}, Right={right}, Bottom={bottom}")
    
    # Add a small padding around the logo
    padding = 20
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(width, right + padding)
    bottom = min(height, bottom + padding)
    
    # Crop the image
    cropped_img = img.crop((left, top, right, bottom))
    
    # 2. Make the background transparent
    datas = cropped_img.getdata()
    new_data = []
    for item in datas:
        # If the pixel is white or very close to white, make it transparent
        if item[0] > 245 and item[1] > 245 and item[2] > 245:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    cropped_img.putdata(new_data)
    
    # Save the processed image
    cropped_img.save(output_path, "PNG")
    print(f"Successfully processed logo. Cropped and saved transparent PNG to {output_path}.")

if __name__ == "__main__":
    process_logo("public/Frame_923.jpg", "public/image.png")
