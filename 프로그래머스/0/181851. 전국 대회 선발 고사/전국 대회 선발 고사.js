function solution(rank, attendance) {
    let ok = [];
    
    attendance.forEach((v, i) => {
        if (v === true) {
            ok.push(i); 
        }
    });
    
    ok.sort((a, b) => rank[a] - rank[b])
    return (10000 * ok[0]) + (100 * ok[1]) + ok[2];
}