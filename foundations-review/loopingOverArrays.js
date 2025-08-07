const input = require('readline-sync');

// Example 1 - Iterating over an array and accessing each element with bracket notation

let typesOfApples = ['Fuji', 'Red Delicious', 'MacIntosh', 'Gala'];

// TODO: Loop over the types of apples and print each one in a sentence.
for (let i = 0; i < typesOfApples.length; i++) {
	console.log(
		`Gosh I'm hungry. I should have a ${typesOfApples[i]} apple as a snack!`
	);
}

// Example 2 - Using more than one array of the same length and incorporating input.question()

let clientInfoNeeded = [
	'First Name: ',
	'Last Name: ',
	'Email Address: ',
	'Phone Number: ',
];

// TODO: Create variables for each piece of data
let firstName = '';
let lastName = '';
let email = '';
let phone = '';

// TODO: Put all four variables in an array in the same order as their prompt counterpart
let clientInfoGathered = [firstName, lastName, email, phone];

// TODO: Create a line of 32 asterisks to use for final printout
let line = '*'.repeat(32);

// TODO: Ask for contact information and save to each variable in the second array
console.log('\nPlease give us your contact information:\n');
for (let i = 0; i < clientInfoNeeded.length; i++) {
	clientInfoGathered[i] = input.question(clientInfoNeeded[i]);
}

// TODO: Print a final recap to the user with each piece of data on a new line using a loop
console.log('\n' + line);

console.log('Thank you for your information.\n \nSummary:\n');

for (let i = 0; i < clientInfoGathered.length; i++) {
	console.log(`${clientInfoNeeded[i]}\t${clientInfoGathered[i]}`);
}

console.log(line + '\n');

// Example 3 - Copying elements from one array to another

let nationalParks = [
	'Yellowstone',
	'Gateway Arch',
	'Glacier',
	'Zion',
	'Shenandoah',
	'Everglades',
];
let nationalParks2 = [
	'Joshua Tree',
	'Grand Canyon',
	'Rocky Mountain',
	'Yosemite',
];

// TODO: Create a function that will take an array of partial names and return a new array with "National Park" added to the end of each name
function getFullParkNames(names) {
	// Create a new array to hold the full names
	let fullParkNames = [];

	// Create a new string for each park with its full name and put it in the new array
	for (let i = 0; i < names.length; i++) {
		let fullName = names[i] + ' National Park';
		fullParkNames.push(fullName);
	}

	// Return the new array
	return fullParkNames;
}

// TODO: For the first array of names, call your function and save the result in a new variable, then print the variable.
let nationalParkNames = getFullParkNames(nationalParks);
console.log(nationalParkNames);

// TODO: Print the resulting value of calling the function and passing in the second list of names
console.log(getFullParkNames(nationalParks2));

// TODO: Print the original arrays to demonstrate they haven't changed.
console.log(nationalParks);
console.log(nationalParks2);
