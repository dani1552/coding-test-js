function solution(n) {
    return parseInt(parseInt(n).toString(3).split("").reverse().join("").toString(10), 3);
}