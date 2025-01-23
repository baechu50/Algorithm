const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const lineCount = Number(input.shift().split(" ")[1]);

let min = 1;
let max = Math.max(...input.map(Number));

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = 0;

  input.map((value) => {
    count += Math.floor(value / mid);
  });

  if (count >= lineCount) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}

console.log(max);