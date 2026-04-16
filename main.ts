const factorial = (x: number): number => {
  if (x < 2) return 1;
  return x * factorial(x - 1);
};

console.log(factorial(5));
// console.log(factorial("5")); gets compiled and the string 5 changes to numeric
