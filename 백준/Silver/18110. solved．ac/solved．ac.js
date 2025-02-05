const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const removeNum = Math.round(n * 0.15);
const numList = input.map(Number).sort((n1, n2) => n1 - n2);

const trimmedList = numList.slice(removeNum, n - removeNum);

console.log(
  Math.round(
    trimmedList.length > 0
      ? trimmedList.reduce((pre, cur) => pre + cur, 0) / trimmedList.length
      : 0
  )
);