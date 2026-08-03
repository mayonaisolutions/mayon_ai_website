from PIL import Image
import os

def make_transparent(image_path):
    if not os.path.exists(image_path):
        print(f"Error: {image_path} does not exist.")
        return
        
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check if the pixel is white or very close to white
        # item: (R, G, B, A)
        if item[0] > 245 and item[1] > 245 and item[2] > 245:
            # Make it transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(image_path, "PNG")
    print(f"Successfully converted {image_path} to transparent background.")

if __name__ == "__main__":
    make_transparent("public/image.png")
