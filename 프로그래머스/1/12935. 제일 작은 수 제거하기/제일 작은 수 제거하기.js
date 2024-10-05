function solution(arr) {
    if (arr.length === 1) {
        return [-1]; 
    }

    // 가장 작은 수 찾기
    let minValue = Math.min(...arr);
    
    // 가장 작은 수를 제외한 배열 생성
    return arr.filter(value => value !== minValue);
}