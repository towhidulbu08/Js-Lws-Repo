// What are first class functions:

// What is Anonymous function: A function without a name is called anonymous function.

// Anonymous function does not have its own identity

// function (){
//     console.log("anonymous function");
// }  --> give syntaxError

// According to ES a function statement must have a name.

// Anonymous functions are used as values (assign into a variable)

//Function Statement vs Function Expression vs Function Declaration

// Function Statement is also known as Function Declaration

//a();
function a() {
  console.log("a is a function statement");
}

// b();
var b = function () {
  console.log("a is a function expression");
};

// Difference between Function statement and Function expression is hoisting

// Named function expression

var e = function xyz() {
  console.log(xyz);
};
e();

// xyz(); // give Reference Error: because xyz not created in global scope , in global scope variable e is created and its hold the reference the of xyz function, another things is that xyz is defined inside the function itself

// Difference Between Parameter and Arguments
// Parameter treated automatically as local variable inside the function .

// first class citizen: In programming , the term "first-class citizen"  (or "first-class object") refers to entities that have no restrictions on their use. They can be passed as arguments, returned from functions, assigned to variables, and stored in data structures

// first class function: A first-class function is a function that is treated as a first-class citizen. This means the function can be assigned to a variable, can be passed as an argument, can be returned from a function, can be stored in data structures like arrays

// Higher order functions:  A higher order function is a function that does at least one of the following: 1. Take one or more functions as arguments 2. Returns a function
