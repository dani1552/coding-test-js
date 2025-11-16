function solution(ingredient) {
    // 1: 빵 2: 야채 3: 고기 / 1 2 3 1
    
    let stack = [];
    let count = 0;
    
    for (let x of ingredient) {
        stack.push(x);
        
        if (stack.length >= 4) {
            const len = stack.length;
            if (
                stack[len-4] === 1 &&
                stack[len-3] === 2 &&
                stack[len-2] === 3 &&
                stack[len-1] === 1 
            ) {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                count++;
            }
        }
    }
    return count;
}