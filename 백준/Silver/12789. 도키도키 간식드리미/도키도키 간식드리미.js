const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let stack = [];
let count = 1;

for (let i of arr) {
  if (i === count) {
    count++;
    while (stack.length > 0 && stack[stack.length - 1] === count) {
      stack.pop();
      count++;
    }
  } else {
    stack.push(i);
  }
}

console.log(stack.length === 0 ? "Nice" : "Sad");
