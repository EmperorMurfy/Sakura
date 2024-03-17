public static void nimGame() {
		
		// gamePieces determine gamePiece amount displayed and turn determines if Player One or Player Two is moving
		int[] gamePieces = {3 , 4, 5};
		int turn = 1; 
		
		do {
			// display game pieces
			for(int f = 0; f < gamePieces.length; f++ ) {
				System.out.print("Row: ");
				for(int g = 0; g< gamePieces[f]; g++) {
					System.out.print("*");
				}
				System.out.println("");
			}

			// player one
			if(turn == 1) {
				// ask user for row and amount of stones and not over the amount available, then complete task
				System.out.println("Which row of stones do you wish to take from and how many stones?");
				int a = s.nextInt()-1;
				int b = s.nextInt();

				if(b <= gamePieces[a] && b >0 ) {
					gamePieces[a] -= b;
					System.out.println("Player 1 removed " + b + " of stones from row " + (a + 1));
				}
				else {
					System.out.println("There are not enough stones in selected row, please choose again");
				}
			}
			
			// player two
			if(turn == -1) {
				// ask user for row and amount of stones and not over the amount available, then complete task
				System.out.println("Which row of stones do you wish to take from and how many stones?");
				int a = s.nextInt()-1;
				int b = s.nextInt();

				if(b <= gamePieces[a] && b >0 ) {
					gamePieces[a] -= b;
					System.out.println("Player 2 removed " + b +" stones" +" from row " + (a + 1));
				}
				else {
					System.out.println("There are not enough stones in selected row, please choose again");
				}
			}
			// change between player one and player two 
			turn *= -1;
		} 
		
		// checks if there is any game pieces left
		while(gamePieces[0] + gamePieces[1] + gamePieces[2] > 0); 
		turn *= 1;

		// check who's turn it is and who won
		if(turn == 1) {
			System.out.println("Player 2 wins!");
		}
		else {
			System.out.println("Player 1 wins!");
		}
		
		//adds space 
		System.out.println("");
	}
