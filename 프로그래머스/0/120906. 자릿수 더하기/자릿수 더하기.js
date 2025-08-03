function solution(n) {
    let sum = 0;
    const str = n.toString();

    for (let i=0; i<n.toString().length; i++) {
        sum += Number(str[i]);
    }
    return sum;
} 