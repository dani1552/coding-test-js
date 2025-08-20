function solution(x) {
    let digitSum = 0;
    let temp = x;
    
    while (temp > 0) {
        digitSum += temp % 10;  // 마지막 자릿수를 더함
        temp = Math.floor(temp / 10);  // 마지막 자릿수 제거
    }
    
    return x % digitSum === 0;
}