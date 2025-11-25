const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let mine = new Set();
let result = [];

for (let i of input[1].split(" ")) {
  mine.add(i);
}

for (let j of input[3].split(" ")) {
  if (mine.has(j)) result.push(1);
  else result.push(0);
}

console.log(result.join(" "));
