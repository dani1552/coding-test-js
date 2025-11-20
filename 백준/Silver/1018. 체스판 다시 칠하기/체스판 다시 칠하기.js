const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1);

// 기준 체스 패턴 두 개
const patternW = ["W", "B"]; // 첫 칸 W
const patternB = ["B", "W"]; // 첫 칸 B

let answer = Infinity;

function countRepaint(x, y) {
  let countStartW = 0; // 왼쪽 위가 W일 경우
  let countStartB = 0; // 왼쪽 위가 B일 경우

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const current = board[x + i][y + j];

      const expectedW = patternW[(i + j) % 2];
      const expectedB = patternB[(i + j) % 2];

      if (current !== expectedW) countStartW++;
      if (current !== expectedB) countStartB++;
    }
  }

  return Math.min(countStartW, countStartB);
}

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    answer = Math.min(answer, countRepaint(i, j));
  }
}

console.log(answer);
