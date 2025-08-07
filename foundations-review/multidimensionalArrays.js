let nums = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];
let alpha = [
	['a', 'b'],
	['c', 'd'],
	['e', 'f', 'g'],
	['h', 'i'],
];

// TODO: Create another array that has both nums and alpha as elements, then print it
let allData = [nums, alpha];
console.log(allData);

// TODO: Print just nums from allData
console.log(allData[0]);

// TODO: Print 2
console.log(allData[0][0][1]);

// TODO: Print f
console.log(allData[1][2][1]);

// TODO: Print ["c", "d"]
console.log(allData[1][1]);

// TODO: Add letter y with bracket notation after d and print allData
allData[1][1][2] = 'y';
console.log(allData);

// TODO: Add letter z with .push() after y and print allData
allData[1][1].push('z');
console.log(allData);
