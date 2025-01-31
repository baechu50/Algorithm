const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

const coordinates = input.map((value) => value.split(" ").map(Number));

coordinates.sort((c1, c2) => {
  if (c1[1] === c2[1]) return c1[0] - c2[0];
  return c1[1] - c2[1];
});

console.log(coordinates.map((v) => v.join(" ")).join("\n"));