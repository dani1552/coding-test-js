const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const count = Number(input[0]);
let stack = [];

for (let i = 1; i <= count; i++) {
  if (input[i] === "0") {
    stack.pop();
  } else {
    stack.push(Number(input[i]));
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
