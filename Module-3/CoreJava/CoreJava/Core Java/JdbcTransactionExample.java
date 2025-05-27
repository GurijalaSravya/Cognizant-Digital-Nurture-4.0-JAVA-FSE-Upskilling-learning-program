import java.sql.*;
public class JdbcTransactionExample {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password");
        try {
            conn.setAutoCommit(false);
            Statement stmt = conn.createStatement();
            stmt.executeUpdate("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
            stmt.executeUpdate("UPDATE accounts SET balance = balance + 100 WHERE id = 2");
            conn.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transfer failed. Rolled back.");
        } finally {
            conn.close();
        }
    }
}