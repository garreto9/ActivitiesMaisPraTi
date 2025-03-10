import java.util.Scanner;

public class Fibonacci {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite o número n para exibir a sequência de Fibonacci: ");
        int n = scanner.nextInt();
        
        int a = 0, b = 1;
        
        System.out.print("Sequência de Fibonacci: ");
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");
            int temp = a;
            a = b;
            b = temp + b;
        }
    }
}
