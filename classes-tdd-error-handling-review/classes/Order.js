/* Order class */

/*  
    To collect all bags of candy being purchased,
    calculate subtotal, tax, and total,
    and print receipt
*/

const utils = require('../utils.js');

class Order {
	constructor(bags) {
		this.bags = bags; // array of Bag objects
		if (!bags || bags.length === 0) {
			throw Error('Cannot create order without at least one bag.');
		}
		this.subtotal = 0;
		this.salesTax = 0;
		this.total = 0;
		this.date = new Date(); // current date and time, unformatted
	}

	setSubtotal() {
		let subtotal = this.bags.reduce((total, bag) => total + bag.cost, 0);
		if (subtotal === 0) {
			throw new Error(
				'Cost of each bag must be set before subtotal can be calculated.'
			);
		} else {
			this.subtotal = utils.roundToPenny(subtotal);
		}
	}

	setSalesTax() {
		if (this.subtotal === 0) {
			throw new Error(
				'Subtotal must be set before sales tax can be calculated.'
			);
		} else {
			this.salesTax = utils.roundToPenny(this.subtotal * utils.SALES_TAX_RATE);
		}
	}

	setTotal() {
		if (this.salesTax === 0) {
			throw new Error('Sales tax must be set before total can be calculated.');
		} else {
			this.total = utils.roundToPenny(this.subtotal + this.salesTax);
		}
	}

	printReceipt() {
		let line = '-'.repeat(48);

		console.log(line);
		console.log('THANK YOU FOR SHOPPING AT SWEET TOOTH SENSATIONS');
		console.log(line);
		console.log(this.date.toLocaleDateString() + " at " + this.date.toLocaleTimeString());
        console.log(line);

        this.bags.forEach(bag => {
            console.log(bag.candy.name + " (" + bag.weight + " lbs.) - $" + bag.cost);
        });

        console.log(line)
        console.log("SUBTOTAL: $" + this.subtotal);
        console.log("Sales tax: " + this.salesTax);
        console.log("TOTAL: $" + this.total);

        console.log(line);
        
	}
}

module.exports = Order;
