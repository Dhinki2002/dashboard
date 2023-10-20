import os
import re
def remove_duplicate_properties(css_text):
    # Split the CSS text into individual rules
    rules = css_text.split('}')
    updated_rules = []
    for rule in rules:
        properties = rule.split('{')
        if len(properties) == 2:
            selector, prop_text = properties
            properties = prop_text.split(';')
            unique_properties = {}
            for prop in properties:
                if prop.strip():
                    key, value = prop.split(':')
                    key = key.strip()
                    value = value.strip()
                    unique_properties[key] = value
            updated_rule = selector.strip() + ' {\n'
            updated_rule += '\n'.join([f'    {key}: {value};' for key, value in unique_properties.items()])
            updated_rule += '\n}\n'
            updated_rules.append(updated_rule)
    # Join the updated rules back together
    updated_css = '\n'.join(updated_rules)
    return updated_css
# Specify the directory where the CSS files are located
directory_path = 'src/pages'
# Get a list of all CSS files in the directory
css_files = [f for f in os.listdir(directory_path) if f.endswith('.css')]
# Loop through each CSS file and update it
for css_file in css_files:
    file_path = os.path.join(directory_path, css_file)
    with open(file_path, 'r') as f:
        css_text = f.read()
    # Remove duplicate properties
    updated_css = remove_duplicate_properties(css_text)
    # Write the updated CSS back to the same file
    with open(file_path, 'w') as f:
        f.write(updated_css)







