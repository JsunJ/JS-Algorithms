function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.slice(0, maxLength) + "...";
  }
}

console.log(truncateString("The quick brown fox jumps over the lazy dog", 19)); // The quick brown fox...

console.log(truncateString("I love you.", 12)); // I love you.
