const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = input[0];
let array = [];

for (let i = 1; i <= N; i++) {
  array.push(input[i]);
}

console.log(
  array
    .map(Number)
    .sort((a, b) => a - b)
    .join("\n")
);
