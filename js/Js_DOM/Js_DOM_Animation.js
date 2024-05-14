function myMove() {
  const animate = document.getElementById("animate");
  let pos = 0;
  let id = setInterval(frame, 100);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      animate.style.top = pos + "px";
      animate.style.left = pos + "px";
    }
  }
}
