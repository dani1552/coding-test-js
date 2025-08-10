function solution(n) {
    let answer = 0;
    
    for(let i=1; i<= n;i++) {
        let divisors = 0;
        
        for(let j=1; j<=i; j++) {
            if (i % j === 0) {
                divisors++;
            }
        }
        
        if (divisors >= 3) {
            answer++;
        }
    }
    
    return answer;
}