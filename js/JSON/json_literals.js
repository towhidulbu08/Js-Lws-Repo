/*

## JSON Object Literals:

=>This is a JSON string: '{"name":"John", "age":30, "car":null}'


=>Inside the JSON string there is a JSON object literal:

     {"name":"John", "age":30, "car":null}

=>JSON object literals are surrounded by curly braces {}.

=>JSON object literals contains key/value pairs.

=>Keys and values are separated by a colon.

=>Keys must be strings, and values must be a valid JSON data type:

=>It is a common mistake to call a JSON object literal "a JSON object".

=>JSON cannot be an object. JSON is a string format.

The data is only JSON when it is in a string format. When it is converted to a JavaScript variable, it becomes a JavaScript object.


## JSON Array Literals:

=>This is a JSON string:  '["Ford", "BMW", "Fiat"]'

=>Inside the JSON string there is a JSON array literal: ["Ford", "BMW", "Fiat"]

=>Arrays in JSON are almost the same as arrays in JavaScript.

=>In JSON, array values must be of type string, number, object, array, boolean or null.

=>In JavaScript, array values can be all of the above, plus any other valid JavaScript expression, including functions, dates, and undefined.



*/

// JSON object literate:
myObj = { name: "John", age: 30, car: null };
console.log(myObj);
