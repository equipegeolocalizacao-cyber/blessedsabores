@echo off
title Teste Local - Blessed Sabores

echo ==========================================
echo       INICIANDO TESTE LOCAL
echo ==========================================
echo.

cd /d "%~dp0"

echo [1/2] Verificando dependencias...

if not exist node_modules (
    echo Instalando dependencias...
    call npm install
    echo.
)

echo.
echo [2/2] Abrindo servidor local...
echo.
echo Acesse no navegador:
echo http://localhost:3000
echo.
echo Para fechar, pressione CTRL+C neste terminal
echo.

call npm run dev