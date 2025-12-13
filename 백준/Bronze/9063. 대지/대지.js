const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);

if (N === 1) {
  console.log(0);
  process.exit(0);
}

let minX = Infinity;
let maxX = -Infinity;
let minY = Infinity;
let maxY = -Infinity;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  minX = Math.min(minX, x);
  maxX = Math.max(maxX, x);
  minY = Math.min(minY, y);
  maxY = Math.max(maxY, y);
}

const area = (maxX - minX) * (maxY - minY);
console.log(area);