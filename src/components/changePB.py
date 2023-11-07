import re

# Regular expression pattern to match substrings within brackets
pattern = r'\[[^\]]*\]'

# Function to replace matched substrings with empty brackets
def replace_brackets(match):
    return '[]'

# Read from a file
file_path = 'src/components/PurpleBox.js'
with open(file_path, 'r') as file:
    input_string = file.read()

# Perform the replacement
output_string = re.sub(pattern, replace_brackets, input_string)

# Write the result back to the same file
with open(file_path, 'w') as file:
    file.write(output_string)

print("Replacement complete and saved to the same file.")
