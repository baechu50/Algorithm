const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = Number(fs.readFileSync(filePath).toString().trim());

const countZero = (n) => {
  let count2 = 0;
  let count5 = 0;

  while (n > 0) {
    let temp = n;

    while (temp % 2 === 0 || temp % 5 === 0) {
      if (temp % 2 === 0) {
        count2++;
        temp /= 2;
      }
      if (temp % 5 === 0) {
        count5++;
        temp /= 5;
      }
    }

    n--;
  }

  return Math.min(count2, count5);
};

console.log(countZero(input));