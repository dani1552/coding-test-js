const fs = require("fs");

const n = Number(fs.readFileSync(0, "utf8").trim());
const MOD = 10007;

if (n === 1) {
  console.log(1);
  process.exit(0);
}
if (n === 2) {
  console.log(3);
  process.exit(0);
}

let a = 1; // dp[1]
let b = 3; // dp[2]

for (let i = 3; i <= n; i++) {
  const c = (b + 2 * a) % MOD; // dp[i] = dp[i-1] + 2*dp[i-2]
  a = b;
  b = c;
}

console.log(b);
