function solution(arr, intervals) {
    const p1 = intervals[0];
    const p2 = intervals[1];
    
    return [...arr.slice(p1[0], p1[1] + 1), ...arr.slice(p2[0], p2[1] + 1)];
}