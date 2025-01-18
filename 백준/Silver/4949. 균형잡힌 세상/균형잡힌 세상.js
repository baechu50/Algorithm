const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.pop();

console.log(
  input
    .map((str) => {
      const stack = [];
      let result = "yes";

      str.split("").map((char) => {
        if (char === "(" || char === "[") stack.push(char);
        if (char === ")" || char === "]") {
          let set = stack.pop() + char;
          if (set !== "()" && set !== "[]") result = "no";
        }
      });

      if (stack.length) result = "no";

      return result;
    })
    .join("\n")
);