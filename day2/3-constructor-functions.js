function Student(firstName, lastName, age, classes) {
    this.lastName = lastName; 
    this.age = age;
    this.classes = Array.isArray(classes) ? classes : [];

    this.enroll = function(course) {
        this.classes.push(course);
    }

    Object.defineProperties(this, {
        'firstName': {
            'get': function() { return firstName; }
        }
    });

    Object.defineProperties(this, {
        'dogAge': {
            'get': function() { return this.age / 7; },
            'set': function(dogAge) { this.age = dogAge * 7; }
        }
    });

    Object.defineProperties(this, {
        'greet': {
            'get': function() { console.log(`Hello, my name is ${this.firstName}`); }
        }
    });
}

Student.prototype.school = 'Stomers High School';
Student.prototype.greet = function() {
    console.log('Hello!');
}

// console.log(Student.prototype);

/**
 * new keyword:
 * 1. Creates a new JavaSript object -> {}
 * 2. Adds a __proto__ to the object and then has the object point to the construction function's prototype -> {__proto__: Student.prototype}
 * 3. Bind all references of 'this' in the constructor function to the object created in step 1
 * 4. If nothing is returned in the constructor function, returns this
 */

const jim = new Student('Jim', 'Conners', 21, []);

// console.log(jim.school===Student.prototype.school);

jim.enroll('Spanish');

// console.log('firstName:', jim.firstName);
jim.dogAge = 4;

jim.firstName = 'Mary';

console.log('firstName:', jim.firstName);

// console.log(Student.prototype === jim.__proto__);

jim.school = 'Stomers University';

// console.log(jim.hasOwnProperty('test'));

console.log(jim.school === jim.__proto__.school);

let add = function(x, y) {
    return x + y;
} 

console.log(add(1, 2));

const arr = [];

console.log(Array.prototype === arr.__proto__);

console.log(Object.__proto__.__proto__.__proto__);
