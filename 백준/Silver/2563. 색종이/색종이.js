const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const n = Number(input[0]); // 색종이 개수
let paper = Array.from({ length: 100 }, () => Array(100).fill(false));

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  // 색종이 영역 칠하기 (10x10)
  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      paper[x + dx][y + dy] = true;
    }
  }
}

// true 개수 세기
let area = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (paper[i][j]) area++;
  }
}

console.log(area);
