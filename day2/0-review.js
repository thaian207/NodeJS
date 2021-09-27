// Nullish coalescing operator

function x(x) {
    return x;
}

// let x2 = x();

// console.log(x2);

// // If value on left is (null/undefined) return right. Else return left
// if (x2 == null)
//     console.log('It\'s null');
// const myVar = x2 ?? 'var'
// console.log(myVar);

// const val = null && 'Hello';
// console.log(val);

function* myGenerator(i) {
    yield 1;
    yield 2;
    yield 'Hello World';
}

const myGenItr = myGenerator(0);

console.log(myGenItr.next());