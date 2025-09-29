function solution(a, b, n) {
  let answer = 0;
  let empty = n;

  while (empty >= a) {
    const newCoke = Math.floor(empty / a) * b; // 빈 병으로 교환 가능한 횟수 * 교환 시 받는 콜라 개수
    answer += newCoke;
    empty = (empty % a) + newCoke;
  }

  return answer;
}