import os
import sys
import re
import yt_dlp

def video_downloader():
    url_pattern = re.compile(r'^https?://[^\s/$.?#].[^\s]*$')

    while True:
        video_url = input("Video URL: ")

        if url_pattern.match(video_url):
            break
        else:
            print('\nError: Invalid URL Format')

    try:
        os.makedirs('downloads', exist_ok=True)
    except OSError:
        print("Error creating the 'downloads' directory.")
        sys.exit()

    ydl_opts = {'outtmpl': 'downloads/' + '%(title)s.%(ext)s'}

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([video_url])

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Video Downloader'
    print(f'{"-" * 48}\n{" " * 12}{app_name}{" " * 12}\n{"-" * 48}')
    video_downloader()

    while True:
        response = input('\nDo you want to continue? (Y/N) ')
        if response.lower() == 'y':
            main()
        elif response.lower() == 'n':
            print('\nThank you and have a great day.\n')
            sys.exit()
        else:
            print('\nError: Please select Y or N.\n')

if __name__ == '__main__':
    main()
