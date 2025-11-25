const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let set = new Set();
let count = 0;

for (let i = 1; i <= N; i++) {
  set.add(input[i]);
}

for (let j = N + 1; j <= M + N; j++) {
  if (set.has(input[j])) count += 1;
}

console.log(count);
