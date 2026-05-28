@echo off
title Canyon War - Local Server
echo ============================================
echo   Canyon War MOBA - Local Server
echo ============================================
echo.
echo Starting Node.js server on port 3456...
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
  echo Share this with friends on LAN: http://%%a:3456
)
echo.
echo Local: http://localhost:3456
echo.
echo Press Ctrl+C to stop the server
echo ============================================
node server.js
pause
