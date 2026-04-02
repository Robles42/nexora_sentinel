use std::io::{self, Write};
use std::process::Command;
use std::fs;

fn main() {
    let mut attempts = 0;
    let max_attempts = 3;
    let master_key = "4268";

    println!("--- NEXORA PROTOCOL: ACTIVE DEFENSE MODE ---");

    loop {
        print!("Ingrese Credencial de Acceso: ");
        io::stdout().flush().unwrap();
        
        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();
        let input = input.trim();

        if input == master_key {
            println!("Acceso Concedido. Desencriptando modulos...");
            break;
        } else {
            attempts += 1;
            println!("Alerta: Credencial Invalida. Intento {} de {}", attempts, max_attempts);
            
            if attempts >= max_attempts {
                println!("CRITICAL: Intento de intrusion detectado. Iniciando Protocolo de Autodestruccion...");
                execute_self_destruct();
                break;
            }
        }
    }
}

fn execute_self_destruct() {
    // Borrado de archivos sensibles (simulado para no romper tu proyecto real)
    let targets = ["sentinel_core/proyecto_secreto.nvlt", "sentinel_core/vault.nvlt"];
    
    for target in targets.iter() {
        if fs::metadata(target).is_ok() {
            fs::remove_file(target).unwrap();
            println!("Archivo {} eliminado de forma segura.", target);
        }
    }
    println!("Protocolo Sentinel Finalizado. Sistema Bloqueado.");
    std::process::exit(1);
}
