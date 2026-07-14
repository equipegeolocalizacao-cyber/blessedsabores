@echo off
title Deploy Automatico - Blessed Sabores

echo ==========================================
echo     DEPLOY AUTOMATICO
echo ==========================================
echo.

REM Entrar na pasta do projeto
cd /d "%~dp0"


echo [1/5] Verificando instalacao...
if not exist package.json (
    echo ERRO: package.json nao encontrado.
    pause
    exit /b 1
)


echo.
echo [2/5] Executando build de teste...
call npm run build

if %errorlevel% neq 0 (
    echo.
    echo ERRO: Build falhou.
    echo Corrija os erros antes de publicar.
    pause
    exit /b 1
)


echo.
echo [3/5] Criando backup local...

if not exist backups mkdir backups

xcopy src backups\src_backup_%date:/=-%_%time::=-% /E /I /Y >nul


echo.
echo [4/5] Enviando para GitHub...

git add .

git commit -m "Atualizacao automatica %date% %time%"

git push origin main


if %errorlevel% neq 0 (
    echo.
    echo ERRO ao enviar para GitHub.
    pause
    exit /b 1
)


echo.
echo ==========================================
echo     PUBLICADO COM SUCESSO
echo ==========================================
echo.
echo Vercel iniciara o deploy automaticamente.
echo Aguarde alguns minutos para atualizar o site.

pause