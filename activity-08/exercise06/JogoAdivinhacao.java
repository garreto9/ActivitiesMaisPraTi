import java.util.Random;
import java.util.Scanner;

public class JogoAdivinhacao {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        
        int numeroSecreto = random.nextInt(50) + 1;
        int palpite = 0;
        
        System.out.println("Tente adivinhar o número secreto entre 1 e 50.");
        
        while (palpite != numeroSecreto) {
            System.out.print("Digite seu palpite: ");
            palpite = scanner.nextInt();
            
            if (palpite < numeroSecreto) {
                System.out.println("O número secreto é maior.");
            } else if (palpite > numeroSecreto) {
                System.out.println("O número secreto é menor.");
            } else {
                System.out.println("Parabéns! Você acertou!");
            }
        }
    }
}
