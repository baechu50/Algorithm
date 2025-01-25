const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let arr = [];

input.shift();

input.forEach((el) => {
  if ((el === 0) & (arr.length > 0)) {
    arr.pop();
  } else {
    arr.push(el);
  }
});

console.log(arr.reduce((acc, cur) => acc + cur, 0));