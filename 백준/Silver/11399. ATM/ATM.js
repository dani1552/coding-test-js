const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;
let sum = 0;

arr.reduce((_, cur) => {
  sum += cur; // 현재 사람까지의 누적 시간
  answer += sum; // 그 누적 시간을 전체 합에 더함
}, 0);

console.log(answer);