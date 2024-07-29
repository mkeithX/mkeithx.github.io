import os
import sys
import qrcode

def qr_generator():
    data = input("Enter data to encode in QR code: ")
    
    qr = qrcode.QRCode(version=1, box_size=10, border=4, error_correction=qrcode.constants.ERROR_CORRECT_L) # type: ignore
#     qr = qrcode.QRCode( 
#     version=1,
#     error_correction=qrcode.constants.ERROR_CORRECT_L,
#     box_size=10,
#     border=4,
# ) 
    qr.add_data(data)
    qr.make(fit=True)
    
    img = qr.make_image(fill_color="black", black_color="white")

    filename = input("Enter filename including extension (.jpg, .png): ")
    
    path_option = input("Do you want to specify a file path to save the QR code (Y/N)? ")
    if path_option.lower() == 'y':
        path = input("Enter file path to save the QR code: ")

        if not os.path.exists(path):
            print("Error: The specified path does not exist. Saving to default path.")
            path = "downloads"
    
    else:
        path = "downloads"
        
    filename = os.path.join(path, filename)

    if not os.path.exists(path):
        os.makedirs(path)
    
    img.save(filename)
    print(f"Your QR code has been saved to {filename}")


def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    app_name = 'QR Code Generator'
    print(f'{"-" * 48}\n{" " * 12}{app_name}{" " * 12}\n{"-" * 48}')
    qr_generator()
    
    while True:
        response = input('\nDo you want to continue? (Y/N) ')
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