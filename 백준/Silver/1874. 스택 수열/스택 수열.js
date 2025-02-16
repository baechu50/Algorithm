const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input.shift());
const answerArr = input.map(Number);

const sortedArr = new Array(n).fill(0).map((_, i) => n - i);
const currentArr = [];
const outputArr = [];
const result = [];

const push = () => {
  currentArr.push(sortedArr.pop());
  result.push("+");
};

const pop = () => {
  outputArr.push(currentArr.pop());
  result.push("-");
};

while (sortedArr.length > 0 || currentArr.length > 0) {
  if (currentArr[currentArr.length - 1] === answerArr[0]) {
    pop();
    answerArr.shift();
  } else if (sortedArr.length > 0) {
    push();
  } else {
    break;
  }
}

if (answerArr.length > 0 || sortedArr.length > 0 || currentArr.length > 0) {
  console.log("NO");
} else {
  console.log(result.join("\n"));
}