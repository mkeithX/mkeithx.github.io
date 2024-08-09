import os
import sys
import random


def guess_number():
    secret_number = random.randint(1, 100)
    
    print("Guess number between 1 and 100.\n")

    attempts = 0
    max_attempts = 10 
    guessed_numbers = set()  
    
    while attempts < max_attempts:
        attempts_left = max_attempts - attempts
        print(f"\nYou have {attempts_left} attempts left.")
        
        try:
            guess = int(input("Enter your guess: "))
            
            if guess < 1 or guess > 100:
                print("Please enter a number within the valid range (1-100).")
                continue

            if guess in guessed_numbers:
                print("You've already guessed that number. Try a different one.")
                continue
            
            guessed_numbers.add(guess)  # Add the guess to the set
            attempts += 1
            
            if guess < secret_number:
                print("Too low! Try guessing a higher number.")
            elif guess > secret_number:
                print("Too high! Try guessing a lower number.")
            else:
                print(f"Congratulations! You've guessed the number {secret_number} correctly!")
                print(f"It took you {attempts} attempts to guess the number.")
                break
        
        except ValueError:
            print("Invalid input! Please enter a valid number.")
    
    if attempts == max_attempts:
        print("\nGame over! You've run out of attempts.")
        print(f"The correct number is {secret_number}.")



def main():
    os.system("cls" if os.name == "nt" else "clear")
    app_name = "Number Guessing Game"
    print(f'{"-" * 40}\n{" " * 8}{app_name}{" " * 8}\n{"-" * 40}')
    guess_number()

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