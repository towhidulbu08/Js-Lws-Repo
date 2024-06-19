// Array.prototype.filter() returns the array of  elements that satisfy the condition

var numbers = [1, 4, 2, 3, 6];

var newArr = numbers.filter(function (cur_val, curr_idx, arr) {
  return cur_val > 1;
}, this);

console.log(newArr);
