/*

1. Strict Equality (===)
=>No Type Conversion: Strict equality does not perform any type conversion. Both the value and the type must be the same for the comparison to return true.

Example:

null === false // false
In this case, null is not of the same type as false, so the result is false.

2. Loose Equality (==)

Type Conversion: Loose equality performs type conversion to compare the values. JavaScript tries to convert the operands to a common type before making the comparison.

=>Loose Equality (==) and Type Coercion:

The loose equality operator (==) performs type coercion, but it has specific rules:

If one operand is null and the other is undefined, they are considered equal (null == undefined is true).
If one operand is a boolean, it converts the boolean to a number: false becomes 0 and true becomes 1.
For null == false:
false is first converted to 0.
Then it checks if null is equal to 0.

Example:

null == false // false
Here’s how it works for null == false:

null is only loosely equal to undefined. It is not loosely equal to false, 0, NaN, or any other value.



console.log(null === false); // false, because the types are different.
console.log(null == false);  // false, because null is only equal to undefined, not false.
console.log(null === null);  // true, because both value and type are the same.
console.log(null == null);   // true, because both values are the same.
console.log(null === undefined); // false, because the types are different.
console.log(null == undefined);  // true, because null and undefined are considered equal in loose equality.



Comparison Table:
To illustrate how null and undefined behave with different comparisons:

Expression	Result
null == undefined	true
null === undefined	false
null == false	false
null === false	false
null == 0	false
null === 0	false
undefined == false	false
undefined === false	false
undefined == 0	false
undefined === 0	false

=>Summary:
Special Case for null and undefined:

null and undefined are only equal to each other when using == (null == undefined is true).
null and undefined are not equal to any other values, including 0 or -0.
No Type Conversion to Numbers:

null and undefined do not coerce to 0 or any other number in loose equality comparisons.



=> Type Coercion With Loosely Equal(==):


01.Number and String

When comparing a number and a string, JavaScript converts the string to a number.

console.log(5 == "5"); // true
Here, the string "5" is converted to the number 5, so the comparison 5 == 5 evaluates to true.

02.Boolean and Number

When comparing a boolean and a number, JavaScript converts the boolean to a number (true to 1 and false to 0).

console.log(true == 1); // true
console.log(false == 0); // true
In these cases, true is converted to 1, and false is converted to 0, so the comparisons evaluate to true.

03.Boolean and String

When comparing a boolean and a string, JavaScript first converts the boolean to a number and then the string to a number.

console.log(true == "1"); // true
console.log(false == "0"); // true
Here, true is converted to 1 and "1" is also converted to 1, so true == "1" evaluates to true. Similarly, false is converted to 0 and "0" is also converted to 0.

04.Null and Undefined

null and undefined are loosely equal to each other.

console.log(null == undefined); // true
This is a special case in JavaScript where null is considered equal to undefined.

05.Object and Primitive

When comparing an object with a primitive, JavaScript attempts to convert the object to a primitive value.

console.log([1, 2, 3] == "1,2,3"); // true
console.log({} == "[object Object]"); // true

Here, the array [1, 2, 3] is converted to the string "1,2,3", so the comparison evaluates to true. The object {} is converted to the string "[object Object]".

More Examples
String and Number with Different Values


console.log("10" == 10); // true
console.log("10" == 9); // false
In the first case, the string "10" is converted to the number 10, so the comparison is true. In the second case, "10" is converted to 10, and 10 is not equal to 9, so the comparison is false.

String and Boolean


console.log("true" == true); // false
console.log("1" == true); // true
In the first case, "true" is not a numeric string, so it cannot be coerced to 1, making the comparison false. In the second case, "1" is converted to 1, and true is also converted to 1, so the comparison is true.

Number and Null


console.log(0 == null); // false
console.log(1 == null); // false
Null is not coerced to a number, so 0 == null and 1 == null both evaluate to false.

Important Notes
Type coercion can lead to unexpected results and is often considered a source of bugs.
It's generally recommended to use the strict equality operator (===) to avoid type coercion and ensure that both the value and type are the same.
*/
