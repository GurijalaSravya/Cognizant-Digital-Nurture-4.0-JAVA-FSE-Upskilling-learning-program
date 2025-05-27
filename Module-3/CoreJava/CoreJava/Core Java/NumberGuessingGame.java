import java.util.Random;
import java.util.Scanner;
public class NumberGuessingGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int numberToGuess = rand.nextInt(100) + 1;
        Scanner sc = new Scanner(System.in);
        int guess = 0, tries = 0;
        System.out.println("Guess the number between 1 and 100!");
        while (guess != numberToGuess) {
            System.out.print("Enter your guess: ");
            guess = sc.nextInt();
            tries++;
            if (guess < numberToGuess)
                System.out.println("Too low!");
            else if (guess > numberToGuess)
                System.out.println("Too high!");
            else
                System.out.println("Correct! You guessed in " + tries + " tries.");
        }
    }
}