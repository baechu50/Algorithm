const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
console.log(factorial(Number(input)));