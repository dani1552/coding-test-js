function solution(topping) {
    let answer = 0;

    // 오른쪽 영역의 토핑 개수를 Map으로 저장
    const rightMap = new Map();
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    const leftSet = new Set();

    for (let i = 0; i < topping.length - 1; i++) {
        const t = topping[i];

        // 왼쪽에 추가
        leftSet.add(t);

        // 오른쪽에서 제거
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) rightMap.delete(t);

        // 종류 수 비교
        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }

    return answer;
}