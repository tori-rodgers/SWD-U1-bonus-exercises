const input = require('readline-sync');


function askUserForName() {
    let name = input.question("Hello! What is your name? \n");
    return name;
}

function isDivisibleByThree(num) {
    return num % 3 === 0;
}

function validateNumInput() {
    let num;
    do {
        num = input.question("Please enter a number between 1 - 100\n");
    } while (isNaN(num) || num <= 0 || num > 100);
    return num;
}

function runProgram() {

    let keepGoing = true;

    // Ask the user for their name
    let userName = askUserForName();

    // Greet the user
    console.log(`Hello, ${userName}!`)

    while (keepGoing) {
        // Ask user for a number between 1-100
        let number = validateNumInput();
    
        // Print whether the number is evenly divisible by 3
        let text = isDivisibleByThree(number) ? "is" : "is not";
        console.log(`Thanks, ${userName}. The number ${number} ${text} divisible by 3.`)
    
        // Ask them if they want to ask about another number
        keepGoing = input.question("Would you like to check another number? Y or N\n").toUpperCase() === "Y";
    }

    console.log(`Thanks for trying out my number checker thingy, ${userName}.`)
}

runProgram();
