// const array = new Array("Saab", "BMW", "Audi");

// console.log(array);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString().split(","));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(fruits[length - 1]);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fLen = fruits.length;

// let text = "<ul>";
// // for (let i = 0; i < fLen; i++) {
// //   text += "<li>" + fruits[i] + "</li>";
// // }
// let i = 0;
// while (i < fLen) {
//   text += "<li>" + fruits[i] + "</li>";
//   i++;
// }
// console.log(text);

//const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Lemon"); //
// console.log(fruits);
// fruits.unshift("Grape");
// console.log(fruits);
//fruits.pop();
// fruits.shift();
// console.log(fruits);
// fruits[fruits.length] = "Mango";
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

// let fLen = fruits.length;
// let text = " ";
// for (i = 0; i < fLen; i++) {
//   text += fruits[i] + " ";
//   console.log(text);
// }

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;

// console.log(person.length, person[0]); // Will return 0
// person[0]; // Will return undefined

// const points1 = new Array(40);
// const points2 = [40];

// console.log(points1[0], points2[0]);

const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;
//console.log(Array.isArray(fruits));
console.log(fruits instanceof Array);
