function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    return !isNaN(s) && !s.includes('e') && !s.includes('E');
}