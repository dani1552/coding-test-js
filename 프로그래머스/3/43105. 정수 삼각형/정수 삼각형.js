function solution(triangle) {
  const height = triangle.length;
  const dp = Array.from({ length: height }, (_, i) => [...triangle[i]]); // 깊은 복사

  for (let floor = height - 2; floor >= 0; floor--) {
    for (let i = 0; i <= floor; i++) {
      dp[floor][i] += Math.max(dp[floor + 1][i], dp[floor + 1][i + 1]);
    }
  }

  return dp[0][0];
}