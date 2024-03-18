// translated version of nim(), for sakura's potential functions 
const readline = require('readline');

function nimGame() {
    var gamePieces = [3, 4, 5];
    var turn = 1;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function prompt(question) {
        return new Promise((resolve, reject) => {
            rl.question(question, (answer) => {
                resolve(answer);
            });
        });
    }

    async function getPlayerMove(player) {
        console.log(`Player ${player}, choose a row and the number of stones to remove.`);
        let a = Number(await prompt(`Select a row (1, 2, or 3): `)) - 1;
        let b = Number(await prompt(`Enter number of stones to remove: `));

        if (b <= gamePieces[a] && b > 0) {
            gamePieces[a] -= b;
            console.log(`Player ${player} removed ${b} stones from row ${a + 1}`);
        } else {
            console.log("There are not enough stones in the selected row. Please choose again.");
        }
    }

    async function playGame() {
        do {
            for (var f = 0; f < gamePieces.length; f++) {
                console.log("Row: ");
                for (var g = 0; g < gamePieces[f]; g++) {
                    console.log("*");
                }
                console.log("");
            }

            if (turn === 1) {
                await getPlayerMove(1);
            }
            if (turn === -1) {
                await getPlayerMove(2);
            }
            turn *= -1;
        } while (gamePieces[0] + gamePieces[1] + gamePieces[2] > 0);

        if (turn === 1) {
            console.log("Player 2 wins!");
        } else {
            console.log("Player 1 wins!");
        }
        console.log("");

        rl.close();
    }

// call func as playGame()
