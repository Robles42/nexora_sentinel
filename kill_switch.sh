#!/bin/bash
# Nexora Sentinel: Manual Kill Switch
echo "[jue 02 abr 2026 02:13:16 MST] KILL SWITCH ACTIVADO POR EL USUARIO" >> logs/BITACORA_ERRORES.md

# Detener procesos de Python y Java inmediatamente
pkill -f "python3"
pkill -f "java"

# Limpiar cache de la web para borrar sesiones
rm -rf sentinel_web/node_modules/.vite

echo "Ecosistema Nexora neutralizado. Todos los servicios detenidos."
