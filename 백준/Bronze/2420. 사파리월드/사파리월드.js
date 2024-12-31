const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(Math.abs(input[0] - input[1]));