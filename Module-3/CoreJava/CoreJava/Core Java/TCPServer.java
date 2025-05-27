import java.io.*;
import java.net.*;
public class TCPServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(12345);
        System.out.println("Server started...");
        Socket client = server.accept();
        BufferedReader in = new BufferedReader(new InputStreamReader(client.getInputStream()));
        PrintWriter out = new PrintWriter(client.getOutputStream(), true);
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
        String msg;
        while ((msg = in.readLine()) != null) {
            System.out.println("Client: " + msg);
            System.out.print("You: ");
            out.println(console.readLine());
        }
        server.close();
    }
}