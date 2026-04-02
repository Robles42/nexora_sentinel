use argon2::{
    password_hash::{
        rand_core::OsRng,
        PasswordHash, PasswordHasher, PasswordVerifier, SaltString
    },
    Argon2
};
use std::io::{self, Write};

fn main() {
    println!("🛡️ Nexora Sentinel: Zero-Trust Engine Active");
    println!("📍 Mazatlán Node: [PROTECTED]");
    println!("-----------------------------------------");

    // 1. Simulación de una llave guardada (Hash)
    // En un sistema real, esto vendría de tu nexora_db
    let password = "4268"; 
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    let password_hash = argon2.hash_password(password.as_bytes(), &salt)
        .expect("Error hashing password")
        .to_string();

    // 2. Interfaz de usuario
    print!("🔑 Enter Master Access Key: ");
    io::stdout().flush().unwrap();
    
    let mut input = String::new();
    io::stdin().read_line(&mut input).expect("Failed to read");
    let input = input.trim();

    // 3. Verificación Real
    println!("🔍 Verifying Zero-Trust Identity...");
    
    let parsed_hash = PasswordHash::new(&password_hash).expect("Invalid hash");
    let result = Argon2::default().verify_password(input.as_bytes(), &parsed_hash);

    match result {
        Ok(_) => {
            println!("✅ ACCESS GRANTED: Welcome, Robles.");
            println!("🔓 Decrypting NexoraVault...");
        },
        Err(_) => {
            println!("❌ ACCESS DENIED: Identity could not be verified.");
            // Aquí podrías disparar tu Packet Sniffer o un log de alerta
        }
    }
}
