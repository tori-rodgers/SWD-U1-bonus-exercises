/** ANONYMOUS FUNCTIONS */

// Here's a standard utility function
function getRandomNumber(max, min = 0) {
	return Math.round(Math.random() * (max - min));
}

// TODO: Rewrite the function above as an anonymous function stored in constant


// TODO: Use simplified syntax to streamline the anonymous function to a single line of code


// TODO: Test each of the three functions by printing their return values to the console


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

// TODO: Rewrite the function above as an arrow function,
// stored in a constant, getFormattedAddress
// Make it multi-line with curly braces and the return keyword


// TODO: Write it again, this time streamlined on one line


// TODO: Use the test data someAddress above to run all three functions




// HIGHER-ORDER FUNCTIONS

let numbers = [2, 4, 6, 7, 8, 11, 16, 17, 20];

// TODO: .map() takes an array and returns a different array with new elements
// The function you pass in will be executed for each element
// The original array is not mutated!



// TODO: .forEach() works like a for loop — nothing is returned
// but you can do anything you want for each element one at a time
// Does not mutate original array


// TODO: .filter() returns a new array with only the elements you want
// You give it a boolean condition to apply to each element
// Does not mutate original array


// TODO: .reduce() returns a single value and is best for 
// use cases such as adding up numbers or building a string



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

// TODO: Use a higher-order array method to add a quantity 
// property to each object in the array above
// Print the array to see the results afterward


// TODO: Use .map to make a copy of the array above and its contents
// Print the original array and the new array
// Do an identity check on the arrays Do an identity check on the same object from each array


// What happens if you don't use the spread operator to return a new object?
