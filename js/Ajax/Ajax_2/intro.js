function loadData(callback) {
  // create a new request

  const xhr = new XMLHttpRequest();

  // what to do when response arrives

  xhr.onload = function () {
    callback(this);
  };

  // prepare request=> methods: GET,POST,PUT,PATCH,DELETE

  xhr.open("GET", "../../data.txt");

  // set request header

  xhr.setRequestHeader("My_GF", "JS");

  // send request
  xhr.send();
  // abort
  //xhr.abort();
}

function myCallBack1(xhr) {
  const container = document.getElementById("demo");
  container.innerHTML = xhr.responseText;
}
function myCallBack2(xhr) {
  const container = document.getElementById("demo2");
  container.innerHTML = xhr.responseText;
}
