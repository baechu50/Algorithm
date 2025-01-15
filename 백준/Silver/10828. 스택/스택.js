const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const stack = [];
const result = [];

const operation = {
  push: (num) => stack.push(num),
  pop: () => result.push(stack.pop() || -1),
  size: () => result.push(stack.length),
  empty: () => result.push(stack.length === 0 ? 1 : 0),
  top: () => result.push(stack[stack.length - 1] || -1),
};

const commands = input.map((el) => {
  const [command, num] = el.split(" ");
  if (num === undefined) return { command };
  return { command, num: Number(num) };
});

commands.forEach((el) => {
  operation[el.command](el.num);
});

console.log(result.join("\n"));