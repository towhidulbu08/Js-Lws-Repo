// console.log(Math.floor(Math.random() * 100) + 1);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const result = getRndInteger(0, 10);
console.log(result);
