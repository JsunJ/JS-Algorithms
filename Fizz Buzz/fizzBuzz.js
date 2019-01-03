for (i = 1; i <= 100; i++) {
  const multipleOfThree = i % 3 === 0;
  const multipleOfFive = i % 5 === 0;
  const multipleOfFifteen = i % 15 === 0;

  if (multipleOfFifteen) {
    console.log("FizzBuzz");
  } else if (multipleOfThree) {
    console.log("Fizz");
  } else if (multipleOfFive) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
