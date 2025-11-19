function solution(dartResult) {
    let scores = [];
    let num = ""; 

    for (let i = 0; i < dartResult.length; i++) {
        const ch = dartResult[i];

        // 숫자인 경우 
        if (!isNaN(ch)) {
            num += ch; 
        }
        // 보너스 처리
        else if (ch === 'S' || ch === 'D' || ch === 'T') {
            let score = Number(num);
            num = ""; 

            if (ch === 'S') score = Math.pow(score, 1);
            else if (ch === 'D') score = Math.pow(score, 2);
            else if (ch === 'T') score = Math.pow(score, 3);

            scores.push(score);
        }
        // 옵션 처리
        else if (ch === '*' || ch === '#') {
            if (ch === '*') {
                scores[scores.length - 1] *= 2;
                if (scores.length > 1) {
                    scores[scores.length - 2] *= 2;
                }
            } else if (ch === '#') {
                scores[scores.length - 1] *= -1;
            }
        }
    }

    return scores.reduce((a, b) => a + b, 0);
}