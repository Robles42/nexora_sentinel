# Nexora Sentinel Ecosystem v1.2
> Zero-Trust Monitoring & Business Intelligence Suite
> Desarrollado por: Santiago Robles (Robles42) | Mazatlan, Sinaloa, MX.

## Vision General
Nexora Sentinel es un ecosistema de software de grado industrial diseñado para centralizar la seguridad y analitica de negocios locales (ej. IconicHats). Utiliza una arquitectura de Confianza Cero (Zero-Trust) donde cada componente esta aislado y requiere validacion criptografica para interactuar.

## Arquitectura del Sistema

### 1. Sentinel Core (Security Layer)
- Lenguaje: Rust
- Criptografia: Implementacion de Argon2id para el hashing de llaves maestras.
- Funcion: Actua como el Gatekeeper. Ningun script de datos puede ejecutarse sin la señal de autorizacion firmada por el Core.

### 2. Sentinel API (Orchestration)
- Lenguaje: Java (JDBC)
- Base de Datos: MySQL (nexora_db)
- Funcion: Gestion robusta de inventarios y permisos de usuario. Conecta la logica de negocio con la persistencia de datos de Mazatlan.

### 3. Sentinel Data (Analytics)
- Lenguaje: Python
- Logica: Procesamiento de tendencias de ventas y reseñas de comida local.
- Seguridad: Validacion de tokens de sesion generados por el Core de Rust.

### 4. Sentinel Web (Visualization)
- Framework: React + Vite + Tailwind CSS v4
- UI/UX: Dashboard Premium Dark optimizado para monitoreo en tiempo real con Recharts.
- Responsive: Diseñado para visualizacion en dispositivos moviles (Honor 400 / iPhone 15).

## Instalacion y Uso Rapido

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Robles42/nexora_sentinel.git
   cd nexora_sentinel
   ```

2. Levantar el Core (Rust):
   ```bash
   cd sentinel_core && cargo run
   ```

3. Lanzar el Dashboard (Web):
   ```bash
   cd sentinel_web && npm install && npm run dev
   ```

## Bitacora de Desarrollo
El proyecto mantiene un registro detallado de errores y soluciones en logs/BITACORA_ERRORES.md, siguiendo estandares de ingenieria para documentacion de incidentes.

---
Este proyecto es parte del portafolio profesional de Santiago Robles, estudiante de Ingenieria en Innovacion Digital en la UPSIN.
