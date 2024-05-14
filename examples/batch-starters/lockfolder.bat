@ECHO OFF
title Folder Locker

REM Set variables
set "LOCKER_FOLDER=Locker"
set "LOCKER_FILE=Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"
set "PASSWORD=12345"

REM Main logic
if EXIST "%LOCKER_FILE%" goto UNLOCK
if NOT EXIST %LOCKER_FOLDER% goto MDLOCKER

:CONFIRM
echo Are you sure you want to lock the folder? (Y/N)
set /p "cho=>"
if /I "%cho%"=="Y" goto LOCK
if /I "%cho%"=="N" goto END
echo Invalid choice.
goto CONFIRM

:LOCK
ren %LOCKER_FOLDER% "%LOCKER_FILE%"
attrib +h +s "%LOCKER_FILE%"
echo Folder locked successfully.
goto END

:UNLOCK
echo Enter password to unlock folder:
set /p "pass=>"
if "%pass%"=="%PASSWORD%" (
    attrib -h -s "%LOCKER_FILE%"
    ren "%LOCKER_FILE%" %LOCKER_FOLDER%
    echo Folder unlocked successfully.
) else (
    echo Invalid password.
    goto FAIL
)
goto END

:FAIL
echo Invalid password.
goto END

:MDLOCKER
md %LOCKER_FOLDER%
echo Locker created successfully.
goto END

:END
