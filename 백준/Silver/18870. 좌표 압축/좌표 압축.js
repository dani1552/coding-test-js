const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let result = {};

let sorted = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const unique = [...new Set(sorted)];

unique.forEach((value, index) => {
  result[value] = index;
});

const original = input[1].split(" ").map(Number);

let answer = original.map((v) => result[v]).join(" ");
console.log(answer);