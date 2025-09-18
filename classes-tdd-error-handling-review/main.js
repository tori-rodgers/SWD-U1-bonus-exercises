const Candy = require('./classes/Candy.js');
const Bag = require('./classes/Bag.js');
const Order = require('./classes/Order.js');

// CANDY FOR SALE
// Create objects of Candy class
const gummyBears = new Candy('Gummy Bears', 6.49);
const darkChocolateMMs = new Candy('Dark Chocolate M&Ms', 17.99);
const skittles = new Candy('Skittles', 7.89);

// CUSTOMER SELECTIONS

// Create objects of Bag class
const bagOfGummyBears = new Bag(gummyBears);
const bagOfSkittles = new Bag(skittles);

// CHECKOUT PROCESS

// Create object of Order class
const order = new Order([bagOfGummyBears, bagOfSkittles]);

try {
	// For each bag:
	//  - Weigh
	//  - Calculate cost by weight
	order.bags.forEach(bag => {
		let lbs = Math.floor(Math.random() * 2); // simulate
		let oz = Math.floor(Math.random() * 16); // simulate
		bag.setWeight(lbs, oz);
		bag.setCostByWeight();
	});

	// Calculate subtotal
	order.setSubtotal();

	// Calculate sales tax
	order.setSalesTax();

	// Calculate total
	order.setTotal();

	// Print receipt
	order.printReceipt();

} catch (error) {
	console.error(error.stack);
}
