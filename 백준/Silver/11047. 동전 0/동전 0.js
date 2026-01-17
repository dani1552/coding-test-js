const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
let K = Number(input[idx++]);

const coins = [];
for (let i = 0; i < N; i++) coins.push(Number(input[idx++]));

let count = 0;

for (let i = N - 1; i >= 0; i--) {
  const c = coins[i];
  if (K === 0) break;

  if (c <= K) {
    const use = Math.floor(K / c);
    count += use;
    K -= use * c;
  }
}

process.stdout.write(String(count));
