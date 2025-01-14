const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const result = input
  .map((value) => {
    const [num, name] = value.split(" ");
    return [parseInt(num), name];
  })
  .sort((age1, age2) => age1[0] - age2[0]);

result.forEach((value) => console.log(value.join(" ")));