function solution(arr, n) {
    let plus = arr.length % 2 == 0 ? 1 : 0;
    
    for (let i = plus; i < arr.length; i += 2) {
        arr[i] += n;
    }
    
    return arr;
}