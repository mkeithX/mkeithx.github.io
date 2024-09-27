import os

def main():
    os.system("cls" if os.name == "nt" else "clear")
    
    word = "The SpaceHub Project"
    border_length = len(word) * 2 + 2

    print("+" + "-" * (border_length - 2) + "+")
    print("", end=" ")
    for char in word:
        print(char, end=" ")
    print("")
    print("+" + "-" * (border_length - 2) + "+")

if __name__ == '__main__':
    main()
