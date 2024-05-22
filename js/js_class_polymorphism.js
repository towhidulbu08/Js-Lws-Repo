// It is process of modifying properties and methods of the parent class from its derived class

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Cricketer extends Person {
  constructor(name, age, type, country) {
    super(name, age);
    this.type = type;
    this.country = country;
  }
  eat() {
    super.eat();
    console.log(`${this.name} is eating Kacchi Biryani`);
  }
}

const sakib = new Cricketer("Tamim", 34, "cricketer", "Bangladesh");
console.log(sakib.eat());
