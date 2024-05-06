class Car {
  constructor(brand, year) {
    this.carname = brand;
    this.year = year;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod, year) {
    super(brand, year);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model + " year " + this.year;
    //console.log("Static");
  }
}

let myCar = new Model("Ford", "Mustang", 2012);
let newCar = new Car("bmw");
console.log(myCar);

// class Car {
//   constructor(brand, year) {
//     this.carname = brand;
//     this._year = year;
//   }
//   get cnam() {
//     return this.carname;
//   }
//   set cnam(x) {
//     this.carname = x;
//   }

//   set year(y) {
//     this._year = y;
//   }
// }

// const myCar = new Car("Ford", 2010);
// myCar.cnam = "Bmw";
// myCar.year = 2012;
// console.log(myCar._year);
