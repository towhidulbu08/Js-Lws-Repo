function sendRequest(method, url, data) {
  const promise = new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // handle application error

      if (this.status >= 400) {
        rej(
          `There was an  application error and the response status is ${this.status}  and the response text is ${this.statusText}`
        );
      } else {
        res(this.response);
      }
    };
    xhr.onerror = function () {
      rej("Request rejected");
    };

    xhr.open(method, url);

    xhr.responseType = "json";

    xhr.send(data);
  });

  return promise;
}

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/test")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}

function setData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      name: "Tamim",
      roll: 2323,
      village: "Edilkathi",
    })
  ).then((res) => console.log(res));
}

const getBtn = document.getElementById("get");
const setBtn = document.getElementById("set");

getBtn.addEventListener("click", getData);
setBtn.addEventListener("click", setData);
