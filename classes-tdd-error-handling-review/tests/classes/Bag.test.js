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
			let instantiationAttempt = () => {
				new Bag();
			};
			expect(instantiationAttempt).toThrow(
				'The class Bag requires a value for candy to be passed into the constructor.'
			);
		});

		test('throws error when instantiation is attempted with argument that is not of the Candy class', () => {
			let instantiationAttempt = () => {
				new Bag('Sour Patch Kids');
			};
			expect(instantiationAttempt).toThrow(
				"Property 'candy' must hold an object of the Candy class."
			);
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
            let setCostAttempt = () => {
                testBagWithCandy.setCostByWeight();
            }
            expect(setCostAttempt).toThrow("Weight of bag must be set before cost can be calculated.");
        })
	});
});
