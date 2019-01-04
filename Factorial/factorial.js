function factorializeNumber(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.log(factorializeNumber(7)); // 5040
