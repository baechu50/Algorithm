const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(
  fs.readFileSync(filePath).toString().trim().split("\n")[0]
);

let start = 0;
const arr = Array.from({ length: input }, (v, i) => i + 1);

while (start < arr.length - 1) {
  start++;
  arr.push(arr[start]);
  start++;
}

console.log(arr[start]);