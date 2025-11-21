const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const k = +input[0];
let stack = [];

for (let i = 1; i <= k; i++) {
  if (input[i] !== "0") {
    stack.push(input[i]);
  } else {
    stack.pop();
  }
}

console.log(
  stack.length > 0 ? stack.map(Number).reduce((sum, e) => sum + e) : 0
);
