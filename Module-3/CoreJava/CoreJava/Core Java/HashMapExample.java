import java.util.HashMap;
import java.util.Scanner;
public class HashMapExample {
    public static void main(String[] args) {
        HashMap<Integer, String> students = new HashMap<>();
        Scanner sc = new Scanner(System.in);
        System.out.println("Add students (id name), type -1 to stop:");
        while (true) {
            int id = sc.nextInt();
            if (id == -1) break;
            String name = sc.next();
            students.put(id, name);
        }
        System.out.print("Enter id to search: ");
        int searchId = sc.nextInt();
        System.out.println("Name: " + students.getOrDefault(searchId, "Not found"));
    }
}