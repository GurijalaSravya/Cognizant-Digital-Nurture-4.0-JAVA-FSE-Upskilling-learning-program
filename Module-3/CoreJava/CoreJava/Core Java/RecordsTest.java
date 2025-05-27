import java.util.*;
public class RecordsTest {
    public static void main(String[] args) {
        List<Person> people = List.of(
            new Person("Alice", 23),
            new Person("Bob", 17),
            new Person("Eve", 34)
        );
        people.forEach(System.out::println);
        people.stream().filter(p -> p.age() >= 18).forEach(System.out::println);
    }
}