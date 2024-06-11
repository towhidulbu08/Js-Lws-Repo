/*




01.Converting an Array to a String:

i).Array.prototype.join()

Example:
const array = ['a', 'b', 'c'];
const str = array.join(','); // "a,b,c"

ii) String() or 
iii) Array.prototype.toString()

Example:
const array = ['a', 'b', 'c'];
const str = String(array); // "a,b,c"

// or
const str2 = array.toString(); // "a,b,c"

02. Converting a String to an Array:

i). String.prototype.split()

Example:
const str = "a,b,c";
const array = str.split(','); // ['a', 'b', 'c']

ii).Using the Spread Operator with Array.from()

Example:
const str = "abc";
const array = [...str]; // ['a', 'b', 'c']
// or
const array2 = Array.from(str); // ['a', 'b', 'c']

03. Converting an Object to an Array

i). Object.keys()

Example:
const obj = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(obj); // ['a', 'b', 'c']

ii).Object.values()

Example:
const obj = { a: 1, b: 2, c: 3 };
const valuesArray = Object.values(obj); // [1, 2, 3]

iii) Object.entries()

Example:
const obj = { a: 1, b: 2, c: 3 };
const entriesArray = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

05. Converting an Array to an Object

i). Using reduce()

Example:
const array = [['a', 1], ['b', 2], ['c', 3]];
const obj = array.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
// { a: 1, b: 2, c: 3 }

ii).Using Object.assign()

Example:
const array = ['a', 'b', 'c'];
const obj = Object.assign({}, array);
// {0: 'a', 1: 'b', 2: 'c'}

iii). Using Object.fromEntries()
Example:
const array = [['a', 1], ['b', 2], ['c', 3]];
const obj = Object.fromEntries(array);
// { a: 1, b: 2, c: 3 }
These methods should cover the most common scenarios for converting between arrays, strings, and objects in JavaScript.


















*/
