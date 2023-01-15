import os
import json

# Get the current working directory
cwd = os.getcwd()

data = []

# Iterate through all files in the current working directory
for filename in os.listdir(cwd):
    # Only process files (not directories)
    if os.path.isfile(os.path.join(cwd, filename)):
        data.append({
            'name': filename[:-5],
            'imageUrl': '/skills/' + filename
        })

# Print the data as a JSON object
print(json.dumps(data))
