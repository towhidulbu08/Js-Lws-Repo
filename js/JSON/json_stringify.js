// => Stringify Arrays:

// const arr = ["John", "Peter", "Sally", "Jane"];
// console.log(arr);

// const jsonStr = JSON.stringify(arr);
// console.log(jsonStr);

// =>Storing data:

// const myObj = { name: "John", age: 31, city: "New York" };
// const myJSON = JSON.stringify(myObj);
// localStorage.setItem("testJSON", myJSON);

// // =>Retrieving data:
// let text = localStorage.getItem("testJSON");
// let obj = JSON.parse(text);
// console.log(obj);

// =>Stringify Date Object:
// const obj = { name: "John", today: new Date(), city: "New York" };
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);

//=> Stringify Function:
const obj = {
  name: "John",
  age: function () {
    return 30;
  },
  city: "New York",
};
obj.age = obj.age.toString();
console.log(obj);
const myJSON = JSON.stringify(obj);
console.log(myJSON);
