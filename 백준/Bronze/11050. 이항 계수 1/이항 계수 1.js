const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const answer = factorial(N) / (factorial(K) * factorial(N - K));
console.log(answer);