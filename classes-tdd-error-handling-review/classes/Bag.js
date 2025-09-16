/* Bag class */

/*
    To hold information about a specific selection of candy at time of purchase
*/

const utils = require('../utils.js');
const Candy = require('./Candy.js');
const MissingConstructorValueError = require('../custom-errors/MissingConstructorValueError.js');

class Bag {
	constructor(candy) {
		this.candy = candy; // object of Candy class
		this.weight = null; // pounds, calculated at checkout
		this.cost = null; // decimal dollars, calculated at checkout
	}

	setWeight(lbs, oz = 0) {
		this.weight = utils.roundWeight(lbs + oz / 16);
	}

	setCostByWeight() {
        this.cost = utils.roundToPenny(this.candy.pricePerPound * this.weight);
	}
}

module.exports = Bag;
