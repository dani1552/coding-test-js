function solution(n, left, right) {
    const result = [];
    
    for (let k = left; k <= right; k++) {
        const i = Math.floor(k / n);
        const j = k % n;
        result.push(Math.max(i, j) + 1);
    }
    
    return result;
}