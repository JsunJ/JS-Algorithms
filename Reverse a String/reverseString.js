/* Decrementing for loop */

function reverseString(string) {
  let newString = "";

  // Start at last character and iterate backwards, stop after first character
  for (let i = string.length - 1; i >= 0; i--) {
    // Add current character to new string
    newString += string[i];
  }
  return newString;
}

console.log(reverseString("Jason")); // nosaJ
