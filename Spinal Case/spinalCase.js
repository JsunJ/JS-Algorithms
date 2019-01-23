function spinalCase(str) {
  let splitStr = str.split(/\s|_|(?=[A-Z])/);
  let newStr = splitStr.join("-").toLowerCase();
  return newStr;
}

console.log(spinalCase("This Is Spinal Case")); // this-is-spinal-case
console.log(spinalCase("thisIsSpinalCase")); // this-is-spinal-case
console.log(spinalCase("This_Is_Spinal_Case")); // this-is-spinal-case
console.log(spinalCase("this Is spinal-case")); // this-is-spinal-case
