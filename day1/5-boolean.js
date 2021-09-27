/**
 * Boolean operators
 *  <  // Less than operator 
 *  >
 *  <=
 *  >=
 *  ==
 *  ===
 *  !=
 *  !==
 *  ||
 *  &&
 */

// console.log(typeof 2, typeof '2');

const obj = {};

obj.age = 14;

function calculateDogYears(age) {
    // Nullish coalescing operator
    age = age ?? 7;
    return age/7;
}

// console.log(typeof '');
// console.log('' ?? 'Hello World', 'New line');

// let x = 3;


// function add(x){
//     return x;
// }

// console.log(add(5));

if (obj.age != null){
    console.log(calculateDogYears('dfa'));
}

// console.log(calculateDogYears(0));

// if (typeof sum === 'number' && !Number.isNaN(sum)) {
//     console.log('True');
//     console.log(sum);
// } else {
//     console.log('False');
// }

// ??


// ==
// Enforces type coercion

// ===
// Does not coerce type. And also performs check to see if typeof is same


/**
 * Truthy:
 * - 
 * 
 * Falsy:
 */