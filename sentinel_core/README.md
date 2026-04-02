# 🛡️ NexoraVault: Secure Storage Engine

Un motor de cifrado **Zero-Trust** desarrollado en **Rust** para el manejo seguro de información sensible directamente desde la terminal de Fedora.

## 🚀 Características Técnicas
* **Criptografía AEAD:** Implementación de AES-256-GCM mediante la librería `ring`.
* **Protección de RAM:** Uso del trait `Zeroize` para sobrescribir buffers de memoria sensible y evitar volcados (Memory Dumps).
* **Derivación de Llaves:** Hashing robusto mediante **Argon2id** (Ganador de la Password Hashing Competition).
* **CLI Intuitiva:** Interfaz profesional construida con `clap v4`.

## 🛠️ Instalación (Fedora)
```bash
sudo dnf install openssl-devel
cargo build --release
```

## 📖 Uso
```bash
# Guardar un secreto
./target/release/nexora_vault store --name bancario

# Recuperar un secreto
./target/release/nexora_vault retrieve --name bancario
```
