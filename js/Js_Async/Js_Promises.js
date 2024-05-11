// Promises= An Object that manages asynchronous operations.
//      Wrap a Promise Object around the code (asynchronous code)
//     " I Promise To Return a Value"
//      Pending=> resolved or rejected
//      new Promise ((resolve,rejected)=> {asynchronous code})

// const paymentSuccess = "s";
// const marks = 70;

// function enroll() {
//   console.log("Course enrollment is in progress");
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (paymentSuccess) {
//         resolve();
//       } else {
//         reject("Payment Failed");
//       }
//     }, 2000);
//   });

//   return promise;
// }

// function progress() {
//   console.log("Course On Progress");
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//       if (marks >= 80) {
//         resolve();
//       } else {
//         reject("You could not enough mark to get the certificate");
//       }
//     }, 3000);
//   });
//   return promise;
// }

// function getCertificate() {
//   console.log("Preparing Your certificate");

//   const promise = new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("Congrats you got the certificate");
//     }, 4000);
//   });
//   return promise;
// }

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// const status = "";

// console.log("Task 1");
// //promise definition
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (status) {
//       resolve(123);
//     } else {
//       reject("error");
//     }
//   }, 2000);
// });
// // promise
// //   .then((value) => console.log(value))
// //   .catch((error) => console.log(error));
// //promise call
// promise.then(
//   (value) => console.log(value),
//   (error) => console.log(error)
// );

// console.log("Task 3");

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("You Walk The Dog");
      } else {
        reject("You did't walked the Dog");
      }
    }, 1500);
  });
}
function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = true;
      if (cleanKitchen) {
        resolve("You clean The Kitchen");
      }
      reject("You did't cleaned the kitchen");
    }, 2000);
  });
}
function takeOutTheTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeTrash = false;
      if (takeTrash) {
        resolve("You takeOut  The Trash");
      }
      reject("You did't takeOut The Trash");
    }, 500);
  });
}

walkTheDog()
  .then((value) => {
    console.log(value);
    return cleanTheKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTheTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("All task are finished");
  })
  .catch((error) => console.error(error));
