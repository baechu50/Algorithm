const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const ranks = [];

const info = input.map((value, idx) => {
  const [weight, height] = value.split(" ").map(Number);
  return { idx, weight, height };
});

for (let i = 0; i < info.length; i++) {
  let rank = 1;
  for (let j = 0; j < info.length; j++) {
    if (i === j) continue;
    info[j].weight > info[i].weight &&
      info[j].height > info[i].height &&
      rank++;
  }
  ranks.push(rank);
}

console.log(ranks.join(" "));