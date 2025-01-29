const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

const parsedInput = input.map((el) => {
  const [com, num] = el.split(" ");
  if (num) {
    return [com, parseInt(num)];
  } else {
    return com;
  }
});

class Queue {
  constructor() {
    this.start = 0;
    this.end = 0;
    this.queue = [];
  }

  push(num) {
    this.queue.push(num);
    this.end++;
  }

  pop() {
    if (this.end === this.start) return -1;
    const first = this.queue[this.start];
    this.start++;
    return first;
  }

  size() {
    return this.end - this.start;
  }

  empty() {
    return this.end === this.start ? 1 : 0;
  }

  front() {
    if (this.end === this.start) return -1;
    return this.queue[this.start];
  }

  back() {
    if (this.end === this.start) return -1;
    return this.queue[this.end - 1];
  }
}

const queue = new Queue();
const result = [];

parsedInput.map((command) => {
  if (command[0] === "push") {
    queue.push(command[1]);
  } else {
    result.push(queue[command]());
  }
});

console.log(result.join("\n"));