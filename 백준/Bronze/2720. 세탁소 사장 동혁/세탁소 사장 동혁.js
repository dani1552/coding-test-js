const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let C = Number(input[i]);
  let q = Math.floor(C / 25); // 쿼터
  C %= 25;

  let d = Math.floor(C / 10); // 다임
  C %= 10;

  let n = Math.floor(C / 5); // 니켈
  C %= 5;

  let p = C; // 페니

  console.log(`${q} ${d} ${n} ${p}`);
}
