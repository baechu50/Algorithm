const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const charList = input[1].split("");
let answer = 0;

const charToNum = (char, idx) => {
  const alphabets = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (alphabets.findIndex((el) => el === char) + 1) * 31 ** idx;
};

charList.forEach((char, idx) => {
  answer += charToNum(char, idx);
});

console.log(answer);