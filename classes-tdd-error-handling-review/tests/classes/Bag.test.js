const Candy = require('../../classes/Candy.js');
const Bag = require('../../classes/Bag.js');

let testCandy;
let testBagWithCandy;

beforeEach(() => {
	testCandy = new Candy('Sour Patch Kids', 6.49);
	testBagWithCandy = new Bag(testCandy);
});

describe('The Bag class', () => {

	describe('constructor', () => {
		test('correctly instantiates a Bag object with a specific Candy object', () => {
			expect(testBagWithCandy instanceof Bag).toBe(true);
            expect(testBagWithCandy.candy).toBe(testCandy);
		});

		test('throws error when instantiation is attempted without candy argument', () => {
            // TODO: Write test and then update constructor 
		});

		test('throws error when instantiation is attempted with argument that is not of the Candy class', () => {
            // TODO: Write test and then update constructor 
		});
	});

	describe('setWeight() method', () => {
		test('correctly sets weight in pounds given pounds and ounces', () => {
			testBagWithCandy.setWeight(3, 8);
			expect(testBagWithCandy.weight).toEqual(3.5);
		});
        
		test('correctly calculates decimal pounds given pounds only', () => {
			testBagWithCandy.setWeight(3);
			expect(testBagWithCandy.weight).toEqual(3.0);
		});
	});

	describe('setCostByWeight() method', () => {
		test('correctly calculates cost after weight is set', () => {
            testBagWithCandy.setWeight(3, 8);
			testBagWithCandy.setCostByWeight();
			expect(testBagWithCandy.cost).toEqual(22.72);
		});
        test('throws error if weight has not yet been set', () => {
            // TODO: Write test and then update method 
        })
	});
});
