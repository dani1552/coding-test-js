const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let count = 0;

let a = new Set(input[1].split(" "));
let b = new Set(input[2].split(" "));

for (let i of a) {
  if (!b.has(i)) count += 1;
}

for (let j of b) {
  if (!a.has(j)) count += 1;
}

console.log(count);