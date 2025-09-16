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
        test('throws error if order is created without at least one bag', () => {
            let instantiationAttempt = () => {
                new Order();
            }
            expect(instantiationAttempt).toThrow("Cannot create order without at least one bag.");
        })
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
	});
});
