/*

Spread Operator= ... allows an iterables such as array or string to be expanded into separate elements (unpacked elements)


*/

// let username = "Bro Code";
// let letters = [...username].join();

// console.log(letters);

// var num = [1, 2, 3];
// var a = [...num];// exact copy of num
// a.pop();
// console.log(num);

// var newNumbers = [...num, 3, 3, 3];
// console.log(newNumbers);

// const arr1 = [1, 2, 3];
// const arr2 = ["a", "b", "c"];
// const arr3 = [34, 544, 554];

// // const newArr = arr2.concat(arr1, arr3, "spread");
// const newArr = [...arr1, ...arr2, ...arr3, "spread"];
// console.log(newArr);

// Object Spreading

var obj1 = {
  x: 1,
  y: 2,
};

var obj2 = {
  a: 1,
  b: 2,
};

const newObj = { ...obj1, ...obj2 };
newObj.a = "Tamim";

console.log(newObj);
console.log(obj2);
