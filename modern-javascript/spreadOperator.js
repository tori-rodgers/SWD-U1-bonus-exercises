/** SPREAD OPERATOR **/

// The spread operator ... allows us to extract elements of an
// array or key/value pairs from an object to use elsewhere

// EXAMPLE: Math.min() does not take an array.
let nums = [2, 6, 4, 9, 1, 7, 3];

// Use Math.min() to determine the smallest number in the array.
console.log(Math.min(...nums));

// EXAMPLE: Get a sorted array without mutating the original array
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

// YOUR TURN

// TODO: Print the largest number from the array below
let amounts = [24.85, 19.24, 64.45, 12.03, 37.99];
console.log(Math.max(...amounts));

// TODO: Create an array that correctly capitalizes the names and print
// Do not use the original array for the map — use a copy
let planets = ['tAtoOiNE', 'pANDorA', 'JUpiTEr', 'VulcAn'];
let capPlanets = [...planets].map(
	planet => planet[0].toUpperCase() + planet.slice(1).toLowerCase()
);
console.log(capPlanets);

// TODO: Time to put that jewelry on clearance. Using the saleItems 
// array of objects above, run a comparison to see whether customers 
// save more if 50% is taken off the regular price or if 30% 
// is taken off the sale price. Print both.
let clearance50 = saleItems.map(item => {
    return { ...item, clearancePrice: item.price * (1 - 0.50) };
});
let clearance30 = saleItems.map(item => {
   return { ...item, clearancePrice: item.salePrice * (1 - 0.30) }
});
console.log(clearance50);
console.log(clearance30);
