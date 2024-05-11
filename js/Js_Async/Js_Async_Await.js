// Async => makes a function return a promise
// Await=> makes an Async function wait for a promise

const paymentSuccess = "1";
const marks = 80;

function enroll() {
  console.log("Course enrollment is in progress");
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Failed");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Course On Progress");
  const promise = new Promise((resolve, reject) => {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not enough mark to get the certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("Preparing Your certificate");

  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve("Congrats you got the certificate");
    }, 4000);
  });
  return promise;
}

async function Course() {
  try {
    await enroll();

    await progress();

    const getCertificateResult = await getCertificate();
    console.log(getCertificateResult);
  } catch (error) {
    console.log(error);
  }
}
Course();

// function walkTheDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;
//       if (dogWalked) {
//         resolve("You Walk The Dog");
//       } else {
//         reject("You did't walked the Dog");
//       }
//     }, 1500);
//   });
// }
// function cleanTheKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const cleanKitchen = "";
//       if (cleanKitchen) {
//         resolve("You clean The Kitchen");
//       }
//       reject("You did't cleaned the kitchen");
//     }, 2000);
//   });
// }
// function takeOutTheTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const takeTrash = true;
//       if (takeTrash) {
//         resolve("You takeOut  The Trash");
//       }
//       reject("You did't takeOut The Trash");
//     }, 500);
//   });
// }

async function doChores() {
  const walkDogResult = await walkTheDog();
  console.log(walkDogResult);
  const cleanKitchenResult = await cleanTheKitchen();
  console.log(cleanKitchenResult);
  const takeOutTrashResult = await takeOutTheTrash();
  console.log(takeOutTrashResult);
}

//doChores();

// async function callLater() {
//   const myPromise = await new Promise((res, rej) => {
//     res("resolved");
//   });

//   console.log(typeof myPromise);
// }
// callLater();

// const myPromise = new Promise((res, rej) => {
//   res("Resolved");
// });
// console.log(typeof myPromise);
// console.log("Promise");

// async function callLater() {
//   const myPromise = new Promise((res, rej) => {
//     res("resolved");
//   });

//   console.log(typeof myPromise);
// }
// //callLater();

// const myPromise = new Promise((res, rej) => {
//   res("Resolved");
// });
// //console.log(typeof myPromise);

// async function Async() {
//   //return "hello";
// }

// console.dir(Async());
