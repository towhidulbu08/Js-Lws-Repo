// A closure is a function having access to the parent scope, even after the parent function has closed.

function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

//var timer = stopWatch();
//console.dir(timer);

// for (var i = 0; i < 100000000; i++) {
//   var a = Math.random() * 1000000;
// }
// timer();
// timer = null;
// var a;
// function async() {
//   a = 20;
//   function myFunc() {
//     console.log(a);
//   }
//   setTimeout(myFunc, 3000);
//   console.dir(myFunc);
// }

// async();
// a = 30;

function api(url) {
  fetch(url).then((res) => {
    console.log(url);
  });
}

api("https://jsonplaceholder.typicode.com/todos/1");
