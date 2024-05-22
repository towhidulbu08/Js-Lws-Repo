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

// Array forEach():

const ForEach = [1, 2, 3, 4, 5];
// console.log(ForEach.join(","));

// let text = "";

const result = ForEach.map((e, i, arr) => {
  return e * 2;
});
//console.log(result);
//console.log(text);

// Array Reduce()

const numbers6 = [45, 4, 9, 16, 25];
let sum = numbers6.reduce(myFunction);

function myFunction(total, value) {
  // console.log(total, value);
  return total + value;
}
//console.log(sum);

const nestedArrays = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArrays.reduce((accumulator, currentValue) => {
  //console.log(accumulator, currentValue);
  return accumulator.concat(currentValue);
}, []);
//console.log(flattenedArray);

const fruits = [
  "apple",
  "banana",
  "orange",
  "apple",
  "orange",
  "banana",
  "banana",
];
const countFruits = fruits.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});
console.log(countFruits);
//console.log({}["apple"]);

// const obj = {};
// obj["apple"] = 1;
// console.log(obj);

// Array.from()

// const myArr = Array.from("abcde");
// console.log(myArr);

// function example() {
//   let argsArray = Array.from(arguments);
//   console.log(arguments); // [1, 2, 3]
// }
// example(1, 2, 3);

//Converting Iterables to Arrays:

// Converting a string to an array
let str = "hello";
let strArray = Array.from(str);
//console.log(strArray[0]); // ['h', 'e', 'l', 'l', 'o']

// Converting a Set to an array
let set = new Set([1, 2, 3]);
//console.log(set);
let setArray = Array.from(set);
//console.log(setArray); // [1, 2, 3]

// Converting a Map to an array
let map = new Map([
  ["a", 1],
  ["b", 2],
]);
//console.log(map);
let mapArray = Array.from(map);
//console.log(mapArray); // [['a', 1], ['b', 2]]

// let arr = Array.from(
//   new Map([
//     ["a", 1],
//     ["b", 2],
//     ["c", 3],
//   ]),
//   (x) => x * 2
// );
//console.log(arr); // [NaN, NaN, NaN]

//Using a Mapping Function:

//let arr = Array.from("abcd", (x) => x + 2);
//console.log(arr); //["a2","b2","c2","d2"]

//Using thisArg
let myNum = {
  factor: 0,
};
let arr = Array.from(
  [1, 2, 3],
  function (x) {
    return x * this.factor;
  },
  myNum
);
//console.log(arr); // [2, 4, 6]

// Array Iterator Methods:

let array = [1, 2, 3, 4, 5];

// Using values() to create an iterator
let iterator = array.values();
for (let x of iterator) {
  //console.log(x);
}
let iterator2 = array.keys();
for (let x of iterator2) {
  //console.log(x);
}
let iterator3 = array.entries();
for (let x of iterator3) {
  // console.log(x);
}
// console.log(iterator1);
// console.log(iterator2);
// console.log(iterator3);

// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: 3, done: false }
// console.log(iterator.next()); // { value: 4, done: false }
// console.log(iterator.next()); // { value: 5, done: false }
// console.log(iterator.next());

//ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths);

//The Array.prototype.fill() method in JavaScript allows you to fill all the elements of an array from a start index to an end index with a static value. This method mutates the original array.

// Syntax:
// array.fill(value, start, end)

const numbers = [1, 2, 3, 4, 5];
const newArr = numbers.fill(0, 3);
//console.log(newArr);

let arr1 = new Array(5).fill(7);
console.log(arr1);

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

// const arr = [1, 2, 3];
// const mappedArr = arr.map((x) => [x, x * 2]).flat();
// console.log(mappedArr);

// console.log(keys);
