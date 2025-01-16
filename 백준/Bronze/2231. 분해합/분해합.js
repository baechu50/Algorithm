const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = parseInt(
  fs.readFileSync(filePath).toString().trim().split("\n")[0]
);

let num = 0;
let answer = 0;

while (num !== input) {
  num++;

  let sum =
    num
      .toString()
      .split("")
      .reduce((acc, cur) => acc + Number(cur), 0) + num;

  if (input === sum) {
    answer = num;
    break;
  }
}

console.log(answer);