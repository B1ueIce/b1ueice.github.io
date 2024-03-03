import requests
import time
import subprocess
import os

try:
    url = "https://nebulaproxy.io/newsession"
    response = requests.get(url)
    print("Status Code:", response.status_code)
    print("Response Text:", response.text)

    # Define the file paths
    file_path1 = r"C:\Users\Kiera\OneDrive\Desktop\Programs\Made By Me\b1ueice.github.io\proxykey.txt"
    file_path2 = r"C:\Users\Kiera\OneDrive\Desktop\Programs\Made By Me\b1ueice.github.io\beta\proxykey.txt"

    # Write the response text to both files
    with open(file_path1, 'w') as file:
        file.write(response.text)
    with open(file_path2, 'w') as file:
        file.write(response.text)

    time.sleep(5)
    print("The script executed successfully. Committing to GitHub...")

    # Change directory to the Git repository
    os.chdir(r"C:\Users\Kiera\OneDrive\Desktop\Programs\Made By Me\b1ueice.github.io")

    # Git commands to add, commit, and push the changes
    try:
        subprocess.run(["git", "add", "proxykey.txt"], check=True)
        subprocess.run(["git", "add", r"beta\proxykey.txt"], check=True)
        subprocess.run(["git", "commit", "-m", "Update proxykey.txt files"], check=True)
        subprocess.run(["git", "push"], check=True)
        print("Successfully committed to GitHub.")
    except subprocess.CalledProcessError as e:
        print(f"An error occurred while trying to commit to GitHub: {e}")

except Exception as e:
    print(f"An error occurred: {e}")

time.sleep(10)
