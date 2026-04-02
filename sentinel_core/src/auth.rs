use argon2::{
    password_hash::{rand_core::OsRng, PasswordHasher, PasswordVerifier, SaltString},
    Argon2,
};

pub fn hash_password(password: &[u8]) -> String {
    let salt = SaltString::generate(&mut OsRng);
    let argon2 = Argon2::default();
    // En producción, manejaríamos el error, aquí usamos unwrap para simplicidad del prototipo
    argon2.hash_password(password, &salt).expect("Error al hashear").to_string()
}

pub fn verify_password(hash: &str, password: &[u8]) -> bool {
    let argon2 = Argon2::default();
    if let Ok(parsed_hash) = argon2::PasswordHash::new(hash) {
        return argon2.verify_password(password, &parsed_hash).is_ok();
    }
    false
}
