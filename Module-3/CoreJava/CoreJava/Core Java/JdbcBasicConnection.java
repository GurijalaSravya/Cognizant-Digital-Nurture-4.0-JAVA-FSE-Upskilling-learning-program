import java.sql.*;
public class JdbcBasicConnection {
    public static void main(String[] args) {
        try {
            // For SQLite: Class.forName("org.sqlite.JDBC");
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password");
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println(rs.getInt(1) + " " + rs.getString(2));
            }
            conn.close();
        } catch (Exception e) {
            System.out.println("DB Error: " + e.getMessage());
        }
    }
}