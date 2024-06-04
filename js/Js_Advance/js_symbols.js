// Symbol is a Primitive Data Types like numbers, string,boolean

// Every Symbol is Unique

var title = "Javascript";

// 1. title converts into new  String("Javascript")
// 2. convert parameter (/script/) into RegExp object
// 3. RegExp er moddhe Symbol.search() er implementation ache kina

//console.log(title.search(/script/));

function myFunc() {
  const PVT = Symbol("Private Value");

  return {
    modify(obj) {
      obj[PVT] = true;
    },
    output(obj) {
      return obj[PVT];
    },
  };
}

const value = myFunc();

const obj = { a: 1, b: 2 };

value.modify(obj);
console.log(value.output(obj));
console.log(obj);

delete obj["Symbol(Private Value)"];
console.log(obj);

// var obj = {};

// class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   // implement search

//   [Symbol.search](string) {
//     return string.indexOf(this.title) >= 0 ? "Found" : "Not  found";
//   }
// }

// var laptop = new Product("laptop");

// const laptop = {
//   title: "laptop",
//   [Symbol.search](string) {
//     return string.indexOf(this.title) >= 0 ? "Found" : "Not  found";
//   },
// };

// console.log("Hp laptop".search(laptop));
// console.log("Hp laptop".search("laptop"));

// obj.name = "Js";
// obj.estd = 1995;
// obj[Symbol("founder")] = "Brendan Eich";

// console.log(Object.keys(obj));

// var myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// var includes = Symbol.for("my own array includes method");

// Array.prototype[includes] = () => {
//   console.log("This is my array includes function");
// };
//var a = "includes";
//myArr[Symbol.for("my own array includes method")]();
//console.log(myArr["includes"](3));
//console.log(myArr[a](3));

// const obj = {};

// var title = "js";

// obj[title] = "brendan eich";
// console.log(obj.js);

/**
 * To invoke the custom method directly using Symbol("my own array includes method") without explicitly storing the symbol in a variable, you need to ensure that you can reference the same symbol instance. However, since symbols with the same description are unique, simply using Symbol("my own array includes method") each time will not work because it creates a new unique symbol each time it's called.

Instead, you can store the symbol in a well-known symbol registry using Symbol.for. This allows you to use the same symbol instance across different parts of your code.

Here is how you can achieve this:

Store the symbol in a registry: Use Symbol.for("my own array includes method") to create and retrieve the same symbol instance.

Define the prototype method: Use the retrieved symbol to define your method on Array.prototype.

Invoke the method using the symbol: Retrieve the symbol again and use it to invoke the method.
 * 
 * 
 */
