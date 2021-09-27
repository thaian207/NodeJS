// var, let, const

// Globally scoped
var a = 'a';
let b = 'b';
const c = 'c';

b = 'beta';
console.log(b);

// Var: globally scoped/function scoped

function global(a) {
    console.log(a);
}


// Let and Const are block scoped

function functionScope() {
    // Var is hoisted to the top
    // var num = undefined;
    // var num2 = undefined;
    // var student;
    
    // Runs just fine
    console.log(num);
    if (false) {
        // let letExample;
        var num = 0;
        var num2 = 1;
        let letExample = 5;
    }
    var student = 'Tabitha';
    let food = 'Pizza';
}

// functionScope();

