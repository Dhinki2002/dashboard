import re
import os
# Define the directory path containing CSS files
directory_path = "src/pages"
# Define a regular expression pattern to match properties with values in vw
pattern = r"(\b(?:height|margin-top|margin-bottom|padding-top|padding-bottom|border-top-width|border-bottom-width|top|bottom|line-height|min-height|max-height|grid-row-gap|scroll-padding-top|scroll-padding-bottom)\s*:\s*)(\d*\.?\d*)\s*vw"
# Function to add 1 to the vw values
def add_1_to_vw(match):
    property_name = match.group(1)
    vw_value = float(match.group(2))
    new_value = round(vw_value * 1440 / 900, 2)
    return f"{property_name}{new_value}vh"
# List all CSS files in the directory
css_files = [file for file in os.listdir(directory_path) if file.endswith(".css")]
# Process each CSS file in the directory
for css_file in css_files:
    css_file_path = os.path.join(directory_path, css_file)
    with open(css_file_path, "r") as file:
        css_content = file.read()
    # Use the regular expression to find and replace the values
    modified_css = re.sub(pattern, add_1_to_vw, css_content)
    # Write the modified CSS back to the file
    with open(css_file_path, "w") as file:
        file.write(modified_css)
    print(f"CSS file '{css_file}' has been updated.")







