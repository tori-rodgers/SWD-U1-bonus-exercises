// Import readline-sync
const input = require('readline-sync');

/* NAMED FUNCTIONS */

// Sample data
let userInput1 = "abc";
let userInput2 = "5551920";
let userInput3 = "3145555678";

// Function with parameter and a return value of true or false
function isValidPhoneNum(userInput) {
  return !isNaN(Number(userInput)) && userInput.length === 10;
}

// TODO: Call function and print return values for each sample
console.log(isValidPhoneNum(userInput1));
console.log(isValidPhoneNum(userInput2));
console.log(isValidPhoneNum(userInput3));


/* MULTIPLE FUNCTIONS */

// Existing data to be updated
let userPhone = "(314) 555-1234";

// "Helper" or "minor" functions

// TODO: Get user input, validate, and return validated input
function promptUserForNewPhone() {
    let newPhone = input.question("\nTo update your contact information, please enter your 10-digit phone number.\n");
    while (!isValidPhoneNum(newPhone)) {
        newPhone = input.question("Please enter a valid 10-digit number: \n");
    }
    return newPhone;
}

// TODO: Format a phone number like this: (314) 555-1234 and return the string
function formatPhone(phoneNum) {
    let areaCode = phoneNum.slice(0, 3);
    let exchange = phoneNum.slice(3, 6);
    let line = phoneNum.slice(6);
    return `(${areaCode}) ${exchange}-${line}`;
}

// TODO: assign new value to userPhone
function updatePhone(phoneNum) {
    userPhone = formatPhone(phoneNum);
}

// "Main" function 
// Making use of other functions
function runPhoneUpdateSequence() {

  // TODO: Ask user for new phone number, with validation
    let newNum = promptUserForNewPhone();

  // TODO: Update their record
  updatePhone(newNum);

  // TODO: Print a confirmation using number now on record
  console.log(`
Thank you! Your new phone number has been saved: ${userPhone}
`);

}

// TODO: Call main function
runPhoneUpdateSequence();
