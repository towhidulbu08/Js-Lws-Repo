/*
=>ইভেন্ট ডেলিগেশন কি?
 একাধিক এলিমেন্টের জন্য একটাই ইভেন্ট লিসেনার রাখা, নতুন এলিমেন্ট যোগ করলেও যেন লিসেনার কাজ করে।



*/
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.matches("li")) {
    if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.style.backgroundColor = "green";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "Dot Net";
  list.appendChild(newElement);
}
