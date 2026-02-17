const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];
let arr = input[1].split(" ").map(Number);

let current = arr[0];
let answer = arr[0];

for (let i = 1; i < n; i++) {
  current = Math.max(arr[i], current + arr[i]);
  answer = Math.max(answer, current);
}

console.log(answer);
