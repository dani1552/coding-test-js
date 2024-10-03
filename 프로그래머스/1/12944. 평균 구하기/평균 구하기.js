function solution(arr) {
    let avg = 0;
    
    for(let i=0; i<arr.length; i++) {
        avg += arr[i];
    }
    
    let answer = avg / arr.length;
    return answer;
}