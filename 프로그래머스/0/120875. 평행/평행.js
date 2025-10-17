function solution(dots) {
  // 기울기 구하는 함수
  const getSlope = (a, b) => (b[1] - a[1]) / (b[0] - a[0]);

  // 평행 가능한 3가지 선 조합만 검사
  const cases = [
    [0, 1, 2, 3], // (0,1) vs (2,3)
    [0, 2, 1, 3], // (0,2) vs (1,3)
    [0, 3, 1, 2], // (0,3) vs (1,2)
  ];

  for (const [a, b, c, d] of cases) {
    const slope1 = getSlope(dots[a], dots[b]);
    const slope2 = getSlope(dots[c], dots[d]);
    if (slope1 === slope2) return 1; // 기울기가 같으면 평행
  }

  return 0;
}