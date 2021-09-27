// While loop

let count = 0;
// while(count < 5) {
//     console.log(`Iteration number ${count}`);
//     count++;
// }

// // Do While loop
// // Do while runs at least once
// do {
//     console.log('Inside do while loop');
// } while(false);

// // For loop
// for (let i = 0; i < 2000; i+=100) {
//     console.log(`Iteration number ${i}`);
// }

const car = {
    color: 'Blue',
    make: 'Ford',
    model: 'Mustang',
    year: 1970,
    seats: 5,
    doors: 4,
    prop: 'Gotcha!'
};

// For in : Iterates "enumerable" properties
// for (let prop in car) {
//     console.log(car[prop]);
// }


// For of : Iterates over "iterable" objects
const nums = [1, 2, 3, 4];
for (let num of nums) {
    console.log(num);
}