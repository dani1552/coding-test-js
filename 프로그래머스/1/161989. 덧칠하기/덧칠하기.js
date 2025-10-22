function solution(n, m, section) {
    let left = 0;
    let right = 0;
    let count = 0;
        
    for(let i=0; i<section.length; i++) {
        const pos = section[i];
        
        if (pos > right) {
            left = pos;
            right = pos + m - 1;
            count++;
        }
    }
    
    return count;
}