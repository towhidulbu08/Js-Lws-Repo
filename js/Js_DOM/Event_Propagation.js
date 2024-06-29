/*
Event propagation in web development refers to the way events travel through the Document Object Model (DOM) tree. It involves three phases:

Capturing Phase (or "trickling"): The event starts from the root of the DOM tree and travels down to the target element.
Target Phase: The event reaches the target element where the event occurred.
Bubbling Phase: The event bubbles up from the target element back to the root of the DOM tree.


Note: Event Bubbling(event go through child to parent) is Default Order

*/

const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

// Event Capturing or trickling
parent.addEventListener("click", listener2, true);

form.addEventListener("click", listener, true);

button.addEventListener("click", listener);

function listener(event) {
  console.log(this.tagName);
}
function listener2(event) {
  console.log("bubbling");
}
