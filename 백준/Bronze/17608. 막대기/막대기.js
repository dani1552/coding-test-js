const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number);

const N = input[0];
const heights = input.slice(1, N + 1);

let count = 0;
let maxH = 0;

for (let i = N - 1; i >= 0; i--) {
  const h = heights[i];
  if (h > maxH) {
    count++;
    maxH = h;
  }
}

console.log(count);
