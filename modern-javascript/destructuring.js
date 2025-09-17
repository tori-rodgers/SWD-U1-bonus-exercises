/** DESTRUCTURING **/

// Sometimes it is convenient to be able to assign variable names 
// to different elements in an array or different keys in an object

// ARRAY EXAMPLE

// Test data
let phoneNumberParts = ["314", "555", "5555"];

// Instead of
let area = phoneNumberParts[0];
let exch = phoneNumberParts[1];
let line = phoneNumberParts[2];

// There is a better syntax for this
// Notice the use of the let keyword
let [ areaCode, exchange, lineNumber ] = phoneNumberParts;

// Essentially you are extracting the elements and assigning new variable names for each of them

// Print them
console.log(`${areaCode}-${exchange}-${lineNumber}`);


// OBJECT EXAMPLE

// Test data
let userInfo = {
    name: "Bob Loblaw",
    email: "bob@loblaw.com",
    website: "BobLoblawsLawBlog.com",
}

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
let faveFruits = ["strawberries", "bananas", "grapes"];

// TODO: Destructure the array and assign variables
// to each element
let [ faveFruit1, faveFruit2, faveFruit3 ] = faveFruits;

// TODO: Print each of the new variables to show their values
console.log(faveFruit1);
console.log(faveFruit2);
console.log(faveFruit3);

// TODO: Create an object with several key/value pairs
let dinner = {
    protein: "glazed ham",
    side1: "roasted potatoes",
    side2: "steamed broccoli",
    side3: "seasoned black-eyed peas",
    dessert: "mixed fresh fruit"
};

// TODO: Destructure the object and assign variables
// to each property
let { protein, side1, side2, side3, dessert } = dinner;

// TODO: Print the values of the new variables
console.log(protein);
console.log(side1);
console.log(side2);
console.log(side3);
console.log(dessert);
