/*function Person(name, age) {
  const person = Object.create(Person.prototype);
  person.name = name;
  person.age = age;
  return person;
}
function Person(name, age) {
  const this = Object.create(PersonNew.prototype);
 this.name = name;
  this.age = age;
  return this;
}

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

 console.dir(Person.prototype);

const arrayNew = new Array();
console.dir(Array.prototype.push);
*/

// Revision 01 starts from here

const personMethods = {
  eat() {
    console.log(`Person is eating`);
  },

  sleep() {
    console.log(`Person Is Sleeping`);
  },
};

function Person(name, age) {
  let person = {};
  person.name = name;
  person.age = age;

  person.eat = personMethods.eat;
  person.sleep = personMethods.sleep;

  return person;
}

const sakib = Person("Tamim", 26);
const Tamim = Person("Sakib", 26);
