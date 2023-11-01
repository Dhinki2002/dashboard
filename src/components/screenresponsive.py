import os
import re
# Define the regular expression you want to search for
regex_pattern = r"(\b(?:margin|padding|border-width)\s*:\s*)(\d*\.?\d*)\s*vw"
# Specify the directory where your CSS files are located
directory_path = "src/components"
# Function to search for the regular expression in a file
def search_in_file(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        lines = file.readlines()
        for line_number, line in enumerate(lines, start=1):
            matches = re.finditer(regex_pattern, line)
            for match in matches:
                print(f"File: {file_path}, Line: {line_number}, Match: {match.group()}")
# Walk through the directory and its subdirectories
for root, dirs, files in os.walk(directory_path):
    for file in files:
        if file.endswith(".css"):
            file_path = os.path.join(root, file)
            search_in_file(file_path)