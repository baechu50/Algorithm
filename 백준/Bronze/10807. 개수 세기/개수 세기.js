const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const list = input[1].split(" ");
console.log(list.filter((n) => n === input[2]).length);