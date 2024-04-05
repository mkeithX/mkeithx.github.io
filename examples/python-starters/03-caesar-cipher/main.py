import os
import sys

def caesar_cipher(message, shift, encrypt=True):
    result = ''
    for char in message:
        if char.isalpha():
            ascii_offset = ord('A') if char.isupper() else ord('a')
            if encrypt:
                shifted_char = chr((ord(char) - ascii_offset + shift) % 26 + ascii_offset)
            else:
                shifted_char = chr((ord(char) - ascii_offset - shift) % 26 + ascii_offset)
            result += shifted_char
        else:
            result += char
    return result

def user_input():
    choice = input('Encrypt [E] or Decrypt [D]: ').upper()
    if choice == 'E':
        plain_message = input('Message you want to encrypt: ')
        shift = int(input('Enter shift value (1-25): '))
        encrypted_message = caesar_cipher(plain_message, shift)
        print('\nYour encrypted message: ', encrypted_message)
    elif choice == 'D':
        encrypted_message = input('Message you want to decrypt: ')
        shift = int(input('Enter shift value (1-25): '))
        decrypted_message = caesar_cipher(encrypted_message, shift, encrypt=False)
        print('\nYour decrypted message: ', decrypted_message)
    else:
        print('\nInvalid choice. Please select either Encrypt (E) or Decrypt (D).\n')
        user_input()

def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'Caesar Cipher'
    print(f'{"-" * 48}\n{" " * 14}{app_name}{" " * 14}\n{"-" * 48}')
    user_input()

    while True:
        print('\nEncrypt/Decrypt another message? (Y/N): ', end='')
        check = input()
        if check == 'y' or check == 'Y':
            main()
        elif check == 'n' or check == 'N':
            print('\nThanks for using the tool. Have a great day!\n')
            sys.exit()
        else:
            print('\nPlease select Y or N.')
            continue

if __name__ == '__main__':
    main()