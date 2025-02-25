const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath, "utf-8").trim().split("\n");

input.shift();
const nums = input.map(Number);
const maxNum = Math.max(...nums);
const dp = Array(maxNum + 1).fill(0);

dp[0] = { count1: 0, count0: 1 };
dp[1] = { count1: 1, count0: 0 };

for (let i = 2; i <= maxNum; i++) {
  dp[i] = {
    count1: dp[i - 1].count1 + dp[i - 2].count1,
    count0: dp[i - 1].count0 + dp[i - 2].count0,
  };
}

nums.forEach((num) => {
  console.log(dp[num].count0, dp[num].count1);
});