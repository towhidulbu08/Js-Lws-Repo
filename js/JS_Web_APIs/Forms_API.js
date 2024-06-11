function myFunction() {
  const inpObj = document.getElementById("id1");

  if (inpObj.validity.rangeOverflow) {
    inpObj.setCustomValidity("You Have Made An Range Over Flow Error");
  } else if (inpObj.validity.rangeUnderflow) {
    inpObj.setCustomValidity("You Have Made An RangeUnderFlow Error");
  } else if (inpObj.validity.valueMissing) {
    inpObj.setCustomValidity("Value Missing");
  } else if (inpObj.validity.tooLong) {
    inpObj.setCustomValidity("Input Too Long");
  }

  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}
