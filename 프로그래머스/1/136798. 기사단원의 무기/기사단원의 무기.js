function solution(number, limit, power) {
  let totalIron = 0; 

  for (let i = 1; i <= number; i++) {
    let divisors = 0;

    // 약수 개수 구하기
    for (let j = 1; j * j <= i; j++) {
      if (i % j === 0) {
        divisors += (j * j === i) ? 1 : 2; // j가 i의 제곱근이면 1만 추가
      }
    }

    // 제한 수치 초과 시 power로 대체
    if (divisors > limit) divisors = power;

    totalIron += divisors;
  }

  return totalIron;
}