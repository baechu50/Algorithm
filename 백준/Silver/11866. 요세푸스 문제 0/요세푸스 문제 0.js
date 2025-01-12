const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")[0]
  .split(" ")
  .map(Number);

let index = input[1] - 1;
const circle = [...new Array(input[0])].map((_, i) => i + 1);
const result = [];

while (circle.length > 0) {
  result.push(circle.splice(index, 1)[0]);
  index += input[1] - 1;
  if (index >= circle.length) index %= circle.length;
}

console.log(`<${result.join(", ")}>`);
