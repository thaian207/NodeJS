const student = {
    firstName: 'George',
    lastName: 'Smith',
    age: 22,
    height: null,
    classes: ['Math', 'Computer Science', 'History']
}

console.log(Object.getOwnPropertyDescriptor(student, 'age'));

Object.defineProperty(student, 'age', {enumerable: false});

for (let prop in student) {
    console.log(prop);
}

Object.defineProperty(student, 'age', {enumerable: true});

console.log('\n\n');

for (let prop in student) {
    console.log(prop);
}

console.log(student['age']);

// // Like const
// Object.defineProperty(student, 'firstName', {writable: false});

// student.firstName = 'Mary';

// Object.defineProperty(student, 'firstName', {writable: true});

// student.firstName = 'Mary';

// console.log(student.firstName);

// Object.defineProperty(student, 'classes', {writable: false});

// student.classes.push('Spanish');

// student.classes = 1;

// console.log(student.classes);

// Object.defineProperty(student, 'lastName', {configurable: false}); // Editable
// Object.defineProperty(student, 'lastName', {writable: false});

// console.log(Object.getOwnPropertyDescriptor(student, 'lastName'));

// delete student.lastName;

// // delete student.age;

// console.log(student);