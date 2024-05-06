// const myMap = new Map();

// // Add key-value pairs to the Map
// myMap.set("a", 1);
// myMap.set("b", 2);
// myMap.set("c", 3);
// console.log(myMap);

// // Iterate over the Map and log key-value pairs
// for (const [key, value] of myMap) {
//   //console.log(key, value);
// }

// const person = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   eyecolor: "blue",
//   method: function () {
//     return this.age;
//   },
// };
//let x = "age";

// for (let x in person) {
//   console.log(x, person[x]);
// }

// delete person.age;
// console.log(person?.age);

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let i in myObj.cars) {
  console.log(myObj.cars[i].name);
  for (let j in myObj.cars[i].models) {
    console.log(myObj.cars[i].models[j]);
  }
}
