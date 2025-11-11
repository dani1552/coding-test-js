function solution(arr1, arr2) {
    let a1 = arr1.reduce((a, sum) => a += sum);
    let a2 = arr2.reduce((a, sum) => a += sum);
    
    if (arr1.length !== arr2.length) {
        // 배열의 길이가 다를 때
        return arr1.length > arr2.length ? 1 : -1;
    } else {
        // 배열의 길이가 같을 때
        return a1 === a2 ? 0 : a1 > a2 ? 1 : -1;
    }
}