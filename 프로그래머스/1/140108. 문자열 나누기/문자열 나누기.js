function solution(s) {
  let answer = 0;
  let same = 0; // x의 개수
  let diff = 0; // x가 아닌 글자의 개수
  let first = s[0]; // 현재 구간의 기준 문자

  for (let i = 0; i < s.length; i++) {
    if (same === 0 && diff === 0) {
      first = s[i];
    }

    if (s[i] === first) same++;
    else diff++;

    if (same === diff) {
      answer++;
      same = 0;
      diff = 0;
    }
  }

  if (same !== 0 || diff !== 0) answer++;

  return answer;
}