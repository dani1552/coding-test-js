function solution(k, m, score) {
    const minus = score.length % m;
    let sorted = [...score].sort((a, b) => a - b).slice(minus, score.length);
    console.log(sorted);
    
    let result = 0;
    let answer = 0;
    
    for(let i=0; i<sorted.length; i+=m) {
        sorted.slice(i, i + m);
        result += (sorted[i] * m);
    }
    
    return result;
}