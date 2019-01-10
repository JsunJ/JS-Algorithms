function titleCase(str) {
  str = str.toLowerCase().split(" ");

  for (i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

console.log(titleCase("My name is Jason.")); // My Name Is Jason.
