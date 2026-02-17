const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = +input[0];
const wine = [0];
for (let i = 1; i <= n; i++) wine.push(+input[i]);

if (n === 1) {
  console.log(input[1]);
  process.exit(0);
}

const dp = new Array(n + 1).fill(0);
dp[1] = wine[1];
dp[2] = wine[1] + wine[2];

for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1], // oox
    dp[i - 2] + wine[i], // oxo
    dp[i - 3] + wine[i - 1] + wine[i], // xoo
  );
}

console.log(dp[n]);
