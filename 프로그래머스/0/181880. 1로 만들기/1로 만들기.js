function solution(num_list) {
    let count = 0;
    
    for (let n of num_list) {    
        while (n != 1) {
            if (n % 2 === 0) {
                n /= 2;
                count++;
            } else {
                n = (n - 1) / 2;
                count++;
            }
        }
    }
    
    return count;
}