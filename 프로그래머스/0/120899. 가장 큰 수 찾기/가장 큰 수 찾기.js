function solution(array) {
    const sorted = [...array].sort((a,b) => b-a);
    const max = sorted[0];
    const answer = [];
    
    for(let i=0; i < array.length; i++) {
        if (max === array[i]) {
            answer.push(max);
            answer.push(i);
            break;
        }
    }
    
    return answer;
}