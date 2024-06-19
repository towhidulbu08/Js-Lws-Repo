/*
##In JavaScript, several array methods directly modify (mutate) the original array. Here's a list of some common mutating methods along with examples:

01.push() - Adds one or more elements to the end of an array.

let arr = [1, 2, 3];
arr.push(4); // arr is now [1, 2, 3, 4]

02.pop() - Removes the last element from an array.

let arr = [1, 2, 3];
arr.pop(); // arr is now [1, 2]

03.shift() - Removes the first element from an array.

let arr = [1, 2, 3];
arr.shift(); // arr is now [2, 3]

04.unshift() - Adds one or more elements to the beginning of an array.

let arr = [1, 2, 3];
arr.unshift(0); // arr is now [0, 1, 2, 3]

05.splice() - Adds and/or removes elements from an array.

let arr = [1, 2, 3, 4];
arr.splice(1, 2, 'a', 'b'); // arr is now [1, 'a', 'b', 4]
// removes 2 elements from index 1 and adds 'a' and 'b' instead

06.sort() - Sorts the elements of an array.

let arr = [3, 1, 4, 2];
arr.sort(); // arr is now [1, 2, 3, 4]

07.reverse() - Reverses the order of the elements in an array.

let arr = [1, 2, 3];
arr.reverse(); // arr is now [3, 2, 1]

08.fill() - Fills all the elements of an array from a start index to an end index with a static value.

let arr = [1, 2, 3, 4];
arr.fill(0, 1, 3); // arr is now [1, 0, 0, 4]
// fills with 0 from index 1 to 3 (exclusive)

09.copyWithin() - Copies part of an array to another location in the same array without modifying its size.

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 4); // arr is now [4, 2, 3, 4, 5]
 copies element at index 3 to index 0
 */
