import java.lang.reflect.*;
public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Class<?> c = Class.forName("SampleClass");
        Method[] methods = c.getDeclaredMethods();
        for (Method m : methods) {
            System.out.println("Method: " + m.getName());
            System.out.println("Params: " + m.getParameterCount());
        }
        Object obj = c.getDeclaredConstructor().newInstance();
        c.getMethod("hello").invoke(obj);
    }
}