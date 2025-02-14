const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const cordinates = input.map((el) => el.split(" ").map(Number));

console.log(
  cordinates
    .sort((c1, c2) => {
      if (c1[0] === c2[0]) return c1[1] - c2[1];
      return c1[0] - c2[0];
    })
    .map((el) => el.join(" "))
    .join("\n")
);