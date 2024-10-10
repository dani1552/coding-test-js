function solution(a, b) {
   const plus = Number(String(a) + String(b));
   const multiple = 2 * a * b;
    
    if (plus === multiple) return plus;
    return plus > multiple ? plus : multiple;
}