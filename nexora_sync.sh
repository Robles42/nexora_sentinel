#!/bin/bash
# Script NexoraSync v2.0 - Robles42

echo "Iniciando NexoraSync..."
FECHA=$(date +'%Y-%m-%d %H:%M')

# 1. Registro en bitacora
echo "### [$FECHA] - Sincronizacion de sistema ejecutada" >> logs/BITACORA_ERRORES.md

# 2. Operaciones de Git
git add .
git commit -m "Nexora Sentinel Update: $FECHA"

# Intentar push normal, si falla, avisar
if git push origin main; then
    echo "Sincronizacion exitosa con GitHub."
else
    echo "Error: Conflicto con el remoto. Intenta: git push origin main --force"
fi
