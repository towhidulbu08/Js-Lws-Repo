const person = {
  name: "John",
  age: 30,
  city: "New York",
};
const personArr = Object.values(person);
//console.log(personArr);
// const person = {
//   name: "John",
//   today: new Date(),
//   age: function () {
//     return 30;
//   },
// };
//person.age = person.age.toString();

// const myArray = Object.values(person);
// console.log(typeof myArray);

let myString = JSON.stringify(person);
//console.log(myString);

const arr = ["John", "Peter", "Sally", "Jane"];
const str = JSON.stringify(arr);

console.log(str);
