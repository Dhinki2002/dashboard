import os
import re
import fileinput

# The directory containing CSS files
css_directory = "src/components"

# The text you want to append to the selectors
append_text = "-login"

# Regular expression pattern to match CSS selectors
selector_pattern = r'([^{]+)(?=\s*{)'

# Function to modify CSS selectors in a file
def modify_css_file(css_file):
    with fileinput.FileInput(css_file, inplace=True) as file:
        for line in file:
            # Search for CSS selectors using the pattern
            matches = re.finditer(selector_pattern, line)
            for match in matches:
                selector = match.group(0).strip()
                # Modify the selector by appending the text
                modified_selector = f"{selector}{append_text}"
                # Replace the old selector with the modified one
                line = line.replace(selector, modified_selector, 1)
            # Print the line to the file (modified or unmodified)
            print(line, end='')

# List all CSS files in the directory and apply the modification
for root, dirs, files in os.walk(css_directory):
    for file in files:
        if file.endswith(".css"):
            css_file = os.path.join(root, file)
            modify_css_file(css_file)

print(f"Selectors in CSS files in '{css_directory}' have been modified and saved.")


# Define the directory path containing CSS files
directory_path = 'src/components'

# Iterate through all files in the directory
for filename in os.listdir(directory_path):
    if filename.endswith('.css'):
        # Construct the full path of the CSS file
        css_file_path = os.path.join(directory_path, filename)

        # Read the CSS selectors from the file
        with open(css_file_path, 'r') as css_file:
            css_content = css_file.read()

        # Split the selectors by comma and append "-login" to each selector name
        selectors = css_content.split(',')
        new_selectors = [selector.strip() + '-login' for selector in selectors]

        # Combine the modified selectors back into a single string
        new_css_content = ', '.join(new_selectors)

        # Write the modified CSS content back to the same file
        with open(css_file_path, 'w') as css_file:
            css_file.write(new_css_content)

        print(f"Selectors in the CSS file '{filename}' have been modified and written back to the same file.")


