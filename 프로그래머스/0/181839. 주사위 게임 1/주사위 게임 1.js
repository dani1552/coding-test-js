function solution(a, b) {
    if (a % 2 === 1 && b % 2 === 1) {
        // 둘 다 홀수일 때
        return a ** 2 + b ** 2;
    } else if (a % 2 === 1 || b % 2 === 1) {
        // 둘 중 하나만 홀수일 때
        return 2 * (a + b);
    } else {
        // 둘 다 짝수일 때
        return Math.abs(a - b);
    }
}