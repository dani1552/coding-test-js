function solution(myStr) {
    let result = [];
    let temp = '';
    
    for (let m of myStr) {
        if (m === 'a' || m === 'b' || m === 'c') {
            if (temp.length > 0) result.push(temp);
                temp = '';
            
        } else {
            temp += m;
        }
    }
    
    if (temp.length > 0) result.push(temp);
    
    return result.length === 0 ? ['EMPTY'] : result;
}