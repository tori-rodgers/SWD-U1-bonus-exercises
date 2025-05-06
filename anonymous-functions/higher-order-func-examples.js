/** ANONYMOUS FUNCTIONS */

// Here's a standard utility function
function getRandomNumber(max, min = 0) {
	return Math.round(Math.random() * (max - min));
}

// Rewrite the function above as an anonymous function stored in constant
const getRandNum = (max, min = 0) => {
	return Math.round(Math.random() * (max - min));
};

// Use simplified syntax to streamline the anonymous function to a single line of code
const shortGetRandNum = (max, min = 0) => Math.round(Math.random() * (max - min));

// Test each of the three functions by printing their return values to the console
console.log(getRandomNumber(100, 50));
console.log(getRandNum(20));
console.log(shortGetRandNum(10, 1));


// Some test data
let someAddress = {
	street: '123 Main Street',
	city: 'St. Louis',
	state: 'MO',
	zip: '63101',
};

// Traditional function syntax
function formatAddress(address) {
	return `
${address.street}
${address.city}, ${address.state} ${address.zip} 
    `;
}

// Rewrite the function above as an arrow function,
// stored in a constant, getFormattedAddress
// Make it multi-line with curly braces and the return keyword
const getFormattedAddress = address => {
	return `
${address.street}
${address.city}, ${address.state} ${address.zip} 
    `;
};

// Write it again, this time streamlined on one line
const shortFormat = address =>
	`\n${address.street} \n${address.city}, ${address.state} ${address.zip}\n`;

// Use the test data someAddress above to run all three functions
console.log(formatAddress(someAddress));
console.log(getFormattedAddress(someAddress));
console.log(shortFormat(someAddress));



// HIGHER-ORDER FUNCTIONS

let numbers = [2, 4, 6, 7, 8, 11, 16, 17, 20];

// .map() takes an array and returns a different array with new elements
// The function you pass in will be executed for each element
// The original array is not mutated!
let doubles = numbers.map(num => 2 * num);

console.log(numbers);
console.log(doubles);
console.log(numbers);


// .forEach() works like a for loop — nothing is returned
// but you can do anything you want for each element one at a time
// Does not mutate original array
numbers.forEach(num => console.log('The number ' + num + ' is awesome.'));

// mutates original array
// numbers.forEach((num, idx) => {
//     if (num % 2 !== 0) {
//         numbers.splice(idx, 1);
//     }
// });

// console.log(numbers);


// .filter() returns a new array with only the elements you want
// You give it a boolean condition to apply to each element
// Does not mutate original array
let evensOnly = numbers.filter(num => num % 2 === 0);
console.log(evensOnly);
console.log(numbers);

// .reduce() returns a single value and is best for 
// use cases such as adding up numbers or building a string
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);

let words = ['This', 'is', 'a', 'sentence.'];

let sentence = words.reduce((acc, word) => acc + word + ' ', '');

console.log(sentence);


/* WORKING WITH ARRAYS OF OBJECTS */

let fruits = [
	{
		type: 'apple',
		variety: 'Gala',
		color: 'red',
	},
	{
		type: 'apple',
		variety: 'Granny Smith',
		color: 'green',
	},
	{
		type: 'orange',
		variety: 'Navel',
		color: 'orange',
	},
	{
		type: 'kiwi',
		variety: null,
		color: 'brown and green',
	},
];

// Use a higher-order array method to add a quantity 
// property to each object in the array above
// Print the array to see the results afterward
fruits.forEach(fruit => (fruit.quantity = 12));
console.log(fruits);

// Use .map to make a copy of the array above and its contents
// Print the original array and the new array
// Do an identity check on the arrays Do an identity check on the same object from each array
const fruitsWithQuantity = fruits.map(fruit => {
	return { ...fruit, quantity: 12 };
});
console.log(fruits);
console.log(fruitsWithQuantity);

console.log(fruits == fruitsWithQuantity);
console.log(fruits[2] == fruitsWithQuantity[2]);

// What happens if you don't use the spread operator to return a new object?
const sameFruitsWithQuantity = fruits.map(fruit => {
    fruit.quantity = 12;
	return fruit;
});

console.log(fruits == sameFruitsWithQuantity);
console.log(fruits[2] == sameFruitsWithQuantity[2]);
