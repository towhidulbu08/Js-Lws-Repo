const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.sort()); //
// console.log(fruits.reverse());
// console.log(fruits);
// const numbers = [20, 18, 25, 30, 40, 55];
// const sorted = numbers.toSorted(function (a, b) {
//   return a - b;
// });
// const highest = sorted[sorted.length - 1];
// const lowest = sorted[0];
// console.log(highest, lowest);

// console.log(fruits.toSorted());
// console.log(fruits.toReversed());
// console.log(fruits);
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort(() => 0.5 - Math.random()));

// const points = [40, 100, 1, 5, 25, 10];

// function myArrayMin(arr) {
//   return Math.min.apply(null, arr);
// }

// const MinValue = (arr) => Math.max.apply(null, arr);
// const lowest = MinValue(points);
// console.log(lowest);
// const highest = Math.max(...points);
// console.log(highest);

// const points = [40, 100, 1, 5, 25, 10];
// const highest = myArrayMin(points);
// function myArrayMin(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   while (len--) {
//     //console.log(len);
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   return max;
// }
// console.log(highest);
// // let len = points.length;
// // console.log(len--);
// // console.log(len);

// if (0) {
//   console.log("false");
// } else {
//   console.log("true");
// }

const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// console.log(cars.sort((a, b) => a.year - b.year));

// console.log(
//   cars.sort((a, b) => {
//     let x = a.type.toLowerCase();
//     let y = b.type.toLowerCase();
//     if (x < y) return -1;
//     if (x > y) return 1;
//     return 0;
//   })
// );

// const myArr = [
//   { name: "X00", price: 100 },
//   { name: "X01", price: 100 },
//   { name: "X02", price: 100 },
//   { name: "X03", price: 100 },
//   { name: "X04", price: 110 },
//   { name: "X05", price: 110 },
//   { name: "X06", price: 110 },
//   { name: "X07", price: 110 },
//   { name: "X08", price: 120 },
//   { name: "X09", price: 120 },
//   { name: "X10", price: 120 },
//   { name: "X11", price: 120 },
//   { name: "X12", price: 130 },
//   { name: "X13", price: 130 },
//   { name: "X14", price: 130 },
//   { name: "X15", price: 130 },
//   { name: "X16", price: 140 },
//   { name: "X17", price: 140 },
//   { name: "X18", price: 140 },
//   { name: "X19", price: 140 },
// ];

// console.log(myArr.sort((a, b) => a.price - b.price));
