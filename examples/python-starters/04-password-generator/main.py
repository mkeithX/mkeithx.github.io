import os
import sys
import random
import string

def generate_password(complexity,length):
    while True:
        
        if complexity == '1': # weak
            characters = string.ascii_letters
        elif complexity == '2': # medium
            characters = string.ascii_letters + string.digits
        elif complexity == '3': # strong
            characters = string.ascii_letters + string.digits + string.punctuation
        elif complexity == '4':
            print('\nThank you and have a great day!\n')
            sys.exit()
        else:
            
            print('\nError: Invalid Choice.')
            break

        password = ''.join(random.choice(characters) for _ in range(length))
        return password

def user_input():
    while True:
        try:
            length = int(input("\nEnter password length (min. 8 max. 64): "))
            break
        except ValueError:
            print('\nError: Password length must be a number.\n')
            return
    
    if length <= 7 or length >= 65:
        print('\nError: Invalid range.\n')
        return

    print("Select complexity level:")
    print("[1] Weak")
    print("[2] Medium")
    print("[3] Strong")
    print("[4] Quit")
    choice_complexity = input('Your choice: ')
    
    if choice_complexity not in ("1","2","3","4"):
        pass
        
    password = generate_password(length=length, complexity=choice_complexity)
    if password is None:
        print('')
    else:
        print('\nYour password is:',(password))
        print()

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Password Generator'
    print(f'{"-" * 48}\n{" " * 12}{app_name}{" " * 12}\n{"-" * 48}')
    user_input()

    while True:
        response = input('Do you want to continue? (Y/N) ')
        if response == 'y' or response == 'Y':
            main()
        elif response == 'n' or response == 'N':
            print('\nThank you and have a great day!\n')
            sys.exit()
        else:
            print('\nError: Please select Y or N.\n')
            continue

if __name__ == '__main__':
    main()