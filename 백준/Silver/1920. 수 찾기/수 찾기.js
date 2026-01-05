const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = input[0];
const a = input[1].split(" ");

let map = new Map();
for (let aa of a) {
  map.set(aa, (map.get(aa) || 0) + 1);
}

const m = input[2];
const b = input[3].split(" ");

let answer = [];

for (let bb of b) {
  if (map.get(bb)) {
    answer.push(1);
  } else {
    answer.push(0);
  }
}

console.log(answer.join("\n"));
