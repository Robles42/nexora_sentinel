use zeroize::Zeroize;
use ring::aead::{self, BoundKey, SealingKey, OpeningKey, UnboundKey, Nonce, NonceSequence, AES_256_GCM, NONCE_LEN};
use ring::rand::{SecureRandom, SystemRandom};

#[derive(Zeroize)]
#[zeroize(drop)]
pub struct SecureData {
    pub data: Vec<u8>,
}

impl SecureData {
    pub fn new(data: Vec<u8>) -> Self {
        Self { data }
    }
}

struct NonceGen(Option<Nonce>);

impl NonceSequence for NonceGen {
    fn advance(&mut self) -> Result<Nonce, ring::error::Unspecified> {
        self.0.take().ok_or(ring::error::Unspecified)
    }
}

pub fn encrypt(data: &[u8], password: &[u8]) -> Vec<u8> {
    let rand = SystemRandom::new();
    let mut nonce_bytes = [0u8; NONCE_LEN];
    rand.fill(&mut nonce_bytes).unwrap();

    let mut key_bytes = [0u8; 32];
    let len = password.len().min(32);
    key_bytes[..len].copy_from_slice(&password[..len]);

    let unbound_key = UnboundKey::new(&AES_256_GCM, &key_bytes).unwrap();
    // CORRECCIÓN AQUÍ: Usamos la función que el compilador sugirió
    let nonce_gen = NonceGen(Some(Nonce::assume_unique_for_key(nonce_bytes)));
    let mut sealing_key = SealingKey::new(unbound_key, nonce_gen);

    let mut in_out = data.to_vec();
    sealing_key.seal_in_place_append_tag(aead::Aad::empty(), &mut in_out).unwrap();

    let mut final_payload = nonce_bytes.to_vec();
    final_payload.extend_from_slice(&in_out);
    final_payload
}

pub fn decrypt(payload: &[u8], password: &[u8]) -> Result<Vec<u8>, ring::error::Unspecified> {
    if payload.len() < NONCE_LEN { return Err(ring::error::Unspecified); }

    let (nonce_bytes, ciphertext) = payload.split_at(NONCE_LEN);
    let mut key_bytes = [0u8; 32];
    let len = password.len().min(32);
    key_bytes[..len].copy_from_slice(&password[..len]);

    let unbound_key = UnboundKey::new(&AES_256_GCM, &key_bytes).unwrap();
    
    // Convertimos el slice de vuelta a un array fijo para cumplir con el tipo de Nonce
    let mut nonce_array = [0u8; NONCE_LEN];
    nonce_array.copy_from_slice(nonce_bytes);
    
    let nonce_gen = NonceGen(Some(Nonce::assume_unique_for_key(nonce_array)));
    let mut opening_key = OpeningKey::new(unbound_key, nonce_gen);

    let mut in_out = ciphertext.to_vec();
    let decrypted_data = opening_key.open_in_place(aead::Aad::empty(), &mut in_out)?;
    
    Ok(decrypted_data.to_vec())
}
