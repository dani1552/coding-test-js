function solution(k, score) {
    const days = score.length;
    let temp = [score[0]];
    let result = [score[0]];
    
    for(let i=1; i<days; i++) {
        
        if(temp.length < k) {
            temp.push(score[i]);
        } else {
            if(temp[0] < score[i]) {
                temp[0] = score[i];
            }
        }
        temp = [...temp].sort((a, b) => a - b);
        
        result.push(temp[0]);
    }
    
    return result;
}