const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

const [n, k] = input;
const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(n) / (factorial(k) * factorial(n - k)));