function solution(arr, k) {
    const setarr = [...new Set(arr)];
    const result = setarr.slice(0, k);
    
    while (result.length < k) {
        result.push(-1);
    }
    
    return result;
}