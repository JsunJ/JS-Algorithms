function removeFalsy(arr) {
  return arr.filter(Boolean);
}

console.log(removeFalsy([0, "orange", "", false, 9])); // [ 'orange', 9 ]
console.log(removeFalsy([null, "apple", "nine", true, NaN])); // [ 'apple', 'nine', true ]
