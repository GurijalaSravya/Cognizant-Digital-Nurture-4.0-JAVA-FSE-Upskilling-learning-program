import java.util.Scanner;
public class CustomExceptionTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your age: ");
        int age = sc.nextInt();
        try {
            if (age < 18) throw new InvalidAgeException("Age must be at least 18.");
            System.out.println("Age is valid.");
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}