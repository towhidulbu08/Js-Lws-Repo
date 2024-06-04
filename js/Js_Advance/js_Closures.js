// A closure is a function having access to the parent scope, even after the parent function has closed.

// Closures are functions that refer to independent (free) variables (variable that are used locally but defined in an enclosing scope). In other words, these functions remembered the environment in which they were created  [Mdn Doc (Old version)]

(function () {
  var num1 = 2;
  var num2 = 3;

  var sum = function () {
    return num1 + num2;
  };

  console.log(sum());
  console.dir(sum);

  num1 = 5;
  num2 = 7;

  console.log(sum());
  console.dir(sum);
})();
