const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

for (let i of input) {
  const [a, b, c] = i
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);

  if (a === 0 && b === 0 && c === 0) return;

  if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) console.log("right");
  else console.log("wrong");
}
