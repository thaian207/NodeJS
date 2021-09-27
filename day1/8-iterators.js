/**
 * Iterators:
 * - Functions that can be suspended and run again as necessary
 * 
 * Iterator Protocol:
 * - Must return an function
 * - next() => returns {value: any, done: boolean}
 */

function myIterator(arr) {
    let index = 0;
    return {
        next: function() {
            return (index < arr.length) ? {
                value: arr[index++],
                done: false
            } : {
                done: true
            };
        }
    }
}



const bands = ['Pink Floyd', 'Led Zeppelin', 'Queen', 'The Beatles', 'The Rolling Stones'];

const bandItr = myIterator(bands);

const myBetterBandItr = {
    [Symbol.iterator]() {
        let index = 0;
        return {
            [Symbol.iterator]() {return this;},
            next() {
                return (index < bands.length) ? {
                    value: bands[index++],
                    done: false
                } : {
                    done: true
                }
            }
        }
    }
};

// for (band of myBetterBandItr) {
//     console.log(band);
// }

// Generator function
function* myGenerator(arr) {
    for(let i = arr.length - 1; i >= 0; i--) {
        // console.log(prop);
        yield obj[prop];
    }
    // Here
    // return {value: undefined, done: true};
}

const pie = {
    type: 'Apple',
    maker: 'Sally',
    size: 'Extra Large',
    glutenFree: false,
    calories: 1000
}

const pieItr = myGenerator(pie);

for (val of pieItr) {
    console.log('Hello For of loop');
}
// console.log(pieItr.next());

// while (true) {
//     let obj = pieItr.next();
//     if (obj.done === true) {
//         break;
//     }
//     console.log(obj.value); // Do stuff
// }

// console.log(pieItr.next());

// for (let i = 0; i < 4; i++) {
//     const obj = pieItr.next();
//     console.log(obj);
// }

// Some time passes

// console.log('Outside of for loop:', pieItr.next());

function* oneTwoThree() {
    yield 1;
    yield 2;
    yield 3;
}

const itr = oneTwoThree();
const itr2 = oneTwoThree();

console.log(itr.next()); // {value: 1, done: false}.value
console.log(itr2.next());
console.log(itr.next());
console.log(itr.next());
console.log(itr2.next());