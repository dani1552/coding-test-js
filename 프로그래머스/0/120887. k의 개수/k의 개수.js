function solution(i, j, k) {
    let count = 0;
    const target = String(k); 
    
    for (let x = i; x <= j; x++) {
        const digits = String(x).split(''); 
        for (let y = 0; y < digits.length; y++) {
            if (digits[y] === target) { 
                count++;
            }
        }
    }
    
    return count;
}