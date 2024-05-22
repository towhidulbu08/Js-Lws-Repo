// function Person(name, age) {
//   const person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;
//   return person;
// }
// function Person(name, age) {
//   //const this = Object.create(PersonNew.prototype);
//  // this.name = name;
// //   this.age = age;
//   //return this;
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`I am Eating`);
  }
  sleep() {
    console.log(`I am Sleeping`);
  }
}

const sakib = new Person("Tamim", 34);
sakib.eat();

// console.dir(Person.prototype);

const arrayNew = new Array();
console.dir(Array.prototype.push);
