function solution(balls, share) {
    function fact(n) {
        let result = 1;
        for (let i=1; i<= n; i++) {
            result *= i;
        }
        return result;
    }
    
    return Math.round(fact(balls) / (fact(balls - share) * fact(share)));
}