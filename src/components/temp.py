import os
import re

# Define the directory path
directory_path = "src/"  # Replace with the actual directory path

# Define the function to process pixel values
def process_px(match):
    px_value = float(match.group(1))
    new_px_value = px_value * (100/1512)  # Multiply by 1440/1512
    return f'{new_px_value:.2f}vw'

# Iterate through files in the directory
for filename in os.listdir(directory_path):
    if filename.endswith(".css"):
        # Form the full path of the CSS file
        file_path = os.path.join(directory_path, filename)

        # Open the file for reading
        with open(file_path, 'r') as file:
            # Read the file content
            css_code = file.read()

        # Use regular expressions to find and replace px values
        converted_css_code = re.sub(r'(\d+(\.\d+)?)px', process_px, css_code)

        # Open the file for writing (overwrite existing content)
        with open(file_path, 'w') as file:
            # Write the updated content back to the file
            file.write(converted_css_code)

        print(f"Processed CSS in {filename}")

print("Processing complete for all CSS files in the directory.")
