const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const board = input.slice(1).map((line) => line.split(""));

// 1) 심장 위치 찾기
let heartX = 0, heartY = 0;

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === "*" && board[i + 1][j] === "*") {
      heartX = i + 1 + 1; 
      heartY = j + 1;
      break;
    }
  }
  if (heartX) break;
}

// 배열 인덱스로
const hx = heartX - 1;
const hy = heartY - 1;

// 2) 팔 길이
let leftArm = 0;
for (let y = hy - 1; y >= 0; y--) {
  if (board[hx][y] === "*") leftArm++;
  else break;
}

let rightArm = 0;
for (let y = hy + 1; y < N; y++) {
  if (board[hx][y] === "*") rightArm++;
  else break;
}

// 3) 허리 길이
let waist = 0;
let waistEndX = hx;
for (let x = hx + 1; x < N; x++) {
  if (board[x][hy] === "*") {
    waist++;
    waistEndX = x;
  } else break;
}

// 4) 다리 길이
let leftLeg = 0;
for (let x = waistEndX + 1; x < N; x++) {
  if (board[x][hy - 1] === "*") leftLeg++;
  else break;
}

let rightLeg = 0;
for (let x = waistEndX + 1; x < N; x++) {
  if (board[x][hy + 1] === "*") rightLeg++;
  else break;
}

console.log(`${heartX} ${heartY}`);
console.log(`${leftArm} ${rightArm} ${waist} ${leftLeg} ${rightLeg}`);