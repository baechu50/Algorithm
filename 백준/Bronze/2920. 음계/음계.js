const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "mixed";
answer = input[0] === "1 2 3 4 5 6 7 8" ? "ascending" : answer;
answer = input[0] === "8 7 6 5 4 3 2 1" ? "descending" : answer;

console.log(answer);