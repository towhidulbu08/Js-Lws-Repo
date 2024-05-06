// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// // This will return "John Doe":
// person.fullName();

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// // This will return "John Doe":
// console.log(person.fullName.call(person1));

const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));

console.log(Math.max.apply("", [2, 3.4, 439, 321]));
