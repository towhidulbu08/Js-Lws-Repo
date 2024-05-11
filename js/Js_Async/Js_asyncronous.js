// function func1(callback) {
//   setInterval(() => {
//     console.log("task1");
//     callback();
//   }, 0);
// }

// function func2() {
//   console.log("line2");
//   console.log("line3");
// }

// func1(func2);
// let i = 10000;
// while (i > 5) {
//   console.log(i);
// }
// console.log("i");
const paymentSuccess = true;
const marks = 70;

function enroll(callback) {
  console.log("Course enrollment is in progress");
  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("Payment Failed");
    }
  }, 2000);
}

function progress(callback) {
  console.log("Course On Progress");
  setTimeout(function () {
    if (marks >= 80) {
      callback();
    } else {
      console.log("You could not enough mark to get the certificate");
    }
  }, 3000);
}

function getCertificate() {
  console.log("Preparing Your certificate");

  setTimeout(function () {
    console.log("Congrats you got the certificate");
  }, 4000);
}

enroll(() => {
  progress(getCertificate);
});
