const cart = ["shoes", "pants", "punjabi"];

//console.log(promise);

// Promise Consume

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .catch((error) => {
    console.log(error.message);
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })

  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  })

  .then(() => {
    console.log("No Matter What Happens, It Will Definitely Called");
  });

//Promise Produce
function createOrder(cart) {
  const pr = new Promise((res, rej) => {
    if (!validateCart(cart)) {
      rej(new Error("Cart Is Not Valid"));
    } else {
      const orderId = "213443253";
      if (orderId) {
        setTimeout(() => {
          res(orderId);
        }, 4000);
      }
    }
  });

  return pr;
}

function validateCart() {
  return false;
}

function proceedToPayment(orderId) {
  return new Promise((res, rej) => {
    rej(new Error("Payment not successful"));
  });
}

// Note: resolve and reject both are built-in  functions which is provided by js to us

// Promise can only have to things:1. A promise can either be fulfilled or resolved Or 2. It can be rejected

// You can resolve a promise Once and you can just do resolve or reject
