function solution(lines) {
    const map = new Array(200).fill(0);
    
    for (let [start, end] of lines) {
        for (let i = start; i < end; i++) {
            map[i + 100]++;
        }
    }
    
    return map.filter(x => x > 1).length;
}