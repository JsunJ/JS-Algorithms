function findLargestNumsOf(arr) {
  let largestNums = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (var j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    largestNums[i] = largestNumber;
  }

  return largestNums;
}
console.log(
  findLargestNumsOf([
    [3, 4, 1, 2],
    [11, -100, 18, 26],
    [301, 401, 501, 201],
    [1000, 1001, 857, 1],
    [10, 20, 30, 40, 100, 200, -999]
  ])
); // returns ​​​​​[ 4, 26, 501, 1001, 200 ]​​​​​
