function diffArray(arr1, arr2) {
  // new array to hold differences
  let newArr = [];

  // iterate through arr1
  for (let i = 0; i < arr1.length; i++) {
    // if items in array 1 don't exist in array 2,
    if (arr2.indexOf(arr1[i]) === -1) {
      // add them to holding array
      newArr.push(arr1[i]);
    }
  }

  // iterate through arr2
  for (let j = 0; j < arr2.length; j++) {
    // if items in array 2 don't exist in array 1,
    if (arr1.indexOf(arr2[j]) === -1) {
      // add them to holding array
      newArr.push(arr2[j]);
    }
  }

  return newArr;
}

console.log(diffArray([0, 1, 2, 3, 4], [1, 2, 3, 4, 5])); // 4
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"])); // ​​​​​['snuffleupagus', 'cookie monster', 'elmo']​​​​​
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])); // ​​​​​[1, 'calf', 3, 'piglet', 7, 'filly']​​​​​
