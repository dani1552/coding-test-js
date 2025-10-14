function solution(babbling) {
  const can = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let temp = word;
    let valid = true;

    // 같은 발음이 연속되는지 검사
    for (let sound of can) {
      if (temp.includes(sound + sound)) {
        valid = false;
        break;
      }
    }
    if (!valid) continue;

    // 발음 가능한 조각들을 모두 공백으로 치환
    for (let sound of can) {
      temp = temp.split(sound).join(" ");
    }
      
    // 남은 문자가 전부 공백이라면 발음 가능한 단어
    if (temp.trim() === "") count++;
  }

  return count;
}