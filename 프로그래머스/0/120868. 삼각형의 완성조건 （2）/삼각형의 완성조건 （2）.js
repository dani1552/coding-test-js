function solution(sides) {
  const [a, b] = sides;
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  // 가능한 c의 개수 = (a + b - 1) - (max - min + 1) + 1 === 2 * min - 1
  return 2 * min - 1;
}