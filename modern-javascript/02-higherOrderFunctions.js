/** Higher-order functions **/

// Test Data
export let numberArray = [29.45, 40.24, 13.72, 75.01, 68.84, 14.33, 39.87];

// EXAMPLE of .map()
// Create a new array with each number rounded
let roundedNums = numberArray.map(num => Math.round(num));

// Print the new array
console.log(roundedNums);

// EXAMPLE of .forEach()
// Print each number with a dollar sign
numberArray.forEach(num => console.log(`$${num}`));

// EXAMPLE of .filter()
// Create a new array containing only numbers that round to exactly 40
let roundToForty = numberArray.filter(num => Math.round(num) === 40);

// Print the new array
console.log(roundToForty);

// EXAMPLE of .reduce()
// If you started with $500 and the numbers in the array
// represent expenditures, how much money is left?
let balance = numberArray.reduce((total, purchase) => total - purchase, 500);

// Print the balance rounded to the closest dollar
console.log(Math.round(balance));

// EXAMPLE of .find()
// Locate the number that is in the range of 60-70 (inclusive)
let sixtyToSeventy = numberArray.find(num => num >= 60 && num <= 70);

// Print the number
console.log(sixtyToSeventy);

// EXAMPLE of .sort()
// Modify the original array so that the numbers are sorted smallest to largest
numberArray.sort((a, b) => a - b);

// Print the original array to show it has been sorted
console.log(numberArray);

// YOUR TURN! Practice below.

// Use what you know about accessing values in objects

// Test data
export let fruits = [
	{
		name: 'Granny Smith apple',
		color: 'green',
		diameter: 3,
	},
	{
		name: 'Mandarin orange',
		color: 'orange',
		diameter: 2,
	},
	{
		name: 'Fuji apple',
		color: 'red',
		diameter: 2.5,
	},
];

// TODO: Create a new array of just the names of each fruit and print it


// TODO: Iterate over the test data and print a sentence for each fruit using all three of its properties


// TODO: Create and print a new array of just the apples in the test data


// TODO: Calculate the total length of all fruit if they were set down side by side in a line, and print the result


// TODO: Locate the fruit that has a diameter of exactly 2" and print it


// TODO: Sort the array of fruit by diameter, largest to smallest
// Print the original array to show it has been sorted


// For the 06-importExport.js exercise, the export keyword has been
// applied to numberArray and fruits.
// No need to put anything here; the object is created behind-the-scenes!
