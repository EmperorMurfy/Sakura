import java.util.Scanner;

// Test 
public class Main {

	public static void main(String[] args){
		Scanner sc = new Scanner(System.in);
		int loop = 0; // some sort of loop so this is a constant check 
		while (loop == 0) {
		int randomNumber = (int) (Math.random()*10 + 10); // default has greater than 10, never below 10 counts of messages -> could change this value -> Math.random()*'max' + 'bare minimum'
		System.out.println(randomNumber);

		for (int i = 0; i < randomNumber; i++) {

			if (i == randomNumber - 1) {
				System.out.println("among the heaven and earth, I alone am the honored one"); // could use same randomNumber to pull random message
			}
			else {
				System.out.print("");
				String input = sc.nextLine(); // only updates the number if the number goes up  

			}

		}
	}

}
}
