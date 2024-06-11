/*

01.Arguments Object:

Normal functions: Have an arguments object that contains all the arguments passed to the function.
Arrow functions: Do not have their own arguments object.


=>This in Arrow Function:

Using this inside an arrow function can be beneficial when you want to maintain the this context from the surrounding (lexical) scope. This is especially useful in cases where traditional functions might change the this context based on how they're called.

Conclusion:
Normal functions and arrow functions each have their appropriate use cases. Normal functions are more flexible in terms of this binding and use of the arguments object. Arrow functions are more concise and are preferable when you need to preserve the this context from the surrounding code or when you don't need the arguments object.

*/

const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");

// function show() {
//   display.innerHTML = this.value;
//   //let self = this;
//   console.log(this);
//   setTimeout(function () {
//     console.log(self);
//     thanks.innerHTML = `You Have
//     Typed : ${self.value}`;
//   }, 1000);
// }

searchInput.addEventListener("keyup", () => {
  console.log(this);
  display.innerHTML = this.value;
});

// Note: Arrow function does not mutate this , its always retrieve its outer  scope this

// const javaScript = {
//   name: "JavaScript",
//   libraries: ["React", "Angular", "Vue"],
//   printLibraries: function () {
//     // console.log(this);
//     this.libraries.forEach((e) => console.log(`${this.name} loves ${e}`));
//     // console.log(this););
//   },
// };

// javaScript.printLibraries();
