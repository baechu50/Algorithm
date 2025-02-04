const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const convertArrToNum = (arr) => {
  let index = -1;
  let number = 0;

  arr.map((el, idx) => {
    if (Number(el)) {
      index = idx;
      number = Number(el);
    }
  });

  return arr.map((el, idx) => {
    if (idx === index) return Number(el);
    if (!Number(el)) {
      const diff = index - idx;
      return number - diff;
    }
  });
};

const convertToFizzBuzz = (num) => {
  if (num % 15 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
};

console.log(convertToFizzBuzz(convertArrToNum(input).pop() + 1));