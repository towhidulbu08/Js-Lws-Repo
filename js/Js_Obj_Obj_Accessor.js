// Getter Accessor

const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  school: "",
};

// Object.defineProperty(person, "fullName", {
//   get: function () {
//     return this.firstName + " " + this.lastName;
//   },
// });
// Object.defineProperty(person, "school", {
//   get: function () {
//     return "undefined";
//   },
// });
Object.defineProperty(person, "abc", {
  set: function (value) {
    this.school = value;
  },
});

person.abc = "Bn collage";
console.log(person.school);

//console.log(person.fullName);
//get lang() {
//     return this.language;
//   },

//Setter Accessor

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   language: "",
//   set lang(a) {
//     this.language = a;
//   },
// };

// person.lang = { name: "Tamim", School: "Bn Collage" };

// console.log(person["language"]["name"]);
