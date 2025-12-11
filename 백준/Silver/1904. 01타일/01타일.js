const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();
const n = Number(input);

const MOD = 15746;

if (n === 1) {
  console.log(1);
} else if (n === 2) {
  console.log(2);
} else {
  let a = 1; // dp[1]
  let b = 2; // dp[2]

  for (let i = 3; i <= n; i++) {
    const c = (a + b) % MOD; 
    a = b;
    b = c;
  }

  console.log(b);
}
