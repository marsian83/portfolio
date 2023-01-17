import os
import json

def get_file_info(folder_path):
    files = []
    for filename in os.listdir(folder_path):
        file_path = os.path.join(folder_path, filename)
        if os.path.isfile(file_path):
            file_info = {
                'filename': filename,
                'extension': os.path.splitext(file_path)[1],
                'size': os.path.getsize(file_path)
            }
            files.append(file_info)
    return json.dumps(files, indent=4)

folder_path = input()
print(get_file_info(folder_path))
