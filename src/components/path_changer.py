import re
import os
def update_paths(file_path):
    with open(file_path, "r") as file:
        content = file.read()
    # Define a regex pattern to match import statements with component/page paths
    pattern = re.compile(r'(import|from)\s+[\'"](\.\.\/)+([\/\w]+)[\'"]', re.MULTILINE)
    # Find all matches in the content
    matches = pattern.findall(content)
    for match in matches:
        import_statement, relative_path_prefix, folder_path = match
        # Count the number of ".." in the relative path
        num_double_dots = relative_path_prefix.count("..")
        # Construct the new path with a single quote at the beginning
        new_path = f"{import_statement} '{'../' * (num_double_dots + 1)}{folder_path}/{os.path.basename(folder_path)}.js'"
        # Escape special characters in the folder_path
        escaped_folder_path = re.escape(f"{relative_path_prefix}{folder_path}")
        # Replace the old path with the new path in the content
        content = re.sub(
            rf'{import_statement}\s+[\'"]{escaped_folder_path}[\'"]', new_path, content
        )
    # Also, update paths of the form './pages/SignUpAs' to './pages/SignUpAs/SignUpAs.js'
    pattern_relative = re.compile(
        r'(import|from)\s+[\'"]\.\/(.*?)\/([\w/]+)[\'"]', re.MULTILINE
    )
    matches_relative = pattern_relative.findall(content)
    for match_relative in matches_relative:
        (
            import_statement_relative,
            folder_type_relative,
            folder_path_relative,
        ) = match_relative
        # Extract the base folder name (last part of the folder_path_relative)
        base_folder_name_relative = os.path.basename(folder_path_relative)
        # Construct the new relative path with a single quote at the beginning
        new_path_relative = f"{import_statement_relative} './{folder_type_relative}/{folder_path_relative}/{base_folder_name_relative}.js'"
        # Escape special characters in the folder_path_relative
        escaped_folder_path_relative = re.escape(
            f"./{folder_type_relative}/{folder_path_relative}"
        )
        # Replace the old relative path with the new relative path in the content
        content = re.sub(
            rf'{import_statement_relative}\s+[\'"]{escaped_folder_path_relative}[\'"]',
            new_path_relative,
            content,
        )
    # Write the updated content back to the file
    with open(file_path, "w") as file:
        file.write(content)
# Specify the directory containing JS files
directory_path = "src"
# Iterate over all files in the directory with a .js extension
for filename in os.listdir(directory_path):
    if filename.endswith(".js"):
        js_file_path = os.path.join(directory_path, filename)
        update_paths(js_file_path)