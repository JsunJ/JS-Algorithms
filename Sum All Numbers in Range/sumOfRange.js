function sumAll(arr) {
  // max number of argument
  let max = Math.max(arr[0], arr[1]);
  // min number of argument
  let min = Math.min(arr[0], arr[1]);
  // variable to hold the sum of numbers
  let sum = 0;

  // iterate through every number between min and max (inclusive), add current number to holder variable each iteration
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 10])); // 55
console.log(sumAll([1, 32])); // 528
console.log(sumAll([1, 3])); // 6
console.log(sumAll([3, 1])); // 6
