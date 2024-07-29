from tkinter import Label, Tk
import time

app_window = Tk()
app_window.iconbitmap("./public/icons/slash-dark.ico")

app_window.title ('Digi-clock')
app_window.geometry('420x150')
app_window.resizable(0, 0) # type: ignore


text_font = ('Boulder', 68, 'bold')
background = '#000'
foreground = '#08f623'
border_width = 25

label = Label(app_window, font=text_font, bg=background, fg=foreground, bd=border_width)
label.grid(row=0, column=1)

def digi_clock():
    time_live = time.strftime('%H:%M:%S')
    label.config(text=time_live)
    label.after(200, digi_clock)

digi_clock()
app_window.mainloop()