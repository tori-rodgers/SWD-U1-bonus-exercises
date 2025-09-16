const Candy = require('../../classes/Candy.js');

let testCandy;

beforeEach(() => {
	testCandy = new Candy('Almond Joy', 6.49);
});

describe('The Candy class', () => {
	describe('constructor', () => {

		test('correctly instantiates a Candy object given a name and pricePerPound', () => {
			expect(testCandy instanceof Candy).toBe(true);
		});

		test('correctly instantiates a Candy object with a name', () => {
            expect(testCandy.name).toEqual("Almond Joy");
		});

		test('correctly instantiates a Candy object with a pricePerPound', () => {
            expect(testCandy.pricePerPound).toEqual(6.49);
		});

		test('throws error when instantiation is attempted without arguments', () => {
			let instantiationAttempt = () => {
				new Candy();
			};
			expect(instantiationAttempt).toThrow(
				'The class Candy requires a value for name to be passed into the constructor.'
			);
            // The program does not continue to run once the error is thrown, so no need to test second error here
		});

		test('throws error when instantiation is attempted without pricePerPound argument', () => {
			let instantiationAttempt = () => {
				new Candy('Almond Joy');
			};
			expect(instantiationAttempt).toThrow(
				'The class Candy requires a value for pricePerPound to be passed into the constructor.'
			);
		});
	});

});
