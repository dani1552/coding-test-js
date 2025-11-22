const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const X = Number(input);

let line = 1;     
let sum = 1;     

// X가 속한 대각선 찾기
while (sum < X) {
  line++;
  sum += line;
}

// 이전 대각선까지의 누적 개수
const prevSum = sum - line;

// 현재 대각선에서의 위치
const pos = X - prevSum;

let numerator, denominator;

if (line % 2 === 1) {
  // 홀수 대각선:
  numerator = line - pos + 1;
  denominator = pos;
} else {
  // 짝수 대각선
  numerator = pos;
  denominator = line - pos + 1;
}

console.log(`${numerator}/${denominator}`);