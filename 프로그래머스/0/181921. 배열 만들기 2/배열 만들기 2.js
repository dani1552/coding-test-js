function solution(l, r) {
    const result = [];

    const queue = [5];  

    while (queue.length) {
        const num = queue.shift();

        if (num > r) continue;
        if (num >= l && num <= r) result.push(num);

        queue.push(num * 10);
        queue.push(num * 10 + 5);
    }

    return result.length ? result : [-1];
}