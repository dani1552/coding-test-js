const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const sorted_input = [...input].sort().map(Number);
let sum = 0;

for (let s of sorted_input) {
  sum += s;
}
console.log(sum / input.length);
console.log(sorted_input[Math.floor(input.length / 2)]);
