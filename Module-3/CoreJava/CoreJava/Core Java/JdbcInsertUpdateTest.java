import java.sql.*;
public class JdbcInsertUpdateTest {
    public static void main(String[] args) throws Exception {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "root", "password");
        StudentDAO dao = new StudentDAO(conn);
        dao.insertStudent(1, "Alice");
        dao.updateStudent(1, "Alicia");
        conn.close();
    }
}