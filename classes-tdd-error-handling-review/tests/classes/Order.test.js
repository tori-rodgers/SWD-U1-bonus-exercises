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
            // TODO: Write test and then update constructor 
        })
        // TODO: Add more tests:
        // - what if the argument is an empty array?
        // - what if it is an array, but the elements aren't Bag objects?
        // - what if it is not an array at all?
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
        // TODO: Test that an error is thrown if the cost hasn't been set for one or more of the bags
	});

    // TODO: Write tests for setSalesTax that check the positive case 
    // and also the case where a subTotal hasn't been calculated
    // Use a single describe() block similar to the one above

    // TODO: Write tests for setTotal similarly (what if sales tax hasn't been calculated?)
});
