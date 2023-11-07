import os
import re
def remove_comments_from_file(file_path):
    try:
        with open(file_path, 'r') as file:
            content = file.read()
        # Remove single-line comments
        content = re.sub(r'\/\/.*', '', content)
        # Remove multi-line comments
        content = re.sub(r'\/\*[\s\S]*?\*\/', '', content)
        with open(file_path, 'w') as file:
            file.write(content)
    except Exception as e:
        print(f"Error processing {file_path}: {str(e)}")
def remove_comments_in_directory(directory_path):
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith('.js'):
                file_path = os.path.join(root, file)
                remove_comments_from_file(file_path)
                print(f"Removed comments from {file_path}")
if __name__ == '__main__':
    directory_path = 'src/components'  # Replace with the directory containing your .js files
    remove_comments_in_directory(directory_path)







