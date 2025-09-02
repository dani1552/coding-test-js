function solution(n, m) {
    let gcd = 0;
    let lcm = 0;

    // 최대공약수 (유클리드 호제법)
    let a = n, b = m;
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    gcd = a;

    // 최소공배수
    lcm = (n * m) / gcd;

    return [gcd, lcm];
}