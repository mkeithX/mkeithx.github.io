import os
import sys


def dec_to_roman(dec):
    roman_numerals = [
        (1000, 'M'),
        (900, 'CM'),
        (500, 'D'),
        (400, 'CD'),
        (100, 'C'),
        (90, 'XC'),
        (50, 'L'),
        (40, 'XL'),
        (10, 'X'),
        (9, 'IX'),
        (5, 'V'),
        (4, 'IV'),
        (1, 'I')
    ]

    roman = ""
    for value, numeral in roman_numerals:
        while dec >= value:
            roman += numeral
            dec -= value
    
    return roman

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Decimal to Roman Numerals'
    border_length = len(app_name) + 4
    print("+" + "-" * (border_length - 2) + "+")
    print(f" {app_name} ")
    print("+" + "-" * (border_length - 2) + "+")
    print()

    decimal_num = int(input("Enter number in decimal: "))
    roman_number = dec_to_roman(decimal_num)
    print(f"Decimal number {decimal_num} is {roman_number} in numerals.")

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