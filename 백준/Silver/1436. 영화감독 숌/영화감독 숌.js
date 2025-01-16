const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = parseInt(
  fs.readFileSync(filePath).toString().trim().split("\n")[0]
);

let counter = 1;
let num = 666;

while (counter !== input) {
  num++;
  num.toString().includes("666") && counter++;
}

console.log(num);