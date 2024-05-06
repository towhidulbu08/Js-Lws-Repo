// function myFunction(x, y = 10) {
//   return x + y;
// }
// const result = myFunction(5);
// console.log(result);

// function sum(x, y, ...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

// function findMax() {
//   //   let max = -Infinity;
//   //   for (let i = 0; i < arguments.length; i++) {
//   //     if (arguments[i] > max) {
//   //       max = arguments[i];
//   //     }
//   //   }
//   //const argArray = Array.from(arguments);
//   const argArray = [...arguments];
//   return argArray;
// }

// const x = findMax(4, 5, 6);
// console.log(x);
// function check(a, b) {
//   return [a, b];
// }
// const x = check(3, 4);
// console.log(x);

function check(a) {
  a.one = "Tamim";
  return [a];
}

let x = {
  one: 4,
  two: 5,
};

console.log(check(x));
console.log(x);
