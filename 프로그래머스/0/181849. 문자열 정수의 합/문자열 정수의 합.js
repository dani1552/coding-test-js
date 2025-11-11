function solution(num_str) {
    return num_str.split("").map(Number).reduce((a, sum) => a + sum);
}