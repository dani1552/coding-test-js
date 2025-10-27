function solution(k, tangerine) {
    let sorted = {};
    let sum = 0;
    let result = 0;
    
    for (let t of tangerine) {
        if(!sorted[t]) sorted[t] = 1;
        else sorted[t] += 1;
    }
    
    let counted = Object.values(sorted).sort((a, b) => b - a);
    // console.log(counted);
    
    for (let i = 0; i < counted.length; i++) {
            sum += counted[i];
            result += 1;

            if (sum >= k) break;
        // console.log('sum', sum);
        // console.log('counted[i]', counted[i]);
    }
    
    return result;
}