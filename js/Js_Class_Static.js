class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return function () {
      console.log("ab");
    };
  }
  start() {
    console.log("start");
  }
}
//const myCar = new Car("Ford");
//console.log(Car.hello(myCar));
//console.log(Car.hello()());
