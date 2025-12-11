const fs = require("fs");
const input = +fs.readFileSync(0, "utf8").trim();

let fiboCount = 0;
let fibodpCount = 0;

// 재귀호출
function fibo(n) {
  if (n === 1 || n === 2) {
    fiboCount++;
    return 1;
  } else return fibo(n - 1) + fibo(n - 2);
}

// dp
function fibodp(n) {
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    fibodpCount++;
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}

fibo(input);
fibodp(input);
console.log(fiboCount, fibodpCount);

// fib(n) {
//     if (n = 1 or n = 2)
//     then return 1;  # 코드1
//     else return (fib(n - 1) + fib(n - 2));
// }

// fibonacci(n) {
//     f[1] <- f[2] <- 1;
//     for i <- 3 to n
//         f[i] <- f[i - 1] + f[i - 2];  # 코드2
//     return f[n];
// }
