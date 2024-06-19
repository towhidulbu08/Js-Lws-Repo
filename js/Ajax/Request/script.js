function loadData() {
  // create a new request

  const xhr = new XMLHttpRequest();

  // what to do when response arrives

  xhr.onload = function () {
    console.log("Response finished");

    const container = document.getElementById("demo");
    container.innerHTML = this.responseText;
  };

  // prepare request=> methods: GET,POST,PUT,PATCH,DELETE

  xhr.open("GET", "../../../data.txt", false);

  // set request header

  xhr.setRequestHeader("My_GF", "JS");

  // send request
  xhr.send();

  console.log("AJAX ");
  // abort
  //xhr.abort();
}
