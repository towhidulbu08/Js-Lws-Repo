//---- Functional Programming---

//--- Higher Order Functions: A function which take another function as an argument or return  a function from it is known as higher order functions

// DRY Principle: Don't Repeat Yourself

// Modular Code, Reusable Code

// Making Reusable logic

// Small reusable component which is function

const radius = [3, 1, 2, 4];

// const result=radius.map(calculateArea)

const Area = function (r) {
  return Math.PI * r * r;
};

Array.prototype.calculate = function (logic) {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(logic(this[i]));
  }
  return arr;
};

console.log(radius.map(Area));

const Circumference = function (r) {
  return 2 * Math.PI * r;
};
const Diameter = function (r) {
  return 2 * r;
};

// const Diameter = function (radius) {};

// console.log(calculate(Area));
// console.log(calculate(Circumference));
console.log(radius.calculate(Diameter));
