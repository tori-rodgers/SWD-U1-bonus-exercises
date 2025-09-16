const Candy = require('../../classes/Candy.js');
const Bag = require('../../classes/Bag.js');
const Order = require('../../classes/Order.js');

let testCandy1;
let testCandy2;
let testBagWithCandy1;
let testBagWithCandy2;

beforeEach(() => {
	testCandy1 = new Candy('Sour Patch Kids', 6.49);
	testCandy2 = new Candy('Peanut M&Ms', 17.99);
	testBagWithCandy1 = new Bag(testCandy1);
	testBagWithCandy2 = new Bag(testCandy2);
	testOrderWithBags = new Order([testBagWithCandy1, testBagWithCandy2]);
});

describe('The Order class', () => {
	describe('constructor', () => {
		test('correctly instantiates an Order object with at least one bag', () => {
			expect(testOrderWithBags instanceof Order).toBe(true);
		});

		test('correctly stores a Date object when Order object is instantiated', () => {
			expect(testOrderWithBags.date instanceof Date).toBe(true);
		});
		test('throws error if order is created without an argument', () => {
			let instantiationAttempt = () => {
				new Order();
			};
			expect(instantiationAttempt).toThrow(
				'Cannot create order without an array of bags.'
			);
		});
		test('throws error if order is created with an empty array', () => {
			let instantiationAttempt = () => {
				new Order([]);
			};
			expect(instantiationAttempt).toThrow(
				'Cannot create order without an array of bags.'
			);
		});
		test('throws error if order is created with an empty array', () => {
			let instantiationAttempt = () => {
				new Order('This is not an array of bags!');
			};
			expect(instantiationAttempt).toThrow(
				'Cannot create order without an array of bags.'
			);
		});
	});

	describe('setSubtotal method', () => {
		test('correctly sets subtotal property when bags exist in array', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			testBagWithCandy2.setCostByWeight();
			testOrderWithBags.setSubtotal();
			expect(testOrderWithBags.subtotal).toEqual(123.17);
		});
		test('throws error if costByWeight has not been calculated for any of the bags', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			let calculationAttempt = () => {
				testOrderWithBags.setSubtotal();
			};
			expect(calculationAttempt).toThrow(
				'Cost of each bag must be set before subtotal can be calculated.'
			);
		});
	});

	describe('setSalesTax method', () => {
		test('correctly sets salesTax property when bags exist in array', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			testBagWithCandy2.setCostByWeight();
			testOrderWithBags.setSubtotal();
			testOrderWithBags.setSalesTax();
			expect(testOrderWithBags.salesTax).toEqual(11.39);
		});
		test('throws error if subtotal has not been calculated for order', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			testBagWithCandy2.setCostByWeight();
			let calculationAttempt = () => {
				testOrderWithBags.setSalesTax();
			};
			expect(calculationAttempt).toThrow(
				'Subtotal must be set before sales tax can be calculated.'
			);
		});
	});

	describe('setTotal method', () => {
		test('correctly sets total property when bags exist in array', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			testBagWithCandy2.setCostByWeight();
			testOrderWithBags.setSubtotal();
			testOrderWithBags.setSalesTax();
			testOrderWithBags.setTotal();
			expect(testOrderWithBags.total).toEqual(134.56);
		});
		test('throws error if subtotal has not been calculated for order', () => {
			testBagWithCandy1.setWeight(2, 0);
			testBagWithCandy2.setWeight(6, 2);
			testBagWithCandy1.setCostByWeight();
			testBagWithCandy2.setCostByWeight();
			testOrderWithBags.setSubtotal();
			let calculationAttempt = () => {
				testOrderWithBags.setTotal();
			};
			expect(calculationAttempt).toThrow(
				'Sales tax must be set before total can be calculated.'
			);
		});
	});
});
