const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

let array = [];
for (let i = 0; i < input.length; i++) {
  array.push(input[i]);
}

console.log(
  array
    .map(Number)
    .sort((a, b) => b - a)
    .join("")
);
