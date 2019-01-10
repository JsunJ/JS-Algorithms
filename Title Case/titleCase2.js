function titleCase(str) {
  let newStr = str.toLowerCase().split(" ").map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(" ");

  return newStr;
}

console.log(titleCase("My name is Jason.")); // My Name Is Jason.
