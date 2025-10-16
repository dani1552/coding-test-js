function solution(score) {
    const avg = score.map(([a, b]) => (a+b) / 2);
    console.log(avg);
    const sorted = [...avg].sort((a, b) => b - a);
    console.log(sorted);
    
    return avg.map(v => sorted.indexOf(v) + 1);
}