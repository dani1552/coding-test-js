function solution(s1, s2) {
    let count = 0;
    for(let item of s1) {
        if(s2.includes(item)) 
            count++;
    } 
    return count;
}