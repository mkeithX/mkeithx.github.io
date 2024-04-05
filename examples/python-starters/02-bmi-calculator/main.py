import os
import sys

def get_float_input(prompt):
    while True:
        try:
            value = float(input(prompt))
            return value
        except ValueError:
            print('Invalid input. Please enter a valid number.\n')

def calculate_bmi():
    height = get_float_input('Your height in meters (ex. 1.73): ')
    weight = get_float_input('Your weight in kilograms (ex. 75): ')

    bmi = weight / (height ** 2)
    bmi = round(bmi, 2)

    normal_bmi_range = 'Normal BMI is from 18.50 to 24.90.'

    if bmi < 18.5:
        classification = 'SEVERELY UNDERWEIGHT'
    elif 18.5 <= bmi <= 24.9:
        classification = 'NORMAL'
    elif 25 <= bmi <= 29.9:
        classification = 'OVERWEIGHT'
    elif 30 <= bmi <= 34.9:
        classification = 'SEVERELY OVERWEIGHT'
    elif 35 <= bmi <= 39.9:
        classification = 'OBESE'
    else:
        classification = 'SEVERELY OBESE'

    print(f'\nYour BODY MASS INDEX is {bmi:0.2f} and classified as {classification}.')
    
    if 18.5 <= bmi <= 24.9:
        print(normal_bmi_range)

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'BMI Calculator'
    print(f'{"-" * 40}\n{" " * 8}{app_name}{" " * 8}\n{"-" * 40}')
    calculate_bmi()

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