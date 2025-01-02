const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const studentList = Array.from({ length: 30 }, (_, i) => i + 1);
const submitList = input.map((n) => parseInt(n));
const answer = studentList.filter((num) => !submitList.includes(num));

console.log(
  answer[0] < answer[1]
    ? `${answer[0]}\n${answer[1]}`
    : `${answer[1]}\n${answer[0]}`
);