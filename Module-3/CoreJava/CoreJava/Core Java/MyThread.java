public class MyThread extends Thread {
    private String message;
    public MyThread(String msg) {
        this.message = msg;
    }
    public void run() {
        for (int i = 0; i < 5; i++)
            System.out.println(message + " " + i);
    }
}