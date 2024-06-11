/*

A web worker is a JavaScript running in the background, without affecting the performance of the page.

What is a Web Worker?
When executing scripts in an HTML page, the page becomes unresponsive until the script is finished.

A web worker is a JavaScript that runs in the background, independently of other scripts, without affecting the performance of the page. You can continue to do whatever you want: clicking, selecting things, etc., while the web worker runs in the background.
*/

let w;

function startWorker() {
  if (typeof Worker !== "undefined") {
    // if w worker is not already defined
    if (typeof w == "undefined") {
      // create a new worker called w
      w = new Worker("worker.js");

      // listening for worker events/message
      w.onmessage = function (events) {
        console.log(events);
        document.getElementById("demo").innerText = events.data;
      };
    }
  } else {
    alert("Your Browser Does Not Web Worker");
  }
}

function stopWorker() {
  if (typeof Worker !== "undefined") {
    w.terminate();
    w = undefined;
  } else {
    alert("Your Browser Does Not Web Worker");
  }
}
