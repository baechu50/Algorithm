const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const getArithmaticMean = (arr) => {
  return Math.round(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);
};

const getMedian = (arr) => {
  return arr.sort((a, b) => a - b)[(arr.length - 1) / 2];
};

const getMode = (arr) => {
  const counter = new Map();

  arr.forEach((num) => {
    if (counter.has(num)) {
      counter.set(num, counter.get(num) + 1);
    } else {
      counter.set(num, 1);
    }
  });

  const sortedCounter = [...counter.entries()].sort((a, b) => {
    if (b[1] - a[1] === 0) return a[0] - b[0];
    else return b[1] - a[1];
  });

  if (sortedCounter.length === 1) return sortedCounter[0][0];

  return sortedCounter[0][1] === sortedCounter[1][1]
    ? sortedCounter[1][0]
    : sortedCounter[0][0];
};

const getRange = (arr) => {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 1] - sortedArr[0];
};

const answer = [
  getArithmaticMean(input),
  getMedian(input),
  getMode(input),
  getRange(input),
];

console.log(answer.join("\n"));