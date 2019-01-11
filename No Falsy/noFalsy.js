function removeFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

console.log(removeFalsy([0, "orange", "", false, 9])); // [ 'orange', 9 ]
console.log(removeFalsy([null, "apple", "nine", true, NaN])); // [ 'apple', 'nine', true ]
