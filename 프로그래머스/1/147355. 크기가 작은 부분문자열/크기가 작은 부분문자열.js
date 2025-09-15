function solution(t, p) {
    let count = 0;
    const plength = p.length;
    const pNumber = +p;
    
    for(let i=0; i<=t.length-plength;i++) {
        let subs = t.substring(i,i+plength);
        
        if(+subs <= pNumber) {
            count++;
        }
    }
    return count;
}