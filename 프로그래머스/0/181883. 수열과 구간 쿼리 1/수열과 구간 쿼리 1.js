function solution(arr, queries) {
    let a = [...arr];
    
    for (let q of queries) {
        let q0 = q[0];
        let q1 = q[1];
        
        for (let i = q0; i <= q1; i++) {
            a[i] += 1;
        }
    }
    
    return a;
}