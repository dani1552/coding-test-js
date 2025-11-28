function solution(s) {
    const arr = s.slice(2, -2).split("},{").map(e => e.split(",").map(Number));
    arr.sort((a, b) => a.length - b.length);
    
    const answer = [];
    const set = new Set();
    
    console.log(arr);
    for (const nums of arr) {
        for (const n of nums) {
            if (!set.has(n)) {
                set.add(n);
                answer.push(n);
            }
        }
    }
    return answer;    
}