/*******************************/
/******* COMPLEX OBJECTS *******/
/*******************************/

/*
	The further you get into your web development journey, 
    the more likely it is that you will encounter and create 
    more complex data structures. Let's work with some objects 
    that contain other data structures like objects and arrays.
*/

/**** OBJECTS CONTAINING OBJECTS ****/

/* 
    You already know how to create, access, and modify properties 
    of basic objects using dot notation or bracket notation. Let's 
    practice these kinds of operations on an object storing other objects. 
*/

let contactInfo = {
	phone: '314-555-1234',
	email: 'john@smith.com',
	address: {
		street1: '1234 Main Street',
		street2: 'Apt. 5C',
		city: 'St. Louis',
		state: 'MO',
		zipCode: '63104',
	},
};

// EXAMPLE: Use chained dot notation to print "St. Louis"
console.log(contactInfo.address.city);

// EXAMPLE: Use chained bracket notation to print "63104"
console.log(contactInfo['address']['zipCode']);

// TODO: Use chained dot notation to print "1234 Main Street"


// TODO: Use chained bracket notation to print "Apt. 5C"



/**** ARRAYS OF OBJECTS ****/

/*
    Data often is stored as lists of objects with similar properties. 
    In this case, we must access the element of the array first and 
    then the property within the object.
*/

let meals = [
	{
		appetizer: 'Salad with Lemon Vinaigrette',
		entree: 'Lasagna',
		dessert: 'Tiramisu',
	},
	{
		appetizer: 'Spring Rolls',
		entree: 'Red Curry with Chicken',
		dessert: 'Coconut Ice Cream',
	},
	{
		appetizer: 'Loaded Nachos',
		entree: 'Shrimp Fajitas',
		dessert: 'Churros with Chocolate Sauce',
	},
];

// EXAMPLE: Print "Spring Rolls"
console.log(meals[1].appetizer);

// TODO: Print "Shrimp Fajitas"


// BONUS CHALLENGE!
// TODO: Write a function that accepts an array of meal objects and
// prints a formatted menu with each full course using a loop
// Test your function by passing in the meals array above



/**** OBJECTS CONTAINING ARRAYS ****/

/*
    When an object contains an array as a value of one of its keys, 
    we chain a combination of dot or bracket notation to access the 
    property and then bracket notation with the index within the array 
    for a specific element.
*/

let entertainmentFavorites = {
	movies: [
		'Girl with a Pearl Earring',
		'House of Flying Daggers',
		'Black Panther',
		'Gosford Park',
	],
	series: [
		'The West Wing',
		'Wallander',
		'Firefly',
		'Bosch',
		'Sherlock',
		'M*A*S*H',
		'Doctor Who',
		'Star Trek: Strange New Worlds',
	],
	books: [
		'Perelandra',
		'Brave New World',
		'The Hobbit',
		'Contact',
		'Pride & Prejudice',
	],
	musicals: ['Hamilton', 'Fiddler on the Roof', 'Wicked'],
};

// EXAMPLE: Print "Perelandra" using dot notation for the object property
console.log(entertainmentFavorites.books[0]);

// EXAMPLE: Print "Girl with a Pearl Earring" using bracket notation for the object property
console.log(entertainmentFavorites['movies'][1]);

// TODO: Print "Brave New World" using dot notation for the object property


// TODO: Print "House of Flying Daggers" using bracket notation for the object property


// TODO: Print "Hamilton" using dot notation for the object property


// TODO: Print "Wallander" using bracket notation for the object property


// BONUS CHALLENGE!
// TODO: Write a function that accepts an object of arrays and uses nested loops to print all lists with each key as a subheading. Test your function using the entertainmentFavorites object above.

