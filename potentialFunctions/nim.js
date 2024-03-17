function nimGame() {
    var gamePieces = [3, 4, 5];
    var turn = 1;
    do {
        for (var f = 0; f < gamePieces.length; f++) {
            console.log("Row: ");
            for (var g = 0; g < gamePieces[f]; g++) {
                console.log("*");
            }
            console.log("");
        }
        if (turn == 1) {
            console.log("Which row of stones do you wish to take from and how many stones?");
            var a = parseInt(prompt()) - 1;
            var b = parseInt(prompt());
            if (b <= gamePieces[a] && b > 0) {
                gamePieces[a] -= b;
                console.log("Player 1 removed " + b + " of stones from row " + (a + 1));
            }
            else {
                console.log("There are not enough stones in selected row, please choose again");
            }
        }
        if (turn == -1) {
            console.log("Which row of stones do you wish to take from and how many stones?");
            var a = parseInt(prompt()) - 1;
            var b = parseInt(prompt());
            if (b <= gamePieces[a] && b > 0) {
                gamePieces[a] -= b;
                console.log("Player 2 removed " + b + " stones" + " from row " + (a + 1));
            }
            else {
                console.log("There are not enough stones in selected row, please choose again");
            }
        }
        turn *= -1;
    } while (gamePieces[0] + gamePieces[1] + gamePieces[2] > 0);
    turn *= 1;
    if (turn == 1) {
        console.log("Player 2 wins!");
    }
    else {
        console.log("Player 1 wins!");
    }
    console.log("");
}

