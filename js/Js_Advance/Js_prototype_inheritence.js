function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Cricketer(name, age, type, country) {
  Person.call(this, name, age);

  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(`${this.name} is eating`);
  },
  job: "web developer",
};

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.constructor = Cricketer;

const sakib = new Cricketer("Tamim", 34, "cricketer", "Bangladesh");
console.log(sakib);
