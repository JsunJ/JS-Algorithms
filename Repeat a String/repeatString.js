function repeatString(str, num) {
  let repeatedStr = "";
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }
  return repeatedStr;
}

console.log(repeatString("abc", 3)); // abcabcabc
