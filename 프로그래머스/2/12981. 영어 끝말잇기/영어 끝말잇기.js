function solution(n, words) {
  const used = new Set(); // 사용된 단어 저장

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const prev = words[i - 1];

    // 중복 단어 체크
    if (used.has(word)) {
      const person = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      return [person, turn];
    }

    // 끝말잇기 규칙 위반 체크 (이전 단어의 끝글자 != 현재 단어의 첫글자)
    if (i > 0 && prev[prev.length - 1] !== word[0]) {
      const person = (i % n) + 1;
      const turn = Math.floor(i / n) + 1;
      return [person, turn];
    }

    used.add(word);
  }

  // 규칙 위반이 없으면 [0, 0]
  return [0, 0];
}