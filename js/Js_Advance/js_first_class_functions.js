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
