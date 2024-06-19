/*

# JSON:  JSON stands for JavaScript Object Notation

JSON is a text format for storing and transporting data

JSON is "self-describing" and easy to understand

What is JSON?
=>JSON stands for JavaScript Object Notation
=>JSON is a lightweight data-interchange format
=> JSON is plain text written in JavaScript object notation
=>JSON is used to send data between computers
=>JSON is language independent *

*/

const jsonText = '{"name":"John", "age":30, "car":null}';
const jsonObj = JSON.parse(jsonText);
console.log(JSON.parse(jsonText));
console.log(JSON.stringify(jsonObj));
