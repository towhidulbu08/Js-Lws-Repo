document.getElementById("href").innerHTML =
  "The full URL of this page is: " + location.href;
document.getElementById("host").innerHTML =
  "The Domain name of the  web host is: " + location.hostname;
document.getElementById("pathname").innerHTML =
  "The  path and filename of the current page is: " + location.pathname;
document.getElementById("protocol").innerHTML =
  "the web protocol used (http: or https:): " + location.protocol;
document.getElementById("port").innerHTML = "The Port is : " + location.port;

function load3s() {
  window.location.assign("https://www.w3schools.com");
}
// document.getElementById("demo4").innerHTML =
//   "The full URL of this page is: " + window.location.href;
