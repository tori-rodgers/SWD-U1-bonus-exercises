/** ARROW FUNCTIONS **/

// The arrow function syntax for anonymous functions just 
// swaps the function keyword for a "fat arrow" operator, 
// and moves it to the right side of the parameter(s)

// Here's traditional function syntax
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(`The word "JavaScript" backwards is ${reverseString("JavaScript")}.`);

// EXAMPLE
// We will store the anonymous function in a constant
// First using the syntax closer to traditional 
const revStrAnon = (str) => {
    return str.split("").reverse().join("");
}; 

console.log(revStrAnon("mart"));

// The shortest form of an arrow function allows you to 
// omit the parentheses around a single parameter.
// You can also omit the curly braces and return keyword
// for single-line functions (you must omit neither or both)
const revStrAnonShort = str => str.split("").reverse().join("");

console.log(revStrAnonShort("yam"));


// YOUR TURN

// TODO: Store an anonymous function in a constant
// Use arrow syntax to return a random element
// Multiple lines of code OK


// TODO: Create an array of several elements as mock data
// Call the function and pass in the array


// TODO: BONUS: Try to rewrite your function as a single-line short 
// form arrow function


// TODO: Test the short form function
