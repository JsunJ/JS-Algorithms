function confirmEnd(str, strEnd) {
  return str.slice(str.length - strEnd.length) === strEnd;
}

console.log(confirmEnd("The quick brown fox jumps over the lazy dog", "dog")); // returns true
