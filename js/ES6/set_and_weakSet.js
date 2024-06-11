function log(anything) {
  return console.log(anything);
}

// => WeakSet:

const ws = new WeakSet([{ a: 1 }, { b: 2 }]);

// WeakSet itself is not iterable but take iterable(set,array,string,map) as arguments

log(ws);

// let a = new Set([1, 2, 3]);
// let b = new Set([4, 3, 2]);

// let union = new Set([...a, ...b]);
//log(union);

// let intersection = new Set([...a].filter((x) => b.has(x)));

//log(intersection);

// let difference = new Set([...b].filter((x) => !a.has(x)));

// log(difference);

/*
 All Set Methods:

 01. add()
 02. delete()
 03. has()
 04. size()
 05. clear()

  Note: We can pass any iterable in set like array , string, set, map

  Note: Set always store unique values
*/

// let myArray = [1, 2, 3, 5, 5, 5, 6, 6, 7, 7, 8];

//let mySet = new Set(myArray);

//log([...new Set(myArray)]);

// mySet.add({
//   a: 5,
//   b: 2,
// });

// mySet.add({
//   a: 5,
//   b: 2,
// });

//=> Convert Set To Array:

// log([...mySet]);

// log(Array.from(mySet));

// for (let val of mySet) {
//   log(val);
// }
// log(mySet);
// mySet.add(5).add(5).add("Tamim");
// //mySet.delete(5);

// log(mySet.size);

// Note: We can do method chaining with set methods

// mySet.add return the entire set
// mySet.delete return true if the item exist in the set or return false
// mySet.has return true or false

/*
 => Usage Of Set:

 01. Set is Used to Get unique elements from an Array

*/
