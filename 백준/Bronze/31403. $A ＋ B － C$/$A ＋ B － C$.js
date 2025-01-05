const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [numA, numB, numC] = input.map(Number);
const [strA, strB, strC] = input.map(String);

console.log(`${numA + numB - numC}\n${strA + strB - strC}`);