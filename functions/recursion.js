/** RECURSION **/

// What do you do when you need to traverse an array that 
// has an unknown number of levels of nested arrays and elements?

// DIVIDE & CONQUER!

// Each number in the data structure below represents the number of items in an individual box.
// There are boxes of boxes.
// In some cases there are boxes of boxes of boxes.

let itemsToUnpack = [
    [2, 6, 8, [1, 9]],
    [[3, 4, 2], [14, 8], 22],
    [15, [5, 8], 2, [25, 7]]
];

// EXAMPLE: Use recursion to count up all the items in all the boxes!



// EXAMPLE: Call the function with the test data


// To illustrate how the call stack is utilized during recursion,
// consider the factorial calculation

// This is a linear way to solve a factorial using a for loop
function linearFactorial(n) {
	let result = 1;
	for (let i = n; i > 1; i--) {
		result *= i
	}
	return result;
}


// EXAMPLE: Write a recursive function to solve a factorial

// Call the function



// Recursive again, but without all the console.log statements
// function recursiveFactorialNoLogs(n) {
//     if (n === 1) {
//         return n;
//     } 
//     return n * recursiveFactorialNoLogs(n-1);
// }

// You can compare the efficiency of linear and recursive approaches
// (Sometimes it's better, sometimes it's not)

// console.time("linear factorial");
// console.log(linearFactorial(15));
// console.timeEnd("linear factorial");

// console.time("recursive factorial");
// console.log(recursiveFactorialNoLogs(15));
// console.timeEnd("recursive factorial");
