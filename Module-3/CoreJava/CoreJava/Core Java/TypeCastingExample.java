public class TypeCastingExample {
    public static void main(String[] args) {
        double d = 9.78;
        int i = (int)d;
        System.out.println("Double: " + d + " cast to int: " + i);
        int j = 42;
        double d2 = (double)j;
        System.out.println("Int: " + j + " cast to double: " + d2);
    }
}