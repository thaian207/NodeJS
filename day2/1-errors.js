// Exceptions == Errors

/**
 * ReferenceError
 * RangeError
 * TypeError
 * URIError
 * SyntaxError
 * EvalError * No longer seen
 */

function simpleError() {
    throw 1;
}

function customError() {
    throw {name: 'CustomError', message: 'My custom error', handleError: function() {console.log('Error handled')}};
}

function throwNull() {
    throw null;
}

function referenceError() {
    // console.log(x); // Temporal dead zone
    // let x = 1;
    throw new ReferenceError('My ReferenceError');
}

function rangeError(x) {
    if (x > 100) {
        throw new RangeError('x must be less than or equal to 100');
    }
}

function typeError(arr) {
    if (!Array.isArray(arr))
        throw new TypeError(`Inside typeError function. Must provide an array. ${typeof arr} provided.`);
    // let one = 1;
    // one.toUpperCase();
}

function uriError() {
    let uri = '%%%%';
    decodeURI(uri);
}

function syntaxError() {
    // Replaced EvalError
    eval('alert("Hello World);'); // Don't use
}

function evalError() {
    throw new EvalError('Old EvalError');
}

try {
    // Code that might break or throw error
    rangeError(102);
} catch(err) {
    err = err ?? {name: 'NullishError', message: 'A nullish error was thrown'}
    if (typeof err !== 'object') {
        console.error(err);
        
    }
    else {
        switch(err.name) {
            case('RangeError'):
                console.log('Handling error'); // recovery function or procedure
                break;
            case('CustomError'):
                err.handleError();
                break;
            case('ReferenceError'):
            case('NullishError'):
            case('TypeError'):
            case('SyntaxError'):
            case('URIError'):
            case('SyntaxError'):
            case('EvalError'):
                console.error(`${err.name}: ${err.message}`);
                break;
            default:
                console.error('Invalid error');
        }
    }
    // console.error(err);
    // Send back 500 error
}