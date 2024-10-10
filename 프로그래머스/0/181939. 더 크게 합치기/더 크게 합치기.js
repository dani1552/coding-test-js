function solution(a, b) {
    const a_plus_b = Number(String(a) + String(b));
    const b_plus_a = Number(String(b) + String(a));
    return a_plus_b > b_plus_a ? a_plus_b : b_plus_a;
}