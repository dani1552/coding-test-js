function solution(numLog) {
    let result = '';
    
    for (let i = 1; i < numLog.length; i++) {
        if (numLog[i] - numLog[i-1] === 1) {
            result += 'w';
        } else if (numLog[i] - numLog[i-1] === -1) {
            result +='s';
        } else if (numLog[i] - numLog[i-1] === 10) {
            result += 'd';
        } else {
            result += 'a';
        }
    }
    
    return result;
}