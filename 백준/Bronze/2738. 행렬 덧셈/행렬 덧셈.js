const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

let A = [];
let B = [];

// 행렬 A
for (let i = 1; i <= N; i++) {
  A.push(input[i].split(" ").map(Number));
}

// 행렬 B
for (let j = N + 1; j <= 2 * N; j++) {
  B.push(input[j].split(" ").map(Number));
}

// 결과 행렬
let result = [];
for (let x = 0; x < N; x++) {
  let row = [];
  for (let y = 0; y < M; y++) {
    row.push(A[x][y] + B[x][y]);
  }
  result.push(row.join(" "));
}

// 출력
console.log(result.join("\n"));
