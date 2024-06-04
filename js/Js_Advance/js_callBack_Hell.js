// Time, Tide And Js Wait For None

/*

 The "Pyramid of Doom" in programming refers to a situation where multiple nested callback functions create a deeply indented code structure that resembles a pyramid. This often occurs in asynchronous programming when using callbacks, particularly in JavaScript. This structure is problematic because it makes the code difficult to read, understand, and maintain.

 Problems with Pyramid of Doom
1.Readability: The code becomes hard to read and follow due to deep nesting.
2.Maintainability: Modifying such code is difficult because changes may require adjusting multiple nested levels.
2.Error Handling: Managing errors becomes complex as each level might need its own error handling.

Solutions to Avoid Pyramid of Doom
Promises: Promises help to avoid nested callbacks by chaining operations.
Async/Await: Async/await syntax further simplifies the use of promises and makes the code look synchronous.
Modularization: Breaking down complex functions into smaller, reusable functions can help manage the complexity.




*/

/*
 
 Problems Of CallBack Functions:
 1. CallBack Hell
 2. Inversion Of Control

*/

const cart = ["shoes", "Pants", "Kurta"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});

// Recap:
// 1.Importance of CallBacks: Asynchronous Programming In Js Exits Because Of CallBack

/* 2.Issues Of CallBacks:
i. CallBack Hell:Callback Hell, also known as the Pyramid of Doom, is a situation where callbacks are nested within other callbacks multiple levels deep, making the code hard to read and maintain. This often happens when dealing with asynchronous operations like network requests, file I/O, or timers.
ii. Inversion Of Control: 
*/
