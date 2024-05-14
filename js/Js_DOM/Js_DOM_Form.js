function validateForm() {
  let form = document.forms["myForm"];
  const value = form.fname.value;
  if (value == "") {
    alert("Name must be filled out");
    return false;
  }
}
