function solution(n, numlist) {
    let result = [];

    for(let item of numlist) {
        if(item % n === 0) {
            result.push(item);
        }
    }
    
    return result;
}