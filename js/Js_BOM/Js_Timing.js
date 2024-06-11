/*

1. setTimeOut(function,milliseconds)
2. setInterval(function,milliseconds)
3. clearTimeOut()
4. clearInterval()
*/

const timeOut = document.getElementById("timeout");
const interval = document.getElementById("interval");

let id;
let id2;

function startTimeOut() {
  id = setTimeout(() => {
    timeOut.innerText = "3 sec Over!!";
  }, 3000);
}

function stopTimeOut() {
  clearTimeout(id);
}

function startInterval() {
  id2 = setInterval(() => {
    interval.innerText = new Date().toLocaleTimeString();
  }, 3000);
}

function stopInterval() {
  clearInterval(id2);
}
