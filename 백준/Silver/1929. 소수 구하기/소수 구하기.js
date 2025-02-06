const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [m, n] = fs.readFileSync(filePath).toString().split(" ").map(Number);

const answerArr = [];

for (let i = m; i <= n; i++) {
  if (i === 1) continue;

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  isPrime && answerArr.push(i);
}

console.log(answerArr.join("\n"));