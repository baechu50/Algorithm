const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ").map(Number);

const [n, y, x] = input;

let size = 2 ** n;
let pointer = { x: 0, y: 0 };
let count = 0;

while (size > 1) {
  size /= 2;

  if (x >= pointer.x + size && y >= pointer.y + size) {
    count += size ** 2 * 3;
    pointer.x += size;
    pointer.y += size;
  } else if (x < pointer.x + size && y >= pointer.y + size) {
    count += size ** 2 * 2;
    pointer.y += size;
  } else if (x >= pointer.x + size && y < pointer.y + size) {
    count += size ** 2;
    pointer.x += size;
  }
}

console.log(count);