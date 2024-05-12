// const elements1 = document.querySelectorAll(".intro");
// console.log(elements1);
// const elements2 = document.getElementsByClassName("intro");
// console.log(elements2);

// document.getElementById("demo").innerHTML =
//   "The text from the intro paragraph is: " + elements[0].innerHTML;

const x = document.forms.frm1;
//console.dir(x);
console.dir(document.body.children);

let text = "";
for (let i = 0; i < x.length; i++) {
  text += x.elements[i].value + "<br>";
}
//document.getElementById("demo").innerHTML = text;
