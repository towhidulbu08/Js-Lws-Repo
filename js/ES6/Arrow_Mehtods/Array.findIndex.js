// Array.prototype.findIndex() returns the index of the first element that satisfy the condition

var numbers = [1, 4, 2, 3, 4, 5, 6];

var singleEleIdx = numbers.findIndex(function (cur_val, curr_idx, arr) {
  return cur_val > 30;
}, this);

console.log(singleEleIdx);
