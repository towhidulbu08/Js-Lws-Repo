//const jsonStr = '{"name":"John", "age":30, "city":"undefined"}';

//const text = '["Ford", "BMW", "Audi", "Fiat"]';

//const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
// const obj = JSON.parse(text);
// console.log(obj);
// obj.birth = new Date(obj.birth);

// console.log(obj.birth);

// const obj = JSON.parse(text, function (key, value) {
//   // console.log(`${key} and ${value}`);
//   if (key == "birth") {
//     return new Date(value);
//   } else {
//     return value;
//   }
// });
// console.log(obj);

const text =
  '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);

console.log(obj.age);
//obj.age = eval("(" + obj.age + ")");
