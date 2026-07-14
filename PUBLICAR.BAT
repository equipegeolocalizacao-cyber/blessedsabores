@echo off
title Deploy Automatico - Blessed Sabores

echo ==========================================
echo     DEPLOY AUTOMATICO
echo ==========================================
echo.

cd /d "%~dp0"

echo [1/4] Verificando projeto...

if not exist package.json (
    echo ERRO: package.json nao encontrado.
    pause
    exit /b 1
)

if not exist .git (
    echo ERRO: Repositorio Git nao encontrado.
    pause
    exit /b 1
)

echo.
echo [2/4] Verificando arquivos essenciais...

if not exist client\public\logo-blessed.png (
    echo AVISO: logo-blessed.png nao encontrado.
)
if not exist client\public\og-image.png (
    echo AVISO: og-image.png nao encontrado.
)
if not exist client\public\robots.txt (
    echo AVISO: robots.txt nao encontrado.
)
if not exist client\public\sitemap.xml (
    echo AVISO: sitemap.xml nao encontrado.
)
echo Arquivos verificados.

echo.
echo [3/4] Enviando para GitHub...

git add .

git commit -m "Atualizacao Blessed Sabores %date% %time%"

if %errorlevel% neq 0 (
    echo Nenhuma alteracao para enviar ou erro no commit.
)

git push origin main

if %errorlevel% neq 0 (
    echo.
    echo ==========================================
    echo ERRO AO ENVIAR PARA GITHUB
    echo ==========================================
    echo.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo     PUBLICADO COM SUCESSO
echo ==========================================
echo.
echo Vercel iniciara o deploy automaticamente.
echo Aguarde 2-3 minutos:
echo https://blessedsabores.vercel.app/
echo.

pause