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
            // TODO: Write test and then update constructor 
		});
        
		test('throws error when instantiation is attempted without pricePerPound argument', () => {
            // TODO: Write test and then update constructor 
		});
	});

});
