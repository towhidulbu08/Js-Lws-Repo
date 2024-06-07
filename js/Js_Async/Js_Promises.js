// Promises Are used to handle async operations in js

/**
 * A Promise is An Object representing the eventual completion or failure of an asynchronous operation
 *
 */

/*

Asynchronous Operation: This is an action that takes some time to complete, and the program doesn't wait for it to finish before moving on. Examples include fetching data from the internet, reading a file, or waiting for user input.

Eventual Completion or Failure: A Promise represents the eventual outcome of this operation. It can either be successful (completed) or unsuccessful (failed).
Think of it like ordering a pizza. You place the order (initiate the asynchronous operation), and you get a promise (the confirmation) that you'll eventually receive the pizza (completion) or be notified if there's an issue (failure).

Key Points about Promises:

1.States: A Promise can be in three
 states:

i.Pending: The initial state, waiting for the operation to finish.

ii.Fulfilled: The operation completed successfully, and the Promise holds the result.

iii.Rejected: The operation failed, and the Promise holds the reason for the failure.

2.Callbacks: You can attach callbacks (functions) to a Promise to handle its eventual outcome. One callback is for success (called ".then()"), and another is for failure (called ".catch()").
 */

const cart = ["shoes", "pants", "kurta"];

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, (paymentInfo) => {
    showOrderSummary(paymentInfo, () => {
      updateWalletBalance();
    });
  });
}); // here create an inversion of control

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then(() => updateWalletBalance());

//Promise is nothing but an empty object with data value in it

//{data:undefined}=> initial state(pending) => empty object
//{data: value} => After resolve or reject promise object will filled with data automatically

// as soon as we have data inside promise object it will call function inside .then() just once

// promise.then((orderId) => {
//   proceedToPayment(orderId);
// }); // attaching an callback into promise object

/*
     Note: Promise Objects are immutable
*/

// fetch return a promise
// fetch is a api which given by browser to us to make external call

const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API);
console.dir(user);

user.then((data) => {
  console.log(data);
});

/*
1. what is a promise?
2. Why Promises are Important? Why do you use Promises?
*/
