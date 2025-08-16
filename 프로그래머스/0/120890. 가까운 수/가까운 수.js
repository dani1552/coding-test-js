function solution(array, n) {
    let width = 100;
    let answer = 0;
    for (let a of array) {
        let diff = Math.abs(a - n);
        if (diff < width) {
            width = Math.abs(a - n);
            answer = a;
        } else {
            if(diff === width && a < answer) {
                answer = a;
            }
        }
    }
    return answer;
}