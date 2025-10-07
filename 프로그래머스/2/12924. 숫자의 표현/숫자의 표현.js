function solution(n) {
    let count = 0;
    let sum = 0;
    let start = 1;
    let end = 1;

    while (end <= n) {
        sum += end; 

        // 합이 n과 같은 경우
        if (sum === n) {
            count++;
            sum -= start; 
            start++; 
            end++; 
        } 
        // 합이 n보다 큰 경우
        else if (sum > n) {
            while (sum > n) {
                sum -= start;
                start++;
            }
            if (sum === n) {
                count++;
            }
            end++; 
        }
        // 합이 n보다 작은 경우
        else {
            end++; 
        }
    }

    return count;
}
