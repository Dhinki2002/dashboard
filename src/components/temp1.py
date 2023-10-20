import os
import re
# Function to check for duplicate CSS headers in a CSS file
def check_duplicate_headers(css_file):
    css_rule_pattern = r"([^{]+)\s*{[^}]*}"
    unique_headers = set()
    try:
        with open(css_file, "r") as f:
            css_content = f.read()
            css_rules = re.findall(css_rule_pattern, css_content)
            duplicates = []
            for rule in css_rules:
                header = rule.strip()
                if header in unique_headers:
                    duplicates.append(header)
                else:
                    unique_headers.add(header)
            if duplicates:
                print(f"Duplicate CSS headers found in {css_file}:")
                for duplicate in duplicates:
                    print(duplicate)
            else:
                print(f"No duplicate CSS headers found in {css_file}")
    except FileNotFoundError:
        print("File not found:", css_file)
# Function to check CSS files in a directory
def check_css_files_in_directory(directory_path):
    for filename in os.listdir(directory_path):
        if filename.endswith(".css"):
            css_file = os.path.join(directory_path, filename)
            check_duplicate_headers(css_file)
if __name__ == "__main__":
    css_directory = "src/components"  # Replace with the path to your CSS directory
    check_css_files_in_directory(css_directory)