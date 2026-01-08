const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const T = +input[0];
const arr = input.slice(1).map(Number);

// 0, 1 출력 횟수 저장
let f = [];
f[0] = [1, 0];
f[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  f[i] = [f[i - 1][0] + f[i - 2][0], f[i - 1][1] + f[i - 2][1]];
}

let result = [];
for (let n of arr) {
  result.push(`${f[n][0]} ${f[n][1]}`);
}

console.log(result.join("\n"));
