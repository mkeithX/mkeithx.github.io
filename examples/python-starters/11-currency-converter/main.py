import os
import sys
import requests
import datetime

def convert_currency(amount, from_currency, to_currency):
    url = f"https://api.exchangerate-api.com/v4/latest/{from_currency}"
    response = requests.get(url)
    rates = response.json()['rates']
    converted_amount = amount * rates[to_currency]
    return converted_amount

def user_input():
    amount = float(input("Enter amount: "))
    from_currency = input("Convert FROM (eg. USD): ").upper()
    to_currency = input("Convert TO (eg. PHP): ").upper()
    today = datetime.date.today()
    result = convert_currency(amount, from_currency, to_currency)
    print('\n')
    print(f"As of {today}: ")
    print(f"{from_currency} {amount:.2f} is {to_currency} {result:.2f}")

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Currency Converter'
    border_length = len(app_name) + 4
    print("-" + "-" * (border_length - 2) + "-")
    print(f" {app_name} ")
    print("-" + "-" * (border_length - 2) + "-")
    user_input()

    while True:
        response = input('\nConvert another? (Y/N) ')
        if response.lower() == 'y':
            main()
        elif response.lower() == 'n':
            print('\nThank you and have a great day.\n')
            sys.exit()
        else:
            print('\nError: Please select Y or N.\n')

if __name__ == '__main__':
    main()