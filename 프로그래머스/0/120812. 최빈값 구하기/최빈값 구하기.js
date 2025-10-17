function solution(array) {
    const count = {};
    
    for (let num of array) {
        count[num] = (count[num] || 0) + 1;
    }
    console.log(count);
    
    const max = Math.max(...Object.values(count));
    console.log(max);
    
    const mode = Object.keys(count)
    .filter((key) => count[key] === max)
    .map(Number);
    
    return mode.length === 1 ? mode[0] : -1;
}