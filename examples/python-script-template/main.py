import os
import sys
from utils.helper import greet, date


def long_msg():
    print("You can add more Python code to this script to Extend functionality!")


def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_title = 'Python Script Example'
    print(f'{"-" * 40}\n{" " * 8}{app_title}{" " * 8}\n{"-" * 40}')
    name = str(input("Your name: "))
    print(greet(name))
    print(f"Today is {date()}.")
    long_msg()


if __name__ == "__main__":
    main()
