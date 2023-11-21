import os
import shutil
def organize_files(directory, file_extension):
    # Iterate through all files in the directory
    for filename in os.listdir(directory):
        # Check if the file has the specified extension
        if filename.endswith(file_extension):
            # Remove the file extension to get the folder name
            folder_name = os.path.splitext(filename)[0]
            # Create the folder if it doesn't exist
            folder_path = os.path.join(directory, folder_name)
            os.makedirs(folder_path, exist_ok=True)
            # Move the file to the corresponding folder
            file_path = os.path.join(directory, filename)
            shutil.move(file_path, os.path.join(folder_path, filename))
if __name__ == "__main__":
    # Specify the path to the directory containing the JavaScript and CSS files
    base_directory = "src/components"
    # Organize JavaScript files
    organize_files(base_directory, ".js")
    # Organize CSS files
    organize_files(base_directory, ".css")
    print("JavaScript and CSS files organized successfully.")