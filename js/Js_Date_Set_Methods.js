// const d = new Date();
// d.setFullYear(2020);
// const d = new Date();
// d.setFullYear(2020, 11, 3);
// const d = new Date();

// d.setHours(22);
// // d.setDate(d.getDate() + 50);
// console.log(d);
//
// d.setDate(15);
// console.log(d);
//output shown 2020-12-03T05:14:30.529Z

let text = "";
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
console.log(text);
