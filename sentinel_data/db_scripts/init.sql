-- 1. Asegurar que la base de datos existe
CREATE DATABASE IF NOT EXISTS nexora_db;

-- 2. SELECCIONAR LA BASE DE DATOS (Esto faltaba)
USE nexora_db;

-- 3. Crear tablas
CREATE TABLE IF NOT EXISTS inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    item_name VARCHAR(255) NOT NULL,
    stock INT DEFAULT 0,
    price DECIMAL(10,2)
);

CREATE TABLE IF NOT EXISTS food_reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    establishment VARCHAR(255),
    rating INT,
    comment TEXT
);

-- 4. Insertar datos de prueba
INSERT INTO inventory (item_name, stock, price) 
VALUES ('Iconic Snapback Black', 50, 350.00)
ON DUPLICATE KEY UPDATE stock=stock;

INSERT INTO food_reviews (establishment, rating, comment)
VALUES ('Mariscos El Muchacho Alegre', 5, 'Los mejores aguachiles de Mazatlán.');
