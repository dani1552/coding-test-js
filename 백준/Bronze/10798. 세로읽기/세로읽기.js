const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let max_length = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i].length >= max_length) {
    max_length = input[i].length;
  }
}

let line = [];
for (let i = 0; i < max_length; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i] === undefined) continue;
    line.push(input[j][i]);
  }
}
console.log(line.join(""));
