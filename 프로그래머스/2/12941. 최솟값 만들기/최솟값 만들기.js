function solution(A,B){
    const a = A.sort((a,b) => a-b);
    const b = B.sort((a,b) => b-a);
    let sum = 0;
    
    for(let i = 0; i<a.length; i++) {
        sum += a[i] * b[i];
    }
    return sum;
}