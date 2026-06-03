@echo off
setlocal

set "CHROME_EXE=C:\Program Files\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME_EXE%" set "CHROME_EXE=C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
if not exist "%CHROME_EXE%" set "CHROME_EXE=%LOCALAPPDATA%\Google\Chrome\Application\chrome.exe"

if not exist "%CHROME_EXE%" (
  echo [dev:p1] Chrome executable not found.
  exit /b 1
)

start "" cmd /c "npm run dev"
ping 127.0.0.1 -n 4 >nul
start "" "%CHROME_EXE%" --user-data-dir="%LOCALAPPDATA%\Google\Chrome\User Data" --profile-directory="Profile 1" --new-window "http://localhost:5173"
