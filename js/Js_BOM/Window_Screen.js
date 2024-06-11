let myWindow;

const width = document.getElementById("width");
const availwidth = document.getElementById("availwidth");
const height = document.getElementById("height");
const availheight = document.getElementById("availheight");

width.innerText = "Screen Width: " + screen.width;
availwidth.innerText = "AvailScreen Width: " + screen.availWidth;

height.innerText = "Screen Height: " + screen.height;
availheight.innerText = "AvailScreen Height: " + screen.availHeight;

function openWindow() {
  myWindow = window.open("https://quran.com/5", "_self");
}
function closeWindow() {
  myWindow.close();
}
