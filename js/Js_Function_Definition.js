// const a = function (a, b) {
//   return a * b;
// };
// a();
// b();
// function b() {
//   console.log("b");
// }

// (function () {
//   console.log("self-invoked");
// })();//immediately invoked function expression=>IIFE

// function myFunction(a, b, c) {
//   return arguments.length;
// }

// let x = myFunction(4, 3);

// console.dir(myFunction);

// function myFunction(a, b) {
//   return a * b;
// }

// let text = myFunction.toString();
// console.log(typeof text);

const obj = {
  a: 4,
  method: () => {
    console.log(this.a);
    return 0;
  },
};

console.log(obj.method());
