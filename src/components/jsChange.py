import re
import os
import glob

# Directory containing the .js files
directory_path = 'src/components'

# Regular expression pattern to match className with a variable value
pattern = r'className="([^"]*)"'

# Function to replace the matched string with the modified className
def replace_class_name(match):
    class_value = match.group(1)
    new_class_value = class_value + '-login'
    return f'className="{new_class_value}"'

# List all .js files in the directory
js_files = glob.glob(os.path.join(directory_path, '*.js'))

# Process each .js file
for js_file in js_files:
    with open(js_file, 'r') as file:
        js_content = file.read()
        modified_content = re.sub(pattern, replace_class_name, js_content)

    with open(js_file, 'w') as file:
        file.write(modified_content)

    print(f"Modified content written back to {js_file}")
