const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = input.shift().split(" ").map(Number);
const board1 = "WBWBWBWBBWBWBWBW".repeat(4);
const board2 = "BWBWBWBWWBWBWBWB".repeat(4);
let answer = Infinity;

const countDiff = (str1, str2) => {
  let diffCount = 0;

  str1.split("").forEach((char, idx) => {
    if (char !== str2[idx]) diffCount++;
  });

  return diffCount;
};

for (let i = 0; i < h - 7; i++) {
  for (let j = 0; j < w - 7; j++) {
    const resultBoard = input
      .slice(i, i + 8)
      .map((line) => line.slice(j, j + 8))
      .join("");

    const newDiff = Math.min(
      countDiff(resultBoard, board1),
      countDiff(resultBoard, board2)
    );

    answer = answer > newDiff ? newDiff : answer;
  }
}

console.log(answer);