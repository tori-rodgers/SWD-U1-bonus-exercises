let string = 'deab';

// Example - Create "ABCDEF" in very few lines of code

// TODO: Make string uppercase, create array from string, and put in alphabetical order
let alphaArr = string.toUpperCase().split('').sort();
console.log(alphaArr);

// TODO: Add "C"
alphaArr.splice(2, 0, 'C');

// TODO: Add "F"
alphaArr.push('F');

// TODO: Create string from mutated array
console.log(alphaArr.join(''));

// TODO: Print "BE" using bracket notation
console.log(alphaArr[1] + alphaArr[4]);
