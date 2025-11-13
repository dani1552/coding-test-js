function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    
    const count = {};
    arr.forEach(v => count[v] = (count[v] || 0) + 1);

    const nums = Object.keys(count).map(Number);     // 등장한 숫자들
    const freq = Object.values(count);               // 등장 횟수들

    if (freq.includes(4)) {
        let p = nums[0];
        return 1111 * p;
    }

    if (freq.includes(3)) {
        let p = nums.find(n => count[n] === 3);
        let q = nums.find(n => count[n] === 1);
        return (10 * p + q) ** 2;
    }

    if (freq.filter(v => v === 2).length === 2) {
        let [p, q] = nums;
        return (p + q) * Math.abs(p - q);
    }

    if (freq.includes(2)) {
        let qrs = nums.filter(n => count[n] === 1);
        return qrs[0] * qrs[1];
    }

    return Math.min(...arr);
}