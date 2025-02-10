const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getGCD = (n1, n2) => {
  const min = Math.min(n1, n2);
  let gcd = 1;

  for (let i = 1; i <= min; i++) {
    if (n1 % i === 0 && n2 % i === 0) gcd = i;
  }

  return gcd;
};

const getLCM = (n1, n2) => {
  return (n1 * n2) / getGCD(n1, n2);
};

console.log(getGCD(N, M));
console.log(getLCM(N, M));