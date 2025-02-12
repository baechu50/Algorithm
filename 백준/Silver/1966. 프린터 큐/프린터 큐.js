const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

const printCase = input
  .map((el) => el.split(" ").map(Number))
  .map((_, i, arr) => (i % 2 === 0 ? [arr[i], arr[i + 1]] : null))
  .filter(Boolean);

const getPrintNum = (n, m, queue) => {
  let count = 0;
  const documents = queue.map((el, idx) => {
    return { importance: el, selected: idx === m ? true : false };
  });

  while (documents.length > 0) {
    const current = documents.shift();
    if (documents.some((el) => el.importance > current.importance)) {
      documents.push(current);
    } else {
      count++;
      if (current.selected) return count;
    }
  }
};

const answer = printCase.map((el) => getPrintNum(el[0][0], el[0][1], el[1]));

console.log(answer.join("\n"));