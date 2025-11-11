function solution(num_list) {
    return num_list.reduce((a, sum) => sum *= a) > num_list.reduce((a, sum) => sum += a) ** 2 ? 0 : 1;
}