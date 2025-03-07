from datetime import datetime

def greet(name: str) -> str:
    return f"Hello, {name}!"

def date():
    current_datetime = datetime.now()
    return current_datetime.strftime("%m-%d-%Y")