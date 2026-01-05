const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

let map = new Map();

for (let i of input) {
  map.set(i % 42, (map.get(i % 42) || 0) + 1);
}

console.log(map.size);
