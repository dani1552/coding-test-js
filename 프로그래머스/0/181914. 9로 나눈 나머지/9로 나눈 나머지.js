function solution(number) {
    return number.split('').reduce((a, sum) => a += Number(sum), 0) % 9;
}