const doNotCapitalize = require('./doNotCapitalize.js');

function isValidPhoneNumber(userInput) {
    if (userInput.includes(".")) return false; // note the shorthand syntax without {}
	return !isNaN(Number(userInput)) && userInput.length === 10;
}

function formatPhone(phoneNum) {
    let areaCode = phoneNum.slice(0, 3);
    let exchange = phoneNum.slice(3, 6);
    let line = phoneNum.slice(6);
    return `(${areaCode}) ${exchange}-${line}`;
}

function roundNumberToDecimalPlace(num, dec = 0) {
	let factor = 10 ** dec; // 10 to the nth power
	return Math.round(num * factor) / factor;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function getPalindromes(wordArray) {
    return wordArray.filter(word => word === reverseString(word));
}

function getTitleCase(str) {
    return str
    .split(' ')
    .map((el, i) => {
        if (i > 0 && doNotCapitalize.includes(el.toLowerCase())) {
            return el.toLowerCase();
        } else {
            return el[0].toUpperCase() + el.slice(1).toLowerCase();
        }
    })
    .join(' ');
}

module.exports = {
	isValidPhoneNumber,
	formatPhone,
    roundNumberToDecimalPlace,
    getTitleCase,
    reverseString,
    getPalindromes,
};
