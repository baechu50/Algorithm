const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const timeArr = input[1]
  .split(" ")
  .map(Number)
  .sort((n1, n2) => n1 - n2);

const answer = timeArr.reduce(
  (acc, cur, idx) => acc + cur * (timeArr.length - idx),
  0
);

console.log(answer);