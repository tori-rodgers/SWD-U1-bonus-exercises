const examples2 = require('../examples-2.js');

/* SET UP MOCK DATA */

// For testing isValidPhoneNumber()
let validPhoneNum = '3145555678';
let notANumber = 'a1b2c3';
let wrongLength = '5551920';
let tenDigitDecimalNumber = '1234.56789';

// For testing formatPhone()
let formattedPhoneNumber = '(314) 555-5678';

// For testing roundNumberToDecimalPlace()
let decimalNumber = 36.24971024837454;

// For testing reverseString()
let abc = 'abc';
let reversedAbc = 'cba';
let notReversedAbc = 'cab';

// For testing getPalindromes()
let maybePalindromes = [
    'tacocat',
	'tacodog',
	'banana',
	'racecar',
	'kayak',
	'bonobo',
];
let definitelyPalindromes = ['tacocat', 'racecar', 'kayak'];

// For testing getTitleCase()
let allLowerCase = 'the fellowship of the ring';
let allUpperCase = 'THE FELLOWSHIP OF THE RING';
let mixedCase = 'tHe feLloWshIp Of thE rInG';
let correctResult = "The Fellowship of the Ring";


/* SET UP TESTS */

/*
    Group related tests in a describe() block - description should be the thing you are testing
    Each specification is a test() block - description should clarify in what way it is being tested
    Each test inside the specification is called an expectation - compare actual vs expected
*/

// Test isValidPhoneNumber()
describe('The function isValidPhoneNumber()', () => {
	// Positive case
	test('should return true for any data that is a 10-digit number', () => {
		// expect(actual).matcher(expected)
		expect(examples2.isValidPhoneNumber(validPhoneNum)).toBe(true);
	});

	// Negative cases
	test('should return false for any data that is a number but is not exactly 10 digits long', () => {
		// expect(actual).matcher(expected)
		expect(examples2.isValidPhoneNumber(wrongLength)).toBe(false);
	});
	test('should return false for any data that is not able to be converted to a number', () => {
		// expect(actual).matcher(expected)
		expect(examples2.isValidPhoneNumber(notANumber)).toBe(false);
	});

	// Edge cases
	test('should return false for an empty string', () => {
		expect(examples2.isValidPhoneNumber("")).toBe(false);
	});
	test('should return false for a decimal number', () => {
		expect(examples2.isValidPhoneNumber(tenDigitDecimalNumber)).toBe(false);
	});
});

// Test formatPhone()
describe('The formatPhone() function', () => {
	test('should format a valid 10-digit number as (xxx) xxx-xxxx', () => {
		expect(examples2.formatPhone(validPhoneNum)).toEqual(formattedPhoneNumber);
	});
});

// Test roundNumberToDecimalPlace()
describe('The roundNumberToDecimalPlace() function', () => {
	test('should correctly round a number to a whole number', () => {
		expect(examples2.roundNumberToDecimalPlace(decimalNumber)).toEqual(36);
	});
	test('should correctly round a number to one decimal place', () => {
		expect(examples2.roundNumberToDecimalPlace(decimalNumber, 1)).toEqual(36.2);
	});
	test('should correctly round a number to three decimal places', () => {
		expect(examples2.roundNumberToDecimalPlace(decimalNumber, 3)).toEqual(36.25);
	});
});

// Test reverseString()
describe('The reverseString() function', () => {
    test('should return true for a string that is properly reversed', () => {
        expect(examples2.reverseString(abc)).toEqual(reversedAbc);
    })
    test('should return false for a string that is not properly reversed', () => {
        expect(examples2.reverseString(abc)).not.toEqual(notReversedAbc);
    })
})

// Test getPalindromes()
describe('The getPalindromes() function', () => {
    test('should return an array that includes only palindromes', () => {
        expect(examples2.getPalindromes(maybePalindromes)).toEqual(definitelyPalindromes);
        // This is unnecessary but it's an example of how to use the matcher .toContain() with arrays
        expect(examples2.getPalindromes(maybePalindromes)).toContain(definitelyPalindromes[2]);
    })
})

// Test getTitleCase()
describe('The getTitleCase() function', () => {
    test('should produce proper title case with an all-lowercase string', () => {
        expect(examples2.getTitleCase(allLowerCase)).toEqual(correctResult);
    })
    test('should produce proper title case with an all-lowercase string', () => {
        expect(examples2.getTitleCase(allUpperCase)).toEqual(correctResult);
    })
    test('should produce proper title case with an all-lowercase string', () => {
        expect(examples2.getTitleCase(mixedCase)).toEqual(correctResult);
    })
})

// Don't forget to use 'npm test' in the terminal to view code coverage. It should be at 100% for this file now!
