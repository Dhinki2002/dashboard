import os
import re
# Function to find and collect regular expressions in a file
def find_regular_expressions_in_file(file_path):
    regular_expressions = set()
    with open(file_path, "r") as file:
        content = file.read()
        # Use a regular expression pattern to find "some_variable"
        pattern = r"/([\w@-]+)\.png"
        matches = re.findall(pattern, content)
        regular_expressions.update(matches)
    return regular_expressions
# Function to search for regular expressions in all .js files in a directory
def find_regular_expressions_in_directory(directory):
    regular_expressions = set()
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".js"):
                file_path = os.path.join(root, file)
                expressions_in_file = find_regular_expressions_in_file(file_path)
                regular_expressions.update(expressions_in_file)
    return regular_expressions
# Define the directories to search for .js files
directory1 = 'src/components'
directory2 = 'src/pages'
# Find and collect regular expressions in the specified directories
expressions_in_directory1 = find_regular_expressions_in_directory(directory1)
expressions_in_directory2 = find_regular_expressions_in_directory(directory2)
# Combine the regular expressions from both directories into one set
all_regular_expressions = expressions_in_directory1.union(expressions_in_directory2)
# Directory containing the .svg files
directory_path = "public"
# List all files in the directory
all_files = os.listdir(directory_path)
# Filter out .svg files that are not in the set
svg_files_to_remove = [
    file
    for file in all_files
    if file.endswith(".png") and file[:-4] not in all_regular_expressions
]
# Delete the .svg files that are not in the set
for file_to_remove in svg_files_to_remove:
    file_path = os.path.join(directory_path, file_to_remove)
    os.remove(file_path)
    print(f"Removed {file_to_remove}")
print("Cleanup completed.")





