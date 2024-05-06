class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    const date = new Date();
    return x - this.year;
  }
}

const myCar = new Car("Bmw");
console.log(myCar.age());
//console.log(myCar.age(2024));
//console.log(typeof Car);
