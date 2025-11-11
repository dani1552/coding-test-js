function solution(myString) {
    let result = [];
    let temp = 0;
    
    for (let m of myString) {
        if (m === 'x'){
            result.push(temp);
            temp = 0;
        } else {
            temp += 1;
        }
    }
    
    result.push(temp);
    return result;
}