const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let target = 0; // 다음에 먹어야 할 우유
let count = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] === target) {
    count++;
    target = (target + 1) % 3;
  }
}

console.log(count);