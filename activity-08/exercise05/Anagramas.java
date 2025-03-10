import java.util.Arrays;
import java.util.Scanner;

public class Anagramas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite a primeira palavra: ");
        String palavra1 = scanner.nextLine().toLowerCase();
        
        System.out.print("Digite a segunda palavra: ");
        String palavra2 = scanner.nextLine().toLowerCase();
        
        char[] palavra1Array = palavra1.toCharArray();
        char[] palavra2Array = palavra2.toCharArray();
        
        Arrays.sort(palavra1Array);
        Arrays.sort(palavra2Array);
        
        if (Arrays.equals(palavra1Array, palavra2Array)) {
            System.out.println("As palavras são anagramas.");
        } else {
            System.out.println("As palavras não são anagramas.");
        }
    }
}
