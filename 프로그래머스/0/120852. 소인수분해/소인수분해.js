function solution(n) {
    let result = [];
    
    for(let i=2; i<=n; i++) {
        while (n % i === 0) {
            result.push(i);
            n = n / i;
        } 
    }
    
    return [...new Set(result)];
}