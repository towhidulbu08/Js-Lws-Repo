/*
JavaScript has three kind of popup boxes: Alert box, Confirm box, and Prompt box.

Confirm Box:
=> A confirm box is often used if you want the user to verify or accept something.

When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.

=>If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

Prompt Box:

=>A prompt box is often used if you want the user to input a value before entering a page.

=>When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value.

=>If the user clicks "OK" the box returns the input value. If the user clicks "Cancel" the box returns null.

*/

function myFunction() {
  let text;
  let person = prompt("Please enter your name:", "Tamim"); // here it return either the input value or null
  // if user click ok then it return the input value otherwise it return null
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + "! How are you today?";
  }
  document.getElementById("demo").innerHTML = text;
}
