@echo off
title Reset Ambiente Local - Blessed Sabores

echo ==========================================
echo     RESET DO AMBIENTE LOCAL
echo ==========================================
echo.

cd /d "%~dp0"


echo.
echo [1/5] Encerrando servidores Vite...

taskkill /F /IM node.exe >nul 2>&1


echo.
echo [2/5] Removendo cache Vite...

if exist node_modules\.vite (
    rmdir /s /q node_modules\.vite
)


echo.
echo [3/5] Limpando cache npm...

call npm cache clean --force


echo.
echo [4/5] Reinstalando dependencias...

if exist node_modules (
    rmdir /s /q node_modules
)

call npm install


echo.
echo [5/5] Reset concluido!


echo.
echo Agora execute:

echo testar-local.bat

echo.

pause