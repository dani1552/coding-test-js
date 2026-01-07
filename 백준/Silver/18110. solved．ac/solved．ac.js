const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];

if (n === 0) {
  console.log(0);
  return;
}
const minus = Math.round(n * 0.15);

const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b)
  .slice(minus, n - minus);

console.log(Math.round(arr.reduce((a, c) => (a += c), 0) / arr.length));
