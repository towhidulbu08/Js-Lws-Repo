// let text = "HELLO WORLD";
// let char = text.charAt(-13);
// let text = "HELLO WORLD";
// let char = text.charCodeAt(0);
//console.log(char);
// const name = "W3Schools";
// let letter1 = name.charAt(-2);
// //let letter2 = name.at(-2);
// console.log(letter1);
// let text = "HELLO WORLD";
// text[4] = "t";
// let char = text[-1];
// console.log(text);

//Extracting String Parts:
// There are 3 methods for extracting a part of a string:

// 1.slice(start, end)
// 2.substring(start, end)
// 3.substr(start, length)

// let text1 = "      Hello World! ";
// let text2 = text1.trimEnd();
// console.log(text2);
// let num = 5;
// let text = num.toString();
// let padded = text.padEnd(5, "0");
// console.log(padded);

// let text = "Hello world! ";
// let result = text.repeat(3);
// console.log(result);

// let text = "Please visit MICROSOFT Microsoft!";
// let newText = text.replace(/MICROSOFT/i, "W3Schools");
// console.log(newText);

let text = "Please visit MICROSOFT Microsoft!";
let newArray = text.split(" ");

console.log(newArray);
