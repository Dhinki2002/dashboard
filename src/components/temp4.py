import os
import re
import cssutils
# Directory path where your React.js files are located
directory_path = "src/components"
# Regular expression to match className values (including spaces as separate keys)
class_name_regex = r'className=["\']([\w\s-]+)["\']'
# Function to process a single React.js file
def process_react_file(file_path):
    # Set to store className values
    class_name_set = set()
    with open(file_path, "r") as file:
        react_code = file.read()
    # Find and add className values to the set
    matches = re.findall(class_name_regex, react_code)
    for match in matches:
        class_names = match.split()
        class_name_set.update(class_names)
    css_file_path = os.path.splitext(file_path)[0] + ".css"
    # Load the CSS file
    css_parser = cssutils.CSSParser()
    stylesheet = css_parser.parseFile(css_file_path)
    # Create a new stylesheet to store the filtered rules
    filtered_stylesheet = cssutils.css.CSSStyleSheet()
    # Iterate through the rules and keep only the valid ones
    for rule in stylesheet:
        if isinstance(rule, cssutils.css.CSSStyleRule):
            selectors = rule.selectorList
            valid_selectors = [
                s for s in selectors if s.selectorText[1:] in class_name_set
            ]
            if valid_selectors:
                new_rule = cssutils.css.CSSStyleRule(
                    selectorText=", ".join([s.selectorText for s in valid_selectors]),
                    style=rule.style,
                )
                filtered_stylesheet.add(new_rule)
    # Save the filtered rules back to the file
    with open(css_file_path, "w") as css_file:
        css_file.write(filtered_stylesheet.cssText.decode("utf-8"))
    print(f"Filtered CSS rules saved to {css_file_path}")
# Loop through .js files in the directory
for filename in os.listdir(directory_path):
    if filename.endswith(".js"):
        react_file_path = os.path.join(directory_path, filename)
        process_react_file(react_file_path)