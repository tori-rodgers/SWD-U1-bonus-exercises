/* Candy class */

/* 
    To hold information about a specific type of candy
    This class is not concerned with quantity being purchased,
    but it contains information used for calculations
*/

const MissingConstructorValueError = require('../custom-errors/MissingConstructorValueError.js');

class Candy {
	constructor(name, pricePerPound) {
		this.name = name;
		this.pricePerPound = pricePerPound; // dollars and cents
	}
}

module.exports = Candy;
