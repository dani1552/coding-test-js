function solution(s) {
    let answer = '';
    let wordIndex = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            answer += ' ';
            wordIndex = 0; // 공백을 만나면 단어 인덱스 초기화
        } else {
            if (wordIndex % 2 === 0) {
                answer += s[i].toUpperCase();
            } else {
                answer += s[i].toLowerCase();
            }
            wordIndex++;
        }
    }
    return answer;
}