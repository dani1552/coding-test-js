function solution(n, s) {
    if (s < n) return [-1];
    
    const base = Math.floor(s / n);
    const remainder = s % n;
    
    const result = Array(n).fill(base);
    
    for (let i = 0; i < remainder; i++) {
        result[n - 1 - i] += 1;
    }
    
    return result;
}