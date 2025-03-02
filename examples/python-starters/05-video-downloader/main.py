import os
import re
import sys
import yt_dlp

url_pattern = re.compile(r'^https?://[^\s/$.?#].[^\s]*$')

def get_user_input_url():
    while True:
        video_url = input("Video URL: ")
        if url_pattern.match(video_url):
            return video_url
        else:
            print('\nError: Invalid URL Format')

def format_selector(ctx):
    formats = ctx.get('formats')[::-1]
    best_video = next(f for f in formats if f['vcodec'] != 'none' and f['acodec'] == 'none')
    audio_ext = {'mp4': 'm4a', 'webm': 'webm'}[best_video['ext']]
    best_audio = next(f for f in formats if (
        f['acodec'] != 'none' and f['vcodec'] == 'none' and f['ext'] == audio_ext))

    yield {
        'format_id': f'{best_video["format_id"]}+{best_audio["format_id"]}',
        'ext': best_video['ext'],
        'requested_formats': [best_video, best_audio],
        'protocol': f'{best_video["protocol"]}+{best_audio["protocol"]}'
    }

def progress_hook(d):
    if d['status'] == 'finished':
        print('\nDownload success!')
        print('\Processing ...')

def video_downloader():
    user_url = get_user_input_url()
    downloads_folder = 'downloads'
    try:
        os.makedirs(downloads_folder, exist_ok=True)
    except OSError:
        print("Error creating the 'downloads' directory.")
        sys.exit()

    ydl_opts = {
        'format': format_selector,
        'outtmpl': os.path.join(downloads_folder, '%(title)s.%(ext)s'),  # Save in 'downloads' folder
        'progress_hooks': [progress_hook],  # Add the progress hook
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        try:
            ydl.download([user_url])
        except Exception as e:
            print(f"Error downloading video: {e}")

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Video Downloader'
    border_length = len(app_name) + 4
    print("+" + "-" * (border_length - 2) + "+")
    print(f" {app_name} ")
    print("+" + "-" * (border_length - 2) + "+")
    print()

    video_downloader()

    while True:
        response = input('\nDownload another? (Y/N) ')
        if response.lower() == 'y':
            main()
        elif response.lower() == 'n':
            print('\nThank you and have a great day.\n')
            sys.exit()
        else:
            print('\nError: Please select Y or N.\n')

if __name__ == '__main__':
    main()