function solution(dot) {
    const [a, b] = dot;
    
    if (a > 0 && b > 0) return 1;
    if (a < 0 && b > 0) return 2;
    if (a < 0 && b < 0) return 3;
    return 4;
}