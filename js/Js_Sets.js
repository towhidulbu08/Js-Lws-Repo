//A JavaScript Set is a collection of unique values.

//const set = new Set();
//1.Create a set and add values
// set.add(1);
// set.add(2);
// set.add(3);

//2.Create a set and add variables.
// const set = new Set();
// const a = "a";
// const b = "b";
// const c = "c";

// set.add(a);
// set.add(b);
// set.add(c);

// console.log(set);

const letters = new Set(["a", "b", "c"]);
// let text = " ";
// letters.forEach(function (value) {
//   text += " " + value;
// });

// console.log(letters.values());

let text = "";
for (const x of letters.values()) {
  console.log(x);
}
