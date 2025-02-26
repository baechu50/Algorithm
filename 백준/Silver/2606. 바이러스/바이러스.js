const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const computerNum = Number(input[0]);
const graph = Array.from({ length: computerNum }, () => []);
const isVirus = Array(computerNum).fill(false);
isVirus[0] = true;

input.slice(2).forEach((v) => {
  const [c1, c2] = v.split(" ").map(Number);
  graph[c1 - 1].push(c2 - 1);
  graph[c2 - 1].push(c1 - 1);
});

const queue = [0];

while (queue.length) {
  const current = queue.shift();

  graph[current].forEach((v) => {
    if (!isVirus[v]) {
      isVirus[v] = true;
      queue.push(v);
    }
  });
}

console.log(isVirus.filter((v) => v).length - 1);