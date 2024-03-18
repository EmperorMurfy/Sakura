// function calculateRoots() 
function calculateRoots(a, b, c) {
    // calculate discriminant
    let discriminant = b * b - 4 * a * c;
    let root1, root2;
    
    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
    } else if (discriminant === 0) {
        root1 = root2 = -b / (2 * a);
        console.log(`The roots of the quadratic equation are ${root1} and ${root2}`);
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        console.log(`The roots of the quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }
}

// function ends

// implementation below

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); // required func
rl.question('Enter the value of a: ', (inputA) => { // replace these with sakura
    const a = parseFloat(inputA);
    rl.question('Enter the value of b: ', (inputB) => {
        const b = parseFloat(inputB);
        rl.question('Enter the value of c: ', (inputC) => {
            const c = parseFloat(inputC);
            calculateRoots(a, b, c);
            rl.close();
        });
    });
});

// proposed idea 

// if (interaction.commandName === 'Cursed_Technique:Quadratic_Formula') {
//    const a = interaction.options.get('first-number').value;
//    const b = interaction.options.get('second-number').value;
//   const c = interactions.options.get('third-number').value;
   

//    interaction.reply(calculateRoots(a, b, c);
  }
