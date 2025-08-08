const input = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
// JS의 Number 타입은 끝자리를 반올림함!
const dp = new Array(117).fill(0n); // BigInt 리터럴: 0n

dp[1] = 1n;
dp[2] = 1n;
dp[3] = 1n;

for (let i = 4; i <= input; i++) {
  dp[i] = dp[i - 1] + dp[i - 3];
}

console.log(dp[input].toString());