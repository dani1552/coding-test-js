function solution(n) {
  let battery = 0;
  while (n > 0) {
    if (n % 2 === 1) { // 홀수 = 1칸 점프
      battery += 1;
      n -= 1;
    } else {           // 짝수 = 순간이동
      n = n / 2;
    }
  }
  return battery;
}