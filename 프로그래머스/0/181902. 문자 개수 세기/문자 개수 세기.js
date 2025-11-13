function solution(my_string) {
    let answer = Array(52).fill(0);
    
    for (let ch of my_string) {
        let code = ch.charCodeAt(0);
        
        if (code >= 65 && code <= 90) {
            answer[code - 65]++;    // 대문자
        } else {
            answer[code - 97 + 26]++;   // 소문자
        }
    }
    
    return answer;
}