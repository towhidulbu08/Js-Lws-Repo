const p = document.createElement("p");
//const node = document.createTextNode("This is new paragraph");
p.innerHTML = "This is new inner text";
//p.appendChild(node);

// const div = document.getElementById("div1").appendChild(p);
const child1 = document.getElementById("p1");
const child2 = document.getElementById("p2");
const parent = document.getElementById("div1");
//parent.insertBefore(p, child2);
console.log(parent.replaceChild(p, child1));

// const elmnt = document.getElementById("p1");
// elmnt.remove();
//parent.removeChild(child1);
//console.log(child1.parentNode.removeChild(child2));
