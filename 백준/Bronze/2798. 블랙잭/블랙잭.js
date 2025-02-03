const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const cards = input[0].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < N; i++) {
  let sum = 0;

  for (let j = 0; j < N; j++) {
    if (i === j) continue;

    for (let k = 0; k < N; k++) {
      if (k === i || k === j) continue;
      sum = cards[i] + cards[j] + cards[k];

      answer = sum <= M && sum > answer ? sum : answer;
    }
  }
}

console.log(answer);