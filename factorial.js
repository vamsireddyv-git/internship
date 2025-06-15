function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5 is :", factorial(5));