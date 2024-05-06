// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: function (city, village) {
//     return this.firstName + " " + city + " " + village + " " + this.lastName;
//   },
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// };

// let fullName = person.fullName.bind(member, "dhaka", "village");
// console.log(typeof fullName);
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   display: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// const display = person.display.bind(person);
// // console.log(display());

//setTimeout(display, 3000);

function Call(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

const newFunc = Call.bind({ a: 1, b: 4 });
newFunc(4, 5);
