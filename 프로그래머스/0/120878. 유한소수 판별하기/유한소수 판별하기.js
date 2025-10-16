function solution(a, b) {
  // 최대공약수(GCD)로 약분
  const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
  const divisor = gcd(a, b);
  b /= divisor; // 기약분수의 분모

  // 분모에서 2와 5를 제거
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  // 남은 값이 1이면 유한소수, 아니면 무한소수
  return b === 1 ? 1 : 2;
}