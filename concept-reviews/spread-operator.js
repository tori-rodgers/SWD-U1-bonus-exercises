let nums = [1, 3, 4, 7, 2, 8];

let numsCopy = nums; // actually an alias

let numsTrueCopy = [...nums];

console.log(nums == numsCopy);
console.log(nums === numsCopy);

console.log(nums === numsTrueCopy);
