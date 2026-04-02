# Registro de Errores y Retos - Nexora Vault

| Fecha | Error / Reto | Causa | Solución |
| :--- | :--- | :--- | :--- |
| 2026-04-02 | Setup inicial | Gestión de memoria volátil | Implementación de Trait Zeroize |
| 2026-04-02 | Dependencias | Enlace con OpenSSL en Fedora | `sudo dnf install openssl-devel` |
| 2026-04-02 | Input de Usuario | El buffer de stdin mantiene datos | Pendiente: Reemplazar por lectura de raw FD |

| 2026-04-02 | E0432: unresolved import OsRng | Feature 'std' desactivada en argon2 | Se añadió `features = ["std"]` al Cargo.toml |
| 2026-04-02 | Cifrado AEAD | AES-256-GCM requiere Nonce único | Implementado SystemRandom para generar Nonces de 12 bytes. |
| 2026-04-02 | Persistencia | El archivo .nvlt es binario | Se debe leer con std::fs::read (no String) para evitar corrupción de bytes. |
| 2026-04-02 | E0283: NonceSequence | 'ring' requiere estructura de estado para Nonces | Implementada struct NonceGen para cumplir con el Trait. |
| 2026-04-02 | Type Annotations | TryInto no podía inferir el tamaño del array | Cambiado a split_at y manejo explícito de slices. |
| 2026-04-02 | E0599: assume_unique... | API de 'ring' 0.17 cambió nombres de funciones | Actualizado a `assume_unique_for_key` según sugerencia de rustc. |
| 2026-04-02 | Integridad de Datos | ÉXITO | El sistema recuperó el string original tras un ciclo completo de cifrado/descifrado. |
| 2026-04-02 | Seguridad de Memoria | Zeroize | Confirmado el borrado de buffers sensibles al cierre del programa. |
| 2026-04-02 | Warning: Dead Code | Funciones de Auth | Las funciones de Argon2 se mantienen para futura implementación de Login persistente. |
