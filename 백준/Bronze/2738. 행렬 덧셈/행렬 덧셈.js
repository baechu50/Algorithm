const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const inputList = input.map((i) => i.split(" ").map(Number));
const [n, m] = inputList.shift();

const sumArray = (arr1, arr2) => {
  return arr1.map((item, idx) => item + arr2[idx]);
};

const printArray = (arr) => {
  return arr
    .map((item) => JSON.stringify(item).replaceAll(",", " ").slice(1, -1))
    .join("\n");
};

for (let i = 0; i < n; i++) {
  inputList[i] = sumArray(inputList[i], inputList[i + n]);
}

console.log(printArray(inputList.slice(0, n)));