const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);

let totalSupervisor = 0;

for (let i = 0; i < N; i++) {
  totalSupervisor += 1; // 총감독 1명
  const remaining = A[i] - B; // 남은 학생
  if (remaining > 0) {
    totalSupervisor += Math.ceil(remaining / C); // 부감독 수
  }
}

console.log(totalSupervisor);
