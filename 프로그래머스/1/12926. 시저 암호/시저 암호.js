function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch === ' ') {
      // 공백은 그대로
      answer += ' ';
      continue;
    }

    let base = ch === ch.toUpperCase() ? 65 : 97; // 'A' 또는 'a'의 ASCII 코드
    let code = ch.charCodeAt(0) - base; // 0부터 25 사이 값
    let shifted = (code + n) % 26;      // 알파벳 범위 내에서 밀기
    answer += String.fromCharCode(shifted + base);
  }

  return answer;
}