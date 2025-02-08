const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const MOD = 1234567891;
const charList = input[1].split("");

let powValue = 1;
let answer = 0;

charList.forEach((char) => {
  answer = (answer + (((char.charCodeAt() - 96) * powValue) % MOD)) % MOD;
  powValue = (powValue * 31) % MOD;
});

console.log(answer);