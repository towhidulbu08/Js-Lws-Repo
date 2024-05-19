/**
 * Array Iteration Methods:
 * 1. Array forEach()
 * 2.Array map()
 * 3.Array flatMap()
 * 4.Array filter()
 * 5.Array reduce()
 * 6.Array reduceRight()
 * 7.Array every()
 * 8.Array some()
 * 9.Array from()
 * 10.Array keys()
 * 11.Array entries()
 * 12.Array with()
 * 13.Array Spread (...)
 */

//const numbers = [45, 4, 9, 16, 25];

// const iterate = numbers.forEach((value, index, numbers) => {
//   numbers[index] = 12;
//   console.log(numbers);
// });

// const Map = numbers.map((e, i, a) => {
//   //   a[i] = e * 2;
//   return e * 2;
// });
// console.log(Map);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap((x, i) => {
//   x * 2;
//   return myArr;
// });
// console.log(newArr);
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "<br>";
// }

// const words = ["hello", "world"];
// const lettersMap = words.flatMap((word) => word.split(""));

// console.log(lettersMap);

// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18);

// const numbers = [45, 4, 9, 16, 25];

// const sum = numbers.reduce((total, currentValue, index, arr) => {
//   console.log(total, currentValue);
//   return total + currentValue;
// }, 100);
// console.log(sum);
// const arrays = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const flattenedArray = arrays.reduce(
//   (accumulator, currentValue) => accumulator.concat(currentValue),
//   []
// );

// console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// const numbers = [10, 5, 20, 15, 25];

// const maxNumber = numbers.reduceRight((accumulator, currentValue) => {
//   console.log(accumulator, currentValue);
//   return Math.max(accumulator, currentValue);
// });

// const numbers = [45, 4, 9, 16, 25];
// let allOver18 = numbers.every(myFunction);

// function myFunction(value, index, array) {
//   console.log(value);
//   return value > 1;
// }
//console.log(allOver18);

// const numbers = [45, 4, 9, 16, 25];
// let someOver18 = numbers.some(myFunction);

// function myFunction(value, index, array) {
//   console.log(value);
//   return value > 18;
// }

// console.log(someOver18);

// let a = Array.from("12");
// console.log(a);

// const set = new Set([1, 2, 3, 4, 5]);

// const a = Array.from(set);
//console.log(a);

// const arrayLike = { 0: 10, 1: 23, 2: 30, length: 3 };
// const newArray = Array.from(arrayLike, (x) => x * 2);
// console.log(arrayLike.length);

//console.log(maxNumber);

// const fruits = ["Banana", "Orange", "Apple", "Mango", "sfd"];
// const keys = fruits.keys();
// console.log(typeof keys);
// let text = "";
// for (let x of keys) {
//   console.log(x);
//   text += x + "<br>";
// }

// const months = ["January", "Februar", "Mar", "April"];
// const myMonths = months.with(0 + 1, "February");
// console.log(myMonths);

// const q1 = ["Jan", "Feb", "Mar"];
// const q2 = ["Apr", "May", "Jun"];
// const q3 = ["Jul", "Aug", "Sep"];
// const q4 = ["Oct", "Nov", "May"];

// const year = [...q1, ...q2, ...q3, ...q4];
// console.log(year);

const arr = [1, 2, 3];
const mappedArr = arr.map((x) => [x, x * 2]).flat();
console.log(mappedArr);

// console.log(keys);
