#!/bin/bash
# Script para actualizar todo el ecosistema en GitHub: Robles42

echo "🚀 Iniciando NexoraSync..."
FECHA=$(date +'%Y-%m-%d %H:%M')

# 1. Actualizar Bitácora
echo "## [$FECHA] - Auto-Sync" >> logs/BITACORA_ERRORES.md
echo "- **Estatus:** Sincronización masiva ejecutada." >> logs/BITACORA_ERRORES.md

# 2. Git Magic (Asumiendo que ya configuraste los remotos)
git add .
git commit -m "Nexora Sentinel Update: $FECHA"
git push origin main

echo "✅ Ecosistema sincronizado en GitHub (Robles42)."
