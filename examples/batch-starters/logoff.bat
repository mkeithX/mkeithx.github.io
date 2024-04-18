@echo off

REM Clear all Temporary Internet Files and IE History
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 1

REM Remove all files from %TEMP%
sdelete -s %TEMP%\*.*

REM Remove list of Recently opened documents
sdelete "%USERPROFILE%\Recent\*.*"

REM Clears DNS records and Resets TCP/IP
ipconfig /flushdns

REM Change directory to where puttylogs.py is located and Execute the Python script
cd /d "path_to_puttylogs_directory" && python puttylogs.py

REM Log the date/time
echo %DATE% %TIME% >> %HOMEDRIVE%\logoff.txt

REM Log off my machine
shutdown -l -f
