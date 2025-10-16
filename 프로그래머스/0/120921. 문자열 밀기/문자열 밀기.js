function solution(A, B) {
    let count = 1;
    if(A === B) return 0;
    
    for(let i=0; i<A.length; i++) {
        A = A[A.length - 1] + A.slice(0, - 1);
        if (A === B) {
            return count;
        } else {
            count += 1;
        }
    }
    
    return -1;
}