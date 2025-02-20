import os
import sys
import requests
from dotenv import load_dotenv
load_dotenv()
import datetime

api_key = os.getenv('OPENWEATHER_API_KEY')

def get_weather(city):
    url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric'   
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        weather = {
            'city': data['name'],
            'description': data['weather'][0]['description'],
            'temperature_min': data['main']['temp_min'],
            'temperature_max': data['main']['temp_max'],
            'humidity': data['main']['humidity'],
            'wind_speed': data['wind']['speed'],
        }
        return weather
    else:
        return None

def get_city():
    

    city = input('Enter city name: ')
    weather = get_weather(city)


    if weather:
        print(f"Current weather in {weather['city']}:")
        print(f"Description: {weather['description']}")
        print(f"Temperature [min]: {weather['temperature_min']} °C")
        print(f"Temperature [max]: {weather['temperature_max']} °C")
        print(f"Humidity: {weather['humidity']}%")
        print(f"Wind speed: {weather['wind_speed']} m/s")
    else:
        print(f"Could not retrieve weather information for {city}")
        
def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    # today = datetime.date.today()
    date = datetime.datetime.now()
    today = "{:%m/%d/%Y %H:%M:%S}".format(date)

    app_name = 'Weather Forecast'
    border_length = max(len(app_name), len(today)) + 9
    print("+" + "-" * (border_length - 2) + "+")
    print(f" {app_name}")
    print(f"{today}")
    print("+" + "-" * (border_length - 2) + "+")
    get_city()

    
    while True:
        response = input('\nCheck another city? (Y/N): ')
        if response == 'y' or response == 'Y':
            main()
        elif response == 'n' or response == 'N':
            print('\nThank you and have a great day.\n')
            sys.exit()
        else:
            print('\nError: Please select y or n.\n')
            continue

if __name__ == '__main__':
    main()