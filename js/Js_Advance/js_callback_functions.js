// Js is a synchronous single threaded language : That means it can only do one thing at a time with a specific order

// Time , Tide and Js Wait for none

// Blocking the main thread

// Closures Demo with Event Listeners

function attachEventListener() {
  let count = 0;
  document.getElementById("ClickMe").addEventListener("click", function xyz() {
    console.log("button clicked", ++count);
  });
}

attachEventListener();

// Garbage collection and removeEventListeners

// lexical scopes: Global and closures
// how  callStack works
// Event Listeners
