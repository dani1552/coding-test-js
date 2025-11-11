function solution(n, control) {
    const sp = control.split("");
    
    for (let s of sp) {
        if (s === 'w') n += 1;
        if (s === 's') n -= 1;
        if (s === 'd') n += 10;
        if (s === 'a') n -= 10;
    }
    
    return n;
}