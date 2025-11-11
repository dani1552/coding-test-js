function solution(n_str) {
    let result = '';
    let check = false;
    
    for (let n of n_str) {
        if (n === '0' && !check) {
            result += '';
        } else {
            check = true;
            result += n;
        }
    }
    
    return result;
}