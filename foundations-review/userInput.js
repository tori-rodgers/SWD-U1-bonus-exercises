const input = require('readline-sync');

console.log('Welcome to my program! Tell me about yourself.');

// TODO: Ask for the user's name
let name = input.question('\nPlease enter your name: ');

// TODO: Greet user by name
console.log(`Welcome, ${name}!`);

// TODO: Ask user for their favorite ice cream
let faveIceCream = input.question(
	'\nWhat is your favorite flavor of ice cream? '
);

// TODO: Respond with both name and favorite flavor in the sentence
console.log(`Wow, ${name}, I love the ${faveIceCream} flavor too!`);

// TODO: Print a final synopsis with both the name and flavor, formatted nicely
console.log('\n*****************************');
console.log('Ice Cream Synopsis');
console.log(`Name: ${name}`);
console.log(`Flavor: ${faveIceCream}`);
console.log('*****************************');
