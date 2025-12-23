function solution(n) {
  const MOD = 1000000007;

  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let i = 3; i <= n; i++) {
    const cur = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = cur;
  }

  return prev1;
}
