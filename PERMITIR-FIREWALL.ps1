# Script para permitir el servidor HTTP en el firewall
# EJECUTA COMO ADMINISTRADOR

Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  Permitiendo Python HTTP Server" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host ""

# Verificar si ya existe la regla
$existingRule = netsh advfirewall firewall show rule name="Python HTTP Server 8000" 2>$null

if ($existingRule) {
    Write-Host "✓ La regla ya existe" -ForegroundColor Green
} else {
    Write-Host "Creando regla en el firewall..." -ForegroundColor Cyan
    
    # Crear regla para permitir conexiones entrantes en puerto 8000
    netsh advfirewall firewall add rule name="Python HTTP Server 8000" dir=in action=allow protocol=TCP localport=8000
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✓ Regla creada exitosamente" -ForegroundColor Green
    } else {
        Write-Host "✗ Error al crear la regla. Ejecuta este script como Administrador" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  Tu IP Local:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow

# Obtener IP local
$ip = (Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.IPAddress -like "192.168.*" -and $_.IPAddress -notlike "192.168.56.*"} | Select-Object -First 1).IPAddress

if ($ip) {
    Write-Host ""
    Write-Host "  📱 Abre en tu celular:" -ForegroundColor Cyan
    Write-Host "  http://$ip:8000" -ForegroundColor Green -BackgroundColor Black
    Write-Host ""
} else {
    Write-Host "  No se pudo detectar la IP automáticamente" -ForegroundColor Red
    Write-Host "  Ejecuta: ipconfig | findstr IPv4" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  IMPORTANTE:" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Yellow
Write-Host "  ✓ PC y celular en la misma Wi-Fi" -ForegroundColor White
Write-Host "  ✓ Inicia el servidor: python -m http.server 8000" -ForegroundColor White
Write-Host "  ✓ Usa http:// (no https://)" -ForegroundColor White
Write-Host ""

