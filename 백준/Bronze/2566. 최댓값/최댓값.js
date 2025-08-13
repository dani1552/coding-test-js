const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

let maxNum = -1;
let maxRow = 0;
let maxCol = 0;

input.forEach((line, rowIndex) => {
  const nums = line.split(" ").map(Number);
  nums.forEach((value, colIndex) => {
    if (value > maxNum) {
      maxNum = value;
      maxRow = rowIndex + 1;
      maxCol = colIndex + 1;
    }
  });
});

console.log(maxNum);
console.log(maxRow, maxCol);
