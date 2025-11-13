function solution(arr) {
    const stk = [];

    for (let i = 0; i < arr.length; i++) {
        const cur = arr[i];

        if (stk.length === 0) {
            stk.push(cur);
        }
        else if (stk[stk.length - 1] === cur) {
            stk.pop();
        }
        else {
            stk.push(cur);
        }
    }

    return stk.length === 0 ? [-1] : stk;
}