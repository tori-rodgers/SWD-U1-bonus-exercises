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
		this.subtotal = 0;
		this.salesTax = 0;
		this.total = 0;
		this.date = new Date(); // current date and time, unformatted
	}

	setSubtotal() {
		let subtotal = this.bags.reduce((total, bag) => total + bag.cost, 0);
		this.subtotal = utils.roundToPenny(subtotal);
	}

	setSalesTax() {
		this.salesTax = utils.roundToPenny(this.subtotal * utils.SALES_TAX_RATE);
	}

	setTotal() {
		this.total = utils.roundToPenny(this.subtotal + this.salesTax);
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
