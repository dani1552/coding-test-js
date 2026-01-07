const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 1부터 n까지 스택에 넣으면서 찾는 수가 맞으면 pop, 아니면 계속 넣기

const n = Number(input[0]);
const find = input.slice(1).map(Number);

let stack = [];
let cur = 1; // 1부터 n까지 push할 수 있음
let result = [];
let possible = true;

for (let num of find) {
  // 목표 값이 될 때까지 push
  while (cur <= num) {
    stack.push(cur++);
    result.push("+");
  }

  // 스택 최상단이 목표값이면 pop
  if (stack[stack.length - 1] === num) {
    stack.pop();
    result.push("-");
  } else {
    // 수열 불가능
    possible = false;
    break;
  }
}

if (!possible) console.log("NO");
else console.log(result.join("\n"));
