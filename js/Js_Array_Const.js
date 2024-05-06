// const cars;
// cars = ["Saab", "Volvo", "BMW"];
// console.log(cars);

// cars = ["Saab", "Volvo", "BMW"];
// var cars;
// console.log(cars);

// var cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[0]);

// if (true) {
//   var cars = ["Toyota", "Audi", "Mercedes"];
//   console.log(cars[0]);
// }
// console.log(cars[0]);

const arr1 = [1, 2, 3, 4, 5];

// Now, let's create another variable and assign it the same array reference
const arr2 = [...arr1];

// We can modify elements of the array through arr2
arr2[1] = 20;

console.log(arr1); // Output: [10, 20, 3, 4, 5]
console.log(arr2); // Output: [10, 20, 3, 4, 5]
