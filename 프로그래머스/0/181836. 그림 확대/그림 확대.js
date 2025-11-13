function solution(picture, k) {
    const result = [];

    for (let line of picture) {
        const expandedRow = [...line].map(ch => ch.repeat(k)).join("");

        for (let i = 0; i < k; i++) {
            result.push(expandedRow);
        }
    }

    return result;
}