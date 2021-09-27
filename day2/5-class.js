/**
 * Classes provide no new features for the language
 * Constructor functions under the hood
 */

class Bird {

    // private
    #color;

    constructor(color, favoriteFood='Sunflower') {
        this.#color = (typeof color === 'string') ? color : 'blue';
        this.favoriteFood = favoriteFood;
    }

    // Method
    sing() {
        console.log('Tweet tweet.');
    }

    get color() {
        return this.#color;
    }

    set color(newColor) {
        this.#color = newColor;
    }

    static feet = 2;

    static eat() {
        console.log('Eating.');
    }

    *propGen() {
        for (let prop in this) {
            yield prop;
        }
    }
}

class Raven extends Bird {
    constructor(color, favoriteFood, mysteries) {
        super(color, favoriteFood);
        this.mysteries = Array.isArray(mysteries) ? mysteries : []
    }

    sing() {
        console.log('Nevermore.');
        this.#fly();
    }

    #fly() {
        console.log('Flying');
    }
}

const raven = new Raven('black', 'Corn', ['Edgar Allan Poe']);

raven.sing();

console.log(raven);

console.log(raven.color);

raven.color = 'blue';

console.log(raven.color);

raven.sing();

raven.__proto__.__proto__.sing();

console.log(raven.__proto__ === Raven.prototype);
console.log(raven.__proto__.__proto__ === Bird.prototype);
console.log(raven.__proto__.__proto__.__proto__ === Object.prototype);
console.log(raven.__proto__.__proto__.__proto__.__proto__);

// const bluejay = new Bird('blue', 'Sunflower seeds');
// bluejay.sing();

// console.log(bluejay.color);

// bluejay.color = 'red';

// console.log(bluejay.color);
// Bird.eat();

// const propItr = bluejay.propGen();

// for (let prop of propItr) {
//     console.log(prop);
// }

// console.log(Bird);