# 🛡️ Nexora Sentinel Ecosystem v1.2
> **Zero-Trust Monitoring & Business Intelligence Suite**
> Developed by: **Santiago Robles (Robles42)** | Mazatlán, Sinaloa, MX.

## 📌 Visión General
**Nexora Sentinel** es un ecosistema de software de grado industrial diseñado para centralizar la seguridad y analítica de negocios locales (ej. *IconicHats*). Utiliza una arquitectura de **Confianza Cero (Zero-Trust)** donde cada componente está aislado y requiere validación criptográfica para interactuar.



## 🏗️ Arquitectura del Sistema

### 1. 🦀 Sentinel Core (Security Layer)
- **Lenguaje:** Rust
- **Criptografía:** Implementación de **Argon2id** para el hashing de llaves maestras.
- **Función:** Actúa como el *Gatekeeper*. Ningún script de datos puede ejecutarse sin la señal de autorización firmada por el Core.

### 2. ☕ Sentinel API (Orchestration)
- **Lenguaje:** Java (JDBC)
- **Base de Datos:** MySQL (nexora_db)
- **Función:** Gestión robusta de inventarios y permisos de usuario. Conecta la lógica de negocio con la persistencia de datos de Mazatlán.

### 3. 🐍 Sentinel Data (Analytics)
- **Lenguaje:** Python
- **Lógica:** Procesamiento de tendencias de ventas y reseñas de comida local.
- **Seguridad:** Validación de tokens de sesión generados por el Core de Rust.

### 4. ⚛️ Sentinel Web (Visualization)
- **Framework:** React + Vite + Tailwind CSS v4
- **UI/UX:** Dashboard "Premium Dark" optimizado para monitoreo en tiempo real con **Recharts**.
- **Responsive:** Diseñado para visualizarse en dispositivos móviles (Honor 400 / iPhone 15).



## 🚀 Instalación y Uso rápido

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Robles42/nexora_sentinel.git
   cd nexora_sentinel
   ```

2. **Levantar el Core (Rust):**
   ```bash
   cd sentinel_core && cargo run
   ```

3. **Lanzar el Dashboard (Web):**
   ```bash
   cd sentinel_web && npm install && npm run dev
   ```

## 📝 Bitácora de Desarrollo
El proyecto mantiene un registro detallado de errores y soluciones en `logs/BITACORA_ERRORES.md`, siguiendo estándares de ingeniería para documentación de incidentes.

---
*Este proyecto es parte del portafolio profesional de Santiago Robles, estudiante de Ingeniería en Innovación Digital en la UPSIN.*
