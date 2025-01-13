const { count } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cards = input[1].split(" ").map(Number);
const nums = input[3].split(" ").map(Number);
const counter = new Map();
const answer = [];

nums.forEach((num) => counter.set(num, 0));
cards.forEach((card) => {
  if (counter.has(card)) {
    counter.set(card, counter.get(card) + 1);
  }
});

nums.forEach((num) => answer.push(counter.get(num)));
console.log(answer.join(" "));
