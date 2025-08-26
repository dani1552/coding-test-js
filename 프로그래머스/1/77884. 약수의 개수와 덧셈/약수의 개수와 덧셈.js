function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i <= right; i++) {
        let divideCount = 0;

        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                divideCount += 1;
            }
        }

        if (divideCount % 2 === 0) {
            sum += i;  
        } else {
            sum -= i;   
        }
    }

    return sum;
}