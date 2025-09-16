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
		if (!this.name) {
			throw new MissingConstructorValueError('Candy', 'name');
		}
		this.pricePerPound = pricePerPound; // dollars and cents
		if (!this.pricePerPound) {
			throw new MissingConstructorValueError('Candy', 'pricePerPound');
		}
	}
}

module.exports = Candy;
