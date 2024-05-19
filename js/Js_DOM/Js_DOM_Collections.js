// const element = document.getElementsByTagName("p");
// console.log(element.p1);

const array = ["I", "Am", "good"];

const transform = array
  .map((e) => {
    return `<a> He is Good </a>`;
  })
  .join("");
document.getElementById("demo").innerHTML = transform;
