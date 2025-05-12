/** Higher-order functions **/

// Test Data 
let numberArray = [29.45, 40.94, 13.72, 75.01, 68.84, 14.33, 39.87]

// EXAMPLE of .map() — create a new array with each number rounded
let roundedNums = numberArray.map(num => Math.round(num));

// Print the new array
console.log(roundedNums);


// EXAMPLE of .forEach() — print each number with a dollar sign
numberArray.forEach(num => console.log(`$${num}`));


// EXAMPLE of .filter() — create a new array with numbers over 50 only
let overFifty = numberArray.filter(num => num > 50);

// Print the new array
console.log(overFifty);


// EXAMPLE of .reduce() — if you started with $500 and the numbers
// in the array represent expenditures, how much money is left?
let balance = numberArray.reduce((total, purchase) => total - purchase, 500);

// Print the balance rounded to the closest dollar
console.log(Math.round(balance));


// EXAMPLE of .sort() — modify the array so that the numbers
// are sorted smallest to largest
numberArray.sort((a, b) => a - b);

// Print the original array to show it has been sorted
console.log(numberArray);


// YOUR TURN!

// Use what you know about accessing values in objects

// Test data
let fruits = [
    {
        name: "Granny Smith apple",
        color: "green",
        diameter: 3
    },
    {
        name: "Mandarin orange",
        color: "orange",
        diameter: 2
    },
    {
        name: "Fuji apple",
        color: "red",
        diameter: 2.5
    },
];

// TODO: Create a new array of just the names of each fruit and print it


// TODO: Iterate over the array and print a sentence for each fruit using all three of its properties


// TODO: Create and print a new array of just the apples


// TODO: Calculate the total length of all fruit if they were set down side by side in a line and print the result


// TODO: Sort the array of fruit by diameter, largest to smallest
// Print the original array to show it has been sorted

