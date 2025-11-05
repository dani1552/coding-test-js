function solution(elements) {
    const len = elements.length;
    const sums = new Set();
    
    for (let size = 1; size <= len; size++) {
        for (let i = 0; i < len; i++) {
            let sum = 0;
            
            for (let j = 0; j < size; j++) {
                sum += elements[(i + j) % len];
            }
            
            sums.add(sum);
        }
    }
    
    return sums.size;
}