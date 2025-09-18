
/** ARROW FUNCTIONS **/

// The arrow function syntax for anonymous functions just
// swaps the function keyword for a "fat arrow" operator,
// and moves it to the right side of the parameter(s)

// Here's traditional function syntax
function reverseString(str) {
	return str.split('').reverse().join('');
}

console.log(
	`The word "JavaScript" backwards is ${reverseString('JavaScript')}.`
);

// EXAMPLE
// We will store the anonymous function in a constant
// First using the syntax closer to traditional
const revStrAnon = str => {
	return str.split('').reverse().join('');
};

console.log(revStrAnon('mart'));

// The shortest form of an arrow function allows you to
// omit the parentheses around a single parameter.
// You can also omit the curly braces and return keyword
// for single-line functions (you must omit neither or both)
const revStrAnonShort = str => str.split('').reverse().join('');

console.log(revStrAnonShort('yam'));

// YOUR TURN! Practice below.

// TODO: Use arrow syntax to create an anonymous function, stored as a constant
// The function should accept an array and return a random element
// Multiple lines of code OK

// Create an array of several elements as mock data

// Call the function and pass in the array

// TODO: BONUS: Rewrite your function as a single-line, short form arrow function

// Test the short form function

// This solution is for the 06-importExport.js exercise
export default reverseString;
