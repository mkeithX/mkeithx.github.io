import os
import sys
import time

error_msg = '\n[!] Error: Invalid input.\n'
error_msg2 = '\n[!] Error: Must be a positive integer.\n'

def countdown_timer(hours, minutes, seconds):
    return hours*3600 + minutes*60 + seconds

def get_positive_input(prompt):
    while True:
        try:
            value = int(input(prompt))
            if value < 0:
                print(error_msg2)
                continue
            return value
        except ValueError:
            print(error_msg)

def user_input():
    hours = get_positive_input("Enter hours: ")
    minutes = get_positive_input("Enter minutes: ")
    seconds = get_positive_input("Enter seconds: ")
    print()
    
    count_time = countdown_timer(hours, minutes, seconds)

    for i in range(count_time, 0, -1):
        hours, rem = divmod(i,3600)
        minutes, seconds = divmod(rem, 60)
        print("Time remaining: {:02d}:{:02d}:{:02d}".format(hours,minutes,seconds),end='\r')
        time.sleep(1)
    
    print("\nTime's up!")

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Countdown Timer'
    print(f'{"-" * 48}')
    print(f'{" " * 12}{app_name}{" " * 12}')
    print(f'{"-" * 48}')
    user_input()
    
    while True:
        response = input('\nDo you want to continue? (Y/N) ')
        if response == 'y' or response == 'Y':
            main()
        elif response == 'n' or response == 'N':
            print('\nThank you and have a great day.\n')
            sys.exit()
        else:
            print('\nError: Please select Y or N.\n')
            continue

if __name__ == '__main__':
    main() 