@echo off
echo ========================================
echo SUBIR PROYECTO A GITHUB
echo ========================================
echo.

echo 1. Verificando estado de Git...
git status
echo.

echo 2. Agregando todos los archivos...
git add .
echo.

echo 3. Creando commit...
git commit -m "Update: Mejoras visuales y funcionalidades"
echo.

echo 4. Cambiando a rama main...
git branch -M main
echo.

echo 5. Agregando repositorio remoto...
echo Por favor, asegurate de que el repositorio existe en GitHub primero.
echo.
set /p REPO_URL="Ingresa la URL del repositorio (ej: https://github.com/VictorMMA/pagina-movil-elena.git): "
git remote add origin %REPO_URL%
echo.

echo 6. Subiendo a GitHub...
git push -u origin main
echo.

echo ========================================
echo PROCESO COMPLETADO
echo ========================================
pause

