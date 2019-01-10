function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(titleCase("My name is Jason.")); // My Name Is Jason.
