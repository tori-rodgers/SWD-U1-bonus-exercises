/* 
    Custom error to use when instantiation of an object of a class is attempted without required parameters
*/

class MissingConstructorValueError extends Error {

    constructor(className, propertyName){
        let message = `The class ${className} requires a value for ${propertyName} to be passed into the constructor.`;
        super(message);
        this.name = "MissingConstructorValueError";
    }
}

module.exports = MissingConstructorValueError;
