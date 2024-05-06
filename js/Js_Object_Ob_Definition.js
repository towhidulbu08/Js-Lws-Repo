// There are different ways to create new objects:

// 1. Create a single object, using an object literal.
// 2.Create a single object, with the keyword new.
// 3.Define an object constructor, and then create objects of the constructed type.
// 4. Create an object using Object.create().

// function Person(firstName, lastName, age, city) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.city = city;
//   this.village = "edilkathi";
// }

// const person = new Person("John", "Doe", 30, "New York");
// console.log(person);

// Define a prototype object
// const personPrototype = {
//   greet: function (name) {
//     return "Hello, I'm " + name;
//   },
//   phone: 23,
// };
// console.log(personPrototype.greet("tamim"));

// Create a new object using Object.create() and specify the prototype
// const person = Object.create(personPrototype);
// person.name = "John";
// person.age = 30;

// Add properties to the newly created object
//   person.name = "John";
//   person.age = 30;

//   // Access the properties and methods of the newly created object
//   console.log(person.name); // Output: "John"
//   console.log(person.age);  // Output: 30
//   console.log(person.greet()); // Output: "Hello, I'm John"
//console.log(person.phone);

// const person = new Object();
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// const x = person;
// x.age = 10;
// console.log(x);
// console.log(person);
// let x = 4;

// let y = 6;

// x = y;
// x = 0;
// console.log(y);

// const obj = new Object();
// obj.name = "tamim";
// console.log(obj);

const personPrototype = {
  sayHello: function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  },
};

const person = Object.create(null);
person.name = "tamim";
person.age = 30;
console.log(typeof person);
