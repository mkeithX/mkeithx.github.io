import os
import sys
from utils.helper import greet, date

def start_coding():
    print("You can add more Python code to this script to Extend functionality!")


def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    name = input("Enter your name: ")
    print(greet(name))
    print(f"Today is {date()}.")
    start_coding()


if __name__ == "__main__":
    main()
