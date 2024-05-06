function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

const Tamim = new Person("Tamim", "Islam", 26, "Blue");
const Sakib = new Person("Sakib", "Islam", 26, "Blue");

Person.prototype.country = "Bangladesh";

//console.dir(Person);
const john = new String("John");
//In JavaScript, when you use a primitive value like a string, number, or boolean in a context that requires an object (such as accessing a property or method), JavaScript automatically wraps that primitive value in an object of its corresponding type (String, Number, Boolean). This process is known as "auto-boxing" or "object-wrapping".

// So, when you do let x = "Bangladesh";, x is a primitive string. However, when you then do console.log(x.doingFn());, JavaScript automatically converts x into a String object temporarily to access the doingFn() method. After the method call is done, it discards this temporary object.
String.prototype.doingFn = function () {
  return "Hello I am doing Fun";
};
console.log(john.doingFn());
let x = "Bangladesh";
//console.log(x.doingFn());
