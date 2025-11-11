function solution(a, b, c) {
    let plus = a + b + c;
    let double = a ** 2 + b ** 2 + c ** 2;
    let triple = a ** 3 + b ** 3 + c ** 3;
    
    if (a === b && b === c) {
        // 모두 같을 때
        return plus * double * triple;
    } else if (a === b || b === c || a === c) {
        // 2가지 숫자가 같을 때
        return plus * double;
    } else {
        // 모두 다를 때
        return plus;
    }
}