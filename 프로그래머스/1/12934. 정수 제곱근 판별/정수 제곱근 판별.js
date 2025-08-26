function solution(n) {
    if(Number.isInteger(Math.sqrt(n))) {
        let nn = Math.sqrt(n);
        return (nn+1) * (nn+1);
    } else {
        return -1;
    }
}