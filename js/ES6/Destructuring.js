// 01. Array Destructuring
// 02. Object Destructuring

// const user = {
//   id: {
//     schoolId: 01,
//     collageId: 4566,
//   },
//   name: "Tamim",
//   age: 35,
//   education: {
//     degree: {
//       institute: "University Of Barishal",
//     },
//     year: "2024",
//   },
// };

// const {
//   education: {
//     degree: { institute: MyUniversity },
//   },
// } = user;

// console.log(MyUniversity);

// const arr = [1, 2, [3, 40, 100], 4, 5];

// var [, , [a, , c]] = arr;

// console.log(a, c);

// Value Swapping

var a = 1;
var b = 2;

var [a, b] = [b, a];
console.log(a, b);
