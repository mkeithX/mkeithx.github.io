@echo off
pushd "%~dp0"

dir /b "%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum" > List.txt
dir /b "%SystemRoot%\servicing\Packages\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum" >> List.txt

for /f %%i in (List.txt) do (
    dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
)

del List.txt

pause
