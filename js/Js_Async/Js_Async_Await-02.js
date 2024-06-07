/*

1. What is async?
2. What is await?
3. How async await works behind the scenes?
4. Examples Of Using async/await
5. Error Handling
6. Interviews
7. Async Await vs Promise.then/.catch
8.Difference Between Handling The Promise With Async/Await and Handling The Promise With Promise.then/.catch
*/

const API_URL = "https://invalidAPI";
async function handlePromise() {
  const data = await fetch(API_URL); // it return Response Object
  const jsonValue = await data.json();
  console.log(jsonValue);
}

handlePromise().catch((error) => console.log(error.message));

//sfetch.then((res) => res.json()).then((res) => console.log(res));

// Note: Async and Await Combo are used to handle promises
// An async function always return a Promise Object (implicitly)

// If returns an Non-Promise Value then js function will automatically wrap this value inside a Promise Object and  then return the Promise

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise Resolved Value!!");
//   }, 20000);
// });
// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Promise Resolved Value!!");
//   }, 40000);
// });

// async function handlePromise() {
//   console.log("Hello World");
//   const val = await p1;
//   console.log("As salam1");
//   console.log(val);

//   const val2 = await p2;
//   console.log("As salam2");
//   console.log(val2);

//   // NOTE: await can only be used inside an async function and In front Of Promise
// }
// handlePromise();

// When js engine encounter await keyword it suspends the execution of the handlePromise function and  the handlePromise function move out of the callStack. When The promise resolved the function again come back into the callStack and starts executing where it left

// function getData() {
//   p.then((res) => console.log(res)); // Js Engine will not wait for promise to resolve
//   console.log("As Salam");
// }

// getData();
