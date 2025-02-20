const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const names = new Set(input);

input.forEach((name) => {
  names.has(name) ? names.delete(name) : names.add(name);
});

console.log(names.size);
console.log([...names].sort().join("\n"));