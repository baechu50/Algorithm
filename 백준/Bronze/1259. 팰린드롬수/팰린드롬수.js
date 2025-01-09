const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop();

const answer = input.map((str) => {
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return "no";
  }

  return "yes";
});

console.log(answer.join("\n"));