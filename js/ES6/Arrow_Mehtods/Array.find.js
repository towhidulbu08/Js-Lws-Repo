// Array.prototype.find() returns first element that satisfy the condition

var numbers = [1, 4, 2, 3, 4, 5, 6];

var singleEle = numbers.find(function (cur_val, curr_idx, arr) {
  console.log(this);
  return cur_val > 5;
}, this);

//console.log(singleEle);

// console.log([1, 2, 3] == "1,2,3");
// console.log({} == "[object Object]");

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  test() {
    console.log("hello");
  }
  exampleFunction() {
    let array = [1, 2, 3];
    array.find(function () {
      console.log(this);
    }, this);
  }
}

let student = new Student("sumit", 35);

//student.exampleFunction();
