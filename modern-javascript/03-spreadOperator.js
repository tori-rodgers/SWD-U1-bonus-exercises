/** SPREAD OPERATOR **/

// The spread operator ... allows us to extract elements of an
// array or key/value pairs from an object to use elsewhere

let nums = [2, 6, 4, 9, 1, 7, 3];

// EXAMPLE: Math.min() does not accept an array as an argument.
// Use Math.min() to determine the smallest number in the array, and print it.
console.log(Math.min(...nums));

// EXAMPLE: Create a sorted array without mutating the original array
let letters = ['c', 'r', 'e', 'x', 'f', 'z', 'a'];
let sortedLetters = [...letters].sort();

// Print both arrays to prove the original has not been mutated
console.log(sortedLetters);
console.log(letters);

// EXAMPLE: Create a new array of new objects and add a sale price
// set to 25% of the original price
let regularItems = [
	{
		name: 'Silver earrings',
		price: 72,
	},
	{
		name: 'Silver necklace',
		price: 104,
	},
	{
		name: 'Gold ring',
		price: 338,
	},
];

let saleItems = regularItems.map(item => {
	return { ...item, salePrice: item.price * (1 - 0.25) };
});

// Print both arrays to show the originals have not been mutated

console.log(saleItems);
console.log(regularItems);

// YOUR TURN! Practice below.

// TODO: Print the largest number from the array below using Math.max()


// TODO: Create a clone of the original array and store it in a new variable
// Use that clone to create another new array that stores the names
// of the planets in proper Title Case, and print it


// TODO: Time to put that jewelry on clearance. Using the regularItems and saleItems
// arrays above, run a comparison to see whether customers save more if 50% is taken
// off the regular price or if 30% is taken off the sale price. Print both new arrays.


// BONUS - Use .reduce() to get the sum of the clearance prices in each array to
// see which is less overall, assuming all products were purchased.
// Print both numbers with dollar signs.
