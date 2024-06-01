// f(n-1)+n=f(n)

// function sum(n) {
//   if (n == 0) {
//     return 0;
//   } else {
//     return sum(n - 1) + n;
//   }
// }

// console.log(sum(500));
var n = 500000;
console.log((n * (n + 1)) / 2);

// sum(4)+5, sum(3)+4+5,sum(2)+3+4+5,sum(1)+2+3+4+5,sum(0)+1+2+3+4+5,0+1+2+3+4+5
