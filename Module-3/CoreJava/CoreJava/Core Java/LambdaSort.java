import java.util.*;
public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("banana", "apple", "grape", "orange");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        System.out.println("Sorted List: " + list);
    }
}