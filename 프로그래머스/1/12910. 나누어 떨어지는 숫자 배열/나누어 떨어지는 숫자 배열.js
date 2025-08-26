function solution(arr, divisor) {
    let answer = [];
    
    for(let a of arr) {
        if(a%divisor === 0) {
            answer.push(a);
        }
    }
    
    if(answer.length === 0) {
        answer.push(-1);
        return answer;
    }
    
    return answer.sort((a,b) => a-b);
}