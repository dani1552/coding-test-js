const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").map(Number);

const n = input[0];
let dasom = input[1];
let arr = input.slice(2);

let result = 0;

while (arr.length && dasom <= Math.max(...arr)) {
  let maxIdx = arr.indexOf(Math.max(...arr));
  arr[maxIdx]--;
  dasom++;
  result++;
}

console.log(result);