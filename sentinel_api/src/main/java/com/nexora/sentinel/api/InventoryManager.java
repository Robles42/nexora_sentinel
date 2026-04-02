package com.nexora.sentinel.api;

import java.sql.*;

public class InventoryManager {
    private static final String URL = "jdbc:mysql://localhost:3306/nexora_db";
    
    public void secureUpdateStock(int itemId, int newStock) {
        // Parametrizacion total: El input del usuario NUNCA toca el motor SQL directamente
        String query = "UPDATE inventory SET stock = ? WHERE id = ? AND status = 'ACTIVE'";
        
        try (Connection conn = DriverManager.getConnection(URL, "roblech", "PROTECTED_PASS");
             PreparedStatement pstmt = conn.prepareStatement(query)) {
            
            pstmt.setInt(1, newStock);
            pstmt.setInt(2, itemId);
            pstmt.executeUpdate();
            System.out.println("Transaccion segura completada.");
            
        } catch (SQLException e) {
            System.err.println("Alerta de integridad de DB: " + e.getMessage());
        }
    }
}
