const fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim().split("\n");
let answer = [];

for (let i of input) {
  const [x, y] = i.split(" ").map(Number);

  if (y % x === 0) answer.push("factor");
  else if (x % y === 0) answer.push("multiple");
  else answer.push("neither");
}

answer.pop();
console.log(answer.join("\n"));
