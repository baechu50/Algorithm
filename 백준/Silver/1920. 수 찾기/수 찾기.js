const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const obj = {};
input[1].split(" ").forEach((num) => (obj[num] = 1));

console.log(
  input[3]
    .split(" ")
    .map((num) => obj[num] || 0)
    .join("\n")
);