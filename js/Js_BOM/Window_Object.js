/*

The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.


 The Window Object represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:

Example:
 window.document.getElementById("header");
*/

let myWindow;

const width = document.getElementById("width");
const height = document.getElementById("height");

width.innerText = "Inner Width: " + window.innerWidth;

height.innerText = "Inner Height: " + window.innerHeight;

function openWindow() {
  myWindow = window.open("https://quran.com/5", "_self");
}
function closeWindow() {
  myWindow.close();
}
