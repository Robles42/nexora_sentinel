use aes_gcm::{Aes256Gcm, Key, Nonce, KeyInit};
use aes_gcm::aead::{Aead, OsRng};
use std::fs;

pub fn encrypt_data(data: &[u8], password: &str) -> Vec<u8> {
    // Derivacion simple de llave (en prod usar Argon2)
    let mut key_bytes = [0u8; 32];
    let pass_bytes = password.as_bytes();
    for i in 0..pass_bytes.len().min(32) { key_bytes[i] = pass_bytes[i]; }
    
    let key = Key::<Aes256Gcm>::from_slice(&key_bytes);
    let cipher = Aes256Gcm::new(key);
    let nonce = Nonce::from_slice(b"unique nonce"); // 96-bits; must be unique per derivation

    cipher.encrypt(nonce, data).expect("Error al cifrar")
}

pub fn decrypt_data(encrypted_data: &[u8], password: &str) -> Vec<u8> {
    let mut key_bytes = [0u8; 32];
    let pass_bytes = password.as_bytes();
    for i in 0..pass_bytes.len().min(32) { key_bytes[i] = pass_bytes[i]; }

    let key = Key::<Aes256Gcm>::from_slice(&key_bytes);
    let cipher = Aes256Gcm::new(key);
    let nonce = Nonce::from_slice(b"unique nonce");

    cipher.decrypt(nonce, encrypted_data).expect("Fallo de integridad: Clave incorrecta")
}
