const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const str = input[0];
const bomb = input[1];
const bombLen = bomb.length;

const stack = [];

for (let ch of str) {
  stack.push(ch);

  // 스택 길이가 폭발 문자열 길이 이상일 때만 검사
  if (stack.length >= bombLen) {
    let isBomb = true;

    for (let i = 0; i < bombLen; i++) {
      if (stack[stack.length - bombLen + i] !== bomb[i]) {
        isBomb = false;
        break;
      }
    }

    if (isBomb) {
      for (let i = 0; i < bombLen; i++) {
        stack.pop();
      }
    }
  }
}

const result = stack.join("");
console.log(result.length ? result : "FRULA");