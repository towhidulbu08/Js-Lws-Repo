const users = [
  { firstName: "Tamim", lastName: "Islam", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 86 },
  { firstName: "Elon", lastName: "Mask", age: 46 },
  { firstName: "Bill", lastName: "Gates", age: 26 },
];

// const FullName = users.map((obj) => obj.firstName + " " + obj.lastName);

// console.log(FullName);

// const output = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

//const output = users.filter((x) => x.age < 30).map((x) => x.firstName);

const output = users.reduce((acc, curr) => {
  if (curr.age < 30) {
    acc["firstName"] = curr.firstName;
    acc = Object.values(acc);
  }
  return acc;
}, {});

console.log(output);
