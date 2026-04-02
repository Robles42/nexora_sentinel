#!/bin/bash
# Script de respuesta ante incidentes

TARGET_IP=$1
echo "[jue 02 abr 2026 02:11:44 MST] Bloqueando IP sospechosa: $TARGET_IP" >> logs/BITACORA_ERRORES.md

# En un entorno real con privilegios de root:
# sudo iptables -A INPUT -s $TARGET_IP -j DROP

echo "IP $TARGET_IP ha sido neutralizada en el firewall de Nexora."
