function findLongestWordLength(str) {
  let splitStr = str.split(" ");
  let longestWordLength = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWordLength) {
      longestWordLength = splitStr[i].length;
    }
  }
  return longestWordLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
); // returns 6
