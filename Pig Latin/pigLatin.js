function translatePigLatin(str) {
  // convert input string to array of characters
  let splitStr = str.split("");
  // vowel check variable
  let vowelRegex = /[aeiou]/;
  // consonant check variable
  let consonantRegex = /[bcdfghjklmnpqrstvwxyz]/;

  // test first char for vowel
  if (vowelRegex.test(splitStr[0])) {
    // if match, add 'way' to end of string
    return str.concat("way");
  }
  // repeatedly test first char for consonant
  while (true) {
    if (consonantRegex.test(splitStr[0])) {
      // if match, splice first char and push to end of array
      splitStr.push(splitStr.splice(0, 1));
    } else {
      // stop loop if first char is not consonant
      break;
    }
  }
  // join char array and add "ay" to end
  return (str = splitStr.join("").concat("ay"));
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
