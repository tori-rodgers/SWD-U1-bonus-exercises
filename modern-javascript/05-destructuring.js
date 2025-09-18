/** DESTRUCTURING **/

// Sometimes it is convenient to be able to assign variable names
// to different elements in an array or different keys in an object

// ARRAY EXAMPLE

// Test data
export let phoneNumberParts = ['314', '555', '5555'];

// Instead of
let area = phoneNumberParts[0];
let exch = phoneNumberParts[1];
let line = phoneNumberParts[2];

// There is a better syntax for this
// Notice the use of the let keyword
let [areaCode, exchange, lineNumber] = phoneNumberParts;

// Essentially you are extracting the elements and assigning new variable names for each of them

// Print them
console.log(`${areaCode}-${exchange}-${lineNumber}`);

// OBJECT EXAMPLE

// Test data
export let userInfo = {
	name: 'Bob Loblaw',
	email: 'bob@loblaw.com',
	website: 'BobLoblawsLawBlog.com',
};

// Instead of
let userName = userInfo.name;
let userEmail = userInfo.email;
let userWebsite = userInfo.website;

// Use destructuring with the let keyword
let { name, email, website } = userInfo;

// Print them
console.log(name);
console.log(email);
console.log(website);

// YOUR TURN! Practice below.

// TODO: Create an array with several elements (whatever you want!)

// TODO: Destructure the array and assign variables
// to each element

// TODO: Print each of the new variables to show their values


// TODO: Create an object with several key/value pairs


// TODO: Destructure the object and assign variables
// to each property

// TODO: Print the values of the new variables


// TODO: For the 06-importExport.js exercise, the export keyword should be
// applied to each individual data structure above.
// No need to put anything here; the object is created behind-the-scenes!
