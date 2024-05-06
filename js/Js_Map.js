const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set("apples", 200);
console.log(fruits.get("apples"));
fruits.delete("apples");
console.log(fruits);
console.log(fruits.has("apples"));

let text = "";
for (const x of fruits.entries()) {
  console.log(x);
}
