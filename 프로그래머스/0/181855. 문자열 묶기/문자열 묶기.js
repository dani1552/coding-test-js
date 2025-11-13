function solution(strArr) {
    let count = {};
    
    for (let s of strArr) {
        count[s.length] = (count[s.length] || 0) + 1;
    }
    
    return Math.max(...Object.values(count));
}